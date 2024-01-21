const {mercadopago} = require("mercadopago");
// import { MERCADOPAGO_API_KEY } from "../config.js";
const dotenv = require("dotenv");
dotenv.config();


const createOrder = async (req, res) => {
  console.log(body);
  mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN
  });

  const product = req.body
console.log(product)
  try {
      let preference = {
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
        // success: "http://localhost:5173/paymentStatus",
        success: "http://localhost:3001/mepago/success",
        failure: "http://localhost:3001/mepago/fail",
        pending: "http://localhost:3001/mepago/pending",
      },  
      notification_url: "https://7ea7-186-11-90-154.ngrok-free.app/mepago/webhook",
      
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

  //  console.log(date_created, user_id);


    if (payment.type === "payment") {
      const data = await mercadopago.payment.findById(payment["data.id"]);
    
   
      //aqui se guarda en la base de datos
    }

    res.sendStatus(204);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

module.exports = {createOrder, receiveWebhook}