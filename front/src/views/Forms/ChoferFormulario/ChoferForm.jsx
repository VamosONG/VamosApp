import { Box, Center, useDisclosure } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    Input, Select, Button, Heading, Stack
} from '@chakra-ui/react'

import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";



const ChoferForm = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const choferData = useSelector((state) => state.conductores)

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

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form) {
            const insertData = choferData.push(form)
            if (insertData) {
                console.log(insertData);
                alert('Chofer registrado exitosamente')
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
            alert('Faltan datos en el formulario')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={4} bg='gray.100' p='5' h='auto' borderRadius='20' boxShadow='dark-lg' >
                <Heading>Datos del chofer</Heading>
                <Box>
                    <Center py={2} gap={4} >
                        <FormControl isRequired>
                            <FormLabel>Nombre</FormLabel>
                            <Input type='text' placeholder='Nombre' name='nombre' onChange={handleChange} value={form.nombre} />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Apellido</FormLabel>
                            <Input type='text' placeholder='Apellido' name='apellido' onChange={handleChange} value={form.apellido} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Correo electronico</FormLabel>
                            <Input type='mail' placeholder='Correo Electronico' name='correo' onChange={handleChange} value={form.correo} />
                        </FormControl>
                    </Center>

                    <Center py={2} gap={4} >
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

                    <Center py={2} gap={4}>

                        <FormControl>
                            <FormLabel>Foto del Chofer</FormLabel>
                            <Input type='file' name='choferImg' onChange={handleChange} value={form.choferImg} />
                        </FormControl>


                        <FormControl>
                            <FormLabel>Aeropuerto Origen</FormLabel>
                            <Select placeholder='Selecciona el Aeropuerto' name='aeropuerto' onChange={handleChange} value={form.aeropuerto}>
                                <option>Talara</option>
                                <option>Tumbes</option>
                            </Select>
                        </FormControl>

                        <FormControl as='fieldset'>
                            <FormLabel as='legend'>
                                Servicio que ofrece:
                            </FormLabel>
                            <Select placeholder='Selecciona un Vehiculo' name='vehiculo' onChange={handleChange} value={form.vehiculo}>
                                <option value='auto' >Auto</option>
                                <option value='vans'>Mini Vans</option>
                                <option value='todos'>Ambos</option>
                            </Select>
                        </FormControl>


                    </Center>
                </Box>

                <Box bg='blue.200' py={4} px={2} borderRadius={10}>
                    <Heading>Datos del vehiculo</Heading>
                    <Center py={2} gap={4}>

                        <FormControl as='fieldset' isRequired>
                            <FormLabel>Modelo</FormLabel>
                            <Input type='text' placeholder='Modelo' name='modelo' onChange={handleChange} value={form.modelo} />
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

                    <Center py={2} gap={4}>
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
                            <FormLabel>Maximo de pasajeros</FormLabel>
                            <Input type='text' name='pasajeros' onChange={handleChange} value={form.pasajeros} maxLength={2} />
                        </FormControl>
                    </Center>
                </Box>

                <Box mt={4}>
                    <Button colorScheme='teal' variant='outline' w='100%' type='submit'>
                        Registrar Chofer</Button>
                </Box>
            </Stack>
        </form>
    )
}

export default ChoferForm;