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
    Link
} from '@chakra-ui/react'


import { useState } from "react";

const RegistroForm = ({ onSwitchForm }) => {

    const [input, setInput] = useState('')

    const handleInputChange = (e) => setInput(e.target.value)

    const isError = input === ''

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
        <Stack spacing={4} bg='gray.100' p='5' w='auto' h='auto' borderRadius='20' boxShadow='dark-lg' >
            <FormControl isInvalid={isError}>
                <Heading>Formulario de Registro</Heading>
                <FormLabel>Name</FormLabel>
                <Input type='name' value={input} />
                {!isError ? (
                    <FormHelperText>
                        Enter the name.
                    </FormHelperText>
                ) : (
                    <FormErrorMessage>Name is required.</FormErrorMessage>
                )}

                <FormLabel>Telefono</FormLabel>
                <Input type='name' value={input} />
                {!isError ? (
                    <FormHelperText>
                        Enter the phone.
                    </FormHelperText>
                ) : (
                    <FormErrorMessage>Name is required.</FormErrorMessage>
                )}

                <FormLabel>Email</FormLabel>
                <Input type='tel' value={input} onChange={handleInputChange} />
                {!isError ? (
                    <FormHelperText>
                        Enter the number.
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

                <CheckboxGroup colorScheme='green' defaultValue={['otro']}>
                    <Stack spacing={[1, 5]} direction={['column', 'row']}>
                        <Checkbox value='femenino'>Femenino</Checkbox>
                        <Checkbox value='masculino'>Masculino</Checkbox>
                        <Checkbox value='otro'>Otro</Checkbox>
                    </Stack>
                </CheckboxGroup>
            </FormControl>

            <Button colorScheme='teal' variant='outline'>
                Registrar
            </Button>
            <Container>
                <Text>
                    ¿Ya tienes cuenta?{' '}
                    <Button  color='teal.500' onClick={onSwitchForm}>
                        Iniciar Sesion
                    </Button>
                </Text>
            </Container>
        </Stack>
    )
}

export default RegistroForm;