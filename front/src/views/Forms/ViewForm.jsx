import { Flex } from '@chakra-ui/react'
import ViewBtnUserForm from './ViewForms/ViewUserForm';
import ViewBtnChoferForm from './ViewForms/ViewChoferForm';
import { useState } from 'react';
import { useSelector } from 'react-redux'
import LogOut from './LogOut/logout';


const SlideEx = () => {
    const esAdmin = useSelector((state) => state.esAdmin)
    const esUsuario = useSelector((state) => state.esUsuario)
    //Test de vista de usuario o admin, falta probar con data. 
    return (
        <>
            <Flex minWidth='max-content' gap='2'>
                {/* Cada componente renderiza una vista para usuarios y admin */}
                {esAdmin ? <>
                    <ViewBtnChoferForm/>
                    <LogOut/>
                </>
                    : !esUsuario ?
                    <>
                    <ViewBtnUserForm />
                    </>
                    : <LogOut/>
                }
            </Flex>
        </>
    )
}

export default SlideEx;