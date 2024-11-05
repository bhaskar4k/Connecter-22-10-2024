require('dotenv').config()
const clear = require('clear');
const express = require('express');
const cors = require('cors');
const app = express();
const AuthAPI = require('./src/API/AuthAPI');
const GameAPI = require('./src/API/GameAPI');
const {get_current_datetime} = require('./Utils/CommonUtils')
const Log = require('./Utils/Log')
const http = require('http');

const server = http.createServer(app);
const log = new Log();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));

app.use((req, res, next) => {  
    let log_msg = "API call -> " + process.env.URL + req.path + " | Method -> " + req.method + " | Call on -> " + get_current_datetime();
    log.write_api_call_log(log_msg)
    next();
});

app.use('/api', AuthAPI, GameAPI);

server.listen(process.env.PORT, () => {
    clear();
    console.log("Listening port - " + process.env.PORT);
})