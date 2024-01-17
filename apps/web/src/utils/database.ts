import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set('strictQuery', true)

  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI ?? "", {
      dbName: process.env.MONGODB_DB,
    })
    isConnected = true;

  } catch (err) {
    console.log(err);
  }
}
