const mercadopago = require("mercadopago");
// import { MERCADOPAGO_API_KEY } from "../config.js";
const dotenv = require("dotenv");
dotenv.config();


const createOrder = async (req, res) => {

  mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN
  });

  const product = req.body
console.log('pruduct',product)
  try {
      let preference = {

        metadata:{userId:"762baea5-4422-44de-ae36-ddf9c6a9e43b"},

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
        success: "http://localhost:5173/paymentStatus",
        // success: "http://localhost:3001/mepago/success",
        /* failure: "http://localhost:3001/mepago/fail", */
        failure: "http://localhost:5173/",
        pending: "http://localhost:3001/mepago/pending",
      },  
      notification_url: "https://853c-200-30-254-123.ngrok-free.app/mepago/webhook",
      
      auto_return: "all"
      }

      const respuesta = await mercadopago.preferences.create(preference);
     
      res.status(200).json(respuesta.response.init_point);

    
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }

};

 const receiveWebhook = async (req, res) => {
  try {
    const payment = req.query;
    // const {date_created, user_id} = req.body

  //  console.log(payment)


    if (payment.type === "payment") {
      const data = await mercadopago.payment.findById(payment["data.id"]);
    console.log(data)
   
      //aqui se guarda en la base de datos
    }

    res.sendStatus(204);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

module.exports = {createOrder, receiveWebhook}