import { json } from 'express';

const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.MONGO_CONNECT_STRING);
let count;

export default class DbMongo {
    static run() {
        const database = client.db();
        return database;
    }

    static async execute(collection, data) {
        try {
            //carrega coleção recebidade por argumento
            const db = this.run().collection(collection);

            //apaga coleção recebida por argumento
            if ((await db.countDocuments()) > 0) {
                await db.drop();
            }

            //cria coleção e insere documentos recebeido por argumento
            const options = { ordered: true };
            const result = await db.insertMany(data, options);

            //contagem dos documentos inseridos
            count = result.insertedCount;
        } catch (error) {
            console.log(`Erro Mongo:${error}`);
        }
    }
    static insertedCount() {
        return count;
    }
}
