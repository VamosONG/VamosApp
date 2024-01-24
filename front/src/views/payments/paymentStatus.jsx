import { useState, useEffect } from 'react';
import { Center, Box, Collapse, Heading, Text, Stack, Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import axios from 'axios';
import { getDataMePago, getTripsById } from '../../redux/actions/index'



const PaymentStatus = () => {

  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  // const [paymentData, setPaymentData] = useState(null);

  // console.log('paymentData', paymentData)
  const infoConfirmacionViaje = useSelector((state) => state.infoConfirmacionViaje)
  const mePagoData = useSelector((state) => state.mePagoData)
  useEffect(() => {
    // const datosCompra = async () => {
    //   try {
    // const response = await axios.get("http://localhost:3001/mepago/success");
    //     console.log("response", response);
    //     Swal.fire({
    //       title: "Viaje reservado",
    //       text: response?.data,
    //       icon: "success"});
    //     setPaymentData(response.data);
    //   } catch (error) {
    //     console.error('Error fetching payment data:', error);
    //   }
    // };

    // datosCompra();

    dispatch(getDataMePago())
    dispatch(getTripsById(infoConfirmacionViaje.id))


  }, [dispatch]);


  console.log(mePagoData);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    
      <Box bg="green" borderWidth="100px" overflow="hidden" boxShadow="l0g">
        <Stack spacing={2}>
                <Heading as="h2" size="md">
                  Detalles de su reserva
                </Heading>
                <Text>Tramo del viaje: {mePagoData?.status}</Text>
                <Text>Dia: {mePagoData?.payment_id}</Text>
                <Text>Hora: {mePagoData?.payment_type}</Text>
                <Text>Conductor: Proximo a asignar</Text>
                <Text>Metodo de Pago: {mePagoData?.site_id === "MPE" ? "Mercadopago" : ""}</Text>
              </Stack>
        <Center h="80vh">
          <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="lg" bg="blue" p={4}>
            <Button onClick={handleToggle} mb={2}>
              Comprobante de Pago
            </Button>
            <Collapse in={isOpen}>
              <Stack spacing={2}>
                <Heading as="h2" size="md">
                  Comprobante de Pago
                </Heading>
                <Text>Estado de la Compra: {mePagoData?.status}</Text>
                <Text>ID de Pago: {mePagoData?.payment_id}</Text>
                <Text>Tipo de Pago: {mePagoData?.payment_type}</Text>
                <Text>ID del Comprador: {mePagoData?.idComprador || 'N/A'}</Text>
                <Text>Metodo de Pago: {mePagoData?.site_id === "MPE" ? "Mercadopago" : ""}</Text>
              </Stack>
            </Collapse>
          </Box>
        </Center>
      </Box>
    
  );
};

export default PaymentStatus;