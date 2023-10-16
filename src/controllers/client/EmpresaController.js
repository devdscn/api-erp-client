import oracle from '../../database/Connection';
import mongo from '../../database/DbMongo';

class EmpresaController {
    async index(req, res) {
        try {
            const result = await oracle.executeQuery(
                `SELECT * from TUND_UNIDADE`
            );
            mongo.execute('empresas', result.rows);
            return res.json(result.rows);
        } catch (error) {}
    }
}

export default new EmpresaController();
