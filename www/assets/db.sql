

CREATE TABLE IF NOT EXISTS plantas(
    qrcode TEXT,
    familia TEXT,
    nome_cientifico TEXT,
    nome_popular TEXT,
    grupo_ecologico TEXT,
    origem TEXT,
    centro_origem TEXT,
    ocorrencia TEXT,
    bioma TEXT,
    floracao TEXT,
    frutificacao TEXT,
    sexo TEXT,
    s_polinizacao TEXT,
    tipo_fruto TEXT,
    s_dispersao TEXT,
    tipo_folha TEXT,
    filotaxia TEXT,
    descricao TEXT); 

--BORDO-JAPONES

INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-BordoJapones',
			'ACERACEA',
			'Acer palmatum Thunb.',
			'Bordo-japonês',
			'Secundária',
			'Exótica',
			'Japão, Coréia do Sul e China',
			'',
			'Floresta Temperada',
			'Abril',
			'Abril e Junho',
			'Polígamo-monóica',
			'Entomofilia',
			'Sâmara',
			'Anemocoria',
			'Folha Simples',
			'Oposta',
			'descricao');



--BORDO-VERMELHO

INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-BordoVermelho',
			'ACERACEA',
			'Acer rubrum L.',
			'Bordo-vermelho',
			'Secundária',
			'Exótica',
			'América do Norte e Canadá',
			'',
			'Floresta Temperada',
			'Março e Maio',
			'Abril e Junho',
			'Polígamo-dióica',
			'Entomofilia',
			'Sâmara',
			'Anemocoria',
			'Folha Simples',
			'Oposta',
			'descricao');

--LIQUIDAMBAR


INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Liquidambar',
			'ALTINGIACEAE',
			'Liquidambar styraciflua L.',
			'Liquidambar',
			'Pioneira',
			'Exótica',
			'América do Norte e Central',
			'',
			'Floresta Temperada',
			'Março e Maio',
			'Setembro e Novembro',
			'Monóica',
			'Anemofilia',
			'Cápsula',
			'Anemocoria',
			'Folha Simples',
			'Alterna',
			'descricao');

--Aroeira-salsa

INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Aroeira-salsa',
			'ANACARDIACEAE',
			'Schinus molle L.',
			'Aroeira-salsa',
			'Pioneira à secundária',
			'Nativa',
			'',
			'Sul (PR, RS, SC)',
			'Mata Atlântica, Pampa',
			'Agosto e Dezembro',
			'Dezembro e Fevereiro',
			'Monóica',
			'Entomofilia',
			'Drupa',
			'Zoocoria e Hidrocoria',
			'Folha composta',
			'Alterna',
			'descricao');


--Pinheiro-do-Paraná

INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Pinheiro-do-Paraná',
			'ARACAURIACEAE',
			'Araucaria angustifolia (Bertol.) Kuntze',
			'Pinheiro-do-Paraná',
			'Pioneira',
			'Nativa',
			'',
			'Sudeste (MG, RJ, SP) e Sul (PR, RS, SC)',
			'Mata Atlântica',
			'Agosto e Janeiro',
			'Abril e Junho',
			'Dióica',
			'Anemofilia',
			'As sementes estão reunidas no estróbilo feminino',
			'Zoocoria',
			'Folha simples',
			'Alterna',
			'descricao');



--Ipê-amarelo 

INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Ipê-amarelo',
			'BIGNONIACEAE ',
			'Handroanthus chrysotrichus (Mart. ex DC.) Mattos',
			'Ipê-amarelo ',
			'Secundária ',
			'Nativa',
			'',
			'Nordeste (BA, PB, PE), Sudeste (ES, MG, RJ, SP), Sul (PR, RS, SC)',
			'Cerrado, Mata Atlântica',
			'Julho e Agosto',
			'Setembro e Outubro',
			'Monóica',
			'Entomofilia',
			'Síliqua',
			'Anemocoria',
			'Folha composta',
			'Oposta',
			'descricao');

--Ipê-branco

INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Ipê-branco',
			'BIGNONIACEAE',
			'Tabebuia roseoalba (Ridl.) Sandwith',
			'Ipê-branco',
			'Secundária ',
			'Nativa',
			'',
			'Norte (PA, TO),Nordeste (AL, BA, CE, MA, PA, PE, PI, RN, SE),Centro-Oeste ( DF, GO, MS, MT),Sudeste (ES, MG, RJ, SP)',
			'Caatinga, Cerrado, Mata Atlântica',
			'Agosto e Setembro',
			'Outubro e Novembro',
			'Monóica',
			'Entomofilia',
			'Síliqua',
			'Anemocoria',
			'Folha composta',
			'Oposta',
			'descricao');
			
--Ipê-rosa

INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Ipê-rosa',
			'BIGNONIACEAE',
			'Handroanthus impetiginosus (Mart. ex DC.) Mattos',
			'Ipê-rosa',
			'Secundária ',
			'Nativa',
			'',
			'Norte (AC, PA, RO, TO), Nordeste (AL, BA, CE, MA, PA, PE, PI, RN, SE),Centro-Oeste (DF,GO, MS, MT),Sudeste (ES, MG, RJ, SP)',
			'Amazônia, Caatinga, Cerrado, Mata Atlântica, Pantanal',
			'Julho e Agosto',
			'Setembro e Outubro',
			'Monóica',
			'Entomofilia',
			'Síliqua',
			'Anemocoria',
			'Folha composta',
			'Oposta',
			'descricao');

--Jacarandá

INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Jacarandá',
			'BIGNONIACEAE',
			'Jacaranda mimosifolia D. Don',
			'Jacarandá',
			'Pioneira',
			'Exótica',
			'Argentina, Bolívia, Paraguai',
			'',
			'Chaco Argentino',
			'Agosto e Novembro',
			'Maio e Setembro',
			'Monóica',
			'Melitofilia',
			'Cápsula',
			'Anemocoria',
			'Folha composta',
			'Oposta',
			'descricao');


--Sequóia

INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Sequóia',
			'CUPRESSACEAE',
			'Sequoia sempervirens (D.Don.) Endl.',
			'Sequóia',
			'Climácica',
			'Exótica',
			'América do Norte',
			'',
			'Floresta de Sequóias',
			'Novembro e Março',
			'Setembro e Dezembro',
			'Monóica',
			'Anemofilia',
			'As sementes estão reunidas no estróbilo feminino',
			'Autocoria',
			'Folha simples',
			'Alterna',
			'descricao');
			
			
--Branquilho

INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Branquilho',
			'EUPHORBIACEAE',
			'Gymnanthes klotzschiana Müll.Arg.',
			'Branquilho',
			'Secundária',
			'Nativa',
			'',
			'Nordeste (AL, BA, CE, PB, PE, SE), Centro-Oeste (MS, MT), Sudeste (ES, MG, RJ, SP),Sul (PR, RS, SC)',
			'Caatinga, Mata Atlântica',
			'Agosto e Fevereiro',
			'Dezembro e Janeiro',
			'Monóica',
			'Entomofilia',
			'Cápsula',
			'Autocoria e Zoocoria',
			'Folha simples',
			'Alterna',
			'descricao');
			

--Capixingui

INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Capixingui',
			'EUPHORBIACEAE',
			'Croton floribundus Spreng.',
			'Capixingui',
			'Pioneira',
			'Nativa',
			'',
			'Nordeste (AL, BA, CE, PB, PE),Centro-Oeste (DF, MS, MT), Sudeste (ES, MG, RJ, SP),Sul (PR), Norte (TO)',
			'Mata Atlântica',
			'Outubro e Dezembro',
			'Fevereiro e Março',
			'Monóica',
			'Entomofilia',
			'Cápsula esquizocarpo',
			'Anemocoria e Zoocoria ',
			'Folha simples',
			'Alterna',
			'descricao');
			
			
--Tipuana

INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Tipuana',
			'FABACEAE',
			'Tipuana tipu (Benth.) Kuntze',
			'Tipuana',
			'Pioneira',
			'Exótica',
			'Bolívia e norte da Argentina',
			'',                                 
			'Chaco Argentino',
			'Novembro e Dezembro',
			'Dezembro e Setembro',
			'Monóica',
			'Entomofilia',
			'Sâmara',
			'Anemocoria',
			'Folha composta',
			'Alterna',
			'descricao');


--Angico-gurucaia

INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Angico-gurucaia',
			'FABACEAE',
			'Parapiptadenia rigida (Benth.) Brenan',
			'Angico-gurucaia',
			'Pioneira à Secundária',
			'Nativa',
			'',
			'Sudeste (SP) , Sul (PR, RS, SC)',                                 
			'Mata Atlântica',
			'Outubro e Dezembro',
			'Março e Setembro',
			'Monóica',
			'Melitofilia',
			'Legume',
			'Autocoria e Anemocoria',
			'Folha composta',
			'Alterna',
			'descricao');

--Falso-barbatimão

INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Falso-barbatimão',
			'FABACEAE',
			'Cassia leptophylla Vogel ',
			'Falso-barbatimão',
			'Secundária',
			'Nativa',
			'',
			'Norte (PA),Nordeste (BA), Centro-Oeste (DF, MT), Sudeste (SP),Sul (PR, RS, SC)',                                 
			'Mata Atlântica',
			'Novembro e Dezembro',
			'Janeiro e Maio',
			'Monóica',
			'Entomofilia',
			'Legume',
			'Zoocoria',
			'Folha composta',
			'Alterna',
			'descricao');

--Pau-ferro

INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Pau-ferro',
			'FABACEAE',
			'Libidibia ferrea (Mart. ex Tul.) L.P.Queiroz',
			'Pau-ferro',
			'Secundária',
			'Nativa',
			'',
			'Nordeste (AL, BA, CE, MA, PB, PE, PI, RN, SE), Sudeste (ES, MG, RJ)',                                 
			'Caatinga, Cerrado, Mata Atlântica',
			'Janeiro e Março',
			'Julho e Setembro',
			'Monóica',
			'Entomofilia',
			'Legume carnoso',
			'Autocoria e Zoocoria',
			'Folha composta',
			'Alterna',
			'descricao');

--Sibipiruna

INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Sibipiruna',
			'FABACEAE',
			'Poincianella pluviosa (DC.) L.P.Queiroz',
			'Sibipiruna',
			'Secundária',
			'Nativa',
			'',
			'Norte (PA),Nordeste (BA, PB, PE),Centro-Oeste (MS, MT), Sudeste (ES, MG, RJ),Sul (PR)',                                 
			'Amazônia, Caatinga Cerrado, Mata Atlântica, Pantanal',
			'Setembro e Outubro',
			'Dezembro e Janeiro',
			'Monóica',
			'Entomofilia',
			'Legume',
			'Autocoria',
			'Folha composta',
			'Alterna',
			'descricao');

--Ingá-ferradura

INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Ingá-ferradura',
			'FABACEAE',
			'Inga sessilis (Vell.) Mart.',
			'Ingá-ferradura',
			'Secundária',
			'Nativa',
			'',
			'Norte (PA), Nordeste (BA),Sudeste (ES, MG, RJ, SP),Sul (PR, RS, SC)',                                 
			'Amazônia, Cerrado, Mata Atlântica',
			'Agosto e Setembro',
			'Setembro e Outubro',
			'Monóica',
			'Zoofilia e Entomofilia',
			'Legume carnoso',
			'Zoocoria',
			'Folha composta',
			'Alterna',
			'descricao');


--Ingá-peludo

INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Ingá-peludo',
			'FABACEAE',
			'Inga vulpina Mart. ex Benth.',
			'Ingá-peludo',
			'Pioneira',
			'Nativa',
			'',
			'Nordeste (BA) , Sudeste (ES, MG, RJ, SP),Sul (PR, SC)',                                 
			'Cerrado, Mata Atlântica',
			'Agosto e Novembro/Janeiro e Fevereiro',
			'Outubro e Janeiro/Julho',
			'Monóica',
			'Zoofilia e Entomofilia',
			'Legume carnoso',
			'Zoocoria',
			'Folha composta',
			'Alterna',
			'descricao');


--Manduirana

INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Manduirana',
			'FABACEAE',
			'Senna macranthera (DC. ex Collad.) H.S.Irwin & Barneby',
			'Manduirana',
			'Pioneira',
			'Nativa',
			'',
			'Norte (TO),Nordeste (AL, BA, CE, PB, PE, PI, RN),Centro-Oeste (DF, GO, MT),Sudeste (ES, MG, RJ, SP),Sul (PR)',                                 
			'Caatinga, Cerrado, Mata Atlântica',
			'Dezembro e Abril',
			'Julho e Agosto',
			'Monóica',
			'Entomofilia',
			'Legume',
			'Autocoria',
			'Folha composta',
			'Alterna',
			'descricao');


