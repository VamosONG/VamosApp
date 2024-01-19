import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption, Avatar, Tooltip,
    TableContainer, Button, Flex, useDisclosure, Link, Collapse, Box
} from '@chakra-ui/react'

import { DeleteIcon, EditIcon, WarningIcon } from '@chakra-ui/icons'

import { useSelector, useDispatch } from 'react-redux'
import { deleteDriverAction, getAllConductores } from '../../redux/actions'
import { useEffect, useRef, useState } from 'react'

import Swal from 'sweetalert2'
import UpdateDriverData from '../Forms/ChoferFormulario/UpdateChoferForm'
import ViewBtnUpdateDriver from '../Forms/ViewForms/ViewUpdateDriverForm'
import ViewBtnDetailDriver from './DetailDriver/ViewBtnDetailDriver'
import OrderFilterAlphabetical from './filtersData/orderFilter'
import DriverState from './DetailDriver/driverState'
import driver from '../../../../Back/src/models/driver'


const DriverTableView = () => {
    const driverData = useSelector((state) => state.conductores)
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        dispatch(getAllConductores())
    },[])

    // const driverStateShow = driverData.driverState;
    
    const stateNow = () => {
        
    }

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
                const deleteOk = await dispatch(deleteDriverAction(id))
                if (deleteOk) {
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

        <TableContainer >
            <Flex bg='gray.200' color='#000' justify={'center'} ><OrderFilterAlphabetical/></Flex>
            <Table variant='simple' >
                <TableCaption>Conductores registrados</TableCaption>
                <Thead>
                    <Tr>
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
                <Tbody >
                    {driverData?.map((driver, index) => (
                        <Tr key={driver.id} >
                            <Td>{index + 1}</Td>
                            <Td>{driver.airports}</Td>

                            <Td>{driver.name}</Td>
                            <Td>{driver.carType}</Td>
                            <Td>{driver.phone}</Td>
                            <Td>{driver.capacityPassengers}</Td>

                            <Td justifyContent='center'  >
                                <Flex gap={2} justifyContent={'center'}  >
                                    <Tooltip hasArrow label='ELiminar' bg='#E83D6F' placement='left-start'>

                                        <Button onClick={() => deleteDriver(driver.id)} bg='#E83D6F'
                                            fontSize='1.2rem' id={driver.id} >
                                            <DeleteIcon />
                                        </Button>
                                    </Tooltip>
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
                                    />
                            </Td>

                            <Td> {!driver.driverState ? ('Descanso') : ('Activo')} </Td>
                        </Tr>
                    ))}

                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>#</Th>
                        <Th>Zona</Th>
                        <Th>Nombre</Th>
                        <Th>Vehiculo</Th>
                        <Th>telefono</Th>
                        <Th>Max. Psjr</Th>
                        <Th >Aciones</Th>
                        <Th >Detalles</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>

    )
}

export default DriverTableView;