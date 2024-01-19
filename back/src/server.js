const express= require("express");
const morgan = require("morgan");
const bodyParser = require('body-parser');


const cors = require("cors")

const router = require("./routes/index"); 


const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
server.use(bodyParser.json()); 


server.use(router);

module.exports= server;