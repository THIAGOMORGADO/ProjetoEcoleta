import {Request, Response} from 'express';
import knex from '../database/connection';

class PointsController {
  async index (req:Request, res:Response){
     const {city, uf, items } = req.query;

    const parsedItems = String(items)
    .split(',')
    .map(item => Number(item.trim()));

    const point = await knex('points')
      .join('point_items', 'points.id', '=', 'point_items.point_id')
      .whereIn('point_items.item_id', parsedItems)
      .where('city', String(city))
      .where('uf', String(uf))
      .distinct()
      .select('points.*')

     return res.json(point)
  }
  
  async show (req: Request, res: Response) {
    const {id} = req.params;

    const point = await knex('points').where('id', id).first();

    if(!point){
      return res.status(400).json({messager: 'ponto nao encontrado'})
    }

    const items = await knex('items')
    .join('point_items', 'item_id', '=', 'point_items.item_id')
    .where('point_items.point_id', id)
    .select('items.title')

    return res.json({point, items});

  }
  async create (req: Request, res: Response)  {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items
    } = req.body;
    

    const point = {
      image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bWFya2V0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
    }
    const trx = await knex.transaction();
    const insertedIds  = await trx('points').insert(point);
  
    const point_id = insertedIds[0];
  
    const pointItems = items.map(( item_id: number ) => {
      return {
        item_id,
        point_id
      }
    }) 
  
    await trx('point_items').insert(pointItems);
    
    await trx.commit();

    return res.json({
      id: point_id,
      ...point,

    })
  }
}

export default PointsController;