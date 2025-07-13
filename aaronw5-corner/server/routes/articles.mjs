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



// Get a list of 50 posts
router.get("/", async (req, res) => {
    let collection = await db.collection("Articles");
    let results = await collection.find({})
        .limit(50)
        .toArray();
    console.log(results);

    res.send(results).status(200);
});

router.get("/:router", async (req, res) => {
    let collection = await db.collection("Articles");
    let query = { router: req.params.router };
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});

router.patch("/:router", async (req, res) => {
    let collection = await db.collection("Articles");
    const query = { router: req.params.router };
    const updates = {
        $set: { hearts: req.body.hearts }
    };

    let result = await collection.updateOne(query, updates);
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});

export default router;