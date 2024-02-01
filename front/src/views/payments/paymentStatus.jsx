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
      bgImage="url('https://res.cloudinary.com/drgnsbah9/image/upload/v1705962402/Vamos/re3tjn4g8e4hbdkl7jtc.jpg')"
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
          bg="gray.300"
          w={{ base: '1rem', md: '30rem' }}
          spacing={4}
          mt="6rem"
          borderRadius="md"
          mb="2rem"
        >
          <Flex justifyContent="center" p={20}>
            <Stack mt={'-2rem'} bg="#009ED1" borderRadius="md" border={'solid'} borderColor={'black'} padding={'7rem'} paddingBottom={'1rem'}>
              <Heading
                color="white"
                textTransform="uppercase"
                fontFamily="'DIN Alternate Black', sans-serif"
                letterSpacing="2px"
                fontSize={['2xl', null, '5xl']}
                mb="2"
                textShadow="2px 2px 4px rgb(0, 0, 0, 0.9)"
              >
                Gracias por elegirnos!!!

              </Heading>
              <Box bg={'#10447E'} borderRadius={'md'}>
                <Text color={'white'}>Proximamente se le asignara un chofer</Text>
              </Box>

              {showButton && (
                <Button onClick={handleToggle} mb={2}>
                  Comprobante de Pago
                </Button>
              )}
              <Collapse in={isOpen}>
                <Stack spacing={2} bg={'white'} borderRadius="md">
                  <Heading as="h2" size="md" bg={'#10447E'} borderRadius="md" color={'white'}>
                    Comprobante de Pago
                  </Heading>
                  <Text>Estado de la Compra: Aprobado</Text>
                  <Text>ID de Pago: {mePagoData?.payment_id}</Text>
                  <Text>Tipo de Pago: {mePagoData?.payment_type}</Text>
                  <Text>Metodo de Pago: {mePagoData?.site_id === 'MPE' ? 'Mercadopago' : ''}</Text>
                </Stack>
              </Collapse>
              <Box bg={'#E83D6F'} borderRadius="md" mt={'4rem'}>
                <Button bg={'#E83D6F'} onClick={handleToggle2}  _hover={{ bg: 'transparent' }} >
                <Text color={'white'}>¿Llevas equipaje sobredimensionado?</Text>
                </Button>
                <Collapse in={isAbierto}>
                <Text>Comunicate por WhatsApp para evitar inconvenientes</Text>
                <Button  color={'white'} fontWeight={'bold'} mt={'0.5rem'} variant={'link'}>
                  <Link href={whatsappLink} isExternal>
                    <Box
                      w="30px"
                      h="30px"
                    >
                      <Image src={WSP} alt="WhatsApp" w="100%" h="100%" />
                    </Box>
                  </Link>
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