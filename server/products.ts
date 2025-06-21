
import { Request, Response } from 'express';
import { PRODUCTS } from './db-data'; // Adjust the path as needed

export function getProducts(req: Request, res: Response) {
  res.status(200).json(PRODUCTS);
}