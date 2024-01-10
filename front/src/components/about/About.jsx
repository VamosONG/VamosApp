import { Box,  Heading, Text, Image, Flex} from "@chakra-ui/react";
import Vamos from "../../assets/Vamos.png"
const About = () => {
  return (
    <Box
     
    backgroundColor="blue.100">
      <Heading as="h1" size="2xl">
        Vamos!
      </Heading>
      <Box>
        <Text fontSize="2xl">
          Somos una empresa que brinda servicio de taxi aeropuerto y cuyo
          principal objetivo como ONG es brindar oportunidades de trabajo a
          adultos mayores con ganas de seguir emprendiendo
        </Text>
      </Box>
<Flex justify="left" >
  <Box>

  </Box>
      <Box  m="20px" p="10px" w="30%">
        <Text fontSize="20px">
          Mision: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          commodi eos corporis natus molestiae. Laborum, qui minus? Ut, totam?
          Tempora, nostrum unde magni doloremque eveniet doloribus quos amet ut
          quis?
        </Text>
      </Box>
      <Box  m="20px" p="10px" w="30%">
        <Text fontSize="20px">
          Vision: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          commodi eos corporis natus molestiae. Laborum, qui minus? Ut, totam?
          Tempora, nostrum unde magni doloremque eveniet doloribus quos amet ut
          quis?
        </Text>
      </Box>
      <Box  m="20px" p="10px" w="30%">
        <Text fontSize="20px">
          Valores: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          commodi eos corporis natus molestiae. Laborum, qui minus? Ut, totam?
          Tempora, nostrum unde magni doloremque eveniet doloribus quos amet ut
          quis?
        </Text>
      </Box>

      <Box bg="blue.400"  m="20px" p="10px" >
        <Image src={Vamos} alt="vamos"/>
      </Box>
</Flex>
    </Box>

  );
};
export default About;
