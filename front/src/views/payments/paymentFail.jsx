
import { useEffect } from 'react';
import { Center, Box, Heading, Stack, Flex, Image, Text } from '@chakra-ui/react';




const PaymentFail = () => {
    // useEffect(() => {
   
    //     const redirectTimer = setTimeout(() => {
          
    //       window.location.href = 'https://vamos-app.vercel.app//solicitarViaje';
    //     }, 59999999000);
    
       
    //     return () => clearTimeout(redirectTimer);
    //   }, [])
    return (
        <Center
          bgImage="https://res.cloudinary.com/drgnsbah9/image/upload/v1705962402/Vamos/eqdrrjmlkojpiiwlhwjo.jpg"
          bgSize="cover"
          bgRepeat="no-repeat"
          minH="100vh"
          position="relative"  // Añade position relative al contenedor principal
        >
          <Flex
            direction="column"
            align="center"
            justify="center"
            h={{ base: '100%', md: 'auto' }}
          >
            <Box
            top="100px"
              bg='#009ED1'
              w={{ base: '20rem', md: '30rem' }}
              p={6} // Ajusta el valor de padding según tus necesidades
              borderRadius="lg"
              boxShadow="lg"
              position="relative"  // Añade position relative al contenedor del mensaje
            >
              <Image
                src="https://img.freepik.com/vector-premium/cara-emoji-triste-pensativa-o-emoticon-decepcionado-3d_248162-149.jpg"
                alt="Emoji Triste"
                position="relative"  // Posiciona la imagen absolutamente
                top="-50px"  // Ajusta la posición vertical según tus necesidades
                left="50%"  // Ajusta la posición horizontal según tus necesidades
                transform="translateX(-50%)"
                w="20rem"  // Centra horizontalmente la imagen
              />
              <Stack spacing={4} textAlign="center">
                <Heading
                  color='white'
                  textTransform='uppercase'
                  fontFamily="'DIN Alternate Black', sans-serif"
                  letterSpacing='2px'
                  fontSize={['2xl', null, '5xl']}
                  textShadow='2px 2px 4px rgb(0, 0, 0, 0.9)'
                >
                  ¡Su pago ha sido rechazado!
                </Heading>
    
                <Box>
                  ¡Intente nuevamente!
                  <Text> Sera redirigido en 5sg...</Text>
                </Box>
              </Stack>
            </Box>
          </Flex>
        </Center>
      );
}

export default PaymentFail;