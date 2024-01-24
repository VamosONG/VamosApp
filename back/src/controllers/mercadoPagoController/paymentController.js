const mercadopago = require("mercadopago");
// import { MERCADOPAGO_API_KEY } from "../config.js";
const dotenv = require("dotenv");
const trip = require("../../models/trip");
const { Trip } = require("../../dataBase");
const postTrip = require('../../controllers/tripsControllers/postTrip');
dotenv.config();

let newTrip = {}
const createOrder = async (req, res) => {

  mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN
  });

  const {
    userId,
    date,
    hour,
    origin,
    destination,
    quantityPassengers,
    price,viaje } = req.body
 
  try {
    let preference = {

      metadata: { userId: userId },



      items: [
        {
          title: viaje,
          unit_price: price,
          currency_id: "PEN",
          quantity: 1,
          //  description: product.quantityPassengers, 
          // picture_url: "",
        }],
      back_urls: {
        success: "http://localhost:5173/paymentStatus",
        // failure: "http://localhost:5173/fail",
        // pending: "http://localhost:5173/pending",
      },

      notification_url: "https://c8cb-2800-2130-8a40-4f3-f10e-58e6-75e9-edde.ngrok-free.app/mepago/webhook",


      auto_return: "all"
    }

    newTrip = await postTrip(userId, date, hour, origin, destination, quantityPassengers, price);
    console.log("1", newTrip);
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


    if (payment.type !== "payment" && newTrip.id) {
      // const data = await mercadopago.payment.findById(payment["data.id"]);
      // const userPayment = await Trip.findOne({ where: { id: data.body.metadata.trip_id } });//BUSCA EL TRIP
      //  await newTrip.update({ stateOfTrip: "reserved" }); //CAMBIA DE OFFER A RESERVED
      // await userPayment.reload();
      console.log("2",newTrip);
      await deleteTrip(newTrip.id);
      

      // AGREGAR LO DE ENVIAR MAIL

    } 
    res.sendStatus(204);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

module.exports = { createOrder, receiveWebhook }











