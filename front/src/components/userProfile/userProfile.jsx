import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import {
    Box,
    Flex,
    Image,
    Heading,
    Link as ChakraLink,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    VStack,
    FormControl,
    FormLabel,
    Input,
    Button,
    SimpleGrid,
    Text,
    Divider,
} from '@chakra-ui/react';
import NavBar from '../navBar/NavBar';

const UserProfile = ({ userProfile, setUserProfile }) => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('perfil'); // Estado para controlar la pestaña activa

    const handleTabChange = (tab) => {
    setActiveTab(tab);
    };

    // Estados para los campos del formulario de modificación
    const [name, setName] = useState(userProfile ? userProfile.name : '');
    const [lastName, setLastName] = useState(userProfile ? userProfile.lastName : '');
    const [phone, setPhone] = useState(userProfile ? userProfile.phone : '');

    // Funciones de cambio para los campos del formulario
    const handleNameChange = (e) => setName(e.target.value);
    const handleLastNameChange = (e) => setLastName(e.target.value);
    const handlePhoneChange = (e) => setPhone(e.target.value);

    // Función para manejar la actualización de información
    const handleUpdateInfo = () => {
    // Aquí debes implementar la lógica para enviar los datos actualizados al servidor
    // y manejar la actualización del estado local si es necesario
    // Ejemplo: setUserProfile({ ...userProfile, name, lastName, phone });
    };

    return (
    <Box>
        {location.pathname !== '/profile' && <NavBar />}

        <Flex justify="space-between" align="center" p="4">
            <Box>
                <Image
                src="https://res.cloudinary.com/drgnsbah9/image/upload/v1705765709/Vamos/Logo-Vamos-600pxCELESTE_xl11zs.png"
                alt="Logo de la empresa"
                maxW="100px"  // Ajusta el ancho máximo según tus necesidades
                />
            </Box>
            <Box>
                <Link to="/" className="back-button">
                <Button 
                display="inline-flex"
                alignItems="center"
                padding="8px 16px"
                borderRadius="md"
                borderWidth="1px"
                borderColor="#10447E"
                color="#10447E"
                fontWeight="semibold"
                _hover={{ bg: '#009ED1', color: 'white' }}
                >
                <FaArrowLeft style={{ marginRight: '8px' }} /> INICIO
                </Button>
                </Link>
            </Box>
        </Flex>
        <Divider />

        <VStack p="4" align="center" minHeight="80vh">
            <Heading as="h2">Bienvenido, {userProfile ? userProfile.name : 'Usuario'}</Heading>

                <Tabs isFitted variant="enclosed" onChange={handleTabChange} mt="4">
                <TabList mb="1em" borderBottom="1px" borderColor="gray.200" borderRadius="md">
                <Tab
                px={4}
                py={2}
                mr={2}
                borderBottom="2px"
                borderColor={activeTab === 'perfil' ? 'teal.500' : 'transparent'}
                _hover={{ bg: 'teal.50', color: 'teal.500' }}
                _selected={{ bg: 'teal.100', color: 'teal.500' }}
                onClick={() => handleTabChange('perfil')}
                >
                Perfil
                </Tab>
                <Tab
                px={4}
                py={2}
                borderBottom="2px"
                borderColor={activeTab === 'reservas' ? 'teal.500' : 'transparent'}
                _hover={{ bg: 'teal.50', color: 'teal.500' }}
                _selected={{ bg: 'teal.100', color: 'teal.500' }}
                onClick={() => handleTabChange('reservas')}
                >
                Reservas
                </Tab>
                </TabList>
            <TabPanels>
            <TabPanel p={4} bg="gray.100" borderRadius="md">
              {/* Formulario de modificación de datos */}
        <VStack spacing="4">
            <FormControl>
                <FormLabel>Nombre</FormLabel>
                <Input type="text" value={name} onChange={handleNameChange} />
            </FormControl>

            <FormControl>
                <FormLabel>Apellido</FormLabel>
                <Input type="text" value={lastName} onChange={handleLastNameChange} />
            </FormControl>

            <FormControl>
                <FormLabel>Teléfono</FormLabel>
                <Input type="tel" value={phone} onChange={handlePhoneChange} />
            </FormControl>

            <Button colorScheme="teal" size="md" onClick={handleUpdateInfo}>
            Actualizar Información
            </Button>
        </VStack>
            </TabPanel>
            <TabPanel p={4} bg="gray.100" borderRadius="md">
              {/* Contenido de las reservas */}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4} mt={4}>
                {/* ... Contenido de las reservas ... */}
            </SimpleGrid>
            </TabPanel>
            </TabPanels>
                </Tabs>
        </VStack>
    </Box>
    );
};

export default UserProfile;
