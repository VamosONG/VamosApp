import { Link } from "react-router-dom";
import {
    Container,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Heading,
} from '@chakra-ui/react'
import { useState } from "react";

const LoginForm = () => {

    const [input, setInput] = useState('')

    const handleInputChange = (e) => setInput(e.target.value)

    const isError = input === ''

    return (
        <FormControl isInvalid={isError}>
            <Heading>Formulario de Registro</Heading>
            <FormLabel>Email</FormLabel>
            <Input type='email' value={input} onChange={handleInputChange} />
            {!isError ? (
                <FormHelperText>
                    Enter the email you'd like to receive the newsletter on.
                </FormHelperText>
            ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
        </FormControl>
        // <form action="">



        //     <button><Link to='/' >Home</Link></button>
        // </form>
    )
}

export default LoginForm;