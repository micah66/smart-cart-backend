"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.updateItem = exports.addItem = exports.getList = void 0;
const getList = (req, res) => {
    res.status(200).json({ message: 'Shopping list items' });
};
exports.getList = getList;
const addItem = (req, res) => {
    res.status(201).json({ message: 'Add item' });
};
exports.addItem = addItem;
const updateItem = (req, res) => {
    res.status(200).json({ message: `Update item ${req.params.id}` });
};
exports.updateItem = updateItem;
const deleteItem = (req, res) => {
    res.status(200).json({ message: `Delete item ${req.params.id}` });
};
exports.deleteItem = deleteItem;
