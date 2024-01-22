import { useState, useEffect } from 'react';
import { Box, Heading, Text, Stack } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import axios from 'axios';
import {getDataMePago} from '../../redux/actions/index'



const PaymentStatus = () => {

  const dispatch = useDispatch();

  // const [paymentData, setPaymentData] = useState(null);

  // console.log('paymentData', paymentData)

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
      
      
    }, [dispatch]);
    
    
    console.log(mePagoData);
    
    
    return (
    <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="lg">
      <Stack spacing={2} p={4}>
        <Heading as="h2" size="md">
          Estado del Pago
        </Heading>
        <Text>Estado de la Compra: {mePagoData?.status}</Text>
        {/* <Text>Estado de la Colección: {paymentData.collectionStatus}</Text> */}
        <Text>ID de Pago: {mePagoData?.payment_id}</Text>
        <Text>Tipo de Pago: {mePagoData?.payment_type}</Text>
        <Text>ID del Comprador: {mePagoData?.idComprador || 'N/A'}</Text>
        <Text>Site ID: {mePagoData?.site_id}</Text>
      </Stack>
    </Box>
  );
};

export default PaymentStatus;   