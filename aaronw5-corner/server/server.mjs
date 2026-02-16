
// Load environment variables
import "./loadEnvironment.mjs";
import articles from "./routes/articles.mjs";
import latest from "./routes/latest.mjs"
import games from "./routes/games.mjs"
import backlog from "./routes/backlog.mjs"
import axios from "axios";
import cors from "cors";


import express from "express";
const app = express()


app.use(cors());
app.use(express.json());

let clientID = '19eyfm04nkljpa15u9skvqu4lztbdx'
let clientSecret = 'tsef8ypke62wahxe47frmqwjmkhswi'


const getAuthToken = async (authToken) => {
    let endpoint = "https://id.twitch.tv/oauth2/token?client_id=" + clientID + "&client_secret=" + clientSecret + "&grant_type=client_credentials"
    axios.post(endpoint).then((response) => {
        app.set('AuthToken', response.data.access_token)
        console.log(response.data.access_token);
    })
        .then((error) => console.log(error));

}


app.set('ClientID', clientID);
app.set('ClientSecret', clientSecret);
getAuthToken()

// Load the /articles routes
app.use("/articles", articles);
app.use("/latest", latest);
app.use("/backlog", backlog);
app.use("/games", function (req, res, next) {
    req.conn_config = {
        ClientID: '19eyfm04nkljpa15u9skvqu4lztbdx',
        ClientSecret: 'tsef8ypke62wahxe47frmqwjmkhswi'
    };
    next();
}, games);

app.listen(5000, () => { console.log("Server started on port 5000") })