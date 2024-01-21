import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Stack } from '@chakra-ui/react';
import axios from 'axios';

const PaymentStatus = ({ }) => {

  const [paymentData, setPaymentData] = useState(null);
console.log('paymentData', paymentData)
  useEffect(() => {
    const datosCompra = async () => {
      try {
        // Realizar solicitud a tu backend para obtener datos del pago
        const response = await axios.get("http://localhost:3001/mepago/success");
        setPaymentData(response.data);
      } catch (error) {
        console.error('Error fetching payment data:', error);
      }
    };

    datosCompra();
  }, []);

  return (
    <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="lg">
      <Stack spacing={2} p={4}>
        <Heading as="h2" size="md">
          Estado del Pago
        </Heading>
        <Text>Estado de la Compra: {paymentData.status}</Text>
        <Text>Estado de la Colección: {paymentData.collectionStatus}</Text>
        <Text>ID de Pago: {paymentData.payment_id}</Text>
        <Text>Tipo de Pago: {paymentData.tipoPago}</Text>
        <Text>ID del Comprador: {paymentData.idComprador || 'N/A'}</Text>
        <Text>Site ID: {paymentData.site_id}</Text>
      </Stack>
    </Box>
  );
};

export default PaymentStatus;   