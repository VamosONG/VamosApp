import { Flex } from '@chakra-ui/react'
import ViewBtnUserForm from './ViewForms/ViewUserForm';
import ViewBtnChoferForm from './ViewForms/ViewChoferForm';
import { useState } from 'react';
import { useSelector } from 'react-redux'
import LogOut from './LogOut/logout';


const SlideEx = () => {
    const {currentUser}  = useSelector((state) => state)
    //Test de vista de usuario o admin, falta probar con data. 
    return (
        <>
            <Flex minWidth='max-content' gap='2'>
                {/* Cada componente renderiza una vista para usuarios y admin */}
                {currentUser.admin ? <>
                    <ViewBtnChoferForm/>
                    <LogOut/>
                </>
                    : 
                    <>
                    {/* Falta validar si el usuario no es admin, que renderice solo el boton de entrar y luego de estar logeado el usuario, que se renderice el boton de salir junto con el icono */}
                    <ViewBtnUserForm />
                    <LogOut/> 
                    </>
                }
            </Flex>
        </>
    )
}

export default SlideEx;