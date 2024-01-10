import { Box, Center, Divider, useDisclosure } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    Radio,
    RadioGroup,
    FormHelperText,
    HStack,
    Input, Select, Button, Collapse, Heading, Stack
} from '@chakra-ui/react'

import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

const ChoferForm = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Stack spacing={4} bg='gray.100' p='5' h='auto' borderRadius='20' boxShadow='dark-lg'>
            <Heading>Datos del chofer</Heading>
            <Box>
                <Center py={2} gap={4} >
                    <FormControl isRequired>
                        <FormLabel>Nombre</FormLabel>
                        <Input type='text' placeholder='Nombre' />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Apellido</FormLabel>
                        <Input type='text' placeholder='Apellido' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Correo electronico</FormLabel>
                        <Input type='mail' placeholder='Correo Electronico' />
                    </FormControl>
                </Center>

                <Center py={2} gap={4} >
                    <FormControl isRequired>
                        <FormLabel>Fecha de Nac.</FormLabel>
                        <Input
                            placeholder="Select Date and Time"
                            size="md"
                            type="datetime-local"
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>DNI</FormLabel>
                        <Input type='number' placeholder='Numero de DNI' />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Numero de Celular</FormLabel>
                        <Input type='number' placeholder='Numero de celular' />
                    </FormControl>
                </Center>

                <Center py={2} gap={4}>

                    <FormControl>
                        <FormLabel>Foto del Chofer</FormLabel>
                        <Input type='file' />
                    </FormControl>


                    <FormControl>
                        <FormLabel>Aeropuerto Origen</FormLabel>
                        <Select placeholder='Selecciona el Aeropuerto'>
                            <option>Talara</option>
                            <option>Tumbes</option>
                        </Select>
                    </FormControl>

                    <FormControl as='fieldset'>
                        <FormLabel as='legend'>
                            Servicio que ofrece:
                        </FormLabel>
                        <RadioGroup defaultValue='todos'>
                            <HStack spacing='24px'>
                                <Radio value='auto'>Auto</Radio>
                                <Radio value='vans'>Mini Vans</Radio>
                                <Radio value='todos'>Ambos</Radio>
                            </HStack>
                        </RadioGroup>
                    </FormControl>


                </Center>
            </Box>

            <Box bg='blue.200' py={4} px={2} borderRadius={10}>
                <Heading>Datos del vehiculo</Heading>
                <Center py={2} gap={4}>

                    <FormControl as='fieldset' isRequired>
                        <FormLabel>Modelo</FormLabel>
                        <Input type='text' placeholder='Modelo' />
                    </FormControl>

                    <FormControl as='fieldset' isRequired>
                        <FormLabel>Numero de placa</FormLabel>
                        <Input type='text' placeholder='Numero de placa' textTransform='uppercase' />
                    </FormControl>

                    <FormControl as='fieldset' isRequired>
                        <FormLabel>Licencia de manejo</FormLabel>
                        <Input type='text' placeholder='Numero de licencia de manejo' />
                    </FormControl>
                </Center>

                <Center py={2} gap={4}>
                    <FormControl isRequired>
                        <FormLabel>Foto del vehiculo</FormLabel>
                        <Input type='file' />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Fecha de Nac. SOAT</FormLabel>
                        <Input
                            placeholder="Select Date and Time"
                            size="md"
                            type="datetime-local"
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Permiso de Circulacion</FormLabel>
                        <Input type='file' />
                    </FormControl>

                    <FormControl as='fieldset' isRequired>
                        <FormLabel>Maximo de pasajeros</FormLabel>
                        <NumberInput defaultValue={4} min={1} max={20}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>
                </Center>
            </Box>

            <Box mt={4}>
                <Button onClick={onOpen} colorScheme='teal' variant='outline' w='100%'>
                    Registrar Chofer</Button>
                <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Registar el nuevo chofer</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            ¿Seguro que quieres registar este chofer?
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3}>
                                Si
                            </Button>
                            <Button onClick={onClose}>Cancelar</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        </Stack>
    )
}

export default ChoferForm;