import React from "react";
import { Box, Flex, VStack, Heading, Text, Image, Divider } from "@chakra-ui/react";

const About = () => {
  return (
    <Flex 
    direction="column" 
    minHeight="100vh"
    bgImage='https://res.cloudinary.com/drgnsbah9/image/upload/v1705962402/Vamos/eqdrrjmlkojpiiwlhwjo.jpg'
    >

      <Flex
        flex="1"
        direction={{ base: "column", md: "row" }}
        p="100px"
        align="center"
      >
        {/* Contenido de la página */}
        <VStack 
        align={{ base: "start", md: "left" }}
        spacing={8} 
        flex={{ base: "1", md: "0.7" }}
        mt={{ base: "20px", md: "0" }}
        >
          <Heading as="h1" 
          size="2xl" 
          fontFamily='DIN Alternate Black, sans-serif'
          textShadow='2px 2px 4px rgb(0, 0, 0, 0.8)'
          color='white'
          >
            Sobre VAMOS!!
          </Heading>
          <Text 
          fontFamily='DIN Alternate, sans-serif' 
          fontSize={{ base: "lg", md: "xl" }}
          textAlign={{ base: "start", md: "left" }} 
          maxW="800px"
          textShadow='2px 2px 2px rgb(0, 0, 0, 0.8)'
          color='white'
          >
            Somos una empresa social que brinda el servicio de taxi aeropuerto 
            y que, al mismo tiempo, da trabajo a adultos mayores sin oportunidades 
            en el mundo laboral que tienen muchas ganas de seguir emprendiendo.
            Nos esforzamos por construir no solo viajes, sino también caminos hacia 
            un futuro más brillante y enriquecedor para nuestra comunidad.
          </Text>

          <VStack align="start" spacing={2} textAlign="start">
            <Box maxW="800px">
              <Heading 
              fontFamily='DIN Alternate Black, sans-serif' 
              as="h2" 
              size="lg"
              textShadow='2px 2px 4px rgb(0, 0, 0, 0.8)'
              color='white'
              >
                Misión
              </Heading>
              <Text 
              fontFamily='DIN Alternate, sans-serif' 
              fontSize={{ base: "lg", md: "xl" }}
              textShadow='2px 2px 2px rgb(0, 0, 0, 0.8)'
              color='white'
              >
              Emprenderemos nuestro compromiso de proporcionar un servicio de traslado 
              de excelencia, asequible, puntual, confiable y seguro, especializado en 
              conexiones con los aeropuertos de Tumbes y Talara. Nos enorgullece no 
              solo brindar un transporte eficiente, sino también ser una fuente de 
              oportunidades para adultos mayores que desean continuar emprendiendo.
              </Text>
            </Box>

            <Box maxW="800px">
              <Heading 
              fontFamily='DIN Alternate Black, sans-serif' 
              as="h2" 
              size="lg"
              textShadow='2px 2px 4px rgb(0, 0, 0, 0.8)'
              color='white'
              >
                Visión
              </Heading>
              <Text 
              fontFamily='DIN Alternate, sans-serif' 
              fontSize={{ base: "lg", md: "xl" }}
              textShadow='2px 2px 2px rgb(0, 0, 0, 0.8)'
              color='white'
              >
              Visualizamos un futuro donde VAMOS!! se consolida como una alternativa 
              líder, sostenible y responsable en el transporte, compitiendo con empresas 
              de renombre a nivel nacional e internacional. Aspiramos a ser reconocidos 
              por nuestra calidad, compromiso con la sostenibilidad y la contribución al 
              bienestar de las comunidades que servimos.
              </Text>
            </Box>
          </VStack>
        </VStack>

        {/* Imagen a la derecha */}
        <Box flex={{ base: "1", md: "0.3" }} boxShadow="xl">
          <Image 
          src="https://res.cloudinary.com/drgnsbah9/image/upload/v1705876708/Vamos/nqaqy25yicurtalhre1z.jpg" 
          alt="Vamos" 
          objectFit="cover" 
          w="100%" 
          h="auto" 
          borderRadius="lg"
          />
        </Box>
      </Flex>

    </Flex>
  );
};

export default About;
