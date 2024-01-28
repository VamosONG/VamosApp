import { Box, Text, Heading, Flex, Stack } from '@chakra-ui/react';
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

  useEffect(() => {
    const fetchData = async () => {
        await dispatch(getTrips());
        await dispatch(getDataUser());
    };

    fetchData();
}, [dispatch]);

  
  const users = useSelector((state) => state.dataUser);
  const trips = useSelector((state)=>state.getTrips)
 
  console.log(trips);

  const totalUsers = users.length
  const totalTrips = trips.length
  console.log('totalUsers', totalUsers);

  return (
    

    <Flex 
    bg="white"
    alignItems="center"
    justifyContent="center"
    >
      <Flex align="center" justify="center" mt={8} mb={12}>
        <Box direction="column">

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
          m={10}
          maxW="800px"
        >
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Total de usuarios: {totalUsers}
          </Text>
          <Text fontSize="lg" fontWeight="bold">
            Total de Viajes: {totalTrips}
          </Text>
        </Flex>
        </Box>
        
        <Box>
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
        </Box>

        <Box>
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
        </Box>
      </Flex>

      {/* </Flex> */}
    </Flex>

    
  );
};

export default Stadistic;