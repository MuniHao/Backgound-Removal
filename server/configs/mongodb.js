import mongoose from 'mongoose';

const connectDB = async () => {
  mongoose.connection.on('connected', () => {
    console.log('DB CONNECTED SUCCESSFULLY');
  });
  await mongoose.connect(`${process.env.MONGODB_URI}/bg-removal`);
};

export default connectDB;
