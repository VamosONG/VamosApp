import { Box, Center, useDisclosure } from "@chakra-ui/react";
import {
    FormControl,
    FormLabel,
    Input,
    Select,
    Button,
    Heading,
    Stack,
    Image,
    Text,
    Flex, InputLeftAddon, InputGroup, Avatar,
} from "@chakra-ui/react";
import Swal from "sweetalert2";
import { useDispatch } from 'react-redux'
import { useEffect, useState } from "react";
import axios from "axios";
import { getAllConductores } from "../../../redux/actions";


const UpdateDriverData = (props) => {
    const dispatch = useDispatch();
    const [newData, setNewData] = useState('');
    const { id } = props;
    const handleChange = (e) => {
        const property = e.target.name;
        let value = e.target.value;
        console.log(property + " " + value);
        if (property === 'phone' || property === 'capacityPassengers' || property === 'dni') {
            value = Number(value)
        }
        console.log(typeof (value));
        setNewData({
            ...newData,
            [property]: value,
        });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Antes de la actualización:", newData);
        if (newData) {

            console.log('data antes de la ruta' + JSON.stringify(newData));
            const response = await axios.patch(`https://vamosappserver.onrender.com/drivers/update/${id}`, {newData});
            console.log('data luego de la ruta' + newData);
            if (response.status === 200) {

                console.log("des1 de la actualización:", newData);
                Swal.fire({
                    title: "Bien hecho!",
                    text: "Datos actualizados",
                    icon: "success",
                });
                await dispatch(getAllConductores())
                
            } else {
                throw new Error(
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Hubo un error en la actualizacion",
                    })
                );
            }
        } else {
            console.log("form " + newData);
            Swal.fire({
                icon: "error",
                title: "Error en Formulario",
                text: "Hay un error en el newData",
            });
        }
    }
    const carTypeFount = ["auto", "camioneta", "van", 'van plus'];
    const airportsFount = ["Aeropuerto Tumbes", "Aeropuerto Talara"];
    const carModelFount = ["toyota", "hiunday", "ford"];
    return (
        <form onSubmit={handleSubmit}>
            <Stack
                spacing={4}
                bg="gray.200"
                p="5"
                h="auto"
                borderRadius="20"
                boxShadow="dark-lg"
                color="black"
                border="1px solid white"
                mx="2rem"
                w={{ base: "20rem", md: "50rem" }}
                scrollMarginX="auto"
            >
                <Box w='100%'>
                    <Flex justify='center' gap='4' align='center'>
                        <Text fontSize='4xl'>Modificar Datos de: {props.name}</Text>
                        <Avatar
                            alignSelf='center' justifySelf='center'
                            border='1px solid black'
                            size='lg'
                            name={props.name}
                            src={props.driverImg}
                        />{' '}
                    </Flex>
                </Box>

                <Box>
                    <Flex flexDirection={{ base: "column", md: 'row' }} gap='4'>
                        <FormControl>
                            <FormLabel>Nombre</FormLabel>
                            <InputGroup color='black' fontWeight='bold' boxShadow='0 0px 4px black'>
                                <InputLeftAddon bg='yellow.200' >
                                    {props.name}
                                </InputLeftAddon>
                                <Input type='text' placeholder='Nuevo' bg='lightgreen' name='name' onChange={handleChange} value={newData.name} />
                            </InputGroup>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Apellido</FormLabel>
                            <InputGroup color='black' fontWeight='bold' boxShadow='0 0px 4px black'>
                                <InputLeftAddon bg='yellow.200'>
                                    {props.surname}
                                </InputLeftAddon>
                                <Input type='text' placeholder='Nuevo' bg='lightgreen' name='surname' onChange={handleChange} value={newData.surname} />
                            </InputGroup>
                        </FormControl>
                        <FormControl>
                            <FormLabel>DNI</FormLabel>
                            <InputGroup color='black' fontWeight='bold' boxShadow='0 0px 4px black'>
                                <InputLeftAddon bg='yellow.200'>
                                    {props.dni}
                                </InputLeftAddon>
                                <Input type='number' placeholder='Nuevo' bg='lightgreen' name='dni' onChange={handleChange} value={newData.dni} />
                            </InputGroup>
                        </FormControl>
                    </Flex>

                    <Flex flexDirection={{ base: "column", md: 'row' }} gap='4'>
                        <FormControl>
                            <FormLabel>Correo electronico</FormLabel>
                            <InputGroup color='black' fontWeight='bold' boxShadow='0 0px 4px black' justifyContent='space-evenly'>
                                <InputLeftAddon bg='yellow.200' w='50%' overflow='hidden' scrollSnapType='revert'>
                                    {props.email}
                                </InputLeftAddon>
                                <Input type='mail' placeholder='Nuevo' bg='lightgreen' name='email' onChange={handleChange} value={newData.email} />
                            </InputGroup>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Telefono</FormLabel>
                            <InputGroup color='black' fontWeight='bold' boxShadow='0 0px 4px black'>
                                <InputLeftAddon bg='yellow.200'>
                                    {props.phone}
                                </InputLeftAddon>
                                <Input type='number' placeholder='Nuevo' bg='lightgreen' name='phone' onChange={handleChange} value={newData.phone} />
                            </InputGroup>
                        </FormControl>

                    </Flex>

                    <Flex gap='4'>
                        <FormControl>
                            <FormLabel>Fec. Nac.</FormLabel>
                            <InputGroup color='black' fontWeight='bold' boxShadow='0 0px 4px black'>
                                <InputLeftAddon bg='yellow.200'>
                                    {props.birthday.split('T')[0]}
                                </InputLeftAddon>
                                <Input type='date' placeholder='Nuevo' bg='lightgreen' onChange={handleChange} value={newData.birthday} name='birthday' />
                            </InputGroup>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Zona</FormLabel>
                            <InputGroup color='black' fontWeight='bold' boxShadow='0 0px 4px black'>
                                <InputLeftAddon bg='yellow.200'>
                                    {props.airports}
                                </InputLeftAddon>
                                <Select
                                    color="#000"
                                    placeholder="Selecciona el Aeropuerto"
                                    name="airports"
                                    bg='lightgreen'
                                    onChange={handleChange}
                                    value={newData.airports}
                                >
                                    {airportsFount.map((airports, index) => (
                                        <option key={index} value={airports}>
                                            {airports}
                                        </option>
                                    ))}
                                </Select>
                            </InputGroup>
                        </FormControl>
                    </Flex>
                </Box>

                <Box bg="gray.300" py={4} px={2} borderRadius={10} color="black">
                    <Heading>Datos del vehiculo</Heading>
                    <Flex flexDirection={{ base: "column", md: 'row' }} gap='4'>
                        <FormControl>
                            <FormLabel>Tipo / Vehiculo</FormLabel>
                            <InputGroup color='black' fontWeight='bold' boxShadow='0 0px 4px black'>
                                <InputLeftAddon bg='yellow.200' >
                                    {props.carType}
                                </InputLeftAddon>
                                <Select
                                    color="#000"
                                    placeholder="Selecciona un Tipo"
                                    name="carType"
                                    onChange={handleChange}
                                    value={newData.carType}
                                >
                                    {carTypeFount.map((carT, index) => (
                                        <option key={index} value={carT}>
                                            {carT}
                                        </option>
                                    ))}
                                </Select>
                            </InputGroup>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Modelo de Vehiculo</FormLabel>
                            <InputGroup color='black' fontWeight='bold' boxShadow='0 0px 4px black'>
                                <InputLeftAddon bg='yellow.200'>
                                    {props.carModel}
                                </InputLeftAddon>
                                <Select
                                    color="#000"
                                    placeholder="Selecciona un Vehiculo"
                                    name="carModel"
                                    onChange={handleChange}
                                    value={newData.carModel}
                                >
                                    {carModelFount.map((carM, index) => (
                                        <option key={index} value={carM}>
                                            {" "}
                                            {carM}{" "}
                                        </option>
                                    ))}
                                </Select>
                            </InputGroup>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Placa</FormLabel>
                            <InputGroup color='black' fontWeight='bold' boxShadow='0 0px 4px black'>
                                <InputLeftAddon bg='yellow.200'>
                                    {props.carPatent}
                                </InputLeftAddon>
                                <Input type='text' textTransform="uppercase" placeholder='Nuevo' bg='lightgreen' name='carPatent' value={newData.carPatent} onChange={handleChange} />
                            </InputGroup>
                        </FormControl>
                    </Flex>

                    <Flex flexDirection={{ base: "column", md: 'row' }} gap='4'>
                        <FormControl>
                            <FormLabel>Licencia</FormLabel>
                            <InputGroup color='black' fontWeight='bold' boxShadow='0 0px 4px black'>
                                <InputLeftAddon bg='yellow.200' >
                                    {props.driverLicense}
                                </InputLeftAddon>
                                <Input type='text' placeholder='Nuevo' bg='lightgreen' name='driverLicense' onChange={handleChange} value={newData.driverLicense} />
                            </InputGroup>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Vencimiento del Soat</FormLabel>
                            <InputGroup color='black' fontWeight='bold' boxShadow='0 0px 4px black'>
                                <InputLeftAddon bg='yellow.200'>
                                    {props.carSoat}
                                </InputLeftAddon>
                                <Input type='date' placeholder='Nuevo' bg='lightgreen' name="carSoat" onChange={handleChange} value={newData.carSoat} />
                            </InputGroup>
                        </FormControl>
                        <FormControl>
                            <FormLabel>MAx. Pasajeros</FormLabel>
                            <InputGroup color='black' fontWeight='bold' boxShadow='0 0px 4px black'>
                                <InputLeftAddon bg='yellow.200'>
                                    {props.capacityPassengers}
                                </InputLeftAddon>
                                <Select
                                    color="#000"
                                    placeholder="Cantidad de pasajeros"
                                    id="capacityPassengers"
                                    name="capacityPassengers"
                                    onChange={handleChange}
                                    value={newData.capacityPassengers}
                                >
                                    {[...Array(20).keys()].map((number, index) => (
                                        <option
                                            key={index}
                                            id={`number-${number + 1}`}
                                            value={number + 1}
                                        >
                                            {number + 1}
                                        </option>
                                    ))}
                                </Select>
                            </InputGroup>
                        </FormControl>
                    </Flex>
                </Box>

                <Box mt={4}>
                    <Button colorScheme="green" w="100%" type="submit">
                        Actualizar
                    </Button>
                </Box>
            </Stack>
        </form>
    )
}

export default UpdateDriverData;