
// Load environment variables
import "./loadEnvironment.mjs";
import articles from "./routes/articles.mjs";
import cors from "cors";


import express from "express";
const app = express()

app.use(cors());


app.use(express.json());

// Load the /articles routes
app.use("/articles", articles);

app.listen(5000, () => { console.log("Server started on port 5000") })