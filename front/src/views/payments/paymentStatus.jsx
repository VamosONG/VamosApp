import { useState, useEffect } from 'react';
import { Center, Box, Collapse, Heading, Text, Stack, Button, Flex } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { getDataMePago } from '../../redux/actions/index';

const PaymentStatus = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const mePagoData = useSelector((state) => state.mePagoData);

  useEffect(() => {
    localStorage.clear(); //Para que se resetee el local storage
    dispatch(getDataMePago());
    Swal.fire({
      title: "¡Viaje reservado!",
      text: "Los detalles de su reserva se enviaron a su correo electrónico",
      icon: "success"
    });
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setShowButton(false); // Oculta el botón al hacer clic
  };

  return (
   
    <Box bg='#009ED1' w={{base:"1rem",md:"30rem"}} spacing={4} mt="6rem" borderRadius="3%" mb="4rem" >
    
      <Flex justifyContent="center" p={20}>
       <Stack >
        <Heading
          color='white'
          textTransform='uppercase'
          fontFamily="'DIN Alternate Black', sans-serif"
          letterSpacing='2px'
          fontSize={['2xl', null, '5xl']}
          mb='2'
          textShadow='2px 2px 4px rgb(0, 0, 0, 0.9)'
        >
          Gracias por elegirnos!!!
        </Heading>
        
        <Text>Estado de la Compra: Aprobado</Text>
              <Text>ID de Pago: {mePagoData?.payment_id}</Text>
              <Text>Tipo de Pago: {mePagoData?.payment_type}</Text>
       
        <Box maxW="md"  borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="lg" bg='rgb(0 158 209)' p={4} mt={4}>
          
          {showButton && (
            <Button onClick={handleToggle} mb={2}>
              Comprobante de Pago
            </Button>
          )}
          <Collapse in={isOpen}>
            <Stack spacing={2}>
              <Heading as="h2" size="md">
                Comprobante de Pago
              </Heading>
              <Text>Estado de la Compra: Aprobado</Text>
              <Text>ID de Pago: {mePagoData?.payment_id}</Text>
              <Text>Tipo de Pago: {mePagoData?.payment_type}</Text>
              <Text>Metodo de Pago: {mePagoData?.site_id === "MPE" ? "Mercadopago" : ""}</Text>
              
            </Stack>
          </Collapse>
        </Box>
        </Stack>
      </Flex>
      
      </Box>
  );
};

export default PaymentStatus;