--Pata-de-vaca

INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Pata-de-vaca',
			'FABACEAE',
			'Bauhinia variegata L.',
			'Pata-de-vaca',
			'Não existem informações',
			'Exótica',
			'Índia',
			'',                                 
			'Floresta tropical',
			'Dezembro e Abril',
			'Abril e Maio',
			'Monóica',
			'Entomofilia',
			'Legume',
			'Autocoria',
			'Folha composta',
			'Alterna',
			'descricao');



--Ginkgo

INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Ginkgo',
			'GINKGOACEAE',
			'Ginkgo biloba L.',
			'Ginkgo',
			'Pioneira',
			'Exótica',
			'Norte da China',
			'',                                 
			'Floresta Temperada',
			'Março e Maio',
			'Setembro e Outubro',
			'Dióica',
			'Anemofilia',
			'Semente contendo envoltório carnoso',
			'Zoocoria',
			'Folha simples',
			'Braquiblasto',
			'descricao');
			
--Canela-sassafras

INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Canela-sassafras',
			'LAURACEAE',
			'Ocotea odorifera (Vell.) Rohwer',
			'Canela-sassafras',
			'Secundária à Climácica',
			'Nativa',
			'',
			'Sudeste (MG, RJ, SP),Sul (PR, RS, SC)',                                 
			'Cerrado, Mata Atlântica',
			'Dezembro e Abril',
			'Junho e Setembro',
			'Monóica',
			'Melitofilia',
			'Baga',
			'Zoocoria',
			'Folha simples',
			'Alterna',
			'descricao');

--Canela-preta

INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Canela-preta',
			'LAURACEAE',
			'Ocotea catharinensis Mez',
			'Canela-preta',
			'Climácica',
			'Nativa',
			'',
			'Sudeste (MG, RJ, SP),Sul (PR, RS, SC)',                                 
			'Mata Atlântica ',
			'Junho e Janeiro',
			'Maio e Agosto',
			'Monóica',
			'Melitofilia',
			'Baga',
			'Zoocoria',
			'Folha simples',
			'Alterna',
			'descricao');

--Canela-de-cheiro

INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Canela-de-cheiro',
			'LAURACEAE',
			'Cinnamomum verum J.Presl',
			'Canela-de-cheiro',
			'Pioneira',
			'Exótica invasora',
			'Sul da Ásia',
			'',                                 
			'Floresta tropical',
			'Janeiro',
			'Maio e Agosto',
			'Monóica',
			'Entomofilia',
			'Baga',
			'Zoocoria',
			'Folha simples',
			'Alterna',
			'descricao');

--Açoita-cavalo
INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Açoita-cavalo',
			'MALVACEAE',
			'Luehea divaricata Mart. & Zucc.',
			'Açoita-cavalo',
			'Secundária',
			'Nativa',
			'',
			'Nordeste (BA), Centro-Oeste (DF, GO), Sudeste (MG, RJ, SP), Sul (RS, SC)',                                 
			'Cerrado, Mata Atlântica',
			'Dezembro e Abril',
			'Maio e Julho',
			'Monóica',
			'Melitofilia',
			'Cápsula',
			'Anemocoria',
			'Folha simples',
			'Alterna',
			'descricao');

--Cedro
INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Cedro',
			'MELIACEAE',
			'Cedrela fissilis Vell.',
			'Cedro',
			'Secundária à climácica',
			'Nativa',
			'',
			'Norte (AC, AM, PA, RO, TO),Nordeste (AL, BA, CE, MA, PB, PI, SE), Centro-Oeste (DF, GO, MS, MT),Sudeste (ES, MG, RJ, SP), Sul (PR, RS, SC)',                                 
			'Amazônia, Cerrado, Mata Atlântica',
			'Setembro e Janeiro',
			'Julho e Agosto',
			'Monóica',
			'Falenofilia e melitofilia',
			'Cápsula',
			'Anemocoria',
			'Folha composta',
			'Alterna',
			'descricao');




