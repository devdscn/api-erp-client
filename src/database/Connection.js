import OracleDB from 'oracledb';

export default class Connection {
    constructor() {
        this.connect();
    }
    static async connect() {
        const oracledb = OracleDB;
        oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
        oracledb.initOracleClient();

        const connection = await oracledb.getConnection({
            user: process.env.ORACLE_USERNAME,
            password: process.env.ORACLE_PASSWORD,
            connectString: process.env.ORACLE_CONNECT_STRING,
        });

        return connection;
    }
    static async executeQuery(query) {
        const connection = await this.connect();
        const result = connection.execute(query);
        await connection.close();
        return result;
    }
}
