import mongoose from "mongoose"

mongoose.connect("mongodb+srv://JuniorElias:5858Abbb@cluster0.vmmeu5y.mongodb.net/alura");

let db = mongoose.connection;

export default db;