import { Request, Response } from "express";
import ShoppingItem from "../models/shopping-item";
import IShoppingItem from "../interfaces/ShoppingItem";

export const getList = async (req:Request, res:Response) => {
  res.status(200).json(await ShoppingItem.find())
}

export const addItem = async (req:Request, res:Response) => {
  const {name, qty}: IShoppingItem = req.body
  if (!name || !qty) {
    return res.status(400).json({error: 'Invalid request'})
  }

  try {
    const newShoppingItem = await ShoppingItem.create({
      name,
      qty,
    })      
    res.status(201).json(newShoppingItem)
  } catch (error) {
    res.status(400).json(error)
  }

}

export const updateItem = async (req:Request, res:Response) => {
  const {id} = req.params
  const shoppingItem = await ShoppingItem.findById(id)
  if (!shoppingItem) {
    return res.status(400).json({error: `Cannot find _id: ${id}`})
  }

  const {name, qty, isInCart}: IShoppingItem = req.body

  try {
    const updatedItem = await ShoppingItem.findByIdAndUpdate(id, {
      name,
      qty,
      isInCart
    }, {
      new: true
    })
    res.status(200).json(updatedItem)
  } catch (error) {
    res.status(400).json(error)
  }
}

export const deleteItem = async (req:Request, res:Response) => {
  const {id} = req.params
  const shoppingItem = await ShoppingItem.findById(id)
  if (!shoppingItem) {
    return res.status(400).json({error: `Cannot find _id: ${id}`})
  }

  await ShoppingItem.findByIdAndDelete(id)

  res.status(200).json(id)
}