import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, Button, Flex
} from '@chakra-ui/react'

import { DeleteIcon, EditIcon, WarningIcon } from '@chakra-ui/icons'

import { useSelector, useDispatch } from 'react-redux'
import { getAllConductores } from '../../redux/actions'
import { useEffect } from 'react'


const DriverTableView = () => {
    const driverData = useSelector((state) => state.conductores)

    console.log(driverData);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getAllConductores());
    },[])

    return (
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
                    </Tr>
                </Thead>
                <Tbody >
                    {driverData.map((driver, index) => (
                        <Tr key={driver.id} >
                            <Td>{index + 1}</Td>
                            <Td>{driver.airports}</Td>
                            <Td>{driver.name}</Td>
                            <Td>{driver.carType}</Td>
                            <Td>{driver.phone}</Td>
                            <Td>{driver.capacityPassengers}</Td>
                            {/* <Td isNumeric>25.4</Td> */}
                            <Tr justifyContent='center' >
                                <Flex gap={2} justifyContent={'center'}>
                                    <Button bg='#E83D6F' fontSize='1.2rem'><DeleteIcon /></Button>
                                    <Button bg='#009ED1' color='white' fontSize='1.2rem' ><EditIcon /></Button>
                                </Flex>
                            </Tr>
                        </Tr>
                    ))}

                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>Aeropuerto</Th>
                        <Th>Nombre</Th>
                        <Th>Vehiculo</Th>
                        <Th>telefono</Th>
                        <Th isNumeric>Max. Pasejeros</Th>
                        <Th >Aciones</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    )
}

export default DriverTableView;