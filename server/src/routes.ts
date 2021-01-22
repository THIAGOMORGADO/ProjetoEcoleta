import express from 'express';

// criando Controllers
import PointsController from './controllers/pointControllers';
import ItemsControllers from './controllers/itemControllers';
// instaciando class controllers
const pointsController = new PointsController();
const itemsControllers =  new ItemsControllers();

const routes = express.Router();

routes.get('/items', itemsControllers.index);
routes.post('/points', pointsController.create)
routes.get('/points', pointsController.index)
routes.get('/points/:id', pointsController.show)

export default routes;