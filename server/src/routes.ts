import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

// criando Controllers
import PointsController from './controllers/pointControllers';
import ItemsControllers from './controllers/itemControllers';
// instaciando class controllers
const pointsController = new PointsController();
const itemsControllers =  new ItemsControllers();

const routes = express.Router();
const upload = multer(multerConfig);

routes.get('/items', itemsControllers.index);

routes.post('/points', upload.single('image'),pointsController.create)

routes.get('/points', pointsController.index)
routes.get('/points/:id', pointsController.show)

export default routes;