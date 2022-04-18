import express, {Router, Request, Response, response} from 'express'

import { 
  getList,
  addItem,
  updateItem,
  deleteItem
} from '../controllers/shopping-list-controllers'

const router:Router = express.Router()

router.route('/')
  .get(getList)
  .post(addItem)

router.route('/:id')
  .put(updateItem)
  .delete(deleteItem)

export default router