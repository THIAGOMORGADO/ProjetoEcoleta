import express from 'express';
import cors from 'cors';
import routes from './routes';

import path  from 'path'
const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);

server.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

server.listen(3333)