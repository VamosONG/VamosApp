import { useEffect, useState } from 'react';
import {
  Button,
  TableContainer,
  Table,
  TableCaption, Thead, Tr, Th, Tbody, Td, Input, Flex, Box, FormErrorMessage, FormControl, FormLabel, Heading, Select
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import Swal from 'sweetalert2'
import { renderToString } from 'react-dom/server';

import {  useNavigate } from 'react-router-dom';

import { Field, Form, Formik } from 'formik';




const SolicitudwViajeForm = () => {

  const dispatch = useDispatch()

  const [input,setInput]=useState({})

  useEffect(() => {
    /* if (parsedData) {
        setInput({
            origin: parsedData.origin,
            destination: parsedData.destination,
            date: parsedData.date,
            hour: parsedData.hour,
            quantityPassengers: parsedData.quantityPassengers
        });
    } else {
        setInput({
            origin: "",
            destination: "",
            date: "",
            hour: "",
            quantityPassengers: ""
        })
    } */
  }, []);


  //*************RUTAS*************** */
  const origenes=[
    'AEROPUERTO TALARA',
    'AEROPUERTO TUMBES',
    'DECAMERON PUNTA SAL',
    'ZORRITOS',
    'MANCORA',
    'DECAMERON'
  ]
  const destinos={
    'AEROPUERTO TALARA':['MANCORA','DECAMERON'],
    'AEROPUERTO TUMBES':['DECAMERON PUNTA SAL','ZORRITOS','MANCORA'],
    'DECAMERON PUNTA SAL':['AEROPUERTO TALARA'],
    'ZORRITOS':['AEROPUERTO TUMBES'],
    'MANCORA':['AEROPUERTO TUMBES','AEROPUERTO TALARA'],
    'DECAMERON':['AEROPUERTO TALARA'],
  }
  const [origenSeleccionado, setOrigenSeleccionado] = useState('');
  const [destinoSeleccionado, setDestinoSeleccionado] = useState('');
  
  const destinosDelOrigen = destinos[origenSeleccionado]||[];
  //********************************** */
  
  //*************VALIDACIONES*************** */
  const currentDate = new Date().toISOString().split('T')[0];
  const currentHour = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const [minHour, setMinHour] = useState(null); //Hora mínima en caso de fecha de hoy

  const [maxPasajeros, setMaxPasajeros] = useState(0);

  //********************************** */

  const handleChange = (e) => {
    
    setInput({
        origin: origenSeleccionado,
        destination: destinoSeleccionado,
        date: parsedData.date,
        hour: parsedData.hour,
        quantityPassengers: parsedData.quantityPassengers
    });
  
    
  };



  return (
    <Box marginTop='10rem'>

        <Heading as='h1' size='xl' mb={4}>
            Reservá tu viaje
        </Heading>

    <Formik  
      initialValues={{ name: 'hola' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => (
        <Form>
          <Field name='name' validate={'hola'}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name} isRequired>{/* Despues probar sacar isRequired para no validacion */}


                <FormLabel
                    fontSize="2xl"
                    fontFamily="'DIN Medium',"
                >Desde:</FormLabel>
                <Select
                placeholder="Selecciona un origen"
                value={origenSeleccionado}
                onChange={(e) => setOrigenSeleccionado(e.target.value)}/* Setea directamente para determinar los detinos */
                >
                    {origenes.map((origen) => (
                        <option key={origen} value={origen}>
                            {origen}
                        </option>
                    ))}
                </Select>


                <FormLabel
                    fontSize="2xl"
                    fontFamily="'DIN Medium',"
                >Hasta:</FormLabel>
                <Select
                placeholder="Selecciona el destino"
                onChange={(e) => setDestinoSeleccionado(e.target.value)}
                >
                    {destinosDelOrigen.map((destino) => (
                        <option key={destino} value={destino}>
                            {destino}
                        </option>
                    ))}
                </Select>


                <FormLabel
                    fontSize="2xl"
                    fontFamily="'DIN Medium',"
                >Fecha</FormLabel>
                <Input
                    bg="white"
                    placeholder="Select Date and Time"
                    size="md"
                    type="date"
                    name='date'
                    /* value={input.date}
                    onChange={handleChange}*/
                    onChange={(e) => {
                        e.target.value===currentDate?setMinHour(currentHour):null //Si fecha actual, hora mínima actual
                      }}
                    min={currentDate}  
                />


                <FormLabel
                    fontSize="2xl"
                    fontFamily="'DIN Medium',"
                >Hora</FormLabel>
                <Input
                    bg="white"
                    type='time'
                    placeholder='Hora'
                    name='hour'
                    /* value={input.hour}
                    onChange={handleChange} */
                    min={minHour} 
                />


                <FormLabel htmlFor='pasajeros'
                    fontSize="2xl"
                    fontFamily="'DIN Medium',"
                >Cantidad de pasajeros</FormLabel>
                <Select 
                bg="white"  
                /* placeholder={parsedData.quantityPassengers} 
                value ={parsedData.quantityPassengers} */ 
                id='pasajeros' 
                name='quantityPassengers' 
                /* onChange={handleChange} */ 
                >
                    {(() => {
                    setMaxPasajeros((origenSeleccionado === "AEROPUERTO TALARA" && destinoSeleccionado === "MANCORA") ||
                    (origenSeleccionado === "MANCORA" && destinoSeleccionado === "AEROPUERTO TALARA") ? 15 : 10);

                    return [...Array(maxPasajeros).keys()].map((number) => (
                        <option key={number + 1} id={`number-${number + 1}`} value={number + 1}>
                            {number + 1}
                        </option>
                    ));
                    })()}
                </Select>



                {/* <FormErrorMessage>{form.errors.name}</FormErrorMessage> */}
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme='teal'
            isLoading={props.isSubmitting}
            type='submit'
          >
            RESERVAR
          </Button>
        </Form>
      )}
    </Formik>
    </Box>
    
  );
};
export default SolicitudwViajeForm