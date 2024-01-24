

const success = async (req, res) =>{
    
    const{status, metadata, collection_status, payment_id, payment_type, merchant_account_id, site_id, processing_mode} = req.query;
   
    

    res.status(200).send({
        status: status,
        // collection_status: collection_status,
        payment_id: payment_id,
        tipoPago: payment_type,
        idComprador: merchant_account_id,
        site_id: site_id,
        trip_id:metadata.trip_id
        // processing_mode: processing_mode
    })

}


//no hace falta falta mandar datos, solo crear componente de rechazo y pendiente.

// const fail = async (req, res) =>{

//     const{status, collection_status, payment_id, payment_type, merchant_account_id, site_id} = req.query;
   
   

//     res.status(200).send({
//         status: status,
//         collection_status: collection_status,
//         payment_id: payment_id,
//         tipoPago: payment_type,
//         idCompador: merchant_account_id,
//         site_id: site_id
//     })


// }
// const pending = async (req, res) =>{

//     const{status, collection_status, payment_id, payment_type, merchant_account_id, site_id} = req.query;
   
   

//     res.status(200).send({
//         status: status,
//         collection_status: collection_status,
//         payment_id: payment_id,
//         tipoPago: payment_type,
//         idCompador: merchant_account_id,
//         site_id: site_id
//     })


// }

module.exports = {success}