--Guabiroba
INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Guabiroba',
			'MYRTACEAE',
			'Campomanesia xanthocarpa (Mart.) O.Berg',
			'Guabiroba',
			'Secundária à climácica',
			'Nativa',
			'',
			'Sudeste (ES, MG, RJ, SP), Sul (PR, RS, SC)',                                 
			'Mata Atlântica',
			'Outubro e Novembro',
			'Dezembro e Janeiro',
			'Monóica',
			'Entomofilia',
			'Baga',
			'Zoocoria',
			'Folha simples',
			'Oposta',
			'descricao');


--Cerejeira-do-Rio-Grande
INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Cerejeira-do-Rio-Grande',
			'MYRTACEAE',
			'Eugenia involucrata DC.',
			'Cerejeira-do-Rio-Grande',
			'Secundária',
			'Nativa',
			'',
			'Nordeste (BA), Centro-Oeste (DF, GO, MS), Sudeste (ES, MG, RJ, SP), Sul (PR, RS, SC)',                                 
			'Cerrado, Mata Atlântica',
			'Agosto e Setembro',
			'Outubro e Novembro',
			'Monóica',
			'Melitofilia',
			'Baga',
			'Zoocoria',
			'Folha simples',
			'Oposta',
			'descricao');


--Araçá-goiaba
INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Araçá-goiaba',
			'MYRTACEAE',
			'Psidium longipetiolatum D.Legrand',
			'Araçá-goiaba',
			'Secundária',
			'Nativa',
			'',
			'Sudeste (ES, MG, RJ, SP), Sul (PR, RS, SC) ',                                 
			'Mata Atlântica',
			'Novembro e Dezembro',
			'Fevereiro e Março',
			'Monóica',
			'Entomofilia',
			'Baga',
			'Zoocoria',
			'Folha simples',
			'Oposta',
			'descricao');
			
			
			
--Murta
INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Murta',
			'MYRTACEAE',
			'Curitiba prismatica (D.Legrand) Salywon & Landrum',
			'Murta',
			'Secundária',
			'Nativa',
			'',
			'Sul (PR, SC)',                                 
			'Mata Atlântica',
			'Dezembro e Fevereiro',
			'Janeiro e Março',
			'Monóica',
			'Entomofilia',
			'Baga',
			'Zoocoria',
			'Folha simples',
			'Oposta',
			'descricao');		


--Jaboticaba
INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Jaboticaba',
			'MYRTACEAE',
			'Plinia peruviana (Poir.) Govaerts',
			'Jaboticaba',
			'Secundária',
			'Nativa',
			'',
			'Sudeste (ES, MG, RJ, SP), Sul (PR, RS, SC)',                                 
			'Mata Atlântica',
			'Agosto|',
			'Outubro e Dezembro',
			'Monóica',
			'Entomofilia',
			'Baga',
			'Zoocoria',
			'Folha simples',
			'Oposta',
			'descricao');		

--Pitanga
INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Pitanga',
			'MYRTACEAE',
			'Eugenia uniflora L.',
			'Pitanga',
			'Secundária à climácica',
			'Nativa',
			'',
			'Nordeste (BA), Centro-Oeste (MS), Sudeste (ES, MG, RJ, SP), Sul (PR, RS, SC)',                                 
			'Cerrado, Mata Atlântica, Pampa',
			'Julho e Setembro',
			'Outubro e Novembro',
			'Monóica',
			'Entomofilia',
			'Baga',
			'Zoocoria',
			'Folha simples',
			'Oposta',
			'descricao');		
			
--Uvaia
INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Uvaia',
			'MYRTACEAE',
			'Eugenia pyriformis Cambess.',
			'Uvaia',
			'Secundária',
			'Nativa',
			'',
			'Centro-Oeste (GO, MS), Sudeste (MG, RJ, SP), Sul (PR, RS, SC)',                                 
			'Cerrado, Mata Atlântica',
			'Agosto e Outubro',
			'Dezembro e Fevereiro',
			'Monóica',
			'Melitofilia',
			'Baga',
			'Zoocoria',
			'Folha simples',
			'Oposta',
			'descricao');		
			
--Oliveira
INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Oliveira',
			'OLEACEAE',
			'Olea europaea L.',
			'Oliveira',
			'Secundária à Climácica',
			'Exótica',
			'Região Mediterrânea',
			'',                                 
			'Floresta Mediterrânea',
			'Outubro e Dezembro',
			'Março e Julho',
			'Monóica',
			'Anemofilia',
			'Drupa',
			'Zoocoria',
			'Folha simples',
			'Alterna',
			'descricao');		

