const mercadopago = require("mercadopago");
// import { MERCADOPAGO_API_KEY } from "../config.js";
const dotenv = require("dotenv");
const trip = require("../../models/trip");
const { Trip } = require("../../dataBase")
dotenv.config();


const createOrder = async (req, res) => {

  mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN
  });

  const product = req.body
  console.log('pruduct', product)
  try {
    let preference = {

      metadata: { tripId: product.tripId },



      items: [
        {
          title: product.viaje,
          unit_price: product.price,
          currency_id: "PEN",
          quantity: 1,
          //  description: product.quantityPassengers, 
          // picture_url: "",
        }],
      back_urls: {
        success: "http://localhost:5173/paymentStatus",
        // success: "http://localhost:3001/mepago/success",
        /* failure: "http://localhost:3001/mepago/fail", */
        failure: "http://localhost:5173/",
        pending: "http://localhost:3001/mepago/pending",
      },

      notification_url: "https://c8cb-2800-2130-8a40-4f3-f10e-58e6-75e9-edde.ngrok-free.app/mepago/webhook",


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
      const userPayment = await Trip.findOne({ where: { id: data.body.metadata.trip_id } });//BUSCA EL TRIP
      await userPayment.update({ stateOfTrip: "reserved" }); //CAMBIA DE OFFER A RESERVED
      await userPayment.reload();

      
      // AGREGAR LO DE ENVIAR MAIL

    }

    res.sendStatus(204);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

module.exports = { createOrder, receiveWebhook }











