import oracle from '../../database/Connection';
import mongo from '../../database/DbMongo';

class EmpresaController {
    async index(req, res) {
        try {
            const result = await oracle.executeQuery(
                `SELECT * from TUND_UNIDADE`
            );
            await mongo.execute('empresas', result.rows);
            return res.json({ documents: mongo.insertedCount() });
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                erros: error,
            });
        }
    }
}

export default new EmpresaController();
