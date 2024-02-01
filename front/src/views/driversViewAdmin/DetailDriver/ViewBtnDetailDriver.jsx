import { Box, Button, Collapse, useDisclosure, Tooltip } from '@chakra-ui/react'
import { EditIcon, ViewIcon } from '@chakra-ui/icons'
import { useState } from 'react';
import DriverDetail from './driverDetail';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

const ViewBtnDetailDriver = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box  >
            <Tooltip hasArrow label='Ver mas' bg='yellow.200' placement='right-start' color='#000'>

                <Button onClick={onOpen} bg='#10447E' color="white"><ViewIcon /></Button>
            </Tooltip>
            <Modal isOpen={isOpen} onClose={onClose} size={{base: 'xl', md: 'auto'}} > 
                <ModalOverlay />
                <ModalContent justifyContent={'center'} size={{base: 'xl', md: 'auto'}} w={{base:'23rem', md: 'auto'}}>
                    <ModalHeader>Detalles del Conductor</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody display='flex' justifyContent={'center'} w='100%'>
                    <DriverDetail {...props} />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default ViewBtnDetailDriver;