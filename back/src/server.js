const express= require("express");
const morgan = require("morgan");

const cors = require("cors")
// import { express } from "express";
// import {cors} from "cors";
// import {morgan} from "morgan"


/***********************************MERCADOPAGO************************************* */
// const {MercadoPagoConfig, Preference} = require("mercadopago");

// const client = new MercadoPagoConfig({
//     accessToken: "TEST-6471920902445661-011513-d17ca612b6c065b84fa9d327e05c61fb-1388941507",
//   });


const router = require("./Routes/index");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

// server.use((req, res, next) => {
//     // Pasar el cliente a las solicitudes
//     req.mercadoPagoClient = client;
//     next();
//   });

server.use(router);

module.exports= server;