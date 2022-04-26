// const express = require('express')
import express, { Express, Request, Response } from 'express';
const env = require('dotenv').config()
import connectDB from '../config/db';
import router from '../routes/shopping-list-routes'

const port:string = process.env.PORT || "5000"

const app:Express = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

connectDB()

app.use('/api/shopping-list', router)

app.listen(port, () => console.log(`listening on port ${port}...`))