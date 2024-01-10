import {  Flex } from '@chakra-ui/react'
import ViewBtnUserForm from './ViewForms/ViewUserForm';
import ViewBtnChoferForm from './ViewForms/ViewChoferForm';
import { useState } from 'react';

const SlideEx = () => {
    //Test de vista de usuario o admin, falta probar con data. 
    const  {user, setUser} = useState(false)
    return (
        <>
            <Flex minWidth='max-content' gap='2'>
                {/* Cada componente renderiza una vista para usuarios y admin */}
                {!user ? <ViewBtnUserForm/> :
                <ViewBtnChoferForm/> }           
            </Flex>
        </>
    )
}

export default SlideEx;