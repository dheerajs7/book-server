import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

export const Admin = new mongoose.model("Admin", adminSchema);
// dd