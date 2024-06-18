import express, { Router } from 'express'
const app = express();
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
const port = process.env.PORT || 3001
const URI =process.env.DB
import routes from './routes';
// console.log(port);
    // mongoose.connect(URI),{useNewUrlParser:true,useUnifiedTopology:true}
    // console.log("connect to database");
    mongoose.connect(URI)
.then(()=>console.log("connected to MongoDB using Mongoose"))
app.use('/api',routes=>{
    res.send("Welome to Bibliomart");
})

app.listen(port,()=>{
    console.log(`Port is running on ${port}`);
})
// mongodb atlas config

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://Bibliomart4:f1UPElE9Bw3A3jjf@cluster0.beniw8e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);

// f1UPElE9Bw3A3jjf

