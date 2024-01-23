import { Flex, Box, Stack, Link, Image, Text, Heading, Button } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'


import IconFace from '../../assets/icons/LOGOFACE.png'
import IconLinkdIn from '../../assets/icons/LOGOLINK.png'
import IconInstagram from '../../assets/icons/LOGOINSTA.png'

function Footer() {

  return (
    <Stack  bottom={0} mb={0} left={0} position={'relative'}>
      <Flex flexDirection={{ base: 'column', md: 'column' }} w='100%'  >

      <Flex bg='#009ED1' minWidth='max-content' alignItems='center' gap='4' pt='1rem' boxSize='sm' w='100%' h='auto' color='white' justify='space-evenly' px='2rem' flexDirection={{ base: 'column', md: 'row' }}>

          <Box w='300px' h='auto'>
            <Flex gap='4' justify='center'>
              <Link href='#' target='_blank' >
                <Image
                  w='2rem'
                  h='2rem'
                  src={IconFace}
                  alt='Facebook Vamos ONG'
                />
              </Link>

              <Link href='#' target='_blank' >
                <Image
                  w='2rem'
                  h='2rem'
                  src={IconLinkdIn}
                  alt='linkdin Vamos ONG'
                  />
              </Link>

              <Link href='#' target='_blank' >
                <Image
                  w='2rem'
                  h='2rem'
                  src={IconInstagram}
                  alt='Instgram Vamos ONG'
                  />
              </Link>
            </Flex>

            <Flex flexDirection='column' gap='6' py='4'>
              <Heading 
                lineHeight='tall' 
                w='100%' 
                fontSize='1rem'
                textShadow='2px 2px 4px rgb(0, 0, 0, 0.5)'
                >
                AHORRA TIEMPO CON VAMOS EN LOS TRASLADOS A TU DESTINO FAVORITO.
                </Heading>
            </Flex>
          </Box>

          <Box w='auto' h='auto' p='1' textAlign='center' order={{ base: 3, md: 2 }} textShadow='2px 2px 4px rgb(0, 0, 0, 0.5)'>
            <Heading>Nosotros</Heading>
            <Flex flexDirection='column' fontSize='1.4rem'>
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
                Vision <ExternalLinkIcon mx='2px' />
              </Link>
            </Flex>
          </Box>

          <Box w='auto' h='auto' p='1' textAlign='center'  order={{ base: 3, md: 2 }} textShadow='2px 2px 4px rgb(0, 0, 0, 0.5)' >
            <Heading>Contacto</Heading>
            <Flex flexDirection='column' fontSize='1.4rem' gap='4'>
              <Text>
                <b>Aeropuertos:</b>
                <div>
                  <address>Talara, Lima, Peru.</address>
                  <address>Tumbes, Lima, Peru.</address>
                </div>
              </Text>

              <Text >
                <Link href='mailto:kleibertmedina@gmail.com' isExternal >
                  <p>vamos.ong@gmail.com <ExternalLinkIcon mx='2px' /></p> 
                </Link>
              </Text>
              <Text >
                <Link href='tel:+51999999999' isExternal >
                  +51 999-999-999 <ExternalLinkIcon mx='2px' />
                </Link>
              </Text>
            </Flex>
          </Box>
        </Flex>

        <Box w='100%' order={{ base: 4, md: 4 }} textAlign='center' textShadow='2px 2px 4px rgb(0, 0, 0, 0.4)'>
          <Flex justify='center' bg='#10447E' color='white' fontSize='1.2rem' py='2'>
            <Text>© VAMOS 2024 Todos los Derechos Reservados</Text>
          </Flex>
        </Box>
      </Flex>
    </Stack>
  )
}

export default Footer