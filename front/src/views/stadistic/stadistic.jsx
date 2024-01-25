import { Box, ChakraProvider, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { getDataUser } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Chart from 'chart.js/auto';

const Stadistic = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    
    (async () => {
      try {
        
        await dispatch(getDataUser());
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })();
  }, [dispatch]);

  
  const users = useSelector((state) => state.dataUser);
  console.log(users);

  const totalUsers = users.length
  console.log('totalUsers', totalUsers);

  return (
    <ChakraProvider>
      <Box
      mt={200}>
        <Text>Total de usuarios: {totalUsers}</Text>
      </Box>
      {/* Ajusta el margin-top de la primera caja según la altura de tu nav */}
      <Box
        border="1px"
        borderColor="blue.500"
        borderRadius="md"
        p={4}
        m={2}
        mt={200} // Ajusta el margen superior según la altura de tu nav
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