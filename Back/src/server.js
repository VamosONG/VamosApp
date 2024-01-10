const express= require("express");
const morgan = require("morgan");
<<<<<<< HEAD
const cors = require("cors");
=======
const cors = require("cors")
>>>>>>> 66bceefcc50ae637238bd3bfc9a0c89a6a621a21
const router = require("./Routes/index");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(router);

module.exports= server;