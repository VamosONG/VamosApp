import { useState } from "react";
import LoginForm from "../Login/Login";
import RegistroForm from "../Registro/Registro";
import {Box, Button, Collapse, useDisclosure } from '@chakra-ui/react'
import LogOut from "../LogOut/logout";
import { Avatar } from "@chakra-ui/react";
import { BsFillEmojiNeutralFill } from "react-icons/bs";

const ViewBtnUserForm = (currentUser) => {
    const { isOpen, onToggle } = useDisclosure();

    const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

    //Funcion para manjera los formularios
    const handleSwitchForm = () => {
        setIsLoginFormVisible(!isLoginFormVisible);
    };
    return (
        <Box zIndex={99}>
                    <Avatar onClick={onToggle} bg= "rgb(0, 158, 209)"  name={currentUser.name} />
                    <Collapse initialScale={0.9} direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
                        <Box
                            h='auto'
                            mt='2'
                            w='auto'
                            overflow='hidden'
                            position='absolute'
                            right='2rem'
                            borderRadius={0}
                            
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