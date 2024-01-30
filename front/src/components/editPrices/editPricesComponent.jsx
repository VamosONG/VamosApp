import { useEffect, useState } from 'react';
import {
  Button,
  TableContainer,
  Table,
  TableCaption, 
  Thead, 
  Tr, 
  Th, 
  Tbody, 
  Td, 
  Input,
  Flex,
  Box,
  Heading,
  Select
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPrices, updatePrice } from '../../redux/actions';
import Swal from 'sweetalert2'
import { renderToString } from 'react-dom/server';
import EditPrice from './editPrice';
import {  useNavigate } from 'react-router-dom';




const EditPrices = () => {

  const dispatch = useDispatch()
  

  const allPrices = useSelector((state) => state.allPrices)

  console.log(allPrices)

  useEffect(() => {
    dispatch(getAllPrices())
  }, []);


  
  const handleUpdate = (input,confirmationText) => {
    
    
    Swal.fire({
      title: "Está por el cambiar el precio del viaje",
      html: renderToString(confirmationText),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      htmlMode: true
    }).then(async (result) => {
      if (result.isConfirmed) {
        await dispatch(updatePrice(input)) //Para actualizar en BD
        Swal.fire({
          title: "¡Precio modificado con éxito!",
          icon: "success"
        }).then(() => {
          window.location.reload();
          /* history.push('/editPrices'); */
          /* navigate('/editPrices'); */
        });
      }
    })
  }

  //***************PAGINADO**********************************/
  
  const [currentPage, setCurrentPage] = useState(1);
  const [pricesToShow, setPricesToShow] = useState([]);

  const prevHandler = () => {
    const prevPage = currentPage - 1;

    if (prevPage < 1) return;

    const firstPrice = (prevPage - 1) * 6;

    setCurrentPage(prevPage);
    setPricesToShow([...allPrices].splice(firstPrice, 6));
  };

  const nextHandler = () => {
    const totalPrices = allPrices.length;

    const nextPage = currentPage + 1;

    const firstPrice = currentPage * 6;

    if (firstPrice > totalPrices) return;
    setCurrentPage(nextPage);
    setPricesToShow([...allPrices].splice(firstPrice, 6));
  };


  useEffect(() => {
    setPricesToShow([...allPrices].splice(0, 6));
  }, [allPrices]);

  //***************BUSQUEDA Y ORDENAMIENTO**********************************/
  const [input, setInput] = useState({
    searchInput: "",
    order: "",
  });

  const handleChange = async (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    dispatch(orderSearch(input));
  };




  return (
    <Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
        bgColor='#009ED1'
      >
        <Heading size="xs" textTransform="uppercase" margin="1rem">
          Buscar:
        </Heading>
        <Box style={{ display: 'flex', alignItems: 'center' }}>
          <Input
            marginRight='2rem'
            color="black"
            bgColor="white"
            htmlSize={50}
            width="auto"
            placeholder="Buscar por coincidencia"
            onChange={handleChange}
            name="searchInput"
          />
          <Select
            marginRight='2rem'
            color="black"
            bgColor="white"
            placeholder="Ordenar"
            width="xs"
            name="order"
            onChange={handleChange}
          >
            <option>mayor precio</option>
            <option>menor precio</option>
          </Select>
        </Box>
        <Button onClick={handleSubmit}>APLICAR</Button>
      </Box>


    <Flex
    alignItems='center'
    justifyContent='center'
    direction="column"
    width="100%"
    overflowX="auto"
    borderRadius="md"
    >
    <TableContainer>
    <Flex px={0} bg='gray.300' overflowX="auto" borderBottomLeftRadius="md" borderBottomRightRadius="md" border="1px solid black">
      <Table colorScheme='#009ED1'>
        <TableCaption border="1px solid black" bg='#009ED1'>Precios según ruta y vehículo</TableCaption>
        <Thead bg='#009ED1'>

          <Tr>
            <Th border="2px solid black" color='white'>RUTA</Th>
            <Th border="2px solid black" color='white'>TIPO DE CARRO</Th>
            <Th border="2px solid black" color='white'>PRECIO EN SOLES</Th>
            {/* <Th border="2px solid black" color='white'>ACTUALIZAR</Th> */}
          </Tr>
        </Thead>
        <Tbody justifyContent="center">
          {pricesToShow?.map((combo, index) => (

            <EditPrice
            key={index}
            combo={combo}
            index={index}
            handleUpdate={handleUpdate}
            isEvenRow={index % 2 === 0}
          />
///////// Esto va a EditPrice
            /*<Tr key={index}> 
              <Td border="2px solid black">{combo.airport} - {combo.zone}</Td>
              {combo.quantityPassengers === 4 ? (
                <Td border="2px solid black">AUTO</Td>
              ) : (combo.quantityPassengers === 6 ? (
                <Td border="2px solid black">CAMIONETA</Td>
              ) : (combo.quantityPassengers === 10 ? (
                <Td border="2px solid black">VAN</Td>
              ) : (<Td border="2px solid black">VAN PLUS</Td>)))}

              <Td border="2px solid black" textAlign="center">
                <Input
                color='black'
                bg='white'
                htmlSize={4}
                width='auto'
                border='2px solid black'
                placeholder={combo.value}
                name='date'
                /* value={input.value} */
               /* onChange={handleChange(combo.airport, combo.zone, combo.quantityPassengers)} /></Td>
              <Td border="2px solid black" textAlign="center"><Button
                backgroundColor='#E83D6F'
                variant="solid"
                color="white"
                onClick={() => handleUpdate()}>Actualizar</Button></Td>
            </Tr>*/
////////
          ))}
        </Tbody>
          <Box display="flex" justifyContent="center" alignItems="center" marginTop="1rem">
        <Button
          color='black'
          bgColor='#009ED1'
          variant="outline"
          colorScheme="teal"
          onClick={prevHandler}
        >
          Anterior
        </Button>

        <Box as="span" marginLeft="1rem" marginRight="1rem">
          Página {currentPage}
        </Box>

        <Button
          color='black'
          bgColor='#009ED1'
          variant="outline"
          colorScheme="teal"
          onClick={nextHandler}
        >
          Siguiente
        </Button>
      </Box>
      </Table>
      </Flex>
    </TableContainer>
    </Flex>
    </Box>
  );
};
export default EditPrices