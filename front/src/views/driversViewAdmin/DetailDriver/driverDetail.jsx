import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Badge } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer, Flex, Box, Link, Tooltip
} from '@chakra-ui/react'
import { BsEnvelopeArrowUp, BsWhatsapp } from "react-icons/bs";


const DriverDetail = (props) => {
  return (
    <Card boxSize='4xl' overflowX='scroll' w={{base: '20rem', md: '90vw'}}>
      <CardBody>
        <Stack mt='6' spacing='3'>
          <Heading bg='gray.200' py='2' px='4'  borderRadius='8' >
            Conductor:
            <Badge ml='1' fontSize='2rem' colorScheme='green'>
              {props.name} 
            </Badge> 
          </Heading>
          <Flex gap='4' flexDirection={{base: 'column', md: 'row'}} w='100%' >
            <Flex boxShadow={'0 0px 20px black'} borderRadius='lg' w='100%' >
              <Image
                src={props.driverImg}
                alt={props.name}
                borderRadius='lg'
                objectFit={'cover'}
              />
            </Flex>
            <Flex gap={4} w='100%' justify='center' m='0 auto' flexDirection={'column'}>
              <TableContainer w='auto' h='auto' >
                <Table variant='striped' bg='gray.300'  >
                  <TableCaption fontSize={'1.2rem'}>Datos del Conductor</TableCaption>
                  <Thead >
                    <Tr >
                      <Th fontSize={'1.2rem'}>Apellido</Th>
                      <Th fontSize={'1.2rem'}>DNI</Th>
                      <Th fontSize={'1.2rem'}>Correo</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td fontSize={'1.2rem'}>{props.surname}</Td>
                      <Td fontSize={'1.2rem'}>{props.dni}</Td>
                      <Td fontSize={'1.2rem'}>{props.email}</Td>
                    </Tr>
                  </Tbody>
                  <Thead >
                    <Tr>
                      <Th fontSize={'1.2rem'}>Fec. Nac</Th>
                      <Th fontSize={'1.2rem'}>Telefono</Th>
                      <Th fontSize={'1.2rem'}>Origen</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td fontSize={'1.2rem'}>{props.birthday}</Td>
                      <Td fontSize={'1.2rem'}>{props.phone}</Td>
                      <Td fontSize={'1.2rem'}>{props.airports}</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>

              <TableContainer w='auto'>
                <Table variant='striped' bg='gray.300' >
                  <TableCaption fontSize={'1.2rem'}>Datos del Vehiculo</TableCaption>
                  <Thead>
                    <Tr>
                      <Th fontSize={'1.2rem'}>Vehiculo</Th>
                      <Th fontSize={'1.2rem'}>Modelo</Th>
                      <Th fontSize={'1.2rem'}>Licencia</Th>
                    </Tr>
                  </Thead>
                  <Tbody  >
                    <Tr>
                      <Td fontSize={'1.2rem'}>{props.carType}</Td>
                      <Td fontSize={'1.2rem'}>{props.carModel}</Td>
                      <Td fontSize={'1.2rem'}>{props.driverLicense}</Td>
                    </Tr>
                  </Tbody>
                  <Thead >
                    <Tr >
                      <Th fontSize={'1.2rem'}>Soat</Th>
                      <Th fontSize={'1.2rem'}>Placa</Th>
                      <Th fontSize={'1.2rem'}>max. Pasjr.</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td fontSize={'1.2rem'}>{props.carSoat}</Td>
                      <Td fontSize={'1.2rem'}>{props.carPatent}</Td>
                      <Td fontSize={'1.2rem'}>{props.capacityPassengers}</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Flex>

          </Flex>

          <Flex w='100%' gap={4} p='4' flexDirection={{base: 'column', md: 'row'}}>
            <Flex w={{base: '100%', md: '50%'}}
              h='auto' gap={4} flexDirection={'column'} bg='gray.50' borderRadius='lg' p='4' boxShadow={'0 10px 10px black'}>
              <Text fontSize='1.5rem' fontWeight={'bold'}>Vehiculo</Text>
              <Image
                src={props.carImg}
                alt={props.name}
                borderRadius='lg'
                w='100%'
                h='auto'
                objectFit='cover'
              />
            </Flex>

            <Flex w={{base: '100%', md: '50%'}}
              h='auto' gap={4} flexDirection={'column'} bg='gray.50' borderRadius='lg' p='4' boxShadow={'0 10px 10px black'}>
              <Text fontSize='1.5rem' fontWeight={'bold'} >Perm. Circulación</Text>
              <Image
                src={props.circulationPermit}
                alt={props.name}
                borderRadius='lg'
                w='100%'
                objectFit='cover'
                h='auto'
              />
            </Flex>


          </Flex>

        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
        <Link color='teal.500' href={`mailto:${props.email}`}>
          <Tooltip label='Enviar Correo' bg='green' placement='top' fontSize='1.3rem' borderRadius={4} px='2'>
          <Button variant='solid' colorScheme='blue' fontSize='1.5rem'>
            <BsEnvelopeArrowUp/>
          </Button>
          </Tooltip>
        </Link>

        <Link color='teal.500' href={`whatsapp://send?phone=+51${props.phone}`}>
          <Tooltip label='Mensaje' bg='green' placement='top' fontSize='1.3rem' borderRadius={4} px='2'>
          <Button variant='solid' colorScheme='blue' fontSize='1.5rem'>
            <BsWhatsapp/>
          </Button>
          </Tooltip>
        </Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default DriverDetail;