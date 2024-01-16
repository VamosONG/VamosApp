import { Box, Center, useDisclosure } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    Input, Select, Button, Heading, Stack, Image, Text, Flex
} from '@chakra-ui/react'
import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import choferes from '../../../utils/chofer'
import axios from 'axios'
import { createNewChofer } from '../../../redux/actions';
import { ValidateNewDriver } from '../../../components/Validate/validateNewDriver';

const ChoferForm = () => {
    const dispatch = useDispatch();
const choferData = useSelector((state) => state.conductores)
    const [imageUrl, setImageUrl] = useState(null)
    const [file, setFile] = useState(null)

    const [form, setForm] = useState({
        name: "",
        surname: "",
        email: "",
        birthday: "",
        dni: "",
        phone: "",
        driverImg: "",
        airports: "",
        carType: "",
        carModel: "",
        driverLicense: "",
        carImg: "",
        carPatent: '',
        carSoat: "",
        circulationPermit: "",
        capacityPassengers: "",
    });

    const [error, setError] = useState({
        name: "",
        surname: "",
        email: "",
        birthday: "",
        dni: "",
        phone: "",
        driverImg: "",
        airports: "",
        carType: "",
        carModel: "",
        driverLicense: "",
        carImg: "",
        carPatent: '',
        carSoat: "",
        circulationPermit: "",
        capacityPassengers: "",
    })

    const handleChange = (e) => {
        const property = e.target.name;
        const value = e.target.value;
        console.log(property + ' ' + value);
        setForm({
            ...form,
            [property]: value
        })
    }

    const urlCloudinary = 'https://api.cloudinary.com/v1_1/dzd6hfguw/image/upload'

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationForm = ValidateNewDriver(form)
        setError(validationForm)
        const hasError = Object.values(validationForm).some((error) => !!error)

        console.log(form);
        console.log(error);

        if (!hasError) {
            const response = await axios.post('http://localhost:3001/drivers/create', form)
            if (response) {
                Swal.fire({
                    title: "Bien hecho!",
                    text: "Datos registrados!",
                    icon: "success"
                })
                setForm({
                    name: "",
                    surname: "",
                    email: "",
                    birthday: "",
                    dni: "",
                    phone: "",
                    driverImg: "",
                    airports: "",
                    carType: "",
                    carModel: "",
                    driverLicense: "",
                    carImg: "",
                    carPatent: '',
                    carSoat: "",
                    circulationPermit: "",
                    capacityPassengers: "",
                })
            } else {
                throw new Error(Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Hubo un error en el registro"
                }))
            }
        } else {
            console.log(validationForm.error);
            console.log('form '+ form);
            Swal.fire({
                icon: "error",
                title: "Error en validate",
                text: "Hay un input con errores"
            })
        } 
        }

        const carTypeFount = ['auto', 'camioneta', 'van'];
        const airportsFount = ['tumbes', 'talara', 'lima'];
        const carModelFount = ['toyota', 'hiunday', 'ford'];

        return (
            <form onSubmit={handleSubmit} >
                <Stack spacing={4} bg='#009ED1' p='5' h='auto' borderRadius='20' boxShadow='dark-lg' color='white' border='1px solid white' mx='2rem' w={{ base: '20rem', md: '40rem' }} scrollMarginX='auto'>
                    <Heading>Datos del chofer</Heading>
                    <Box  >
                        <Flex flexDirection={{ base: 'column' }}>

                            <Center py={2} gap={4} flexDirection={{ base: 'column', md: 'row' }}>
                                <FormControl isRequired>
                                    <FormLabel>Nombre</FormLabel>
                                    <Input type='text' placeholder='name' name='name' onChange={handleChange} value={form.name} />
                                    {error.name && <p>{error.name}</p>}
                                </FormControl>
                                <FormControl isRequired >
                                    <FormLabel>Apellido</FormLabel>
                                    <Input type='text' placeholder='surname' name='surname' onChange={handleChange} value={form.surname} />
                                    {error.surname && <p>{error.surname}</p>}
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Correo electronico</FormLabel>
                                    <Input type='mail' placeholder='Correo electronico' name='email' onChange={handleChange} value={form.email} />
                                    {error.email && <p>{error.email}</p>}
                                </FormControl>
                            </Center>

                            <Center py={2} gap={4} flexDirection={{ base: 'column', md: 'row' }}>
                                <FormControl isRequired>
                                    <FormLabel>Fecha de Nac.</FormLabel>
                                    <Input
                                        size="md"
                                        type="date"
                                        name='birthday'
                                        onChange={handleChange} value={form.birthday} />
                                    {error.birthday && <p>{error.birthday}</p>}
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>DNI</FormLabel>
                                    <Input type='number' placeholder='Numero de DNI' name='dni' onChange={handleChange} value={form.dni} />
                                    {error.dni && <p>{error.dni}</p>}
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>Numero de Celular</FormLabel>
                                    <Input type='number' placeholder='Numero de celular' name='phone' onChange={handleChange} value={form.phone} />
                                    {error.phone && <p>{error.phone}</p>}
                                </FormControl>
                            </Center>

                            <Center py={2} gap={4} flexDirection={{ base: 'column', md: 'row' }}>

                                <FormControl>
                                    <FormLabel>Foto del Chofer</FormLabel>
                                    <Input type='file'
                                        name='driverImg'
                                        accept="image/*"
                                        onChange={handleChange} />
                                    {error.driverImg && <p>{error.driverImg}</p>}
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>Aeropuerto Origen</FormLabel>
                                    <Select color='#000' placeholder='Selecciona el Aeropuerto' name='airports' onChange={handleChange} value={form.airports}>
                                        {airportsFount.map((airports, index) => (
                                            <option key={index} value={airports}> {airports} </option>
                                        ))
                                        }
                                    </Select>
                                    {error.airports && <p>{error.airports}</p>}
                                </FormControl>

                            </Center>
                        </Flex>
                    </Box>

                    <Box bg='#10447E' py={4} px={2} borderRadius={10} color='white'>
                        <Heading>Datos del vehiculo</Heading>
                        <Center py={2} gap={4} flexDirection={{ base: 'column', md: 'row' }}>

                            <FormControl as='fieldset' isRequired>
                                <FormLabel as='legend' >
                                    Tipo de Vehiculo:
                                </FormLabel>
                                <Select color='#000' placeholder='Selecciona un Vehiculo' name='carType' onChange={handleChange} value={form.carType}>
                                    {carTypeFount.map((carT, index) => (
                                        <option key={index} value={carT}> {carT} </option>
                                    ))
                                    }
                                </Select>
                                {error.carType && <p>{error.carType}</p>}
                            </FormControl>

                            <FormControl as='fieldset' isRequired>
                                <FormLabel as='legend' >
                                    Modelo de Vehiculo:
                                </FormLabel>
                                <Select color='#000' placeholder='Selecciona un Vehiculo' name='carModel' onChange={handleChange} value={form.carModel}>
                                    {carModelFount.map((carM, index) => (
                                        <option key={index} value={carM}> {carM} </option>
                                    ))
                                    }
                                </Select>
                                {error.carModel && <p>{error.carModel}</p>}
                            </FormControl>

                            <FormControl as='fieldset' isRequired>
                                <FormLabel>Numero de placa</FormLabel>
                                <Input type='text' placeholder='Numero de placa' textTransform='uppercase' name='carPatent' onChange={handleChange} value={form.carPatent} />
                                {error.carPatent && <p>{error.carPatent}</p>}
                            </FormControl>

                            <FormControl as='fieldset' isRequired>
                                <FormLabel>Licencia de manejo</FormLabel>
                                <Input type='text' placeholder='Numero de licencia de manejo' name='driverLicense' onChange={handleChange} value={form.driverLicense} />
                                {error.driverLicense && <p>{error.driverLicense}</p>}
                            </FormControl>
                        </Center>

                        <Center py={2} gap={4} flexDirection={{ base: 'column', md: 'row' }}>
                            <FormControl isRequired>
                                <FormLabel>Foto del vehiculo</FormLabel>
                                <Input type='file' name='carImg' accept="image/*" onChange={handleChange} />
                                {error.carImg && <p>{error.carImg}</p>}
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Fecha de Nac. SOAT</FormLabel>
                                <Input
                                    placeholder="Select birthday and Time"
                                    size="md"
                                    type="date"
                                    name='carSoat' onChange={handleChange} value={form.carSoat}
                                />
                                {error.carSoat && <p>{error.carSoat}</p>}
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Permiso de Circulacion</FormLabel>
                                <Input type='file' name='circulationPermit' accept="image/*" onChange={handleChange} />
                                {error.circulationPermit && <p>{error.circulationPermit}</p>}
                            </FormControl>

                            <FormControl as='fieldset' isRequired>
                                <FormLabel htmlFor='pasajeros'>Maximo de pasajeros</FormLabel>
                                <Select color='#000' placeholder='Cantidad de pasajeros' id='pasajeros' name='capacityPassengers' onChange={handleChange} value={form.capacityPassengers} >
                                    {[...Array(20).keys()].map((number) => (
                                        <option key={number + 1} id={`number-${number + 1}`} value={number + 1}>
                                            {number + 1}
                                        </option>
                                    ))}
                                </Select>
                                {error.capacityPassengers && <p>{error.capacityPassengers}</p>}
                            </FormControl>
                        </Center>
                    </Box>

                    <Box mt={4} >
                        <Button colorScheme='green' w='100%' type='submit'>
                            Registrar Chofer</Button>
                    </Box>
                </Stack>
            </form>
        )
    }

export default ChoferForm;