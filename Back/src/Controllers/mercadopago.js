const { Preference } = require("mercadopago")
const { MercadoPagoConfig } = require("mercadopago");





const mpController = async (req, res) => {
    try {

        const client = new MercadoPagoConfig({
            accessToken: "TEST-6471920902445661-011513-d17ca612b6c065b84fa9d327e05c61fb-1388941507",
        });
        const body = {
            items: [
                {
                    title: req.body.description,
                    quantity: Number(req.body.quantity),
                    unit_price: Number(req.body.price),
                    currency_id: "ARS",
                },
            ],
            back_urls: {
                success: "https://www.youtube.com/@onthecode",
                failure: "https://www.youtube.com/@onthecode",
                pending: "https://www.youtube.com/@onthecode",
            },
            auto_return: "approved",
        };

        const preference = new Preference(client);
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

module.exports = mpController;