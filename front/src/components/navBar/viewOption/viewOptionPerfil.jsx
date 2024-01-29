import { Fade, ScaleFade, Slide, SlideFade, Collapse, Link as ChakraLink, Box, Button, useDisclosure, Avatar, Text, Flex } from '@chakra-ui/react'

// import {
//     Menu,
//     MenuButton,
//     MenuList,
//     MenuItem,
//     MenuItemOption,
//     MenuGroup,
//     MenuOptionGroup,
//     MenuDivider, Button, Avatar, Link
// } from '@chakra-ui/react'

import { QuestionIcon, AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon, ChevronDownIcon, ViewIcon } from '@chakra-ui/icons'
import SlideEx from '../../../views/Forms/ViewForm'
import LogOut from '../../../views/Forms/LogOut/logout'
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { BsFillPersonLinesFill } from "react-icons/bs";
import ViewBtnUserForm from '../../../views/Forms/ViewForms/ViewUserForm';
import ImgIcon from '../../../assets/icons/emojis/emojiHappy.webp'

const ViewOptionPerfil = ({ fotoPerfil }) => {
    const { currentUser } = useSelector((state) => state);
    const { isOpen, onToggle } = useDisclosure()
    return (
        <>
            <Button onClick={onToggle} zIndex={11} w={'50px'} h='50px' borderRadius={50} >
                {currentUser.admin && currentUser.admin ? (
                    <Avatar onClick={onToggle} bg= "rgb(0, 158, 209)" src={fotoPerfil} />
                ) : <>
                    <ViewBtnUserForm currentUser={currentUser} />
                </>}

            </Button>
            <Slide direction='right' in={isOpen} style={{ zIndex: 10 }}>
                <Box
                    p='4px'
                    color='white'
                    mt='6rem'
                    bg='#009ED1'
                    rounded='md'
                    shadow='md'
                    maxWidth={'200px'}
                    w={'auto'}
                    h={'max-content'}
                    position="fixed"
                    top="0"
                    right="0"
                    bottom="0"
                    zIndex={11}


                >
                    <Flex flexDirection={'column'} gap={2}>
                        {currentUser.admin && currentUser.admin === true ? (
                            <>
                                <Link to='/profileAdmin'>
                                    <Button w={'100%'} display={'flex'} justifyContent={'space-between'}>
                                        <Text >Tablero</Text>
                                        <ViewIcon />
                                    </Button>
                                </Link>
                                <LogOut />
                            </>
                        ) : currentUser.admin === false ?
                            <>
                                <Link to='/profileUser'>
                                    <Button w={'100%'} display={'flex'} justifyContent={'space-between'}>
                                        <Text >Mi perfil</Text>
                                        <ViewIcon />
                                    </Button>
                                </Link>

                                <Link to='/review&reseña'>
                                    <Button w={'100%'} display={'flex'} justifyContent={'space-between'} >
                                        <Text>Reseñar viaje
                                        </Text>
                                        <EditIcon />
                                    </Button>
                                </Link>

                                <Link to="/questions">
                                    <Button w={'100%'} display={'flex'} justifyContent={'space-between'}>
                                        <Text>Q&A
                                        </Text>
                                        <QuestionIcon />
                                    </Button>
                                </Link>
                                <LogOut />
                            </>

                            : null}
                    </Flex>
                </Box>
            </Slide>
        </>
    )
}

export default ViewOptionPerfil