const deleteZone = require('../../controllers/zonesControllers/deleteZone');

module.exports = async(req, res) => {
    const {id} = req.body;
    try{
console.log(id);
        const deletedZ=await deleteZone(id);
 
        if(deletedZ)
            res.status(200).json(deletedZ);
        else
            res.status(404).send(`No existe zona con ID ${id}.`);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}