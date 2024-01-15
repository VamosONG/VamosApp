import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons';
import {
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    AvatarGroup, Avatar,
} from '@chakra-ui/react';

import {Button, useDisclosure, Image,Box
} from '@chakra-ui/react'

import Vamos from "../../../assets/Vamos.png"
import { Link } from 'react-router-dom';
import SlideEx from '../../../views/Forms/ViewForm';
import { useRef, useState } from 'react';

const MobileMenu = ({ esAdmin, esUsuario }) => {

    const [size, setSize] = useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <Menu >
            <Image src={Vamos} alt="Vamos" w="10rem" />
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} right='1rem' position='absolute'>
                Menu
            </MenuButton>
            <MenuList>
                {esAdmin && (
                    <MenuItem>
                        <Link to='/solicitudesDeViajes'>Solicitudes de viaje</Link>
                    </MenuItem>
                )}
                {esUsuario && (
                    <MenuItem>
                        <Link to='/solicitarViaje'>Solicitar viaje</Link>
                    </MenuItem>
                )}
                {esAdmin && (
                    <MenuItem>
                        <Link to='/detail'>Conductores</Link>
                    </MenuItem>
                )}
                <MenuItem>
                    <Link to='/landing'>Inicio</Link>
                </MenuItem>
                <MenuItem>
                    <Link to='/reservas'>Reservas</Link>
                </MenuItem>
                <MenuItem>
                    <Link to='/frecuentes'>Preguntas Frecuentes</Link>
                </MenuItem>
                <MenuItem>
                    <Link to='/about'>Nosotros</Link>
                </MenuItem>
            </MenuList>
            <Box position='fixed'
            top='5rem'
            right='3rem'
            >
                <SlideEx />
            </Box>
        </Menu>
    );
};

export default MobileMenu;
