import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,Tooltip,
    TableContainer, Button, Flex, Badge
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
    const [search , setSearch] = useState('')

    const searcher = (e) => {
        setSearch(e.target.value)
    }

    const results = !search ? driverData : driverData.filter((data) => data.name.toLowerCase().includes(search.toLowerCase()) ||
    data.airports.toLowerCase().includes(search.toLowerCase()) ||
    data.carType.toLowerCase().includes(search.toLowerCase())
);

    useEffect(() => {
        dispatch(getAllConductores())
    },[])

    const deleteDriver = (id) => {
        Swal.fire({
            title: "¿Seguro quieres eliminar?",
            text: "Se eliminaran los del conductor",
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
                        title: "¡Eliminado!",
                        text: "Ha sido eliminado el registro.",
                        icon: "success"
                    });
                }
                await dispatch(getAllConductores())

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                Swal.fire({
                    title: "Cancelado",
                    text: "Registro sano y salvo :D",
                    icon: "error"
                });
            }
        });
    }

    return (
        <Flex alignItem='center' justifyContent='center'>
        <TableContainer boxShadow="lg" borderRadius="md" bg="purple.500">
            <Flex bg="purple.500" justify={'center'} ><OrderFilterAlphabetical searcher={searcher}/></Flex>
            <Table variant='simple' >
                <TableCaption color="black" bgColor="gray.300">Conductores registrados</TableCaption>
                <Thead>
                    <Tr bgColor='gray.300'>
                        <Th>#</Th>
                        <Th>Zona</Th>
                        <Th>Nombre</Th>
                        <Th>Vehiculo</Th>
                        <Th>telefono</Th>
                        <Th>Max. Psjr</Th>
                        <Th >Aciones</Th>
                        <Th >Detalles</Th>
                        <Th >Estado</Th>
                    </Tr>
                </Thead>
                
                <Tbody>
                    {results?.map((driver, index) => (
                        <Tr key={driver.id} bg={driver.inactive  ? 'gray.300' : driver.driverState ? 'white' : 'red.300'} color={driver.inactive ? 'black' : 'black'}>
                            <Td>{index + 1}</Td>
                            <Td>{driver.airports}</Td>

                            <Td>{driver.name}</Td>
                            <Td>{driver.carType}</Td>
                            <Td>{driver.phone}</Td>
                            <Td>{driver.capacityPassengers}</Td>

                            <Td justifyContent='center'  >
                                <Flex gap={2} justifyContent={'center'}  >
                                    {!driver.inactive ? (

                                    <Tooltip hasArrow label='ELiminar' bg='red' placement='left-start'>

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

                                        <Button onClick={()=> deleteDriver(driver.id) }
                                            bg='purple.400'
                                            fontSize='1.2rem' 
                                            id={driver.id} >
                                            <RepeatClockIcon />
                                        </Button>
                                    </Tooltip>
                                    )}
                                    <ViewBtnUpdateDriver id={driver.id}
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
                            <Td>
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

                            <Td> {driver.driverState ? (<Badge colorScheme='green' borderRadius={6} px='2'>Trabajo</Badge>) : (<Badge colorScheme='red'  borderRadius={6} px='2'>Descanso</Badge>)} </Td>

                            {/* SIRVE PARA MOSTRAR SI EL USUARIO ESTA ELIMINADO DE LA BASE DE DATOS. */}
                            {/* <Td>{!driver.inactive ? (<Badge colorScheme='green' borderRadius={5} px='2'>Activo</Badge>) : (<Badge colorScheme='red'  borderRadius={5} px='2'>Retirado</Badge>)}</Td> */}

                        </Tr>
                    ))}

                </Tbody>
                <Tfoot>
                    <Tr bgColor='gray.300'>
                    <Th>#</Th>
                        <Th>Zona</Th>
                        <Th>Nombre</Th>
                        <Th>Vehiculo</Th>
                        <Th>telefono</Th>
                        <Th>Max. Psjr</Th>
                        <Th >Aciones</Th>
                        <Th >Detalles</Th>
                        <Th >Estado</Th>
                        {/* <Th >Eliminado</Th> */}
                    </Tr>
                </Tfoot>
            </Table>
            {/* COMPONENTE DE PAGINADO */}
            {/* <Paginado/>  */}
        </TableContainer>
        </Flex>
    )
}

export default DriverTableView;