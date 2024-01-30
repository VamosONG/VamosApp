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
import { AddIcon, EditIcon, RepeatClockIcon } from '@chakra-ui/icons'

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
const handleClean = async (e) => {
    setInput({
        ...input,
        searchInput: "",
        order: "",
        tripState: 'reserved'
    })
    dispatch(orderSearch({
      ...input,
      searchInput: "",
      order: "",
      tripState: 'reserved'
  }));
}
const handleSubmitReserved = async (e) => {
    
    console.log(input)
    
    dispatch(orderSearch(input))
}


//*************************************************************************/
    


    
    return (
        <TableContainer >
            <TableContainer>
            <Box 
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="row"
              bgColor='#009ED1'
              >
            <Heading size='xs' textTransform='uppercase' margin={'1rem'}>
            Buscar:
            </Heading>
            <Box style={{ display: 'flex', alignItems: 'center' }}>
            <Input
              marginRight='2rem'
              bg="white"
              color="black" 
              htmlSize={50} 
              width='auto' 
              placeholder='Buscar por coincidencia'
              onChange={handleChange}
              name='searchInput'
              value={input.searchInput}
              />
              <FormControl>
              <Select 
              bg="white" 
              placeholder='Ordenar' 
              width='xs' 
              name='order' 
              onChange={handleChange}
              value={input.order}
              >
              <option>mas reciente</option>
              <option>menos reciente</option>
              </Select>
              </FormControl>
              </Box>
                <Button onClick={handleSubmitReserved} style={{marginRight:'1rem'}}>
                APLICAR
                </Button>
                <Tooltip hasArrow label='Reiniciar filtro y búsqueda' bg='#009ED1' placement='left-start'>
                <Button onClick={handleClean} >
                <RepeatClockIcon/>
                </Button>
                </Tooltip>
              </Box>
              </TableContainer>
        
              <Table variant='simple' >
                <TableCaption>Viajes sin conductor</TableCaption>
                    <Thead>
                      <Tr>
                        {/* <Th border="2px solid black">Nro</Th> */}
                        <Th border="2px solid black">Origen</Th>
                        <Th border="2px solid black">Destino</Th>
                        <Th border="2px solid black">Fecha</Th>
                        <Th border="2px solid black">Hora</Th>
                        <Th border="2px solid black">Usuario</Th>
                        <Th border="2px solid black">Buscar conductor</Th>
                      </Tr>
                    </Thead>
                    <Tbody >
                    {tripsToShow.map((solicitud, index) => (
                        <Tr key={solicitud.id} >
                          {/* <Td border="2px solid black">{index + 1}</Td> */}
                          <Td border="2px solid black">{solicitud.origin}</Td>
                          <Td border="2px solid black">{solicitud.destination}</Td>
                          <Td border="2px solid black">{solicitud.date}</Td>
                          <Td border="2px solid black">{solicitud.hour}</Td>
                          <Td border="2px solid black"><Link>{solicitud.userEmail}</Link></Td>
                          <Td border="2px solid black" justifyContent='center'  >
                              <Flex gap={2} justifyContent={'center'}  >
                                <Tooltip hasArrow label='Buscar conductor' bg='#009ED1' placement='left-start'>
                                <Link to='/solicitud' onClick={()=>handlerClick(solicitud.id)}>
                                  <Button  bg='#009ED1' fontSize='1.2rem'>
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
                      color='black'
                      bgColor='#009ED1'
                      variant="outline"
                      colorScheme="teal"
                      onClick={prevHandler}
                      >
                      Anterior
                      </Button>

                    <Box as="span" marginLeft="1rem" marginRight="1rem">
                      Página {currentPage } 
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
        </TableContainer>
    )
}

export default SolicitudesDeViajesReserved;
