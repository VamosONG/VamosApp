import { Box, ChakraProvider, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { getDataUser, getTrips } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Chart from 'chart.js/auto';
import LinesChart from "./LinesChart"

const Stadistic = () => {
  const dispatch = useDispatch();

  useEffect(async() => {
    
    
      
        await dispatch(getTrips())
        await dispatch(getDataUser());
        
      
  
  }, [dispatch]);

  
  const users = useSelector((state) => state.dataUser);
 
  console.log(trips);

  const totalUsers = users.length
  const totalTrips = trips.length
  console.log('totalUsers', totalUsers);

  return (
    <ChakraProvider>
      <Box
      mt={150}>
        <Text>Total de usuarios: {totalUsers}</Text>
        <Text>Total de Viajes: {totalTrips}</Text>
      </Box>
      {/* Ajusta el margin-top de la primera caja según la altura de tu nav */}
      <Box
        border="1px"
        borderColor="blue.500"
        borderRadius="md"
        p={4}
        m={2}
        mt={100} // Ajusta el margen superior según la altura de tu nav
      >
        Caja 1
      </Box>
      <Box border="1px" borderColor="blue.500" borderRadius="md" p={4} m={2}>
        Caja 2
      </Box>
      <Box border="1px" borderColor="blue.500" borderRadius="md" p={4} m={2}>
        Caja 3
      </Box>
    </ChakraProvider>
  );
};

export default Stadistic;