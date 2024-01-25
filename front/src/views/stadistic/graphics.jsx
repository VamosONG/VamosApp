import {
    Box,
    Center,
    Heading,
    SimpleGrid,
  } from "@chakra-ui/react";
  import LinesChart from "./linesChart";
//   import BarsChart from "./BarsChart";
//   import PiesChart from "./PiesChart";
  
  function Graphics () {
    return (
      <Box p={8}>
        <Heading textAlign="center" mb={4} bg="info" color="white" fontFamily="monospace" fontWeight="bold" lineHeight="base">
          Gráficas ChartJS
        </Heading>
  
        <SimpleGrid columns={{ sm: 1, md: 1, lg: 1 }} spacing={4}>
          <Center bg="light" p={2} borderWidth="2px" borderColor="primary" borderRadius="md" width="450px" height="230px">
            <Box>
              <Heading as="h2" fontSize="lg" mb={2}>
                Ejemplo #1: Gráfico de líneas básico
              </Heading>
              <LinesChart />
            </Box>
          </Center>
        </SimpleGrid>
  
        <hr mt={3} mb={2} />
  
        {/* <SimpleGrid columns={{ sm: 1, md: 1, lg: 1 }} spacing={4}>
          <Center bg="light" p={2} borderWidth="2px" borderColor="primary" borderRadius="md" width="450px" height="225px">
            <Box>
              <Heading as="h2" fontSize="lg" mb={2}>
                Ejemplo #2: Gráfico de barras
              </Heading>
              <BarsChart />
            </Box>
          </Center>
        </SimpleGrid> */}
  
        <hr mt={3} mb={2} />
  
        {/* <SimpleGrid columns={{ sm: 1, md: 1, lg: 1 }} spacing={4}>
          <Center bg="light" p={2} borderWidth="2px" borderColor="primary" borderRadius="md" width="450px" height="250px">
            <Box>
              <Heading as="h2" fontSize="lg" mb={2}>
                Ejemplo #3: Gráfico circular
              </Heading>
              <Box width="100%" height="100%" padding="10px 0">
                <PiesChart />
              </Box>
            </Box>
          </Center>
        </SimpleGrid> */}
      </Box>
    );
  }
  
  export default Graphics;