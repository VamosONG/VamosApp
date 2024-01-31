import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Tooltip,
    TableContainer,
    Button,
    Flex,
    Badge,
    Box,
} from '@chakra-ui/react'

import { DeleteIcon, RepeatClockIcon } from '@chakra-ui/icons'

import { useSelector, useDispatch } from 'react-redux'
import { deleteDriverAction, getAllConductores } from '../../redux/actions'
import { useEffect, useState } from 'react'

import Swal from 'sweetalert2'
import ViewBtnUpdateDriver from '../Forms/ViewForms/ViewUpdateDriverForm'
import ViewBtnDetailDriver from './DetailDriver/ViewBtnDetailDriver'
import OrderFilterAlphabetical from './filtersData/orderFilter'
// import Paginado from '../../components/paginado/paginadoComponent'

const DriverTableView = () => {
    const driverData = useSelector((state) => state.conductores)
    const dispatch = useDispatch();
    // const [search , setSearch] = useState('')

    const searcher = (e) => {
        setSearch(e.target.value)
    }

    // const results = !search ? driverData : driverData.filter((data) => data.name.toLowerCase().includes(search.toLowerCase()) ||
    // data.airports.toLowerCase().includes(search.toLowerCase()) ||
    // data.carType.toLowerCase().includes(search.toLowerCase())
    // );

    useEffect(() => {
        dispatch(getAllConductores())
    }, [dispatch])

    const deleteDriver = (id) => {
        Swal.fire({
            title: "¿Seguro quieres eliminar este conductor?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Si, eliminalo!",
            cancelButtonText: "No, cancelar!",
            reverseButtons: true
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response = await dispatch(deleteDriverAction(id))
                if (response) {
                    Swal.fire({
                        title: "¡Eliminado con éxito!",
                        text: "Ha sido eliminado el conductor.",
                        icon: "success"
                    });
                }
                await dispatch(getAllConductores())

            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                Swal.fire({
                    title: "Cancelado",
                    text: "No se ha eliminado al conductor",
                    icon: "error"
                });
            }
        });
    }


    const reactivateDriver = (id) => {
        Swal.fire({
            title: "¿Seguro quieres reactivar este conductor?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Si, reactivarlo!",
            cancelButtonText: "No, cancelar!",
            reverseButtons: true
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response = await dispatch(deleteDriverAction(id))
                Swal.fire({
                    title: "¡Reactivado con éxito!",
                    text: "Ha sido reactivado el conductor.",
                    icon: "success"
                });
                await dispatch(getAllConductores());
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                Swal.fire({
                    title: "Cancelado",
                    text: "No se ha reactivado al conductor",
                    icon: "error"
                });
            }
        });
    }
    //***************PAGINADO**********************************/
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const [tripsToShow, setTripsToShow] = useState([]);

    const prevHandler = () => {
        const prevPage = currentPage - 1;

        if (prevPage < 1) return;

        const firstCompleted = (prevPage - 1) * 6;

        setCurrentPage(prevPage);
        setTripsToShow([...driverData].splice(firstCompleted, 6));
    };

    const nextHandler = () => {
        const totalCompleted = driverData.length;

        const nextPage = currentPage + 1;

        const firstCompleted = currentPage * 6;

        if (firstCompleted >= totalCompleted) return;
        setCurrentPage(nextPage);
        setTripsToShow([...driverData].splice(firstCompleted, 6));
    };

    // useEffect(() => {
    //   dispatch(getCanceledTrips());
    // }, [dispatch]);

    useEffect(() => {
        setTripsToShow([...driverData].splice(0, 6));
    }, [driverData]);

    //***************BUSQUEDA Y ORDENAMIENTO**********************************/

    return (
        <Flex
            aalignItems='center'
            justifyContent='center'
            direction="column"
            width="100%"
            overflowX="auto"
            mt={4}
            border="1px solid black"
        >
            <TableContainer boxShadow="lg" borderRadius="md" bg='#009ED1'>
                <Flex
                    bg='#009ED1'
                    justify={'center'}
                >
                    <OrderFilterAlphabetical searcher={searcher} />
                </Flex>
                <Table variant='simple' >
                    <TableCaption color="black" bgColor="gray.300" border="1px solid black">Conductores registrados</TableCaption>
                    <Thead>
                        <Tr bgColor='gray.300'>
                            <Th border="2px solid black">#</Th>
                            <Th border="2px solid black">Zona</Th>
                            <Th border="2px solid black">Nombre</Th>
                            <Th border="2px solid black">Vehiculo</Th>
                            <Th border="2px solid black">telefono</Th>
                            <Th border="2px solid black">Max. Psjr</Th>
                            <Th border="2px solid black">Aciones</Th>
                            <Th border="2px solid black">Detalles</Th>
                            <Th border="2px solid black">Estado</Th>
                        </Tr>
                    </Thead>

                    <Tbody>
                {tripsToShow.map((driver, index) => (
                    <Tr key={driver.id} bg={driver.inactive ? 'gray.300' : driver.driverState ? 'white' : 'red.300'} color={driver.inactive ? 'black' : 'black'}>
                                <Td border="2px solid black">{index + 1}</Td>
                                <Td border="2px solid black">{driver.airports}</Td>

                                <Td border="2px solid black">{driver.name}</Td>
                                <Td border="2px solid black">{driver.carType}</Td>
                                <Td border="2px solid black">{driver.phone}</Td>
                                <Td border="2px solid black">{driver.capacityPassengers}</Td>

                                <Td border="2px solid black" justifyContent='center'  >
                                    <Flex gap={2} justifyContent={'center'}  >
                                        {!driver.inactive ? (

                                            <Tooltip hasArrow label='Eliminar' bg='red' placement='left-start'>

                                                <Button
                                                    onClick={() => deleteDriver(driver.id)}
                                                    colorScheme={!driver.inactive ? 'red' : 'purple'}
                                                    fontSize='1.2rem'
                                                    id={driver.id}
                                                >
                                                    {!driver.inactive ? <DeleteIcon /> : <RepeatClockIcon />}
                                                </Button>
                                            </Tooltip>
                                        ) : (
                                            <Tooltip hasArrow label='Reactivar' bg='purple.400' placement='left-start'>

                                                <Button onClick={() => reactivateDriver(driver.id)}
                                                    bg='purple.400'
                                                    fontSize='1.2rem'
                                                    id={driver.id} >
                                                    <RepeatClockIcon />
                                                </Button>
                                            </Tooltip>
                                        )}
                                        <ViewBtnUpdateDriver
                                            id={driver.id}
                                            name={driver.name}
                                            surname={driver.surname}
                                            email={driver.email}
                                            birthday={driver.birthday}
                                            dni={driver.dni}
                                            phone={driver.phone}
                                            driverImg={driver.driverImg}
                                            airports={driver.airports}
                                            carType={driver.carType}
                                            carModel={driver.carModel}
                                            driverLicense={driver.driverLicense}
                                            carImg={driver.carImg}
                                            carPatent={driver.carPatent}
                                            carSoat={driver.carSoat}
                                            circulationPermit={driver.circulationPermit}
                                            capacityPassengers={driver.capacityPassengers}
                                            driverState={driver.driverState} />
                                    </Flex>
                                </Td>
                                <Td border="2px solid black" textAlign="center">
                                    <ViewBtnDetailDriver id={driver.id}
                                        name={driver.name}
                                        surname={driver.surname}
                                        email={driver.email}
                                        birthday={driver.birthday}
                                        dni={driver.dni}
                                        phone={driver.phone}
                                        driverImg={driver.driverImg}
                                        airports={driver.airports}
                                        carType={driver.carType}
                                        carModel={driver.carModel}
                                        driverLicense={driver.driverLicense}
                                        carImg={driver.carImg}
                                        carPatent={driver.carPatent}
                                        carSoat={driver.carSoat}
                                        circulationPermit={driver.circulationPermit}
                                        capacityPassengers={driver.capacityPassengers}
                                        driverState={driver.driverState}
                                    />
                                </Td>

                                <Td border="2px solid black" textAlign="center">
                                    {driver.driverState ? (<Badge colorScheme='green' borderRadius={6} px='2'>
                                        Trabajo
                                    </Badge>) : (<Badge colorScheme='red' borderRadius={6} px='2'>
                                        Descanso
                                    </Badge>)}
                                </Td>
                                {/* SIRVE PARA MOSTRAR SI EL USUARIO ESTA ELIMINADO DE LA BASE DE DATOS. */}
                                {/* <Td>{!driver.inactive ? (<Badge colorScheme='green' borderRadius={5} px='2'>Activo</Badge>) : (<Badge colorScheme='red'  borderRadius={5} px='2'>Retirado</Badge>)}</Td> */}

                            </Tr>
                        ))}

                    </Tbody>
                    <Tfoot>
                        <Tr bgColor='gray.300'>
                            <Th border="2px solid black">#</Th>
                            <Th border="2px solid black">Zona</Th>
                            <Th border="2px solid black">Nombre</Th>
                            <Th border="2px solid black">Vehiculo</Th>
                            <Th border="2px solid black">telefono</Th>
                            <Th border="2px solid black">Max. Psjr</Th>
                            <Th border="2px solid black">Aciones</Th>
                            <Th border="2px solid black">Detalles</Th>
                            <Th border="2px solid black">Estado</Th>
                        </Tr>
                    </Tfoot>
                </Table>
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
            {/* <Flex
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
    </Flex> */}
        </Flex>
    )
}

export default DriverTableView;