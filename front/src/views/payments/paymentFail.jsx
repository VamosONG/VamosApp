
import { useEffect } from 'react';
import { Center, Box, Heading, Stack, Flex, Image, Text } from '@chakra-ui/react';




const PaymentFail = () => {
    // useEffect(() => {
   
    //     const redirectTimer = setTimeout(() => {
          
    //       window.location.href = 'https://vamos-app.vercel.app/solicitarViaje';
    //     }, 59999999000);
    
       
    //     return () => clearTimeout(redirectTimer);
    //   }, [])
    return (
        <Center
        bgImage="https://res.cloudinary.com/drgnsbah9/image/upload/v1705962402/Vamos/re3tjn4g8e4hbdkl7jtc.jpg"
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
              bg='#10447E'
              w={{ base: '20rem', md: '30rem' }}
              p={6} // Ajusta el valor de padding según tus necesidades
              borderRadius="lg"
              boxShadow="lg"
              position="relative"  // Añade position relative al contenedor del mensaje
              mb={"10rem"}
            >
              <Image
                src="https://img.freepik.com/vector-premium/cara-emoji-triste-pensativa-o-emoticon-decepcionado-3d_248162-149.jpg"
                alt="Emoji Triste"
                position="relative"  // Posiciona la imagen absolutamente
                top="-50px"  // Ajusta la posición vertical según tus necesidades
                left="50%"  // Ajusta la posición horizontal según tus necesidades
                transform="translateX(-50%)"
                w="17rem"  // Centra horizontalmente la imagen
                borderRadius={"100%"}
                mt={"5rem"}
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
                
                <Box bg={"white"} borderRadius={"20px"}>
                  <Text fontSize={"20px"}>¡Intente nuevamente!</Text>
                  <Text> Sera redirigido en 5sg...</Text>
                </Box>
              </Stack>
            </Box>
          </Flex>
        </Center>
      );
}

export default PaymentFail;