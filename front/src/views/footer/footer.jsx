import { Heading, HStack, Box, Highlight, Link, Image, Center, Flex, Spacer } from '@chakra-ui/react'

import { Card, CardHeader, CardBody, CardFooter, Text, Stack, StackDivider,Button } from '@chakra-ui/react'

import { ExternalLinkIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import IconPage from '../../assets/Vamos.png'
import IconFace from '../../assets/icons/face-icon.png'
import IconWhatsApp from '../../assets/icons/whatsapp-icon.png'
import IconLinkdIn from '../../assets/icons/in-icon.png'
import IconInstagram from '../../assets/icons/instagram-icon.png'

function Footer() {

  return (
    <>
      <Flex flexDirection='column' w='100%' >

        <Flex bg='#009ED1' minWidth='max-content' alignItems='start' gap='2' pt='1rem' boxSize='sm' w='100%' h='auto' color='white' justify='space-between' px='2rem' >
          <Box w='300px' h='auto' gap='8' >
            <Image
              boxSize='sm'
              w='200px'
              h='auto'
              objectFit='contain'
              src={IconPage}
              alt='Vamos ONG'
            />

            <Flex gap='4' justify='center'>
              <Link href='#' target='_blank' >
                <Image
                  w='3rem'
                  h='3rem'
                  src={IconFace}
                  alt='Facebook Vamos ONG'
                  borderRadius='50' />
              </Link>

              <Link href='#' target='_blank' >
                <Image
                  w='3rem'
                  h='3rem'
                  src={IconLinkdIn}
                  alt='linkdin Vamos ONG'
                  borderRadius='50' />
              </Link>

              <Link href='#' target='_blank' >
                <Image
                  w='3rem'
                  h='3rem'
                  src={IconInstagram}
                  alt='Instgram Vamos ONG'
                  borderRadius='50' 
                  bg='white'/>
              </Link>
            </Flex>

            <Flex flexDirection='column' gap='6' py='4'>
              <Heading lineHeight='tall' w='100%' fontSize='1.3rem' textAlign='start'>
                <Highlight
                  query='Vamos'
                  styles={{ px: '2', py: '1', rounded: 'full', bg: '#E83D6F' }}
                >
                  Ahorra tiempo con Vamos en los translados a tu destino favorito.
                </Highlight>
              </Heading>
              <Button leftIcon={<ArrowForwardIcon />} colorScheme='green' variant='outline' fontSize='1.4rem'>
              Hacer Pedido
              <Link href='#' target='_blank' >
                <Image
                  w='2rem'
                  h='2rem'
                  src={IconWhatsApp}
                  alt='Whatsapp Vamos ONG'
                  borderRadius='50' />
              </Link>
              </Button>
            </Flex>
          </Box>
          <Box w='auto' h='auto' p='4' textAlign='start' >
            <Heading>Nosotors</Heading>
            <Flex flexDirection='column' fontSize='1.5rem'>
              <Link href='#' isExternal>
                Sobre Nosotros <ExternalLinkIcon mx='2px' />
              </Link>
              <Link href='#' isExternal>
                Reservas <ExternalLinkIcon mx='2px' />
              </Link>
              <Link href='#' isExternal>
                Mision <ExternalLinkIcon mx='2px' />
              </Link>
              <Link href='#' isExternal >
                vision <ExternalLinkIcon mx='2px' />
              </Link>
            </Flex>
          </Box>
          <Box w='auto' h='auto' p='4' textAlign='start'  >
            <Heading>Contacto</Heading>
            <Flex flexDirection='column' fontSize='1.5rem' gap='4'>
              <Text>
                <h3>Aeropuertos:</h3>
                <div>
                  <address>Talara, Lima, Peru.</address>
                  <address>Tumbes, Lima, Peru.</address>
                </div>
              </Text>

              <Text>
                <h3>Correo electronico:</h3>
                <Link href='mailto:kleibertmedina@gmail.com' isExternal>
                  <b>vamos.ong@gmail.com</b> <ExternalLinkIcon mx='2px' />
                </Link>
              </Text>
              <Text>
                <h3>Llamanos: </h3>
                <Link href='tel:+51999999999' isExternal>
                  +51 999-999-999 <ExternalLinkIcon mx='2px' />
                </Link>
              </Text>
            </Flex>
          </Box>
        </Flex>

        
        <Flex justify='center' bg='#10447E' color='white' fontSize='1.2rem' py='2'>
          <Text>Todos los Derechos Reservados <b>2024</b></Text>
        </Flex>
      </Flex>
    </>
  )
}

export default Footer