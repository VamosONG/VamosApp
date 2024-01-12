import { useState } from "react";
import LoginForm from "../Login/Login";
import RegistroForm from "../Registro/Registro";
import {Box, Button, Collapse, useDisclosure } from '@chakra-ui/react'

const ViewBtnUserForm = () => {
    const { isOpen, onToggle } = useDisclosure();

    const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

    //Funcion para manjera los formularios
    const handleSwitchForm = () => {
        setIsLoginFormVisible(!isLoginFormVisible);
    };
    return (
        <Box zIndex={99} mx='3rem'>
                    <Button onClick={onToggle} bg='blue.200' color='white'  >Entrar</Button>
                    <Collapse initialScale={0.9} direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
                        <Box
                            h='auto'
                            mt='4'
                            position='absolute'
                        >
                            {/* Validacion para mostrar formularios */}
                            {isLoginFormVisible ? (
                                <LoginForm onSwitchForm={handleSwitchForm} />
                            ) : (
                                <RegistroForm onSwitchForm={handleSwitchForm} />
                            )}
                        </Box>
                    </Collapse>
                </Box>
    )
}

export default ViewBtnUserForm;