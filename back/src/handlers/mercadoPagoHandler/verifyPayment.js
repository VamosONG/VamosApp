const verificarEstadoDePago = async (preferenceId) => {
    try {
        const response = await axios.get(`https://vamosappserver.onrender.com/merpago/status/${preferenceId}`);
        // La respuesta podría contener información sobre el estado del pago, como 'approved', 'pending', etc.
        return response.data.status;
    } catch (error) {
        console.error('Error al verificar el estado del pago:', error.message);
        // Puedes manejar el error según tus necesidades, por ejemplo, devolviendo un estado de error específico.
        throw new Error('Error al verificar el estado del pago');
    }
};

module.exports = verificarEstadoDePago