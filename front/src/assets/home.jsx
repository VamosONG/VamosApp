import React from "react";
import { Box, Button, Flex, Text, Heading, Stack, Card, CardBody, Divider, CardFooter, HStack, Image, Center } from '@chakra-ui/react';
import theme from "../../theme/Theme";
import bgImage from "../../assets/Aeropuerto.jpg"
import Basic from '../../assets/vamosBasic.jpg'
import Comfort from '../../assets/vamosComfort.jpg'
import Premium from '../../assets/vamosPremium.jpg'
// import { color } from "framer-motion";

const Home = () => {


return (
    <>
      <Box
      h='100vh'
      bg='gray'
      bgImage={`url(${bgImage})`}
      bgRepeat='no-repeat'
      bgSize='cover'
      >
        <Flex
        direction='column'
        alignItems='center'
        justify='center'
        h='100%'
        bg='rgb(0 0 0 / 40%)'
        p={['0 10%', null, '0 20%']}
        >
          <Heading
          color='white'
          textTransform='uppercase'
          textAlign='left'
          fontFamily="'DIN Alternate Black', sans-serif"
          letterSpacing='2px'
          fontSize="6xl"
          >
          Bienvenido a "Vamos", una empresa social comprometida con brindar servicios de taxi aeropuerto.
          </Heading>
          <Text
          textAlign="left"
          fontFamily="'DIN Medium',"
          color="white"
          fontSize="3xl"
          >
          Nos enorgullece ofrecer traslados desde Tumbes y Talar hacia domicilios y hoteles, con tarifas asequibles a partir de 20 soles (aprox. US$5). 
          Nuestra misión va más allá de brindar un servicio de transporte; también creamos 
          oportunidades laborales para adultos mayores que desean seguir emprendiendo. 
          Con 'Vamos', tienes la garantía de vehículos nuevos y cómodos, disponible las 24 horas.
          </Text>
          <Stack
          direction={{ base: 'column', md: 'row'}}
          spacing='40px'
          mt='30px'
          w={['100%', null, 'auto']}
          >
          <Button
          variant='outline'
          size='lg'
          textTransform='uppercase'
          fontWeight='light'
          borderRadius='0'
          color='white'
          letterSpacing='1px'
          _hover={{
            color:'Black',
            bg: 'white'
          }}
          >
            RESERVA
          </Button>
          <Button
          variant='outline'
          size='lg'
          textTransform='uppercase'
          fontWeight='light'
          borderRadius='0'
          color='white'
          letterSpacing='1px'
          >
            + INFO
          </Button>
          </Stack>
          </Flex>
      </Box>
          <Flex
          direction='column'
          alignItems='center'
          justify='center'
          margin='100px'
          >
          <Stack
          direction={{ base: 'column', md: 'row'}}
          spacing='40px'
          mt='30px'
          w={['100%', null, 'auto']}
          >
          <HStack spacing='10'>
          <Card maxW='600px'bg='rgb(16, 68, 126)'>
          <CardBody>
          <Image
          src={Basic}
          alt='Plan Basico'
          borderRadius='lg'
          />
          <Stack mt='10' spacing='5'>
          <Heading fontSize='2xl' size='md' fontFamily="'DIN Alternate Black', sans-serif" textAlign='center' color='white'>Servicio estandar con tarifas asequibles.</Heading>
          <Text
          textAlign='center'
          color='white'
          fontSize='1xl'
          >
          "La opcion economica para tus traslados"
          </Text>
          <Text color='rgb(232, 61, 111)' fontSize='5xl' textAlign= 'center'>
          $20 Soles
          </Text>
          </Stack>
          </CardBody>
          <Divider />
          <CardFooter justifyContent='center'>
          <Button variant='solid' colorScheme='blue' size='lg' fontFamily="'DIN Alternate Black', sans-serif">
          RESERVAR
          </Button>
          </CardFooter>
          </Card>

          <Card maxW='600px'bg='rgb(16, 68, 126)'>
          <CardBody>
          <Image
          src={Comfort}
          alt='Plan Basico'
          borderRadius='lg'
          />
          <Stack mt='10' spacing='5'>
          <Heading 
          fontSize='2xl' 
          size='md' 
          fontFamily="'DIN Alternate Black', sans-serif" 
          textAlign='center' 
          color='white'
          >Servicio intermedio con mayor comodidad y prestaciones.</Heading>
          <Text
          textAlign='center'
          color='white'
          fontSize='1xl'
          >
          "Viaja con estilo y confort a un precio asequible"
          </Text>
          <Text color='rgb(232, 61, 111)' fontSize='5xl' textAlign= 'center'>
          $20 Soles
          </Text>
          </Stack>
          </CardBody>
          <Divider />
          <CardFooter justifyContent='center'>
          <Button variant='solid' colorScheme='blue' size='lg' fontFamily="'DIN Alternate Black', sans-serif">
          RESERVAR
          </Button>
          </CardFooter>
          </Card>

          <Card maxW='600px'bg='rgb(16, 68, 126)'>
          <CardBody>
          <Image
          src={Premium}
          alt='Plan Basico'
          borderRadius='lg'
          />
          <Stack mt='10' spacing='5'>
          <Heading fontSize='2xl' 
          size='md' 
          fontFamily="'DIN Alternate Black', sans-serif" 
          textAlign='center' color='white'
          >"La excelencia en cada viaje, sin compromisos"</Heading>
          <Text
          textAlign='center'
          color='white'
          fontSize='1xl'
          >
          Servicio de lujo con vehículos de mayor tamaño y comodidades premium.
          </Text>
          <Text color='rgb(232, 61, 111)' fontSize='5xl' textAlign= 'center'>
          $20 Soles
          </Text>
          </Stack>
          </CardBody>
          <Divider />
          <CardFooter justifyContent='center'>
          <Button variant='solid' colorScheme='blue' size='lg' fontFamily="'DIN Alternate Black', sans-serif">
          RESERVAR
          </Button>
          </CardFooter>
          </Card>
          </HStack>
          </Stack>
          </Flex>
      <Box>

      </Box>
    </>
  );

}

