import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI
    if (!uri) {
      throw new Error('Cannot connect to mongo: No URI')
    }
    await mongoose.connect(uri)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

export default connectDB