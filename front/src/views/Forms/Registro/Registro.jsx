//DEPENDENCIES
import axios from "axios";

//Styles
import Swal from 'sweetalert2'
import {
    Container,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Heading,
    InputGroup,
    Button,
    InputRightElement,
    Stack,
    Text,
} from '@chakra-ui/react'
//HOOKS
import { useState } from "react";
import { useAuth } from '../../../context/authContext';
import { useNavigate } from "react-router";



const RegistroForm = ({ onSwitchForm }) => {

    const [input, setInput] = useState({
        name: '',
        surname: '',
        phone: '',
        email: '',
        // password: '',
        dni: '',
    })
    //  surname, email, phone, dni

    const handleInputChange = (e) => {
        e.preventDefault();
        const property = e.target.name;
        const value = e.target.value;
        console.log(property + ' ' + value);
        setInput({
            ...input,
            [property]: value
        })
    }

    const isError = input === ''

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    //Autenticacion
    const auth = useAuth();
    const { displayName } = auth.user

    const navigate= useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
             await auth.register(input.email, input.password, { displayName });
            console.log( 'input data', input);
            const userCreated = await axios.post(`http://localhost:3001/user/create`, input);
            // await axios.post(`http://localhost:3001/send-mail`, {
            //     userId: userCreated.id,
            //     option: "signIn"
            // })
            console.log("usuario:", {displayName});
            if (userCreated) {
                Swal.fire({
                    title: "Bien hecho!",
                    text: "Datos registrados!",
                    icon: "success"
                });

                navigate('/solicitarViaje')

                setInput({
                     name: '',
                    surname: '',
                    phone: '',
                    email: '',
                    // password: '',
                    dni: '',
                });
            } else {
                Swal.fire({
                    title: "Error al crear usuario!",
                    text: "no se registro!",
                    icon: "error"
                });
            }
        } catch (error) {
            console.log(input);
            console.error(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Hubo un error en el registro",
            });
        }

        // return true;
    };
    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={4} bg='#009ED1' p='5' h='auto' borderRadius='20' boxShadow='dark-lg' w={{ base: '20rem', md: '30rem' }} color='white' >
                <Heading>Formulario de Registro</Heading>
                <FormControl isInvalid={isError} isRequired>
                    <FormLabel>Nombre</FormLabel>
                    <Input type='text' name='name' value={input.name} onChange={handleInputChange} placeholder='Ingresa tu name' />
                    {!isError ? (
                        <FormErrorMessage>Es necesario tu name</FormErrorMessage>
                    ) : null}
                </FormControl>

                <FormControl isInvalid={isError} isRequired>
                    <FormLabel>Apellido</FormLabel>
                    <Input type='text' name='surname' value={input.surname} onChange={handleInputChange} placeholder='Ingresa tu name' />
                    {!isError ? (
                        <FormErrorMessage>Es necesario tu surname</FormErrorMessage>
                    ) : null}
                </FormControl>
                <FormControl isRequired>

                    <FormLabel>Telefono</FormLabel>
                    <Input type='number' name='phone' value={input.phone} placeholder='Ingresa tu nuemro de celular.' onChange={handleInputChange} />
                    {isError ? (
                        <FormErrorMessage>Es necesario tu numero de phone</FormErrorMessage>
                    ) : null}
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Correo Electronico</FormLabel>
                    <Input type='mail' name='email' value={input.email} onChange={handleInputChange} placeholder='Ingresa tu email' />
                    {isError ? (
                        <FormErrorMessage>El email es requerido.</FormErrorMessage>
                    ) : null}
                </FormControl>

                <FormControl isRequired>

                    <FormLabel>DNI</FormLabel>
                    <Input type='number' name='dni' value={input.dni} placeholder='Ingresa tu nuemro de celular.' onChange={handleInputChange} />
                    {isError ? (
                        <FormErrorMessage>Es necesario tu numero de phone</FormErrorMessage>
                    ) : null}
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='ingresa una password'
                            onChange={handleInputChange}
                            name='password'
                            value={input.password}
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>

                <Button colorScheme='green' type='submit'>
                    Registrar
                </Button>

                <Container>
                    <Text>
                        ¿Ya tienes cuenta?{' '}
                        <Button color='teal.500' onClick={onSwitchForm}>
                            Iniciar Sesion
                        </Button>
                    </Text>
                </Container>

            </Stack>
        </form>
    )
}

export default RegistroForm;