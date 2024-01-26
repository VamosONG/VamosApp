const mercadopago = require("mercadopago");
// import { MERCADOPAGO_API_KEY } from "../config.js";
const dotenv = require("dotenv");
const trip = require("../../models/trip");
const { Trip } = require("../../dataBase");
const postTrip = require("../tripsControllers/postTrip");
// const {postTrip} = require('../../controllers/tripsControllers/postTrip');
dotenv.config();



const createOrder = async (req, res) => {

  mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN
  });

  const {
    userId,
    
    price,viaje,driverId, destination,quantityPassengers,date,origin, hour} = req.body
 console.log(userId,price,viaje);
  try {
    let preference = {

      metadata: { userId: userId,
        origin: origin,
        destination:  destination,
        date: date,
        hour:  hour,
        quantityPassengers:quantityPassengers,
        driverId: null,
        price:  price },



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
         failure: "http://localhost:5173/paymentFailed",
        // pending: "http://localhost:5173/pending",
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


    if (payment.type === "payment" ) {
       const data = await mercadopago.payment.findById(payment["data.id"]);
      // const userPayment = await Trip.findOne({ where: { id: data.body.metadata.trip_id } });//BUSCA EL TRIP
      //  await newTrip.update({ stateOfTrip: "reserved" }); //CAMBIA DE OFFER A RESERVED
      console.log(data);
      const trip ={
        userId: data.body.metadata.user_id,
        origin: data.body.metadata.origin,
        destination:  data.body.metadata.destination,
        date: data.body.metadata.date,
        hour: data.body.metadata.hour,
        quantityPassengers:data.body.metadata.quantity_passengers,
        driverId: null,
        price:  data.body.metadata.price
      }
      console.log(trip);
      // await userPayment.reload();
      // console.log("2",newTrip);
      // await deleteTrip(newTrip.id);
      const resp = await postTrip(trip)
      console.log(resp);

      // AGREGAR LO DE ENVIAR MAIL
res.status(204).json(resp);
    } 
    
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

module.exports = { createOrder, receiveWebhook }











