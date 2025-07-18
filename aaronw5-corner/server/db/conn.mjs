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
export default db;