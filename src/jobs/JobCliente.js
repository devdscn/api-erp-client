import oracle from '../database/Connection';
import mongo from '../database/DbMongo';
import { CronJob } from 'cron';

class JobCliente {
    run() {
        const job = new CronJob(process.env.CRON_JOB, async () => {
            try {
                const result = await oracle.executeQuery(
                    `SELECT * from VEDI_CLIENTE`
                );

                await mongo.execute('clientes', result.rows);
                console.log(`Clientes: ${mongo.insertedCount()} documents`);
            } catch (error) {
                console.log(`error jobCliente ${error}`);
            }
        });
        job.start();
        console.log('JobCliente running? ', job.running);
    }
}
export default new JobCliente();