export default Home;





// import React, { useState, useEffect } from "react";;
// import { Box, Button, Flex, Text, Heading, VStack, Link } from '@chakra-ui/react';
// import theme from "../../Theme";


// const Home = () => {
//     const [scrollY, setScrollY] = useState(0);

//     const handleScroll = () => {
//     setScrollY(window.scrollY);
//     };

//     useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     const opacity = 1 - scrollY / 500;

//     return (
//         <Box 
//         p={4}
//         height="100vh"
//         position="relative"
//         >
//             <Box
//             position="absolute"
//             top={0}
//             left={0}
//             width="100%"
//             height="100%"
//             bg={`url('https://scontent.fcor13-1.fna.fbcdn.net/v/t1.6435-9/52358920_2269546896622104_8051910507050827776_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=MJHbQK6mrwkAX9i4iVu&_nc_ht=scontent.fcor13-1.fna&oh=00_AfAZcN-nU7V_RbcBdFdE33J9jwe2tvhIo3mLn4xWvZLCqw&oe=65C6925F') center/cover no-repeat fixed`}
//             bgColor="rgba(0, 0, 0, 0.5)"
//             filter={`brightness(60%) blur(1px) opacity(${opacity})`}
//             zIndex={-1}
//             transition="opacity 0.3s ease-in-out"
//             />
//             <Box margin="10rem">
//                 <Flex direction="column" align="center">
//                     <VStack spacing={8} align="center">
//                         <Heading as="h2" size="x1" fontFamily="'DIN Alternate Black', sans-serif" color="white" fontSize="6xl" textAlign="left">
//                         Bienvenido a "Vamos", una empresa social comprometida con brindar servicios de taxi aeropuerto.</Heading>
//                         <Text textAlign="left" fontFamily="'DIN Medium'," color="white" fontSize="3xl"
//                         >Nos enorgullece ofrecer traslados desde Tumbes e Talar hacia domicilios y hoteles, con tarifas asequibles a partir de 20 soles (aprox. US$5). 
//                         Nuestra misión va más allá de brindar un servicio de transporte; también creamos 
//                         oportunidades laborales para adultos mayores que desean seguir emprendiendo. 
//                         Con 'Vamos', tienes la garantía de vehículos nuevos y cómodos, disponible las 24 horas.
//                         </Text>
//                         <Button colorScheme="blue" >Reserva</Button>
//                     </VStack>
//                 </Flex>
//             </Box>
//             {/* Sección de Servicios */}
//             <VStack spacing={8} align="center">
//             {/* Tarjetas o cuadros de servicios */}
//             {/* Puedes personalizar esto según los servicios que ofreces */}
//             <Box bg="gray.300" p={4} borderRadius="md">
//                 <Text>Servicio 1</Text>
//             </Box>
//             <Box bg="gray.300" p={4} borderRadius="md">
//                 <Text>Servicio 2</Text>
//             </Box>
//             <Box bg="gray.300" p={4} borderRadius="md">
//                 <Text>Servicio 3</Text>
//             </Box>
//             </VStack>

