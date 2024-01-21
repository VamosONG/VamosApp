

const success = async (req, res) =>{
    
    const{status, collection_status, payment_id, payment_type, merchant_account_id, site_id, processing_mode} = req.query;
   
   

    res.status(200).send({
        status: status,
        // collection_status: collection_status,
        payment_id: payment_id,
        tipoPago: payment_type,
        idComprador: merchant_account_id,
        site_id: site_id,
        // processing_mode: processing_mode
    })

}




const fail = async (req, res) =>{

    const{status, collection_status, payment_id, payment_type, merchant_account_id, site_id} = req.query;
   
   

    res.status(200).send({
        status: status,
        collection_status: collection_status,
        payment_id: payment_id,
        tipoPago: payment_type,
        idCompador: merchant_account_id,
        site_id: site_id
    })


}
const pending = async (req, res) =>{

    const{status, collection_status, payment_id, payment_type, merchant_account_id, site_id} = req.query;
   
   

    res.status(200).send({
        status: status,
        collection_status: collection_status,
        payment_id: payment_id,
        tipoPago: payment_type,
        idCompador: merchant_account_id,
        site_id: site_id
    })


}

module.exports = {success, fail, pending}