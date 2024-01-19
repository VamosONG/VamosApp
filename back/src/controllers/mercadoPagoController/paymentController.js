const mercadopago = require("mercadopago");
// import { MERCADOPAGO_API_KEY } from "../config.js";
const dotenv = require("dotenv");
dotenv.config();


const createOrder = async (req, res) => {
  mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN
  });

  const product = req.body

  try {
      const preference = {
        items:[
          {
          title: product.viaje,
          unit_price: product.price,
          currency_id: "PEN",
          quantity: product.quantityPassengers, 
          // description: product.description, 
          // picture_url: "",
        }],
      back_urls: {
        success: "http://localhost:3001/mepago/success",
        failure: "http://localhost:3001/mepago/fail",
        pending: "http://localhost:3001/mepago/pending",
      },  
      notification_url: "http://localhost:3001/mepago/webhook",
      
      auto_return: "approved"
      }

      const respuesta = await mercadopago.preferences.create(preference);
     
      res.status(200).json(respuesta.response.init_point);

    // const result = await mercadopago.preferences.create({
    //   items: [
    //     {
    //       title: "Laptop",
    //       unit_price: 500,
    //       currency_id: "PEN",
    //       quantity: 1,
    //     },
    //   ],
    //   notification_url: "https://e720-190-237-16-208.sa.ngrok.io/webhook",
    //   back_urls: {
    //     success: "http://localhost:3001/success",
    //     // pending: "https://e720-190-237-16-208.sa.ngrok.io/pending",
    //     // failure: "https://e720-190-237-16-208.sa.ngrok.io/failure",
    //   },
    // });

    // console.log(result);

    // // res.json({ message: "Payment creted" });
    // res.json(result.body);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

 const receiveWebhook = async (req, res) => {
  try {
    const payment = req.query;
    console.log("payment",payment);
    if (payment.type === "payment") {
      const data = await mercadopago.payment.findById(payment["data.id"]);
      console.log("data,",data);
      //aqui se guarda en la base de datos
    }

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

module.exports = {createOrder, receiveWebhook}