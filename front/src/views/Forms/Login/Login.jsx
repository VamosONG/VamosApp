import { NavLink } from "react-router-dom";
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
    InputLeftAddon,
Link, Text
} from '@chakra-ui/react'
import { useState } from "react";

const LoginForm = ({ onSwitchForm }) => {

    const [input, setInput] = useState('')
    const [show, setShow] = useState(false)

    //Falta configurar para el manero de los inputs
    const handleInputChange = (e) => setInput(e.target.value)

    const isError = input === ''

    //Maneja la vista de la contraseña
    const handleClick = () => setShow(!show)

    return (
        <Stack spacing={4} bg='gray.100' p='5' h='auto' borderRadius='20' boxShadow='dark-lg'>

            {/* Falta controlar los datos ingresados */}
            <FormControl isInvalid={isError}>
                <Heading>Iniciar Sesion</Heading>

                <FormLabel>Email</FormLabel>
                <Input type='email' value={input} onChange={handleInputChange} />
                {!isError ? (
                    <FormHelperText>
                        Enter the email you'd like to receive the newsletter on.
                    </FormHelperText>
                ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                )}

                <InputGroup size='md'>
                    <Input
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <Button colorScheme='teal' variant='outline'>
                Entrar
            </Button>

            <Container>
                <Text>
                    ¿No tienes cuenta?{' '}
                    <Button  color='teal.500' onClick={onSwitchForm}  >
                        Registrarme
                    </Button>
                </Text>
            </Container>
        </Stack>
    )
}

export default LoginForm;