--Pinus
INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Pinus',
			'PINACEAE',
			'Pinus pinea L.',
			'Pinus',
			'',
			'Exótica',
			'Predominantemente no Hemisfério Norte',
			'',                                 
			'Floresta Mediterrânea',
			'Abril e Junho',
			'Outubro',
			'Monóica',
			'Anemofilia',
			'Estróbilo lenhoso',
			'Autocoria e Zoocoria',
			'Folha simples',
			'Alterna',
			'descricao');		
			
--Carvalho-brasileiro
INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Carvalho-brasileiro',
			'PROTEACEAE',
			'Roupala montana Aubl.',
			'Carvalho-brasileiro',
			'Secundária à Climácica',
			'Nativa',
			'',
			'Norte (AC, AM, AP, PA, RO, RR, TO),Nordeste (BA, CE, PB, PI),Centro-Oeste (DF, GO, MS, MT),Sudeste (MG, RJ, SP),Sul (PR, RS, SC)',                                 
			'Amazônia, Caatinga, Cerrado, Mata Atlântica',
			'Novembro e Fevereiro',
			'Abril e Julho',
			'Monóica',
			'Entomofilia e Ornitofilia',
			'Folículo',
			'Anemocoria',
			'Folha simples',
			'Alterna',
			'descricao');		
			
--Pessegueiro-bravo
INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Pessegueiro-bravo',
			'ROSACEAE ',
			'Prunus myrtifolia (L.) Urb.',
			'Pessegueiro-bravo',
			'Secundária à Climácica',
			'Nativa',
			'',
			'Norte (AC, AM, AP, PA, RO),Nordeste (BA, CE, PB),Centro-Oeste (DF, GO, MS, MT),Sudeste (ES, MG, RJ, SP),Sul (PR, RS, SC)',                                 
			'Amazônia, Caatinga, Cerrado, Mata Atlântica',
			'Junho e Setembro',
			'Janeiro e Março',
			'Monóica',
			'Melitofilia',
			'Drupa',
			'Zoocoria',
			'Folha simples',
			'Alterna',
			'descricao');	

--Cerejeira-japonesa
INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Cerejeira-japonesa',
			'ROSACEAE ',
			'Prunus serrulata Lindl.',
			'Cerejeira-japonesa',
			'Secundária',
			'Exótica',
			'Japão',
			'',                                 
			'Clima Temperado',
			'Abril e Maio',
			'Junho e Julho',
			'Monóica',
			'Entomofilia',
			'Drupa',
			'Zoocoria',
			'Folha simples',
			'Alterna',
			'descricao');			

--Chorão
INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Chorão',
			'SALICACEAE ',
			'Salix babylonica L.',
			'Chorão',
			'Pioneira',
			'Exótica',
			'China',
			'',                                 
			'Clima Temperado',
			'Fevereiro e Março',
			'Março e Abril',
			'Dióica',
			'Anemofilia',
			'Cápsula',
			'Anemocoria',
			'Folha simples',
			'Alterna',
			'descricao');			


--Camboatã
INSERT INTO plantas (qrcode,
				     familia,
					 nome_cientifico,
					 nome_popular,
					 grupo_ecologico,
					 origem,
					 centro_origem,
					 ocorrencia,
					 bioma, floracao,
					 frutificacao,
					 sexo,
					 s_polinizacao,
					 tipo_fruto,
					 s_dispersao,
					 tipo_folha,
					 filotaxia,
					 descricao) 
    VALUES ('QR-Camboatã',
			'SAPINDACEAE ',
			'Cupania vernalis Cambess.',
			'Camboatã',
			'Secundária',
			'Nativa',
			'',
			'Norte (AM, PA,),Nordeste (BA),Centro-Oeste ( DF, GO),Sudeste (ES, MG, RJ, SP),Sul ( PR, RS, SC)',                                 
			'Amazônia, Cerrado, Mata Atlântica ',
			'Maio e Junho',
			'Outubro e Janeiro',
			'Monóica',
			'Entomofilia',
			'Cápsula',
			'Zoocoria',
			'Folha composta',
			'Alterna',
			'descricao');		
			
			
	



