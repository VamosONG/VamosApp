import React, { useEffect, useState } from "react";
import {
  Button,
  Flex,
  Box,
  Image,
  Avatar,
  AvatarGroup,
  useMediaQuery,
  Progress
} from "@chakra-ui/react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Vamos from "../../assets/logo.png";
import MobileNavbar from "../navBar/mobileNavbar/mobileNavbar";
import { useSelector } from "react-redux";
import LogOut from "../../views/Forms/LogOut/logout";
import ViewOptionPerfil from "./viewOption/viewOptionPerfil";
import {verificationComplete} from '../../context/authContext';
import LoginForm from "../../views/Forms/Login/Login";

const NavBar = () => {
  const { currentUser } = useSelector((state) => state);
  const [navBackground, setNavBackground] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 640px)");
  const location = useLocation();

  const handleScroll = () => {
    const offset = window.scrollY;
    setNavBackground(offset > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 if (!verificationComplete) {
  return <div><Progress size='lg' isIndeterminate /></div>;
}else{
 return (
  <>
  <Flex>
    {isMobile ? (
      <MobileNavbar />
    ) : (
      <Flex
      as="nav"
      alignItems="center"
      justify="space-between"
      h="80px"
      w="100%"
      // bgGradient="angular(gray, white)"
      top="0"
      left="0"
      zIndex="999"
      px="4"
      transition="background 0.5s ease"
    >
        <Box>
         <Link to="/">
                <Image src={Vamos} alt="Vamos" w="150px" />
         </Link>
        </Box>

        <Box w="100%" alignContent="center" justifyContent="center">
          <Flex justify="center" alignItems="center">
            {currentUser?.admin && currentUser?.admin ? (
              <Box>
                <Flex>
                <NavLink exact to="/"  style={{ textDecoration: location.pathname === '/' ? 'underline' : 'none', marginRight: '35px'  }}>
    <span style={{ fontSize: '23px' }}>Inicio</span>
</NavLink>
                  <NavLink to="/about" style={{ textDecoration: location.pathname === '/about' ? 'underline' : 'none', marginRight: '35px'  }}>
                  <span style={{ fontSize: '23px' }} >Nosotros</span>
                  </NavLink>

                  <NavLink to="/questions" style={{ textDecoration: location.pathname === '/questions' ? 'underline' : 'none' }}>  
                  <span style={{ fontSize: '23px' }} >Preguntas Frecuentes</span>
                  </NavLink>

                </Flex>
              </Box>
            ) : currentUser?.admin === false ? (
              <Box>
                <Flex>
                <NavLink exact to="/"  style={{ textDecoration: location.pathname === '/' ? 'underline' : 'none', marginRight: '35px'  }}>
    <span style={{ fontSize: '23px' }}>Inicio</span>
</NavLink>
                  <NavLink to="/about" style={{ textDecoration: location.pathname === '/about' ? 'underline' : 'none', marginRight: '35px'  }}>
                  <span style={{ fontSize: '23px' }} >Nosotros</span>
                  </NavLink>

                  <NavLink to="/questions" style={{ textDecoration: location.pathname === '/questions' ? 'underline' : 'none' }}>  
                  <span style={{ fontSize: '23px' }} >Preguntas Frecuentes</span>
                  </NavLink>
                </Flex>
              </Box>
            ) : (
              <Box>
                <Flex>
                <NavLink exact to="/"  style={{ textDecoration: location.pathname === '/' ? 'underline' : 'none', marginRight: '35px'  }}>
    <span style={{ fontSize: '23px' }}>Inicio</span>
</NavLink>
                  <NavLink to="/about" style={{ textDecoration: location.pathname === '/about' ? 'underline' : 'none', marginRight: '35px'  }}>
                  <span style={{ fontSize: '23px' }} >Nosotros</span>
                  </NavLink>

                  <NavLink to="/questions" style={{ textDecoration: location.pathname === '/questions' ? 'underline' : 'none' }}>  
                  <span style={{ fontSize: '23px' }} >Preguntas Frecuentes</span>
                  </NavLink>
                  {currentUser && currentUser?.admin ? <LogOut /> : null}
                </Flex>
              </Box>
            )}
          </Flex>
        </Box>

        <Box>
          <AvatarGroup spacing="1rem" mx="20px" >
             <ViewOptionPerfil/> 
          </AvatarGroup>
        </Box>
      </Flex>
    )}
    </Flex>
  </>
);
}
};

export default NavBar;
