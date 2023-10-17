import oracle from '../../database/Connection';
import mongo from '../../database/DbMongo';
class ClienteController {
    async index(req, res) {
        try {
            const result = await oracle.executeQuery(
                `SELECT * from VEDI_CLIENTE`
            );

            await mongo.execute('clientes', result.rows);
            return res.json({ documents: mongo.insertedCount() });
        } catch (error) {
            console.log(error);
        }
    }
}

export default new ClienteController();
