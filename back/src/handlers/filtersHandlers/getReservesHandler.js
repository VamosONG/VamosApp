const getReserves = require('../../controllers/filtersControllers/getReserves');
const getUserById = require('../../controllers/usersControllers/getUserById')
module.exports = async (req, res) => {
    try {
        
        const allRes = await getReserves();

        const mapeo = await Promise.all(allRes.map(async tr=>{
            const {dataValues, driverFullName, userEmail} = tr;
            const usuario = await getUserById(tr.userId)
            if(usuario){
            const newTrip={
                ...dataValues,
                userEmail: `${usuario.email}`
            }
            return newTrip;
            }else{
                const newTrip={
                    ...dataValues,
                    userEmail: `HanTsolo@gmail.com`
                }
                return newTrip
            }
        }));

        res.status(200).json(mapeo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}