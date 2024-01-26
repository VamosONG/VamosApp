import { ChakraProvider, Box, Text, Heading, Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import { getDataUser, getTrips } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Chart from 'chart.js/auto';
//  import TripsForMonths from "./tripsForMonths"
import LinesChart from '../Graphics/LinesChart';
import EarningsPerDriver from'../Graphics/earningsPerDriver'
import PricePerMonth from '../Graphics/pricePerMonth'
import TripsPerDriver from '../Graphics/tripsPerDriver'

const Stadistic = () => {
  const dispatch = useDispatch();

  useEffect(async() => {
    
    
      
        await dispatch(getTrips())
        await dispatch(getDataUser());
        
      
  
  }, [dispatch]);

  
  const users = useSelector((state) => state.dataUser);
  const trips = useSelector((state)=>state.getTrips)
 
  console.log(trips);

  const totalUsers = users.length
  const totalTrips = trips.length
  console.log('totalUsers', totalUsers);

  return (
    
    <ChakraProvider >
      {/* <Flex bgImage="https://res.cloudinary.com/drgnsbah9/image/upload/v1705962402/Vamos/eqdrrjmlkojpiiwlhwjo.jpg"> */}
      <Flex direction="column" align="center" mt={8} mb={12}>
        <Heading as="h1" size="xl" mb={4}>
          Estadísticas
        </Heading>

        <Flex
          direction="column"
          align="center"
          border="1px"
          borderColor="blue.500"
          borderRadius="md"
          p={4}
          m={2}
          maxW="800px"
        >
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Total de usuarios: {totalUsers}
          </Text>
          <Text fontSize="lg" fontWeight="bold">
            Total de Viajes: {totalTrips}
          </Text>
        </Flex>

        <Flex
          direction="column"
          align="center"
          border="1px"
          borderColor="blue.500"
          borderRadius="md"
          p={4}
          m={2}
          maxW="800px"
        >
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Total de viajes por mes 2024
          </Text>
          <LinesChart />
        </Flex>

        <Flex
          direction="column"
          align="center"
          border="1px"
          borderColor="blue.500"
          borderRadius="md"
          p={4}
          m={2}
          maxW="800px"
        >
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Ganancias de cada chofer
          </Text>
          <EarningsPerDriver />
        </Flex>

        <Flex
          direction="column"
          align="center"
          border="1px"
          borderColor="blue.500"
          borderRadius="md"
          p={4}
          m={2}
          maxW="800px"
        >
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Ganancias por mes
          </Text>
          <PricePerMonth />
        </Flex>

        <Flex
          direction="column"
          align="center"
          border="1px"
          borderColor="blue.500"
          borderRadius="md"
          p={4}
          m={2}
          maxW="800px"
        >
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Viajes por chofer
          </Text>
          <TripsPerDriver />
        </Flex>
      </Flex>
      {/* </Flex> */}
    </ChakraProvider>
    
  );
};

export default Stadistic;