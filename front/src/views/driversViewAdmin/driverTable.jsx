import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, Button, Flex, useDisclosure, Link
} from '@chakra-ui/react'

import { DeleteIcon, EditIcon, WarningIcon } from '@chakra-ui/icons'

import { useSelector, useDispatch } from 'react-redux'
import { deleteDriverAction, getAllConductores } from '../../redux/actions'
import { useEffect, useRef } from 'react'

import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
} from '@chakra-ui/react'
import Swal from 'sweetalert2'


const DriverTableView = () => {
    const driverData = useSelector((state) => state.conductores)
    const dispatch = useDispatch();


    const deleteDriver = (id) => {
        Swal.fire({
            title: "¿Seguro quieres eliminar?",
            text: "Se eliminaran los del conductor",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Si, eliminalo!",
            cancelButtonText: "No, cancelar!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(id);
                const deleteOk = dispatch(deleteDriverAction(id))
                if (deleteOk) {
                    Swal.fire({
                        title: "¡Eliminado!",
                        text: "Ha sido eliminado el registro.",
                        icon: "success"
                    });
                }
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

    useEffect(() => {
        // Este efecto se ejecutará cuando driverData cambie
        console.log("Driver data actualizado:", driverData);
    }, [driverData]);

    return (
        // <>
        // {Array.isArray(driverData) ? (
        //     <TableContainer >
        //     <Table variant='simple' >
        //         <TableCaption>Imperial to metric conversion factors</TableCaption>
        //         <Thead>
        //             <Tr>
        //                 <Th>Cant.</Th>
        //                 <Th>Aeropuerto</Th>
        //                 <Th>Nombre</Th>
        //                 <Th>Vehiculo</Th>
        //                 <Th>telefono</Th>
        //                 <Th isNumeric>Max. Pasejeros</Th>
        //                 <Th >Aciones</Th>
        //                 <Th >Detalles</Th>
        //             </Tr>
        //         </Thead>
        //         <Tbody >
        //             {driverData.map((driver, index) => (
        //                 <Tr key={driver.id} >
        //                     <Td>{index + 1}</Td>
        //                     <Td>{driver.airports}</Td>
        //                     <Td>{driver.name}</Td>
        //                     <Td>{driver.carType}</Td>
        //                     <Td>{driver.phone}</Td>
        //                     <Td>{driver.capacityPassengers}</Td>

        //                     <Tr justifyContent='center' >
        //                         <Flex gap={2} justifyContent={'center'}>
        //                             <Button onClick={() => deleteDriver(driver.id)} bg='#E83D6F'
        //                                 fontSize='1.2rem' id={driver.id} >
        //                                 <DeleteIcon />
        //                             </Button>

        //                             <Button bg='#009ED1' color='white' fontSize='1.2rem' >
        //                                 <EditIcon />
        //                             </Button>
        //                         </Flex>
        //                     </Tr>
        //                     <Td>
        //                         <Link href='#'>
        //                             Ver mas
        //                         </Link>
        //                     </Td>
        //                 </Tr>
        //             ))}

        //         </Tbody>
        //         <Tfoot>
        //             <Tr>
        //                 <Th>Cant.</Th>
        //                 <Th>Aeropuerto</Th>
        //                 <Th>Nombre</Th>
        //                 <Th>Vehiculo</Th>
        //                 <Th>telefono</Th>
        //                 <Th isNumeric>Max. Pasejeros</Th>
        //                 <Th >Aciones</Th>
        //                 <Th >Detalles</Th>
        //             </Tr>
        //         </Tfoot>
        //     </Table>


        // </TableContainer>
        // ): (
        //     <p>loading..</p>
        // )}
        // </>

        <TableContainer >
            <Table variant='simple' >
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Cant.</Th>
                        <Th>Aeropuerto</Th>
                        <Th>Nombre</Th>
                        <Th>Vehiculo</Th>
                        <Th>telefono</Th>
                        <Th isNumeric>Max. Pasejeros</Th>
                        <Th >Aciones</Th>
                        <Th >Detalles</Th>
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

                            <Tr justifyContent='center' >
                                <Flex gap={2} justifyContent={'center'}>
                                    <Button onClick={() => deleteDriver(driver.id)} bg='#E83D6F'
                                        fontSize='1.2rem' id={driver.id} >
                                        <DeleteIcon />
                                    </Button>

                                    <Button bg='#009ED1' color='white' fontSize='1.2rem' >
                                        <EditIcon />
                                    </Button>
                                </Flex>
                            </Tr>
                            <Td>
                                <Link href='#'>
                                    Ver mas
                                </Link>
                            </Td>
                        </Tr>
                    ))}

                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>Cant.</Th>
                        <Th>Aeropuerto</Th>
                        <Th>Nombre</Th>
                        <Th>Vehiculo</Th>
                        <Th>telefono</Th>
                        <Th isNumeric>Max. Pasejeros</Th>
                        <Th >Aciones</Th>
                        <Th >Detalles</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>

    )
}

export default DriverTableView;