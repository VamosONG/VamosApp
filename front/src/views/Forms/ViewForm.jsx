import { Button, Slide, Box, ScaleFade } from '@chakra-ui/react'
import LoginForm from './Login/Login';
import { useDisclosure } from '@chakra-ui/react';
import RegistroForm from './Registro/Registro';
import { useState } from 'react';




const SlideEx = () => {
    //Manejo de boton "ENTRAR" para login o registro
    const { isOpen, onToggle } = useDisclosure()

    const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);


    //Funcion para manjera los formularios
    const handleSwitchForm = () => {
        setIsLoginFormVisible(!isLoginFormVisible);
    };

    return (
        <>
            <Button onClick={onToggle} bg='blue.200' color='white'  >Entrar</Button>
            <ScaleFade initialScale={0.9} direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
                <Box
                    p='40px'
                    color='black'
                    mt='4'
                    bg='blue.100'
                    rounded='md'
                    shadow='lg'
                    h='auto'
                >
                    {/* Validacion para mostrar formularios */}
                    {isLoginFormVisible ? (
                        <LoginForm onSwitchForm={handleSwitchForm} />
                    ) : (
                        <RegistroForm onSwitchForm={handleSwitchForm} />
                    )}
                </Box>
            </ScaleFade>
        </>
    )
}

export default SlideEx;