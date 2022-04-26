import mongoose from "mongoose";

interface IShoppingItem {
  name: string,
  qty: number,
  isInCart: boolean
}

const ShoppingItemSchema = new mongoose.Schema<IShoppingItem>({
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
})

export default mongoose.model<IShoppingItem>('ShoppingItem', ShoppingItemSchema)