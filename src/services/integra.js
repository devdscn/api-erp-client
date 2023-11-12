import oracle from '../database/Connection';
import mongo from '../database/DbMongo';

export default class Integra {
    async run() {
        const result = await oracle.executeQuery('SELECT * from TUND_UNIDADE');
        const empresasCli = result.rows;
        const empresas = new Array();

        empresasCli.forEach((item) => {
            const id = item.TUND_UNIDADE_PK;
            const nome = item.TUND_RAZAO_SOCIAL;
            const fantasia = item.TUND_FANTASIA;
            const documento = item.TUND_CNPJ;
            const inscEstadual = item.TUND_INSCRICAO_ESTADUAL;

            const empresa = { id, nome, fantasia, documento, inscEstadual };
            empresas.push(empresa);
        });

        await mongo.execute('empresas', empresas);
    }
}

/*

  TUND_ENDERECO: 'R. PADRE JOSE MARIA PENA, 1793',
  TUND_COMPLEMENTO: '.',
  TUND_BAIRRO: 'SAO PEDRO',
  TUND_CIDADE_CEP_FK: '69800000',
  TUND_CNPJ: '14085842000360',
  TUND_INSCRICAO_MUNICIPAL: 'ISENTO',
  TUND_INSCRICAO_ESTADUAL: '053634802',
  TUND_TIPO_UNIDADE: 'C',
  TUND_UNIDADE_WMS_FKN: null,
  TUND_FONE_DDD: '97',
  TUND_FONE_PREFIXO: '3373',
  TUND_FONE_FINAL: '2707',
  TUND_FAX_DDD: null,
  TUND_FAX_PREFIXO: null,
  TUND_FAX_FINAL: null,
  TUND_ENCERRAMENTO_AGENDADO: 'C',
  TUND_USA_PLACA_VEICULO: 'N',
  TUND_CODIGO_FILA_NFE: 1,
  TUND_EMAIL: null,
  TUND_HOMEPAGE: null,
  TUND_AREA_DE_VENDAS: null,
  TUND_NUMERO_CHECKOUTS: null,
  TUND_NUMERO_FUNCIONARIOS: null,
  TUND_FORNECE_ABAST_AUTO: 'N',
  TUND_GERENTE: null,
  TUND_CNPJ_CPF_CONTADOR: null

*/
