import Swal from 'sweetalert2'

import {
    Container,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Heading,
    InputGroup,
    Button,
    InputRightElement,
    Stack,
    Checkbox,
    CheckboxGroup,
    Text,
    Link, Select
} from '@chakra-ui/react'
import { useDispatch } from "react-redux";

import { useState } from "react";
import { postNewUser } from '../../../redux/actions';

const RegistroForm = ({ onSwitchForm }) => {
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        sexo: '',
    })

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userCreado = await dispatch(postNewUser(input))
        if (userCreado) {
            setInput({
                name: '',
                phone: '',
                email: '',
                password: '',
                sexo: '',
            })
            Swal.fire({
                title: "Bien hecho!",
                text: "Datos registrados!",
                icon: "success"
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Hubo un error en el registro"
            });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={4} bg='#009ED1' p='5' h='auto' borderRadius='20' boxShadow='dark-lg' w={{ base: '20rem', md: '30rem' }} color='white' >
                <Heading>Formulario de Registro</Heading>
                <FormControl isInvalid={isError} isRequired>
                    <FormLabel>name</FormLabel>
                    <Input type='name' name='name' value={input.name} onChange={handleInputChange} placeholder='Ingresa tu name' />
                    {!isError ? (
                        <FormErrorMessage>Es necesario tu name</FormErrorMessage>
                    ) : null}
                </FormControl>

                <FormControl isRequired>

                    <FormLabel>phone</FormLabel>
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
                    <FormLabel>password</FormLabel>
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

                <FormControl isRequired>
                    <FormLabel>Sexo</FormLabel>
                    <Select placeholder='Elige Sexo' name='sexo' color='#000' onChange={handleInputChange} value={input.sexo} >

                        <option value='f' > Femenino </option>
                        <option value='m' > Masculino </option>
                        <option value='o' > Otro </option>
                    </Select>
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