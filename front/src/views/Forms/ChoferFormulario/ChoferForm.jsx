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
        airport: "",
        carType: "",
        carModel: "",
        driverLicense: "",
        carImg: "",
        carPatent: '',
        carSoat: "",
        circulationPermit: "",
        capacityPassengers: "",
    });

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

        try {
            const response = await axios.post(`http://localhost:3001/drivers/create`, form)
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
                        airport: "",
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
                    throw new Error(error)
                }
        } catch (error) {
            throw new Error (Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Hubo un error en el registro"
            }))
        }
    }

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
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Apellido</FormLabel>
                                <Input type='text' placeholder='surname' name='surname' onChange={handleChange} value={form.surname} />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Correo electronico</FormLabel>
                                <Input type='mail' placeholder='Correo electronico' name='email' onChange={handleChange} value={form.email} />
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
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>DNI</FormLabel>
                                <Input type='number' placeholder='Numero de DNI' name='dni' onChange={handleChange} value={form.dni} />
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Numero de Celular</FormLabel>
                                <Input type='number' placeholder='Numero de celular' name='phone' onChange={handleChange} value={form.phone} />
                            </FormControl>
                        </Center>

                        <Center py={2} gap={4} flexDirection={{ base: 'column', md: 'row' }}>

                            <FormControl>
                                <FormLabel>Foto del Chofer</FormLabel>
                                <Input type='file'
                                    name='driverImg'
                                    accept="image/*"
                                    onChange={handleChange} />
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Aeropuerto Origen</FormLabel>
                                <Select color='#000' placeholder='Selecciona el Aeropuerto' name='airport' onChange={handleChange} value={form.airport}>
                                    {choferes.map((aerop, index) => (
                                        <option key={aerop.id} value={index}> {aerop.aeropuertoOrigen} </option>
                                    ))
                                    }
                                </Select>
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
                                {choferes.map((aerop, index) => (
                                    <option key={aerop.id} value={index}> {aerop.servicioOfrecido} </option>
                                ))
                                }
                            </Select>
                        </FormControl>

                        <FormControl as='fieldset' isRequired>
                            <FormLabel as='legend' >
                                Modelo de Vehiculo:
                            </FormLabel>
                            <Select color='#000' placeholder='Selecciona un Vehiculo' name='carModel' onChange={handleChange} value={form.carModel}>
                                {choferes.map((aerop, index) => (
                                    <option key={aerop.id} value={index}> {aerop.modeloVehiculo} </option>
                                ))
                                }
                            </Select>
                        </FormControl>

                        <FormControl as='fieldset' isRequired>
                            <FormLabel>Numero de placa</FormLabel>
                            <Input type='text' placeholder='Numero de placa' textTransform='uppercase' name='carPatent' onChange={handleChange} value={form.carPatent} />
                        </FormControl>

                        <FormControl as='fieldset' isRequired>
                            <FormLabel>Licencia de manejo</FormLabel>
                            <Input type='text' placeholder='Numero de licencia de manejo' name='driverLicense' onChange={handleChange} value={form.driverLicense} />
                        </FormControl>
                    </Center>

                    <Center py={2} gap={4} flexDirection={{ base: 'column', md: 'row' }}>
                        <FormControl isRequired>
                            <FormLabel>Foto del vehiculo</FormLabel>
                            <Input type='file' name='carImg' accept="image/*" onChange={handleChange} />
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>Fecha de Nac. SOAT</FormLabel>
                            <Input
                                placeholder="Select birthday and Time"
                                size="md"
                                type="date"
                                name='carSoat' onChange={handleChange} value={form.carSoat}
                            />
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>Permiso de Circulacion</FormLabel>
                            <Input type='file' name='circulationPermit' accept="image/*" onChange={handleChange} />
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