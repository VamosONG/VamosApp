import { Box, Heading, Text, Image, Grid, GridItem } from "@chakra-ui/react";
import Vamos from "../../assets/vamos.png";
const About = () => {
  return (
    <Box bg="blue.200">
      <Heading as="h1" size="2xl" textAlign="center">
        Vamos!
      </Heading>
      <Box m="20px" p="30px" textAlign="center">
        <Text fontSize="2xl">
          Somos una empresa que brinda servicio de taxi aeropuerto y cuyo
          principal objetivo como ONG es brindar oportunidades de trabajo a
          adultos mayores con ganas de seguir emprendiendo
        </Text>
      </Box>
      <Grid
        templateAreas={`"text nav"
                  "text2 nav"
                  "text3 nav"`}
        gridTemplateRows={"1fr 1fr 1fr"}
        gridTemplateColumns={"50% 1fr"}
        h="200px"
        color="blackAlpha.700"
      >
        <GridItem pl="30px" bg="blue.200" area={"text"}>
          <Text fontSize="xl">
            <b>Valores:</b> Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quas commodi eos corporis natus molestiae. Laborum, qui minus?
            Ut, totam? Tempora, nostrum unde magni doloremque eveniet doloribus
            quos amet ut quis?
          </Text>
        </GridItem>
        <GridItem pl="30px" area={"text2"} bg="blue.200">
          <Text fontSize="xl">
            <b>Vision:</b> Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quas commodi eos corporis natus molestiae. Laborum, qui minus?
            Ut, totam? Tempora, nostrum unde magni doloremque eveniet doloribus
            quos amet ut quis?
          </Text>
        </GridItem>
        <GridItem pl="30px" area={"text3"} bg="blue.200">
          <Text fontSize="xl">
            <b>Mision:</b> Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quas commodi eos corporis natus molestiae. Laborum, qui minus?
            Ut, totam? Tempora, nostrum unde magni doloremque eveniet doloribus
            quos amet ut quis?
          </Text>
        </GridItem>
        <GridItem pl="30px" area={"nav"} bg="blue.200">
          <Image src={Vamos} alt="vamos" />
        </GridItem>
      </Grid>
    </Box>
  );
};
export default About;
