import { Box, Button, Collapse, useDisclosure, Tooltip } from '@chakra-ui/react'
import { EditIcon, WarningIcon } from '@chakra-ui/icons'
import UpdateDriverData from '../ChoferFormulario/UpdateChoferForm';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

const ViewBtnUpdateDriver = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box  >
            <Tooltip hasArrow label='Editar' bg='#009ED1' placement='right-end'>

                <Button onClick={onOpen} bg='#009ED1'>   
                    <EditIcon />
                </Button>
            </Tooltip>

            <Modal isOpen={isOpen} onClose={onClose} size={{base: 'xl', md: 'auto'}} > 
                <ModalOverlay />
                <ModalContent justifyContent={'center'} size={{base: 'xl', md: 'auto'}} w={{base:'23rem', md: 'auto'}}>
                    <ModalHeader>Modificar Datos del Conductor</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody display='flex' justifyContent={'center'} w='100%' >
                    <UpdateDriverData {...props}  onClose={onClose} />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            {/* <Collapse initialScale={0.7} direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
                <Box
                    h='auto'
                    mt='8'
                    w='auto'
                    overflow='hidden'
                    position='absolute'
                    right='1rem'
                    borderRadius={20}
                    zIndex={99}
                >
                    
                </Box>
            </Collapse> */}
        </Box>
    )
}

export default ViewBtnUpdateDriver;