//             {/* Sección de Contacto */}
//             <Flex direction="column" align="center" mt={8}>
//                 <VStack spacing={4} align="center">
//                     <Text fontSize="xl" fontWeight="bold">
//                     Contáctanos
//                     </Text>
//                     <Link href="tel:+51935455227" color="blue.500">
//                     +51 935 455 227
//             </Link>
//       <Link href="tel:+51935455228" color="blue.500">
//         +51 935 455 228
//       </Link>
//       <Link href="mailto:info@vamos.com" color="blue.500">
//         info@vamos.com
//       </Link>
//     </VStack>
//   </Flex>
// {/* Sección de Testimonios */}
// <VStack spacing={8} align="center">
//     <Heading as="h3" size="lg" textAlign="center" mb={4}>
//       Testimonios de Clientes
//     </Heading>
//     <Box p={4} borderRadius="md" boxShadow="md" bgColor="white">
//       <Text>¡Increíble servicio! Me encantó viajar con 'Vamos'.</Text>
//       <Text fontSize="sm" mt={2}>- Cliente Satisfecho</Text>
//     </Box>
//     {/* Puedes agregar más testimonios según sea necesario */}
//   </VStack>

//   {/* Sección de Reseñas */}
//   <VStack spacing={8} align="center" mt={8}>
//     <Heading as="h3" size="lg" textAlign="center" mb={4}>
//       Reseñas de Usuarios
//     </Heading>
//     <Box p={4} borderRadius="md" boxShadow="md" bgColor="white">
//       <Text>Buen servicio, puntual y confiable.</Text>
//       <Text fontSize="sm" mt={2}>- Usuario Feliz</Text>
//     </Box>
//     {/* Puedes agregar más reseñas según sea necesario */}
//   </VStack>

//   {/* Sección de Blog */}
//   <VStack spacing={8} align="center" mt={8}>
//     <Heading as="h3" size="lg" textAlign="center" mb={4}>
//       Últimas Publicaciones en el Blog
//     </Heading>
//     {/* Agrega componentes de blog, enlaces o extractos de publicaciones */}
//     <Box p={4} borderRadius="md" boxShadow="md" bgColor="white">
//       <Text>Título de la Publicación</Text>
//       <Text fontSize="sm" mt={2}>Fecha de Publicación: 01/01/2024</Text>
//     </Box>
//     {/* Puedes agregar más publicaciones según sea necesario */}
//   </VStack>
//         </Box>
//     );
    
//     }
    
//     export default Home;