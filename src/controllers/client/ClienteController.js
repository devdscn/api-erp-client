import Connection from '../../database/Connection';

class ClienteController {
    async index(req, res) {
        try {
            const result = await Connection.executeQuery(
                `SELECT * from VEDI_CLIENTE`
            );

            return res.json(result.rows);
        } catch (error) {}
    }
}

export default new ClienteController();
