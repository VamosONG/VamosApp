
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
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2'
import { logIn } from '../../../redux/actions';

const LoginForm = ({ onSwitchForm }) => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const [input, setInput] = useState({
        email: "",
        password: ""
    })

    //Falta configurar para el manero de los inputs
    const handleInputChange = (e) => setInput({
        ...input,
        [e.target.name]: e.target.value
    }
    )
    const isError = input === ''
    //Maneja la vista de la contraseña
    const handleSubmit= async (event)=>{
        event.preventDefault();

        console.log("funciona submit")
        console.log(input)
        await dispatch(logIn(input))
    }

    return (
        <Stack spacing={4} bg='#009ED1' p='5' h='auto' borderRadius='20' boxShadow='dark-lg' color='white'
            w={{ base: '20rem', md: '30rem' }}>

            {/* Falta controlar los datos ingresados */}
            <FormControl isInvalid={isError} isRequired>
                <FormLabel>Correo Electronico</FormLabel>
                <Input type='text' value={input.email} onChange={handleInputChange} placeholder='Ingresa tu Correo / Email' name='email' />
                {isError ? (
                    <FormErrorMessage>El correo es requerido.</FormErrorMessage>
                ) : null}
            </FormControl>

            <FormControl isInvalid={isError} isRequired>
                <FormLabel>Contraseña</FormLabel>
                <InputGroup size='md'>
                    <Input
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Ingresa una contraseña'
                        name='password'
                        onChange={handleInputChange}
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <Button colorScheme='green' onClick={handleSubmit}>
                Entrar
            </Button>

            <Container>
                <Text>
                    ¿No tienes cuenta?{' '}
                    <Button color='teal.500' onClick={onSwitchForm}  >
                        Registrarme
                    </Button>
                </Text>
            </Container>
        </Stack>
    )
}

export default LoginForm;