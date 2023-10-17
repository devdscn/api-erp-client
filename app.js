import dotenv from 'dotenv';
// carrega variaveis de ambientes
dotenv.config();
import express from 'express';
import routes from './src/routes/routes';
import jobCliente from './src/jobs/JobCliente';
import './src/jobs';

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
        // jobCliente.run();
    }

    middlewares() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }

    routes() {
        this.app.use(routes);
    }
}

export default new App().app;
