"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ShoppingItemSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    qty: {
        type: Number,
        min: 1,
        required: true
    },
    isInCart: {
        type: Boolean,
        default: false,
        required: true
    }
}, {
    timestamps: true
});
exports.default = mongoose_1.default.model('ShoppingItem', ShoppingItemSchema);
