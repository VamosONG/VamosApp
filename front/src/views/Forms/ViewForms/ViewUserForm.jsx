import { useState } from "react";
import LoginForm from "../Login/Login";
import RegistroForm from "../Registro/Registro";
import {Box, Button, Collapse, useDisclosure } from '@chakra-ui/react'
import LogOut from "../LogOut/logout";

const ViewBtnUserForm = () => {
    const { isOpen, onToggle } = useDisclosure();

    const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

    //Funcion para manjera los formularios
    const handleSwitchForm = () => {
        setIsLoginFormVisible(!isLoginFormVisible);
    };
    return (
        <Box zIndex={99} >
                    <Button onClick={onToggle} >Entrar</Button>
                    <Collapse initialScale={0.9} direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
                        <Box
                            h='auto'
                            mt='4'
                            w='auto'
                            overflow='hidden'
                            position='absolute'
                            right='1rem'
                            borderRadius={20}
                        >
                            {/* Validacion para mostrar formularios */}
                            {isLoginFormVisible ? (
                                <>
                                <LoginForm onSwitchForm={handleSwitchForm} />
                                </>
                            ) : (
                                <>
                                <RegistroForm onSwitchForm={handleSwitchForm} />
                                </>
                            )}
                        </Box>
                    </Collapse>
                </Box>
    )
}

export default ViewBtnUserForm;