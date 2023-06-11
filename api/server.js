import mongoose from 'mongoose'
import { app } from './index.js'
import dotenv from "dotenv";


dotenv.config();

const { MONGO_URI, PORT } = process.env;
const connectOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

async function connectDB()  {
  try {
    await mongoose.connect(MONGO_URI, connectOptions)
    console.log('Connected to DB')

    app.listen(PORT, err => {
      if (err) throw new Error(err)
      console.log(`Server listening on port http://localhost:${PORT}`)
    })
  } catch (err) {
    console.log(err)
  }
}
connectDB();