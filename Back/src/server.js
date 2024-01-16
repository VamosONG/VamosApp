const express= require("express");
const morgan = require("morgan");
const mercadopago = require('mercadopago');

const cors = require("cors")


const router = require("./Routes/index");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());



server.use(router);

module.exports= server;