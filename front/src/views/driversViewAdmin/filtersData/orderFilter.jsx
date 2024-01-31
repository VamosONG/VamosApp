import { Select, Box, Text, Flex, FormControl, FormLabel, Button, Input, Tooltip } from '@chakra-ui/react';
import { useState } from 'react';
import { BsFilterCircle, BsArrowClockwise } from 'react-icons/bs';
import { orderSearchDrivers } from '../../../redux/actions';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const OrderFilterAlphabetical = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    airports: "",
    quantityPassengers: 0,
    date: "",
    searchInput: ""
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    console.log("Esto es lo que trae el input ", input);
    dispatch(orderSearchDrivers(input));
  };

  const resetFilter = () => {
    setInput({
      airports: "",
      quantityPassengers: 0,
      date: "",
      searchInput: ""
    });
  };

  return (
    <>
      <Flex gap='4' justify={'center'} align={'center'} mx='2rem' py='.5rem'>
        <Flex justify='center' align={'center'} gap='4'>
          <Flex justify={'center'} align={'center'} fontSize={'1.5rem'}>
            <Input
              placeholder='Buscar por nombre / auto / aeropuerto'
              name="searchInput"
              onChange={handleChange}
              value={input.searchInput}
              border={'1px solid gray'}
              bgColor="white"
              color="black"
            />
          </Flex>

          <Tooltip label='Ordenar datos' bg='#10447E' placement='top'>
            <Text fontSize={'2rem'}>
              <BsFilterCircle />
            </Text>
          </Tooltip>
          {/* <Box>
            <FormControl>
              <FormLabel color="white">Nombre</FormLabel>
              <Select bgColor="white" name='alphabetical' onChange={handleChange}>
                <option value='A'>A - Z</option>
                <option value='D'>Z - A</option>
              </Select>
            </FormControl>
          </Box> */}

          <Box>
            <FormControl>
              <FormLabel color="white">Pasajeros</FormLabel>
              <Select bgColor="white" name='quantityPassengers' onChange={handleChange}>
                <option value=''>Seleccionar</option>
                {[...Array(15).keys()].map((value) => (
                  <option key={value + 1} value={value + 1}>
                    {value + 1}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box>
            <FormControl>
              <FormLabel color="white">Aeropuerto</FormLabel>
              <Select bgColor="white" name='airports' onChange={handleChange}>
                <option value="">Seleccionar</option>
                <option value='Aeropuerto Talara'>Aeropuerto Talara</option>
                <option value='Aeropuerto Tumbes'>Aeropuerto Tumbes</option>
              </Select>
            </FormControl>
          </Box>

          <Box>
            <FormControl>
              <FormLabel color="white">Fecha de viaje</FormLabel>
              <Input
                type="date"
                name='date'
                onChange={handleChange}
                value={input.date}
                bgColor="white"
                color="black"
              />
            </FormControl>
          </Box>
        </Flex>

        <Button bg='green.300' color='#000' fontSize='1.2rem' onClick={handleSubmit}>
          Aplicar
        </Button>


        <Flex onClick={resetFilter}>
          <Button bg='green.300' color='#000' fontSize='1.2rem' onClick={handleSubmit}>
            <BsArrowClockwise />
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default OrderFilterAlphabetical;