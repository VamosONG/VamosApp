import { useDispatch, useSelector } from "react-redux"

import { Box, Card, CardBody, CardHeader, Center, useDisclosure, Grid, GridItem } from '@chakra-ui/react'
import {
  Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption, Avatar, Tooltip,
    TableContainer, Flex,
  FormControl,
  FormLabel,
  Input, Select, Button, Heading, Stack,
  Tabs, TabList, TabPanels, Tab, TabPanel 
} from '@chakra-ui/react'
import { AddIcon, EditIcon } from '@chakra-ui/icons'

import Swal from 'sweetalert2'
import { Link } from "react-router-dom"
import Solicitud from "./solicitud"


import { getCanceledTrips, getPendingTrips, getReservedTrips, idDeSolicitud, orderSearch } from "../../redux/actions"
import { useEffect, useState } from "react"



const SolicitudesDeViajesReserved = () => {

    const dispatch = useDispatch()
    
    const viajesReservados = useSelector((state) => state.viajesReservados)
    console.log(viajesReservados)

    useEffect(() => {
        dispatch(getReservedTrips())
    }, [dispatch])


    //***************PAGINADO**********************************/
    const itemsPerPage = 6;

    const [currentPage, setCurrentPage] = useState(1);
  const [tripsToShow, setTripsToShow] = useState([]);
  
  const prevHandler=()=>{
    const prevPage=currentPage-1;
    
    if(prevPage<1) return;
    
    const firstReserved=(prevPage-1)*6;
    
    setCurrentPage(prevPage);
    setTripsToShow([...viajesReservados].splice(firstReserved,6))
  }
  
  const nextHandler=()=>{
    const totalReserved=viajesReservados.length;
    
    const nextPage=currentPage+1;
    
    const firstReserved=currentPage*6;
    
    if (firstReserved>totalReserved) return;
    setCurrentPage(nextPage);
    setTripsToShow([...viajesReservados].splice(firstReserved,6))
  }


    const handlerClick=(id)=>{
        dispatch(idDeSolicitud(id))
    }


    useEffect(() => {
        setTripsToShow([...viajesReservados].splice(0, 6))
        
    }, [viajesReservados])

    //***************BUSQUEDA Y ORDENAMIENTO**********************************/
const [input, setInput] = useState({
    searchInput: "",
    order: "",
    
});
const handleChange = async (e) => {
    setInput({
        ...input,
        [e.target.name]: e.target.value,
        tripState: 'reserved'
    })
}
const handleSubmitReserved = async (e) => {
    
    console.log(input)
    
    dispatch(orderSearch(input))
}


//*************************************************************************/
    


    
    return (
        <TableContainer >
            <TableContainer style={{ backgroundColor:'white' ,size:'xs'}}>
            <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}  bg="purple.500">
    <Heading color="white" size='xs' textTransform='uppercase' margin={'1rem'}>
      Buscar:
    </Heading>
    <Box style={{ display: 'flex', alignItems: 'center' }}>
    <Input
      bg="white"
      color="black" 
      htmlSize={50} 
      width='auto' 
      placeholder='Buscar por coincidencia'
      onChange={handleChange}
      name='searchInput'/>
      <FormControl /* isRequired */ style={{ marginLeft: '1rem' }}>
      <Select bg="white" placeholder='Ordenar' width='xs' name='order' onChange={handleChange}>
          <option>mas reciente</option>
          <option>menos reciente</option>
        </Select>
      </FormControl>
    </Box>
    <Button onClick={handleSubmitReserved}>
      APLICAR
    </Button>
    </Box>
    </TableContainer>
        
            <Table variant='simple' >
            <TableCaption>Viajes sin conductor</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Nro</Th>
                        <Th>Origen</Th>
                        <Th>Destino</Th>
                        {/* <Th>Usuario</Th> */}
                        <Th>Fecha</Th>
                        <Th /* isNumeric */>Hora</Th>
                        <Th >Usuario</Th>
                        <Th >Buscar conductor</Th>
                        
                    </Tr>
                </Thead>
                <Tbody >
                    {tripsToShow.map((solicitud, index) => (
                        <Tr key={solicitud.id} >
                            <Td>{index + 1}</Td>
                            <Td>{solicitud.origin}</Td>

                            <Td>{solicitud.destination}</Td>
                            {/* <Td>José Bravo</Td> */}{/* Luego hay que cambiar por nombre de usuario */}
                            <Td>{solicitud.date}</Td>
                            <Td>{solicitud.hour}</Td>
                            <Td><Link>{solicitud.userEmail}</Link></Td>

                            <Td justifyContent='center'  >
                                <Flex gap={2} justifyContent={'center'}  >
                                    <Tooltip hasArrow label='Buscar conductor' bg='#009ED1' placement='left-start'>
                                    <Link to='/solicitud' onClick={()=>handlerClick(solicitud.id)}>
                                        <Button  bg='#009ED1'
                                            fontSize='1.2rem' /* id={driver.id} */ >
                                            <AddIcon />
                                        </Button>
                                        </Link>
                                    </Tooltip>
                                    
                                </Flex>
                            </Td>
                            
                        </Tr>
                    ))}

                </Tbody>
            </Table>
            <Box display="flex" justifyContent="center" alignItems="center" marginTop="1rem">
  <Button
     color="white"
     bg="purple.500"
    variant="outline"
    colorScheme="teal"
    /* disabled={currentPageReserved === 0} */
    onClick={prevHandler}
  >
    Anterior
  </Button>

  <Box as="span" marginLeft="1rem" marginRight="1rem">
    Página {currentPage } 
  </Box>

  <Button
   color="white"
   bg="purple.500"
    variant="outline"
    colorScheme="teal"
    /* disabled={currentPageReserved === totalPagesReserved - 1} */
    onClick={nextHandler}
  >
    Siguiente
        </Button>
        </Box>
        </TableContainer>
    )
}

export default SolicitudesDeViajesReserved;