import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Badge } from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, Flex, Box, Link, Tooltip
} from '@chakra-ui/react'

const DriverDetailMobile = (props) => {
    return (
        <Flex
            gap={4}
            w="100%"
            justify="center"
            m="0 auto"
            flexDirection={"column"}
            
        >
            <TableContainer w="auto" h="auto">
                <Table
                    variant="striped"
                    bg="gray.300"
                    display={{ base: "flex", md: null }}
                    flexDirection={{ base: "row", md: "column" }}
                    justifyContent={{ base: "space-between", md: null }}
                >
                    <Thead>
                        <Tr
                            display={"flex"}
                            flexDirection={{ base: "column", md: "row" }}
                        >
                            <Th fontSize={"1.2rem"} h="2.5rem">
                                Apellido
                            </Th>
                            <Th fontSize={"1.2rem"} h="2.5rem">
                                DNI
                            </Th>
                            <Th fontSize={"1.2rem"} h="2.5rem">
                                Correo
                            </Th>
                            <Th fontSize={"1.2rem"} h="2.5rem">
                                Fec. Nac
                            </Th>
                            <Th fontSize={"1.2rem"} h="2.5rem">
                                Telefono
                            </Th>
                            <Th fontSize={"1.2rem"} h="2.5rem">
                                Origen
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr
                            display={"flex"}
                            flexDirection={{ base: "column", md: "row" }}
                        >
                            <Td fontSize={"1.2rem"} h="2.5rem">
                                {props.surname}
                            </Td>
                            <Td fontSize={"1.2rem"} h="2.5rem">
                                {props.dni}
                            </Td>
                            <Td fontSize={"1.2rem"} h="2.5rem">
                                {props.email}
                            </Td>
                            <Td fontSize={"1.2rem"} h="2.5rem">
                                {props.birthday}
                            </Td>
                            <Td fontSize={"1.2rem"} h="2.5rem">
                                {props.phone}
                            </Td>
                            <Td fontSize={"1.2rem"} h="2.5rem">
                                {props.airports}
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>

            <TableContainer w="auto">
                <Table
                    variant="striped"
                    bg="gray.300"
                    display={"flex"}
                    flexDirection={{ base: "row", md: "column" }}
                    justifyContent={"space-between"}
                    
                >
                    {/* <TableCaption fontSize={'1.2rem'}>Datos del Vehiculo</TableCaption> */}
                    <Thead>
                        <Tr
                            display={"flex"}
                            flexDirection={{ base: "column", md: "row" }}
                            
                        >
                            <Th fontSize={"1.2rem"} h="2.5rem">
                                Vehiculo
                            </Th>
                            <Th fontSize={"1.2rem"} h="2.5rem">
                                Modelo
                            </Th>
                            <Th fontSize={"1.2rem"} h="2.5rem">
                                Licencia
                            </Th>
                            <Th fontSize={"1.2rem"} h="2.5rem">
                                Soat
                            </Th>
                            <Th fontSize={"1.2rem"} h="2.5rem">
                                Placa
                            </Th>
                            <Th fontSize={"1.2rem"} h="2.5rem">
                                max.Pasj
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr
                            display={"flex"}
                            flexDirection={{ base: "column", md: "row" }}
                        >
                            <Td fontSize={"1.2rem"} h="2.5rem">
                                {props.carType}
                            </Td>
                            <Td fontSize={"1.2rem"} h="2.5rem">
                                {props.carModel}
                            </Td>
                            <Td fontSize={"1.2rem"} h="2.5rem">
                                {props.driverLicense}
                            </Td>
                            <Td fontSize={"1.2rem"} h="2.5rem">
                                {props.carSoat}
                            </Td>
                            <Td fontSize={"1.2rem"} h="2.5rem">
                                {props.carPatent}
                            </Td>
                            <Td fontSize={"1.2rem"} h="2.5rem">
                                {props.capacityPassengers}
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Flex>
    );
}

export default DriverDetailMobile