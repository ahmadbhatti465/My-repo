import mongoose from "mongoose";

const bookscheme=mongoose.Schema({
    name:String,
    price:Number,
    title:String,
    category:String,
    image:String,
})
const Book = mongoose.model("Book",bookscheme );
export default Book;