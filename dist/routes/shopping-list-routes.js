"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const shopping_list_controllers_1 = require("../controllers/shopping-list-controllers");
const router = express_1.default.Router();
router.route('/')
    .get(shopping_list_controllers_1.getList)
    .post(shopping_list_controllers_1.addItem);
router.route('/:id')
    .put(shopping_list_controllers_1.updateItem)
    .delete(shopping_list_controllers_1.deleteItem);
exports.default = router;
