import {
    Fade,
    ScaleFade,
    Slide,
    SlideFade,
    Collapse,
    Link as ChakraLink,
    Box,
    Button,
    useDisclosure,
    Avatar,
    Text,
    Flex,
} from "@chakra-ui/react";

import {
    QuestionIcon,
    AddIcon,
    ExternalLinkIcon,
    RepeatIcon,
    EditIcon,
    ChevronDownIcon,
    ViewIcon,
} from "@chakra-ui/icons";
import LogOut from "../../../views/Forms/LogOut/logout";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

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
import { useRef, useState } from "react";
import LoginForm from "../../../views/Forms/Login/Login";
import RegistroForm from "../../../views/Forms/Registro/Registro";

const ViewOptionPerfil = () => {
    const { currentUser } = useSelector((state) => state);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

    //Funcion para manjera los formularios
    const handleSwitchForm = () => {
        setIsLoginFormVisible(!isLoginFormVisible);
    };
    return (
        <>
            <Button
                ref={btnRef}
                onClick={onOpen}
                w={"50px"}
                h="50px"
                borderRadius={50}
            >
                <Avatar bg="rgb(0, 158, 209)" name={currentUser.name} src={currentUser.image ? currentUser.image : null} />

            </Button>

            {currentUser?.id ?
                <>
                    <Drawer
                        isOpen={isOpen}
                        placement="right"
                        onClose={onClose}
                        finalFocusRef={btnRef}
                    >
                        <DrawerOverlay />
                        <DrawerContent
                            p="4px"
                            color="white"
                            bg="#009ED1"
                            rounded="md"
                            shadow="md"
                            maxWidth={"200px"}
                            w={"auto"}
                            h={"max-content"}
                            position="fixed"
                            top="0"
                            right="0"
                            bottom="0"
                        >
                            <DrawerCloseButton />
                            <DrawerHeader>Hola {currentUser.name}</DrawerHeader>

                            <DrawerBody>
                                <Box>
                                    <Flex flexDirection={"column"} gap={2}>
                                        {currentUser.admin && currentUser.admin === true ? (
                                            <>
                                                <Link to="/profileAdmin">
                                                    <Button
                                                        w={"100%"}
                                                        display={"flex"}
                                                        justifyContent={"space-between"}
                                                    >
                                                        <Text>Tablero</Text>
                                                        <ViewIcon />
                                                    </Button>
                                                </Link>
                                                <LogOut />
                                            </>
                                        ) : currentUser.admin === false ? (
                                            <>
                                                <Link to="/profileUser">
                                                    <Button
                                                        w={"100%"}
                                                        display={"flex"}
                                                        justifyContent={"space-between"}
                                                    >
                                                        <Text>Mi perfil</Text>
                                                        <ViewIcon />
                                                    </Button>
                                                </Link>

                                                <Link to="/review&reseña">
                                                    <Button
                                                        w={"100%"}
                                                        display={"flex"}
                                                        justifyContent={"space-between"}
                                                    >
                                                        <Text>Reseñar viaje</Text>
                                                        <EditIcon />
                                                    </Button>
                                                </Link>

                                                <Link to="/questions">
                                                    <Button
                                                        w={"100%"}
                                                        display={"flex"}
                                                        justifyContent={"space-between"}
                                                    >
                                                        <Text>Q&A</Text>
                                                        <QuestionIcon />
                                                    </Button>
                                                </Link>
                                                <LogOut />
                                            </>
                                        ) : null}
                                    </Flex>
                                </Box>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </> :
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
                            h={"max-content"}
                            bg="#009ED1">
                                
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
                </>}
        </>
    );
};

export default ViewOptionPerfil;
