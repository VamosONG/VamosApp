import { useRef, useState } from "react";
import LoginForm from "../Login/Login";
import RegistroForm from "../Registro/Registro";
import { Box, Button, Collapse, useDisclosure } from '@chakra-ui/react'
import LogOut from "../LogOut/logout";
import { Avatar } from "@chakra-ui/react";
import { BsFillEmojiNeutralFill } from "react-icons/bs";
import { HamburgerIcon } from '@chakra-ui/icons'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input,
} from "@chakra-ui/react";



const ViewBtnUserForm = () => {
    // const { isOpen, onToggle } = useDisclosure();
    return (
        <>
         <Drawer
                        isOpen={isOpen}
                        placement="right"
                        onClose={onClose}
                        finalFocusRef={btnRef}>
                        <DrawerOverlay />
                        <DrawerContent
                            mt='2'
                            w='auto'
                            overflow='hidden'
                            position='absolute'
                            right='2rem'
                            borderRadius={0}
                            h={"max-content"}>
                            <DrawerBody>
                                <Box>
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
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
        </>
    )
}

export default ViewBtnUserForm;