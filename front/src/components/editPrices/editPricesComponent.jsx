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
  Select,
  Tooltip
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPrices, orderSearchPrices, updatePrice } from '../../redux/actions';
import Swal from 'sweetalert2'
import { renderToString } from 'react-dom/server';
import EditPrice from './editPrice';
import { RepeatClockIcon } from '@chakra-ui/icons';




const EditPrices = () => {

  const dispatch = useDispatch()
  

  const allPrices = useSelector((state) => state.allPrices)

  console.log(allPrices)

  useEffect(() => {
    dispatch(getAllPrices())
  }, [dispatch]);


  
  const handleUpdate = (input,confirmationText,editar) => {
    
    
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
          /* window.location.reload(); */
          /* history.push('/editPrices'); */
          /* navigate('/editPrices'); */
          dispatch(getAllPrices())
          setCurrentPage(1);
          setEditar(!editar)
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
    dispatch(orderSearchPrices(input));
    setCurrentPage(1);
  };


  const handleClean = async (e) => {
    setInput({
        ...input,
        searchInput: "",
        order: "",
        tripState: 'completed'
    })
    dispatch(orderSearchPrices({
      ...input,
      searchInput: "",
      order: "",
      tripState: 'completed'
  }));
  setCurrentPage(1);
  }



  return (
    <Box>
      <Flex
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
        bgColor='#009ED1'
        borderTopLeftRadius="md"
        borderTopRightRadius="md"
        border="1px solid black"
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
            value={input.searchInput}
          />
          <Select
            marginRight='2rem'
            color="black"
            bgColor="white"
            placeholder="Ordenar"
            width="xs"
            name="order"
            onChange={handleChange}
            value={input.order}
          >
            <option>mayor precio</option>
            <option>menor precio</option>
          </Select>
        </Box>
        <Button onClick={handleSubmit} style={{marginRight:'1rem'}}>APLICAR</Button>
        <Tooltip hasArrow label='Reiniciar filtro y búsqueda' bg='#009ED1' placement='left-start'>
                <Button onClick={handleClean} >
                <RepeatClockIcon/>
                </Button>
                </Tooltip>
      </Flex>


    <Flex
    alignItems='center'
    justifyContent='center'
    direction="column"
    width="100%"
    overflowX="auto"
    borderRadius="md"
    >
    <TableContainer>
    <Flex px={0} 
    bg='gray.300' 
    overflowX="auto" 
    >
      <Table colorScheme='#009ED1' width="100%">
        {/* <TableCaption border="1px solid black" bg='#009ED1'>Precios según ruta y vehículo</TableCaption> */}
        <Thead bg='#009ED1'>

          <Tr>
          <Th border="2px solid black" color='white' minWidth="700px">RUTA</Th>
          <Th border="2px solid black" color='white' minWidth="400px">TIPO DE CARRO</Th>
          <Th border="2px solid black" color='white' minWidth="300px">PRECIO EN SOLES / ACTUALIZAR</Th>
          </Tr>
        </Thead>
        <Tbody border="2px solid black" justifyContent="center">
          {pricesToShow?.map((combo, index) => (

            <EditPrice
            key={index}
            combo={combo}
            index={index}
            handleUpdate={handleUpdate}
            isEvenRow={index % 2 === 0}
          />
          ))}
        </Tbody>
      </Table>
      </Flex>
    </TableContainer>
    <Flex
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="row"
    bgColor="gray.300"
    w="100%"
    h="100%"
    borderBottomLeftRadius="md" 
    borderBottomRightRadius="md"
    border="1px solid black"
    >
    <Box 
    display="flex" 
    justifyContent="center" 
    alignItems="center" 
    marginTop="1rem"
    marginBottom="1rem"
    >
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
    </Flex>
    </Flex>
    </Box>
  );
};
export default EditPrices