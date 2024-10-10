import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRouter from '../Backend/route/book.route.js';
import userRouter from '../Backend/route/user.route.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 4001;
const URI = process.env.mongoDBURI;

// Connect to MongoDB
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((error) => {
    console.error("Error connecting to MongoDB", error);
});

// Define routes
app.use("/book", bookRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
