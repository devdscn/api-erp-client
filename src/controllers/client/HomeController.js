import OracleDB from 'oracledb';

const oracledb = OracleDB;

class HomeController {
    async index(req, res) {
        /*
        oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
        oracledb.initOracleClient();

        const connection = await oracledb.getConnection({
            user: process.env.ORACLE_USERNAME,
            password: process.env.ORACLE_PASSWORD,
            connectString: process.env.ORACLE_CONNECT_STRING,
        });

        const result = await connection.execute(
            `select  * FROM tsys_usuario ORDER BY 1 `
        );
        return res.json(result.rows);
        */
        return res.json('OK');
    }
}

export default new HomeController();
