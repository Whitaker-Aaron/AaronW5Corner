import express from "express";
//import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();



//CONNECT TO DB
import { MongoClient } from "mongodb";
const connectionString = process.env.ATLAS_URI || ATLAS_URI;
const client = new MongoClient(connectionString);

let conn;
try {
    conn = await client.connect();
} catch (e) {
    console.error(e);
}
let db = conn.db("AaronW5Corner");

router.get("/", async (req, res) => {
    let collection = await db.collection("Lists");
    //const { limit } = req.body
    let query = {};
    let results = await collection.find({})
        .toArray();
    console.log(results);


    res.send(results).status(200);
});

router.get("/:router", async (req, res) => {
    let collection = await db.collection("Lists");
    let query = { router: req.params.router };
    let result = await collection.findOne(query);


    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});

process.on('SIGINT', function() {
    client.close();
    process.exit();
});

export default router;