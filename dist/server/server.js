"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express')
const express_1 = __importDefault(require("express"));
const env = require('dotenv').config();
const db_1 = __importDefault(require("../config/db"));
const shopping_list_routes_1 = __importDefault(require("../routes/shopping-list-routes"));
const port = process.env.PORT || "5000";
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
(0, db_1.default)();
app.use('/api/shopping-list', shopping_list_routes_1.default);
app.listen(port, () => console.log(`listening on port ${port}...`));
