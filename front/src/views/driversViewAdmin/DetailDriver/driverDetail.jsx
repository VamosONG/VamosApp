import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer, Flex,Box
} from '@chakra-ui/react'



const DriverDetail = (props) => {
  return (
    <Card boxSize='4xl' overflowX='scroll' w='90vw'>
      <CardBody>
        <Image
          src={props.driverImg}
          alt={props.name}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>Conductor: {props.name} </Heading>
          <Flex gap={4} w='100%' justify='center' m='0 auto'>
            <TableContainer w='50%' h='auto'>
              <Table variant='striped' bg='gray.300'  >
                <TableCaption>Datos del Conductor</TableCaption>
                <Thead >
                  <Tr>
                      <Th>Apellido</Th>
                      <Th>DNI</Th>
                      <Th >Correo</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                      <Td>{props.surname}</Td>
                      <Td>{props.dni}</Td>
                      <Td>{props.email}</Td>
                  </Tr>
                </Tbody>
                <Thead >
                  <Tr>
                      <Th >Fec. Nac</Th>
                      <Th >Telefono</Th>
                      <Th >Origen</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                      <Td>{props.birthday}</Td>
                      <Td>{props.phone}</Td>
                      <Td>{props.airports}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>

            <TableContainer w='50%'>
              <Table variant='striped' bg='gray.300' >
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Vehiculo</Th>
                    <Th>Modelo</Th>
                    <Th>Licencia</Th>
                  </Tr>
                </Thead>
                <Tbody  >
                  <Tr>
                    <Td>{props.carType}</Td>
                    <Td>{props.carModel}</Td>
                    <Td>{props.driverLicense}</Td>
                  </Tr>
                </Tbody>
                <Thead >
                  <Tr >
                    <Th >Soat</Th>
                    <Th>Placa</Th>
                    <Th>max. Pasjr.</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>{props.carSoat}</Td>
                    <Td>{props.carPatent}</Td>
                    <Td>{props.capacityPassengers}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Flex>
          <Flex w='100%' maxW='fit-content' gap={4}>
            <Box w='50%'
              h='auto' gap={2}>
              <Text fontSize='1.5rem'>Vehiculo</Text>
            <Image
              src={props.carImg}
              alt={props.name}
              borderRadius='lg'
              w='100%'
              h='auto'
              objectFit='cover'
            />
            </Box>

            <Box w='50%'
              h='auto' gap={2}>
                <Text fontSize='1.5rem'>Permiso de Circulacion</Text>
            <Image
              src={props.circulationPermit}
              alt={props.name}
              borderRadius='lg'
              w='100%'
              objectFit='cover'
              h='auto'
            />
            </Box>
            
            
          </Flex>

        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='blue'>
            Buy now
          </Button>
          <Button variant='ghost' colorScheme='blue'>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default DriverDetail;