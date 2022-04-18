import { Request, Response } from "express";

export const getList = (req:Request, res:Response) => {
  res.status(200).json({message: 'Shopping list items'})
}

export const addItem = (req:Request, res:Response) => {
  res.status(201).json({message: 'Add item'})
}

export const updateItem = (req:Request, res:Response) => {
  res.status(200).json({message: `Update item ${req.params.id}`})
}

export const deleteItem = (req:Request, res:Response) => {
  res.status(200).json({message: `Delete item ${req.params.id}`})
}