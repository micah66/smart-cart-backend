// const express = require('express')
import express, { Express, Request, Response } from 'express';
const env = require('dotenv').config()
import router from '../routes/shopping-list-routes'

const port = process.env.PORT || 5000

const app:Express = express()

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

app.use('/api/shopping-list', router)

app.listen(port, () => console.log(`listening on port ${port}...`))