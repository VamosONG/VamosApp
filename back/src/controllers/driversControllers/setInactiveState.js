const {Driver} = require ("../../dataBase");

const setInactiveState = async (id) => {
    try {
        // Encuentra el chofer por ID
        const driver = await Driver.findByPk(id);

        // Verifica si se encontró el chofer
        if (!driver) {
            throw new Error('No se encontró el chofer con el ID proporcionado.');
        }

        // Cambia el estado de 'inactive' al valor opuesto
        const updatedInactiveState = !driver.inactive;

        const updateState = false;

        // Actualiza el estado 'inactive' en la base de datos
        await Driver.update({ inactive: updatedInactiveState, driverState: updateState }, { where: { id } });

        return {
            success: true,
            message: 'El chofer se ha actualizado correctamente.',
            newInactiveState: updatedInactiveState,
        }
    } catch (error) {
        throw new Error(`Error al actualizar: ${error.message}`);
    }
}

module.exports = setInactiveState;