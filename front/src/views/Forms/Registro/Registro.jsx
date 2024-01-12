import { NavLink } from 'react-router-dom';

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


import { useState } from "react";

const RegistroForm = ({ onSwitchForm }) => {

    const [input, setInput] = useState('')

    const handleInputChange = (e) => setInput(e.target.value)

    const isError = input === ''

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
        <Stack spacing={4} bg='#009ED1' p='5' h='auto' borderRadius='20' boxShadow='dark-lg' w={{ base: '20rem', md: '30rem' }} color='white'>
            <Heading>Formulario de Registro</Heading>
            <FormControl isInvalid={isError}>
                <FormLabel>Nombre</FormLabel>
                <Input type='name' value={input} />
                {!isError ? (
                    <FormHelperText>
                        Ingresa tu nombre
                    </FormHelperText>
                ) : (
                    <FormErrorMessage>Es necesario tu nombre</FormErrorMessage>
                )}
            </FormControl>
            <FormControl>

                <FormLabel>Telefono</FormLabel>
                <Input type='name' value={input} placeholder='Ingresa tu nuemro de celular.' />
                {!isError ? (
                    <FormHelperText>
                        Ingresa tu numero de telefono.
                    </FormHelperText>
                ) : (
                    <FormErrorMessage>Es necesario tu numero de telefono</FormErrorMessage>
                )}
            </FormControl>

            <FormControl>
                <FormLabel>Correo Electronico</FormLabel>
                <Input type='tel' value={input} onChange={handleInputChange} placeholder='Ingresa tu Correo / Email' />
                {!isError ? (
                    <FormHelperText>
                        Ingresa un correo electronico.
                    </FormHelperText>
                ) : (
                    <FormErrorMessage>El correo es requerido.</FormErrorMessage>
                )}
            </FormControl>

            <FormControl>
            <FormLabel>Contraseña</FormLabel>
                <InputGroup size='md'>
                    <Input
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='ingresa una contraseña'
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
                <Select placeholder='Elige Sexo' color='#000' >

                    <option value='f' > Femenino </option>
                    <option value='m' > Masculino </option>
                    <option value='o' > Otro </option>
                </Select>
            </FormControl>


            <Button colorScheme='green'>
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
    )
}

export default RegistroForm;