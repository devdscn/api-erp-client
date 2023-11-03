import Tasks from './Tasks';

const empresas = new Tasks('SELECT * from TUND_UNIDADE', 'empresas');
const clientes = new Tasks('SELECT * from VEDI_CLIENTE', 'clientes');

const tasks = [empresas, clientes];
tasks.forEach((job) => job.run());
