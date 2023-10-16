import { Router } from 'express';
import homeController from '../controllers/client/HomeController';
import empresaController from '../controllers/client/EmpresaController';
import clienteController from '../controllers/client/ClienteController';

const router = new Router();

//rotas ERP
router.get('/client/', homeController.index);
router.get('/client/empresas', empresaController.index);
router.get('/client/clientes', clienteController.index);

export default router;
