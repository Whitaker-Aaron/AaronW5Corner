import express from "express";
//import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";
import axios from "axios";



const router = express.Router();


router.get("/", async (req, res) => {
    let ClientID = req.app.get('ClientID')
    let AuthToken = req.app.get('AuthToken')
    let result = ''
    const response = await axios.post('https://api.igdb.com/v4/games', "fields *; sort rating desc;", {
        headers: {
            'Content-Type': 'text/plain',
            'Client-ID': ClientID,
            'Authorization': `Bearer ${AuthToken}`
        }
    }).then((response) => {
        result = response.data
    })

    console.log(result)



    res.send(result).status(200);
});

router.get("/cover/:id", async (req, res) => {
    let ClientID = req.app.get('ClientID')
    let AuthToken = req.app.get('AuthToken')
    let query = { router: req.params.id };
    let result = ''
    query = query.router;
    console.log(query)
    let query_string = "fields *; where id = " + query + ";limit 200;"
    const response = await axios.post('https://api.igdb.com/v4/covers', query_string, {
        headers: {
            'Content-Type': 'text/plain',
            'Client-ID': ClientID,
            'Authorization': `Bearer ${AuthToken}`
        }
    }).then((response) => {
        result = response.data
    })

    console.log(result)



    res.send(result).status(200);
});

router.get("/release/:id", async (req, res) => {
    let ClientID = req.app.get('ClientID')
    let AuthToken = req.app.get('AuthToken')
    let query = { router: req.params.id };
    let result = ''
    query = query.router;
    console.log(query)
    let query_string = "fields *; where id = " + query + ";limit 200;"
    //let query_string = "fields *;limit 50;"
    const response = await axios.post('https://api.igdb.com/v4/release_dates', query_string, {
        headers: {
            'Content-Type': 'text/plain',
            'Client-ID': ClientID,
            'Authorization': `Bearer ${AuthToken}`
        }
    }).then((response) => {
        result = response.data
    })

    console.log(result)



    res.send(result).status(200);
});


router.get("/game/:id", async (req, res) => {
    let ClientID = req.app.get('ClientID')
    let AuthToken = req.app.get('AuthToken')
    let query = { router: req.params.id };
    let result = ''
    query = query.router;
    console.log(query)
    let query_string = "fields *; where id = " + query + ";limit 200;"
    const response = await axios.post('https://api.igdb.com/v4/games', query_string, {
        headers: {
            'Content-Type': 'text/plain',
            'Client-ID': ClientID,
            'Authorization': `Bearer ${AuthToken}`
        }
    }).then((response) => {
        result = response.data
    })

    console.log(result)



    res.send(result).status(200);
});

router.get("/game-query/:id", async (req, res) => {
    let ClientID = req.app.get('ClientID')
    let AuthToken = req.app.get('AuthToken')
    let query = { router: req.params.id };
    let result = ''
    query = query.router;
    console.log(query)
    //let query_string = "fields *; search " + query + ";"
    let query_string = "fields name, cover; search \"" + query + "\";limit 200;"
    const response = await axios.post('https://api.igdb.com/v4/games', query_string, {
        headers: {
            'Content-Type': 'text/plain',
            'Client-ID': ClientID,
            'Authorization': `Bearer ${AuthToken}`
        }
    }).then((response) => {
        result = response.data
    })

    console.log(result)



    res.send(result).status(200);
});



export default router;