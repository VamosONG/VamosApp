//  function handleMercadoHandler(result, res) {
//     try {
      
//       if (result.status === 'rejected') {
        
//        
//       }
//       if (result.status === 'approved') {
        
//        
//       }
      
//       res.json({
//         id: result.id,
//         status: result.status,
        
//       });
//     } catch (error) {
//       console.error('Error al manejar la respuesta de Mercado Pago:', error);
//       res.status(500).json({
//         error: 'Error interno al procesar la respuesta de Mercado Pago.',
//       });
//     }
//   }
//   module.exports = handleMercadoHandler;