"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.updateItem = exports.addItem = exports.getList = void 0;
const shopping_item_1 = __importDefault(require("../models/shopping-item"));
const getList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json(yield shopping_item_1.default.find());
});
exports.getList = getList;
const addItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, qty } = req.body;
    if (!name || !qty) {
        return res.status(400).json({ error: 'Invalid request' });
    }
    try {
        const newShoppingItem = yield shopping_item_1.default.create({
            name,
            qty,
        });
        res.status(201).json(newShoppingItem);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.addItem = addItem;
const updateItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const shoppingItem = yield shopping_item_1.default.findById(id);
    if (!shoppingItem) {
        return res.status(400).json({ error: `Cannot find _id: ${id}` });
    }
    const { name, qty, isInCart } = req.body;
    try {
        const updatedItem = yield shopping_item_1.default.findByIdAndUpdate(id, {
            name,
            qty,
            isInCart
        }, {
            new: true
        });
        res.status(200).json(updatedItem);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.updateItem = updateItem;
const deleteItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const shoppingItem = yield shopping_item_1.default.findById(id);
    if (!shoppingItem) {
        return res.status(400).json({ error: `Cannot find _id: ${id}` });
    }
    yield shopping_item_1.default.findByIdAndDelete(id);
    res.status(200).json(id);
});
exports.deleteItem = deleteItem;
