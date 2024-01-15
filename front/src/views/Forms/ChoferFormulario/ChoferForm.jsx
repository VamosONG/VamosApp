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
import { createNewChofer } from '../../../redux/actions';
import axios from "axios"

const ChoferForm = () => {
    const dispatch = useDispatch();
    const choferData = useSelector((state) => state.conductores)
    const [image_Url, setImage_Url] = useState("")
    const [file, setFile] = useState(null)

    const [form, setForm] = useState({
        name: "",
        surname: "",
        email: "",
        date: "",
        dni: "",
        phone: "",
        choferImg: "",
        aeropuerto: "",
        vehiculo: "",
        modelo: "",
        licencia: "",
        vehiculoImg: "",
        placaVehiculo: '',
        soat: "",
        permisoImg: "",
        pasajeros: "",
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

    const changeUploadImage = async (event) => {
        const fileChofer= event.target.files[0];
        const data = new FormData()

        data.append("file", fileChofer)
        data.append("upload_preset", "Presets_vamos")
        const response= await axios.post('https://api.cloudinary.com/v1_1/dcjdkojad/image/upload', data)

        console.log(response.data);

        setImage_Url(response.data.secure_url)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

    // //     const formData = new FormData()
    // //     formData.append('file', file)
    // //     formData.append('upload_preset', 'VamosONGFormChoferes')

    // //     console.log(file);

    // //     const response = await fetch(urlCloudinary, {
    // //         method: 'POST',
    // //         body: formData,
    // //     })
    // //     const data = response
    // //     console.log(data);
    // //     setImage_Url(data.url)

    // //     if (!response.ok) {
    // //         throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        // const choferCreate = await dispatch(createNewChofer(form))
        // if (choferCreate) {

        //     Swal.fire({
        //         title: "Bien hecho!",
        //         text: "Datos registrados!",
        //         icon: "success"
        //     });
        //     setForm({
        //         name: "",
        //         surname: "",
        //         email: "",
        //         date: "",
        //         dni: "",
        //         phone: "",
        //         choferImg: "",
        //         aeropuerto: "",
        //         vehiculo: "",
        //         modelo: "",
        //         licencia: "",
        //         vehiculoImg: "",
        //         placaVehiculo: '',
        //         soat: "",
        //         permisoImg: "",
        //         pasajeros: "",
        //     })
            
        // } else {
        //     Swal.fire({
        //         icon: "error",
        //         title: "Oops...",
        //         text: "Hubo un error en el registro"
        //     });
        // }
    

    return (
        <form onSubmit={handleSubmit} >
            <input type="file"
            accept='image/*'
            onChange={changeUploadImage}
            />
                    <button type='submit'> Enviar imagen </button>
            {image_Url && (
                <div>
                    <img src={image_Url} alt='foto del'/>
                </div>
            )}
            {/* <Stack spacing={4} bg='#009ED1' p='5' h='auto' borderRadius='20' boxShadow='dark-lg' color='white' border='1px solid white' mx='2rem' w={{ base: '20rem', md: '40rem' }} scrollMarginX='auto'>
                <Heading>Datos del chofer</Heading>
                <Box  >
                    <Flex flexDirection={{ base: 'column' }}>

                        <Center py={2} gap={4} flexDirection={{ base: 'column', md: 'row' }}>
                            <FormControl isRequired>
                                <FormLabel>name</FormLabel>
                                <Input type='text' placeholder='name' name='name' onChange={handleChange} value={form.name} />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>surname</FormLabel>
                                <Input type='text' placeholder='surname' name='surname' onChange={handleChange} value={form.surname} />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>email electronico</FormLabel>
                                <Input type='mail' placeholder='email Electronico' name='email' onChange={handleChange} value={form.email} />
                            </FormControl>
                        </Center>

                        <Center py={2} gap={4} flexDirection={{ base: 'column', md: 'row' }}>
                            <FormControl isRequired>
                                <FormLabel>Fecha de Nac.</FormLabel>
                                <Input
                                    placeholder="Select Date and Time"
                                    size="md"
                                    type="date"
                                    name='date'
                                    onChange={handleChange} value={form.date} />
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
                                    name='choferImg'
                                    accept="image/*"
                                    onChange={handleChange} />
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
                            <Select color='#000' placeholder='Selecciona un Vehiculo' name='vehiculo' onChange={handleChange} value={form.vehiculo}>
                                {choferes.map((aerop, index) => (
                                    <option key={aerop.id} value={index}> {aerop.servicioOfrecido} </option>
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
                            <Input type='file' name='vehiculoImg' accept="image/*" onChange={handleChange}/>
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
                            <Input type='file' name='permisoImg' accept="image/*" onChange={handleChange} />
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
            </Stack> */}
        </form>
    )

}
export default ChoferForm;