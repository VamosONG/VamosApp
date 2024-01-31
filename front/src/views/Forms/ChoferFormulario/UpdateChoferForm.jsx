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
    const { id, onClose } = props;

    const handleChange = (e) => {
        const property = e.target.name;
        let value = e.target.value;
        console.log(property + " " + value);
        if (property === 'phone' || property === 'capacityPassengers' || property === 'dni') {
            value = Number(value)
        } else if (property === 'driverState') {
            value = value === 'Activo'
        }
        console.log(typeof (value) + value);
        setNewData({
            ...newData,
            [property]: value,
        });
    };
    
    useEffect(() => {
        dispatch(getAllConductores())
    },[props])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Antes de la actualización:", newData);
        if (newData) {
            //console.log('data antes de la ruta' + JSON.stringify(newData));
            const response = await axios.patch(`https://vamosappserver.onrender.com/drivers/update/${id}`, newData);
            console.log('data luego de la ruta' + newData);
            if (response.status === 200) {
                onClose()
                Swal.fire({
                    title: "¡Bien hecho!",
                    text: "Datos actualizados correctamente",
                    icon: "success",
                });
            } else {
                throw new Error(
                    onClose(),
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Hubo un error en la actualizacion",
                    })
                );
            }
        } else {
            console.log("form " + newData);
            onClose()
            Swal.fire({
                icon: "error",
                title: "Error en Formulario",
                text: "Debe realizar algún cambio para avanzar",
            });
        }
    }
    const carTypeFount = ["auto", "camioneta", "van", 'van plus'];
    const airportsFount = ["Aeropuerto Tumbes", "Aeropuerto Talara"];
    const carModelFount = ["toyota", "hiunday", "ford"];
    const state = ['Activo', 'Descanso'];
    return (
        <form onSubmit={handleSubmit}>
            <Stack
                spacing={4}
                bg="gray.200"
                p="5"
                h="auto"
                borderRadius="10"
                boxShadow="dark-lg"
                color="black"
                border="1px solid white"
                mx="2rem"
                w={{ base: "20rem", md: "50rem" }}
                scrollMarginX="auto"
            >
                <Box w='100%'>
                    <Flex justify='space-between' gap='4' align='center'>
                        <Flex gap='4'>

                        <Text fontSize='4xl'>{props.name}</Text>
                        <Avatar
                            alignSelf='center' justifySelf='center'
                            border='1px solid black'
                            size='lg'
                            name={props.name}
                            src={props.driverImg}
                        />{' '}
                        </Flex>

                        <Flex gap={4}>
                            <FormControl>
                            <FormLabel fontSize='xl' >Estado</FormLabel >
                                <InputGroup color='black' fontWeight='bold' boxShadow='0 3px 4px black' >
                                    <InputLeftAddon bg='#10447E' color="white" borderRadius="0%">
                                        {props.driverState ? 'Activo' : 'Descanso'}
                                    </InputLeftAddon>
                                    <Select
                                        color="black"
                                        name="driverState"
                                        placeholder="Selecciona el estado"
                                        bg='white'
                                        onChange={handleChange}
                                        value={newData.driverState}
                                    >
                                        {state.map((bools, index) => (
                                            <option key={index} value={bools}>
                                                {bools}
                                            </option>
                                        ))}
                                    </Select>
                                </InputGroup>
                            </FormControl>

                            {/* <FormControl>
                            <FormLabel fontSize='xl'>Eliminar</FormLabel>
                                <InputGroup color='black' fontWeight='bold' boxShadow='0 0px 4px black'>
                                <InputLeftAddon bg='#10447E' color="white" borderRadius="0%">
                                        {!props.inactive ? ('Activo') : ('Eliminado')}
                                    </InputLeftAddon>
                                    <Select
                                        color="#000"
                                        id='driverState'
                                        name="driverState"
                                        bg='white'
                                        onChange={handleChange}
                                        value={newData.driverState}
                                    >
                                        {state.map((bool, index) => (
                                            <option key={index} value={bool}>
                                                {bool}
                                            </option>
                                        ))}
                                    </Select>
                                </InputGroup>
                            </FormControl> */}
                        </Flex>
                    </Flex>
                </Box>

                <Box>
                    <Flex flexDirection={{ base: "column", md: 'row' }} gap='4'>
                        <FormControl>
                            <FormLabel fontSize='xl'>Nombre</FormLabel>
                            <InputGroup color='black' fontWeight='bold' boxShadow='0 0px 4px black'>
                            <InputLeftAddon bg='#10447E' color="white" borderRadius="0%">
                                    {props.name}
                                </InputLeftAddon>
                                <Input type='text' placeholder='Nuevo' bg='white' name='name' onChange={handleChange} value={newData.name} />
                            </InputGroup>
                        </FormControl>
                        <FormControl>
                            <FormLabel fontSize='xl'>Apellido</FormLabel>
                            <InputGroup color='black' fontWeight='bold' boxShadow='0 0px 4px black'>
                            <InputLeftAddon bg='#10447E' color="white" borderRadius="0%">
                                    {props.surname}
                                </InputLeftAddon>
                                <Input type='text' placeholder='Nuevo' bg='white' name='surname' onChange={handleChange} value={newData.surname} />
                            </InputGroup>
                        </FormControl>
                        <FormControl>
                            <FormLabel fontSize='xl'>DNI</FormLabel>
                            <InputGroup color='black' fontWeight='bold' boxShadow='0 0px 4px black'>
                            <InputLeftAddon bg='#10447E' color="white" borderRadius="0%">
                                    {props.dni}
                                </InputLeftAddon>
                                <Input type='number' placeholder='Nuevo' bg='white' name='dni' onChange={handleChange} value={newData.dni} />
                            </InputGroup>
                        </FormControl>
                    </Flex>

                    <Flex flexDirection={{ base: "column", md: 'row' }} gap='4'>
                        <FormControl>
                            <FormLabel fontSize='xl'>Correo electronico</FormLabel>
                            <InputGroup color='black' fontWeight='bold' boxShadow='0 0px 4px black' justifyContent='space-evenly'>
                                <InputLeftAddon bg='#10447E' color="white" borderRadius="0%" w='50%' overflow='hidden' scrollSnapType='revert'>
                                    {props.email}
                                </InputLeftAddon>
                                <Input type='mail' placeholder='Nuevo' bg='white' name='email' onChange={handleChange} value={newData.email} />
                            </InputGroup>
                        </FormControl>
                        <FormControl>
                            <FormLabel fontSize='xl'>Telefono</FormLabel>
                            <InputGroup color='black' fontWeight='bold' boxShadow='0 0px 4px black'>
                            <InputLeftAddon bg='#10447E' color="white" borderRadius="0%">
                                    {props.phone}
                                </InputLeftAddon>
                                <Input type='number' placeholder='Nuevo' bg='white' name='phone' onChange={handleChange} value={newData.phone} />
                            </InputGroup>
                        </FormControl>

                    </Flex>

                    <Flex gap='4'>
                        <FormControl>
                            <FormLabel fontSize='xl'>Fec. Nac.</FormLabel>
                            <InputGroup color='black' fontWeight='bold' boxShadow='0 0px 4px black'>
                            <InputLeftAddon bg='#10447E' color="white" borderRadius="0%">
                                    {props.birthday.split('T')[0]}
                                </InputLeftAddon>
                                <Input type='date' placeholder='Nuevo' bg='white' onChange={handleChange} value={newData.birthday} name='birthday' />
                            </InputGroup>
                        </FormControl>
                        <FormControl>
                            <FormLabel fontSize='xl'>Zona</FormLabel>
                            <InputGroup color='black' fontWeight='bold' boxShadow='0 0px 4px black'>
                            <InputLeftAddon bg='#10447E' color="white" borderRadius="0%">
                                    {props.airports}
                                </InputLeftAddon>
                                <Select
                                    color="#000"
                                    placeholder="Selecciona el Aeropuerto"
                                    name="airports"
                                    bg='white'
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
                    <Flex flexDirection={{ base: "column", md: 'row' }} gap='4' >

                        <FormControl>
                            <FormLabel>Tipo / Vehiculo</FormLabel>
                            <InputGroup color='black' fontWeight='bold' boxShadow='0 0px 4px black'>
                            <InputLeftAddon bg='#10447E' color="white" borderRadius="0%">
                                    {props.carType}
                                </InputLeftAddon>
                                <Select
                                    color="#000"
                                    placeholder="Selecciona un Tipo"
                                    name="carType"
                                    bg='white'
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
                            <InputLeftAddon bg='#10447E' color="white" borderRadius="0%">
                                    {props.carModel}
                                </InputLeftAddon>
                                <Select
                                    color="#000"
                                    placeholder="Selecciona un Vehiculo"
                                    name="carModel"
                                    bg='white'
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
                            <InputLeftAddon bg='#10447E' color="white" borderRadius="0%" >
                                    {props.carPatent}
                                </InputLeftAddon>
                                <Input type='text' textTransform="uppercase" placeholder='Nuevo' bg='white' name='carPatent' value={newData.carPatent} onChange={handleChange} />
                            </InputGroup>
                        </FormControl>
                    </Flex>

                    <Flex flexDirection={{ base: "column", md: 'row' }} gap='4'>
                        <FormControl>
                            <FormLabel>Licencia</FormLabel>
                            <InputGroup color='black' fontWeight='bold' boxShadow='0 0px 4px black'>
                            <InputLeftAddon bg='#10447E' color="white" borderRadius="0%">
                                    {props.driverLicense}
                                </InputLeftAddon>
                                <Input type='text' placeholder='Nuevo' bg='white' name='driverLicense' onChange={handleChange} value={newData.driverLicense} />
                            </InputGroup>
                        </FormControl>

                        <FormControl>
                            <FormLabel>Vencimiento del Soat</FormLabel>
                            <InputGroup color='black' fontWeight='bold' boxShadow='0 0px 4px black'>
                            <InputLeftAddon bg='#10447E' color="white" borderRadius="0%">
                                    {props.carSoat}
                                </InputLeftAddon>
                                <Input type='date' placeholder='Nuevo' bg='white'  name="carSoat" onChange={handleChange} value={newData.carSoat} />
                            </InputGroup>
                        </FormControl>

                        <FormControl>
                            <FormLabel>Max. Pasajeros</FormLabel>
                            <InputGroup color='black' fontWeight='bold' boxShadow='0 0px 4px black'>
                            <InputLeftAddon bg='#10447E' color="white" borderRadius="0%">
                                    {props.capacityPassengers}
                                </InputLeftAddon>
                                <Select
                                    color="#000"
                                    placeholder="Cantidad de pasajeros"
                                    id="capacityPassengers"
                                    name="capacityPassengers"
                                    bg='white'
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