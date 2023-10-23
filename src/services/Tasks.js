import oracle from '../database/Connection';
import mongo from '../database/DbMongo';
import { CronJob } from 'cron';

export default class Tasks {
    constructor(query, collection) {
        this.query = query;
        this.collection = collection;
    }

    run = () => {
        try {
            const job = new CronJob(process.env.CRON_JOB, async () => {
                const result = await oracle.executeQuery(this.query);

                await mongo.execute(this.collection, result.rows);
                console.log(`${this.collection}: ${mongo.insertedCount()}`);
            });

            job.start();
            console.log(`Job: ${this.collection}, ${job.running}`);
        } catch (error) {
            console.log(`Error Job: ${error}`);
        }
    };
}
