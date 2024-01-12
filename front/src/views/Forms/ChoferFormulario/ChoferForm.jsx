import { Box, Center, useDisclosure } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    Input, Select, Button, Heading, Stack, Image, Text, Flex
} from '@chakra-ui/react'
import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'

import { useState } from 'react'
import { useSelector } from "react-redux";
import choferes from '../../../utils/chofer';


import axios from 'axios'

const ChoferForm = () => {
    const choferData = useSelector((state) => state.conductores)
    const [URL_Image, setURL_Image] = useState('')
    // These are the default breakpoints


    const [form, setForm] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        fechaNacimiento: "",
        dni: "",
        telefono: "",
        choferImg: "",
        aeropuerto: "",
        vehiculo: "",
        modelo: "",
        licencia: "",
        vehiculoImg: "",
        soat: "",
        permisoImg: "",
        pasajeros: "",
    });

    const handleChange = (e) => {
        const property = e.target.name;
        const value = e.target.value;
        console.log(property + value);
        setForm({
            ...form,
            [property]: value
        })
    }

    const handleChangeImage = async (e) => {
        const file = e.target.files[0];

        const data = new FormData();

        data.append('file', file);
        data.append('upload_preset', 'VamosONGFormChoferes')

        const response = await axios.post('https://api.cloudinary.com/v1_1/dzd6hfguw/image/upload', data)

        setURL_Image(response.data.secure_url)
    }

    const changeImgChofer = () => {
        setURL_Image('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form) {
            const insertData = choferData.push(form)
            if (insertData) {
                console.log(insertData);
                Swal.fire({
                    title: "Bien Hecho!",
                    text: "chofer registrado exitosamente!",
                    icon: "success"
                });
            }
            setForm({
                nombre: "",
                apellido: "",
                correo: "",
                fechaNacimiento: "",
                dni: "",
                telefono: "",
                choferImg: "",
                aeropuerto: "",
                vehiculo: "",
                modelo: "",
                licencia: "",
                vehiculoImg: "",
                soat: "",
                permisoImg: "",
                pasajeros: "",
            })
        } else {
            alert('Flatan datos')
        }
    }

    return (
        <form onSubmit={handleSubmit} >
            <Stack spacing={4} bg='#009ED1' p='5' h='auto' borderRadius='20' boxShadow='dark-lg' color='white' border='1px solid white' mx='2rem' >
                <Heading>Datos del chofer</Heading>
                <Box  >
                    <Flex flexDirection={{ base: 'column' }}>

                        <Center py={2} gap={4} flexDirection={{ base: 'column', md: 'row' }}>
                            <FormControl isRequired>
                                <FormLabel>Nombre</FormLabel>
                                <Input type='text' placeholder='Nombre' name='nombre' onChange={handleChange} value={form.nombre} />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Apellido</FormLabel>
                                <Input type='text' placeholder='Apellido' name='apellido' onChange={handleChange} value={form.apellido} />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Correo electronico</FormLabel>
                                <Input type='mail' placeholder='Correo Electronico' name='correo' onChange={handleChange} value={form.correo} />
                            </FormControl>
                        </Center>

                        <Center py={2} gap={4} flexDirection={{ base: 'column', md: 'row' }}>
                            <FormControl isRequired>
                                <FormLabel>Fecha de Nac.</FormLabel>
                                <Input
                                    placeholder="Select Date and Time"
                                    size="md"
                                    type="date"
                                    name='fechaNacimiento'
                                    onChange={handleChange} value={form.fechaNacimiento} />
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>DNI</FormLabel>
                                <Input type='number' placeholder='Numero de DNI' name='dni' onChange={handleChange} value={form.dni} />
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Numero de Celular</FormLabel>
                                <Input type='number' placeholder='Numero de celular' name='telefono' onChange={handleChange} value={form.telefono} />
                            </FormControl>
                        </Center>

                        <Center py={2} gap={4} flexDirection={{ base: 'column', md: 'row' }}>

                            <FormControl>
                                <FormLabel>Foto del Chofer</FormLabel>
                                <Input type='file' accept='image/*' name='choferImg' onChange={(e) => { handleChange(e); handleChangeImage; }} value={form.choferImg} />
                                {URL_Image && (
                                    <Image
                                        w='5rem'
                                        h='5rem'
                                        overflow='hidden'
                                        objectFit='cover'
                                        src={URL_Image}
                                    />
                                    // <Text> Imagen renderizada</Text>
                                )
                                }
                            </FormControl>


                            <FormControl isRequired>
                                <FormLabel>Aeropuerto Origen</FormLabel>
                                <Select color='#000' placeholder='Selecciona el Aeropuerto' name='aeropuerto' onChange={handleChange} value={form.aeropuerto}>
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
                                Modelo de Vehiculo:
                            </FormLabel>
                            <Select color='#000'  placeholder='Selecciona un Vehiculo' name='vehiculo' onChange={handleChange} value={form.vehiculo}>
                                {choferes.map((aerop, index) => (
                                    <option  key={aerop.id} value={index}> {aerop.servicioOfrecido} </option>
                                ))
                                }
                            </Select>
                        </FormControl>

                        <FormControl as='fieldset' isRequired>
                            <FormLabel>Numero de placa</FormLabel>
                            <Input type='text' placeholder='Numero de placa' textTransform='uppercase' name='placaVehiculo' onChange={handleChange} value={form.placaVehiculo} />
                        </FormControl>

                        <FormControl as='fieldset' isRequired>
                            <FormLabel>Licencia de manejo</FormLabel>
                            <Input type='text' placeholder='Numero de licencia de manejo' name='licencia' onChange={handleChange} value={form.licencia} />
                        </FormControl>
                    </Center>

                    <Center py={2} gap={4} flexDirection={{ base: 'column', md: 'row' }}>
                        <FormControl isRequired>
                            <FormLabel>Foto del vehiculo</FormLabel>
                            <Input type='file' name='vehiculoImg' onChange={handleChange} value={form.vehiculoImg} />
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>Fecha de Nac. SOAT</FormLabel>
                            <Input
                                placeholder="Select Date and Time"
                                size="md"
                                type="date"
                                name='soat' onChange={handleChange} value={form.soat}
                            />
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>Permiso de Circulacion</FormLabel>
                            <Input type='file' name='permisoImg' onChange={handleChange} value={form.permisoImg} />
                        </FormControl>

                        <FormControl as='fieldset' isRequired>
                            <FormLabel htmlFor='pasajeros'>Maximo de pasajeros</FormLabel>
                            <Select color='#000' placeholder='Cantidad de pasajeros' id='pasajeros' name='pasajeros' onChange={handleChange} value={form.pasajeros} >
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