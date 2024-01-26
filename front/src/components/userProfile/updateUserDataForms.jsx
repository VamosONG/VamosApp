import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, useDisclosure, Button, Input, FormControl, FormLabel
} from '@chakra-ui/react'
import { useRef } from 'react'
import { PhoneIcon, AddIcon, WarningIcon, EditIcon } from '@chakra-ui/icons'
import axios from 'axios';
import Swal from "sweetalert2";
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getDataUser, getDetailUserById } from '../../redux/actions';

const UpdateUserDataForm = ({ userDetail }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [newData, setNewData] = useState('');
    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const dispatch = useDispatch();
    const {id} = userDetail;
    const handleChange = (e) => {
        const property = e.target.name;
        let value = e.target.value;
        console.log(property + " " + value);
        setNewData({
            ...newData,
            [property]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (newData) {
            console.log('1 sub ' , newData);
            const response = await axios.patch(`http://localhost:3001/user/update/${id}`, {newData})
            if (response) {
                console.log("des1 de la actualización:", newData);
                Swal.fire({
                    title: "Bien hecho!",
                    text: "Datos actualizados",
                    icon: "success",
                });
                await dispatch(getDataUser())
                await onClose()
            } else {
                throw new Error(
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Hubo un error en la actualizacion",
                    })

                );
            }
        } else {
            onsole.log("form " + newData);
            Swal.fire({
                icon: "error",
                title: "Error en Formulario",
                text: "Hay un error en el newData",
            });
        }
    };


    return (
        <>
            <Button onClick={onOpen} bg='#10447E' color={'white'} > <EditIcon /></Button>
            {/* <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button> */}

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
                // onSubmit={(e) => handleSubmit(e, userDetail.id)}
            >
                <ModalOverlay />
                <ModalContent > 
                    <form onSubmit={handleSubmit}>

                    <ModalHeader>Modifica un dato  {userDetail.name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Nombre</FormLabel>
                            <Input ref={initialRef} type='text' name='name' onChange={handleChange} value={newData.name} placeholder='Ingresa un nuevo nombre' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Apellido</FormLabel>
                            <Input placeholder='Ingresa un nuevo apellido' type='text' name='surname' onChange={handleChange} value={newData.surname} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Correo electronico</FormLabel>
                            <Input placeholder='Ingresa un nuevo correo' type='mail' name='email' onChange={handleChange} value={newData.email} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>DNI</FormLabel>
                            <Input placeholder='Ingresa un nuevo DNI' type='number' name='dni' onChange={handleChange} value={newData.dni} />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} type='submit'>
                            Actualizar
                        </Button>
                        <Button onClick={onClose}>Cancelar</Button>
                    </ModalFooter>
                </form>
                </ModalContent>
            </Modal>
        </>
    )
}
export default UpdateUserDataForm