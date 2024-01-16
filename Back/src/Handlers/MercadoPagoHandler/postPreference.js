const {MercadoPagoConfig, Preference} = require("mercadopago");

const client = new MercadoPagoConfig({
    accessToken: "TEST-6471920902445661-011513-d17ca612b6c065b84fa9d327e05c61fb-1388941507",
  });

const postPreference = async (req, res) => {
    try {
      const body = {
        items: [
          {
            title: req.body.titulo,
            quantity: Number(req.body.quantity),
            unit_price: Number(req.body.price),
            currency_id: "PE",
          },
        ],
        back_urls: {
          success: "https://www.youtube.com/@onthecode",
          failure: "https://www.youtube.com/@onthecode",
          pending: "https://www.youtube.com/@onthecode",
        },
        auto_return: "approved",
      };
    
  
      const preference = new Preference(/*req.mercadoPagoClient*/ client);
      const result = await preference.create({ body });
      res.json({
        id: result.id,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: "Error al crear la preferencia :(",
      });
    }
  };
  
module.exports = postPreference