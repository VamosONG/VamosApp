// const {MercadoPagoConfig, Preference} = require("mercadopago");
// const handleMercadoPagoResponse = require('../../handlers/mercadopagoHandler/handleMercadoPagoHandler')

// const client = new MercadoPagoConfig({
//     accessToken: "TEST-5388314586948191-011612-cbea2e66ec6860a857492458a2203a82-59024896",
//   });

//   const postPreference = async (req, res) => {
//     try {
//       const body = {
//         items: [
//           {
//             title: `${req.body.origin} ${req.body.destination}`,
//             quantity: Number(req.body.quantityPassengers),
//             unit_price: Number(req.body.price),
//             currency_id: "ARS",
//           },
//         ],
//         back_urls: {
//           success: "https://vamos-app-client.vercel.app/reserve/confirmed",
//           failure: "https://vamos-app-client.vercel.app/reserve/rejected",
//           pending: "https://vamos-app-client.vercel.app/reserve/rejected",
//         },
//         auto_return: "approved",
//       };
  
//       const preference = new Preference(client);
//       const result = await preference.create({ body });
  
      
//        handleMercadoPagoResponse(result, res);
//     } catch (error) {
//    
//       res.status(500).json({
//         error: "Error al crear la preferencia :(",
//       });
//     }
//   };
  
// module.exports = postPreference