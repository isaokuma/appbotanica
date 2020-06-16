import { Injectable } from '@angular/core';

import { Platform, AlertController } from 'ionic-angular';

import 'rxjs/add/operator/map';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/Rx';
import { QrcodeProvider } from '../qrcode/qrcode';


@Injectable()
export class DatabaseProvider {

  datas: any = [];
  public firstTime:boolean = false;
    // Variável que será utilizada junto com o subscribe para verificar se o banco está pronto
  private databaseReady: BehaviorSubject<boolean>;

  constructor(public http: Http, private platform: Platform, 
        private sqlite: SQLite, private sqliteporter: SQLitePorter, 
        private alertCtrl: AlertController,
        public scan: QrcodeProvider) {

    this.databaseReady = new BehaviorSubject(false);
  }

  openDatabase() {
    this.platform.ready()
      .then(() => {
        this.sqlite.create({
          name: 'appBotanica.db',
          location: 'default' 
        })
          .then((db: SQLiteObject) => {
            // Consulta para verificar se existem dados
            db.executeSql('SELECT * FROM plantas2 where qrcode = ? ', [this.scan.barcodeData])
              .then(res => {
                this.datas = this.getData(db);
 
                // Informa que a base de dados está na fila
                this.databaseReady.next(true);
        
              }) 
              .catch(res => {
                 this.firstTime = true;
                this.http.get('assets/db2.sql')
                  .map(res => res.text())
                  .subscribe(sql => {
                    this.sqliteporter.importSqlToDb(db, sql)
                      .then(() => {
                        this.datas = this.getData(db);
                      }).catch(e => {
                        alert("Erro!");
                        console.error("Erro!", e.message);
                      });
                  })
              });
          });
      }).catch(e => alert('Erro!'));    
  }

  getData(basedatas) {
    let resultado = [];
    basedatas.executeSql('SELECT * FROM plantas2 where qrcode = ?', [this.scan.barcodeData])
      .then(resSelect => {
        for (var i = 0; i < resSelect.rows.length; i++) { 
          resultado.push({ 
            qrcode: resSelect.rows.item(i).qrcode, 
            qrcode2: resSelect.rows.item(i).qrcode2,
            familia: resSelect.rows.item(i).familia,
            binomio: resSelect.rows.item(i).binomio,
            autores: resSelect.rows.item(i).autores,
            nome_cientifico: resSelect.rows.item(i).nome_cientifico, 
            nome_popular: resSelect.rows.item(i).nome_popular,
            grupo_ecologico: resSelect.rows.item(i).grupo_ecologico, 
            origem: resSelect.rows.item(i).origem,
            centro_origem: resSelect.rows.item(i).centro_origem, 
            ocorrencia: resSelect.rows.item(i).ocorrencia,
            bioma: resSelect.rows.item(i).bioma, 
            floracao: resSelect.rows.item(i).floracao,
            frutificacao: resSelect.rows.item(i).frutificacao, 
            sexo: resSelect.rows.item(i).sexo,
            s_polinizacao: resSelect.rows.item(i).s_polinizacao, 
            tipo_fruto: resSelect.rows.item(i).tipo_fruto,
            s_dispersao: resSelect.rows.item(i).s_dispersao, 
            tipo_folha: resSelect.rows.item(i).tipo_folha,
            filotaxia: resSelect.rows.item(i).filotaxia, 
            descricao: resSelect.rows.item(i).descricao,
            utilizacoes: resSelect.rows.item(i).utilizacoes
          });
        } 
      }).catch(e => {
        alert("Erro ao consultar os dados",);
        console.error("Erro ao consultar os dados", e.message);
      });
    return resultado;
  }


  getDatabaseState() {
    return this.databaseReady.asObservable();
    
  }

}