import React, { useState } from "react";
import SolicitudesDeViajes from '../solicitudes/solicitudesDeViajes';
import DriverTableView from '../../views/driversViewAdmin/driverTable';
import UserViewAdmin from '../../views/adminProfile/userViewAdmin';
import ReviewAdmin from '../../views/adminProfile/reviewAdmin';
import ChoferForm from '../../views/Forms/ChoferFormulario/ChoferForm'
import Stadistic from "../../views/stadistic/Stadistics/stadistic";
import EditPrice from "../editPrices/editPricesComponent"
import { 
    Box,
    Flex,
    Text,
    VStack,
    Divider,
    IconButton,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    useDisclosure,
    useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const AdminProfile = () => {
    const [activeComponent, setActiveComponent] = useState("Reservas");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const isMobile = useBreakpointValue({ base: true, md: false })

    const renderComponent = () => {
        switch (activeComponent) {
        case "Reservas":
            return <SolicitudesDeViajes />;
        case "Conductores":
            return <DriverTableView />;
        case "Usuario":
            return <UserViewAdmin />;
        case "Agregar precio":
            return <ReviewAdmin />;
        case "Stadistic":
            return <Stadistic />;
        case "EditPrice":
            return <EditPrice />;
        case "ChoferForm":
            return <ChoferForm />;
        default:
            return null;
        }
    };

    const handleMenuClick = (component) => {
        onClose();
        setActiveComponent(component);
    };

    return (

        <Flex bgImage="https://res.cloudinary.com/drgnsbah9/image/upload/v1705962402/Vamos/aji3qlnocifw7kcs3mvw.jpg" 
        marginTop={{ base: "0%", lg: "4%" }}>
        {isMobile ? (
            <>
                <IconButton
                    icon={<HamburgerIcon />}
                    onClick={onOpen}
                    position="fixed"
                    top={20}
                    left={2}
                    zIndex={999}
                />
                <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerHeader>Menu Admin</DrawerHeader>
                        <DrawerBody>
                            <VStack spacing={2} align="stretch" bg="gray.200" p={4} height="50%" width="100%">
                            <Text 
                _hover={{ bg: '#E83D6F', color: 'white' }} 
                bg={activeComponent === "Reservas" ? '#009ED1' : 'white'}
                color={activeComponent === "Reservas" ? 'white' : 'black'}
                p={2} 
                borderRadius="md" 
                textAlign="center" 
                cursor="pointer"
                onClick={() => handleMenuClick("Reservas")}
            >
                Reservas
            </Text>
            <Divider />
            <Text 
                _hover={{ bg: '#E83D6F', color: 'white' }} 
                bg={activeComponent === "Conductores" ? '#009ED1' : 'white'}
                color={activeComponent === "Conductores" ? 'white' : 'black'}
                p={2} 
                borderRadius="md" 
                textAlign="center" 
                cursor="pointer"
                onClick={() => handleMenuClick("Conductores")}
            >
                Conductores
            </Text>
            <Divider />
            <Text 
                _hover={{ bg: '#E83D6F', color: 'white' }} 
                bg={activeComponent === "Usuario" ? '#009ED1' : 'white'}
                color={activeComponent === "Usuario" ? 'white' : 'black'}
                p={2} 
                borderRadius="md" 
                textAlign="center" 
                cursor="pointer"
                onClick={() => handleMenuClick("Usuario")}
            >
                Usuario
            </Text>
            <Divider />
            <Text 
                _hover={{ bg: '#E83D6F', color: 'white' }} 
                bg={activeComponent === "Agregar precio" ? '#009ED1' : 'white'}
                color={activeComponent === "Agregar precio" ? 'white' : 'black'}
                p={2} 
                borderRadius="md" 
                textAlign="center" 
                cursor="pointer"
                onClick={() => handleMenuClick("Agregar precio")}
            >
                Agregar precio
            </Text>
            <Divider />
            <Text 
                _hover={{ bg: '#E83D6F', color: 'white' }}
                bg={activeComponent === "Stadistic" ? '#009ED1' : 'white'}
                color={activeComponent === "Stadistic" ? 'white' : 'black'}
                p={2} 
                borderRadius="md" 
                textAlign="center" 
                cursor="pointer"
                onClick={() => handleMenuClick("Stadistic")}
            >
                Estadisticas
            </Text>
            <Divider />
            <Text 
                _hover={{ bg: '#E83D6F', color: 'white' }}
                bg={activeComponent === "EditPrice" ? '#009ED1' : 'white'}
                color={activeComponent === "EditPrice" ? 'white' : 'black'}
                p={2} 
                borderRadius="md" 
                textAlign="center" 
                cursor="pointer"
                onClick={() => handleMenuClick("EditPrice")}
            >
                Editar Precio
            </Text>
            <Divider />
            <Text 
                _hover={{ bg: '#E83D6F', color: 'white' }}
                bg={activeComponent === "ChoferForm" ? '#009ED1' : 'white'}
                color={activeComponent === "ChoferForm" ? 'white' : 'black'}
                p={2} 
                borderRadius="md" 
                textAlign="center" 
                cursor="pointer"
                onClick={() => handleMenuClick("ChoferForm")}
            >
                Nuevo Conductor
            </Text>
            <Divider />
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </>
        ) : (
            <Flex flexDirection='column' pt={{ base: "100px", md: "0px" }}>
        <VStack spacing={3} align="stretch" bg="gray.200" p={5} height={{ base: "0%", lg: "800px" }} width="240px">
            <Text fontSize="xl" fontWeight="bold" mb={4}>
                Menu Admin
            </Text>
            <Text 
                _hover={{ bg: '#E83D6F', color: 'white' }} 
                bg={activeComponent === "Reservas" ? '#009ED1' : 'white'}
                color={activeComponent === "Reservas" ? 'white' : 'black'}
                p={2} 
                borderRadius="md" 
                textAlign="center" 
                cursor="pointer"
                onClick={() => handleMenuClick("Reservas")}
            >
                Reservas
            </Text>
            <Divider />
            <Text 
                _hover={{ bg: '#E83D6F', color: 'white' }} 
                bg={activeComponent === "Conductores" ? '#009ED1' : 'white'}
                color={activeComponent === "Conductores" ? 'white' : 'black'}
                p={2} 
                borderRadius="md" 
                textAlign="center" 
                cursor="pointer"
                onClick={() => handleMenuClick("Conductores")}
            >
                Conductores
            </Text>
            <Divider />
            <Text 
                _hover={{ bg: '#E83D6F', color: 'white' }} 
                bg={activeComponent === "Usuario" ? '#009ED1' : 'white'}
                color={activeComponent === "Usuario" ? 'white' : 'black'}
                p={2} 
                borderRadius="md" 
                textAlign="center" 
                cursor="pointer"
                onClick={() => handleMenuClick("Usuario")}
            >
                Usuario
            </Text>
            <Divider />
            <Text 
                _hover={{ bg: '#E83D6F', color: 'white' }} 
                bg={activeComponent === "Agregar precio" ? '#009ED1' : 'white'}
                color={activeComponent === "Agregar precio" ? 'white' : 'black'}
                p={2} 
                borderRadius="md" 
                textAlign="center" 
                cursor="pointer"
                onClick={() => handleMenuClick("Agregar precio")}
            >
                Agregar precio
            </Text>
            <Divider />
            <Text 
                _hover={{ bg: '#E83D6F', color: 'white' }}
                bg={activeComponent === "Stadistic" ? '#009ED1' : 'white'}
                color={activeComponent === "Stadistic" ? 'white' : 'black'}
                p={2} 
                borderRadius="md" 
                textAlign="center" 
                cursor="pointer"
                onClick={() => handleMenuClick("Stadistic")}
            >
                Estadisticas
            </Text>
            <Divider />
            <Text 
                _hover={{ bg: '#E83D6F', color: 'white' }}
                bg={activeComponent === "EditPrice" ? '#009ED1' : 'white'}
                color={activeComponent === "EditPrice" ? 'white' : 'black'}
                p={2} 
                borderRadius="md" 
                textAlign="center" 
                cursor="pointer"
                onClick={() => handleMenuClick("EditPrice")}
            >
                Editar Precio
            </Text>
            <Divider />
            <Text 
                _hover={{ bg: '#E83D6F', color: 'white' }}
                bg={activeComponent === "ChoferForm" ? '#009ED1' : 'white'}
                color={activeComponent === "ChoferForm" ? 'white' : 'black'}
                p={2} 
                borderRadius="md" 
                textAlign="center" 
                cursor="pointer"
                onClick={() => handleMenuClick("ChoferForm")}
            >
                Nuevo Conductor
            </Text>
            <Divider />
            </VStack>
        </Flex>
        )}
        <Box ml={isMobile ? 0 : "250px"} p={0} flex="1" margin={10}>
            {renderComponent()}
        </Box>
    </Flex>
    );
};

export default AdminProfile;