import React, { useState, useEffect } from 'react';
import { Center, Box, Collapse, Heading, Text, Stack, Button, Flex,Image } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { getDataMePago } from '../../redux/actions/index';

import WSP from "../../assets/icons/wspicon.png"
import { Link } from 'react-router-dom';

const PaymentStatus = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isAbierto,setIsAbierto] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [showButton2, setShowButton2] = useState(true);

  const mePagoData = useSelector((state) => state.mePagoData);

  useEffect(() => {
    localStorage.clear(); //Para que se resetee el local storage
    dispatch(getDataMePago());
    Swal.fire({
      title: '¡Viaje reservado!',
      text: 'Los detalles de su reserva se enviaron a su correo electrónico',
      icon: 'success',
    });
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setShowButton(false); // Oculta el botón al hacer clic
  };

  const handleToggle2 = () => {
    setIsAbierto(!isAbierto);
    setShowButton2(false); // Oculta el botón al hacer clic
  };

  // const handleWhatsAppClick = () => {
  //   // Aquí puedes redirigir a WhatsApp, por ejemplo, abriendo un enlace con el número de WhatsApp
  //   window.location.href = 'https://wa.me/+51343232';
  // };
  const whatsappLink = "https://wa.me/51935455227";
  return (

    <Flex 
      direction="column"
      minHeight="100vh"
      
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      alignItems="center"
      justifyContent="center"
      >
        <Box
          border="solid"
          paddingLeft={'16rem'}
          paddingRight={'26rem'}
          borderColor={'black'}
          bg="#054C84"
          w={{ base: '1rem', md: '30rem' }}
          spacing={4}
          mt="6rem"
          borderRadius="md"
          mb="2rem"
        >
          <Flex justifyContent="center" p={20}>
            <Stack mt={'-2rem'} bg="white" borderRadius="md" border={'solid'} borderColor={'black'} padding={'7rem'} paddingBottom={'1rem'}>
              <Heading
                color="black"
                textTransform="uppercase"
                fontFamily="'DIN Alternate Black', sans-serif"
                letterSpacing="2px"
                fontSize={['2xl', null, '5xl']}
                mb="2"
                
              >
                Gracias por elegirnos!!!

              </Heading>
              <Box bg={'#10447E'} borderRadius={'md'}>
                <Text color={'white'}>Proximamente se le asignara un chofer</Text>
              </Box>

              {showButton && (
                <Button onClick={handleToggle} mb={2} bg={"#054C84"} color={"white"}>
                  <Text color={"gray.100"}>Comprobante de Pago</Text>
                </Button>
              )}
              <Collapse in={isOpen}>
                <Stack spacing={2} bg={'gray.200'} borderRadius="md">
                  <Heading as="h2" size="md" bg={'#10447E'} borderRadius="md" color={'white'}>
                    Comprobante de Pago
                  </Heading>
                  <Text>Estado de la Compra: Aprobado</Text>
                  <Text>ID de Pago: {mePagoData?.payment_id}</Text>
                  <Text>Tipo de Pago: {mePagoData?.payment_type}</Text>
                  <Text>Metodo de Pago: {mePagoData?.site_id === 'MPE' ? 'Mercadopago' : ''}</Text>
                </Stack>
              </Collapse>
              <Box bg={'#054C84'} borderRadius="md" mt={'5rem'}>
                <Button bg={'#054C84'} onClick={handleToggle2}  _hover={{ bg: 'transparent' }} >
                <Text color={'white'}>¿Llevas equipaje sobredimensionado?</Text>
                </Button>
                <Collapse in={isAbierto}>
                <Text color={"white"}>Comunicate por WhatsApp para evitar inconvenientes</Text>
                <Button  color={'white'} fontWeight={'bold'} mt={'0.5rem'} variant={'link'}>
                <Box w="30px" h="30px">
  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
    <Image src={WSP} alt="WhatsApp" w="100%" h="100%" />
  </a>
</Box>
                </Button>
                </Collapse>
              </Box>
            </Stack>
          </Flex>
        </Box>

      </Flex>
    

  );
};

export default PaymentStatus;