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

import {  Navigate, useNavigate } from 'react-router-dom';

import { Field, Form, Formik } from 'formik';
import { handlePayment, postNewViaje } from '../../../redux/actions';




const SolicitudwViajeForm = () => {

  const dispatch = useDispatch()
  const navigate =useNavigate()

  const [input,setInput]=useState({})
  const [loading, setLoading] = useState(false);

  const currentUserId = useSelector((state) => state.currentUser?.id)
  const infoConfirmacionViaje = useSelector((state) => state.infoConfirmacionViaje)
  

  useEffect(() => {
     const storedInput = localStorage.getItem('solicitudViajeInput');

     if (storedInput) {
        const parsedInput = JSON.parse(storedInput);
        console.log(parsedInput)
        // Utilizamos un efecto secundario para garantizar que setInput se haya completado antes de imprimir
        const updateInput = () => {
          setInput(parsedInput);
          setOrigenSeleccionado(parsedInput.origin);
          setDestinoSeleccionado(parsedInput.destination);
          setHoraSeleccionada(parsedInput.hour);
          setFechaSeleccionada(parsedInput.date);
          setCantidadPasajerosSeleccionada(parsedInput.quantityPassengers);
        };
    
        updateInput();
      }
    
  }, []);

  useEffect(() => {
     if (infoConfirmacionViaje.price) {
        const confirmationText = (
            <div>
                <p>Origen: {infoConfirmacionViaje.origin}</p>
                <p>Destino: {infoConfirmacionViaje.destination}</p>
                <p>Cantidad de pasajeros: {infoConfirmacionViaje.quantityPassengers}</p>
                <p style={{ fontWeight: 'bold', fontSize: 'larger' }}
                >Precio final: {infoConfirmacionViaje.price}</p>
            </div>
        );


        Swal.fire({
            title: "Confirmación de traslado",
            html: renderToString(confirmationText),
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Pagar con MercadoPago",

            showClass: {
                popup: 'animate__animated animate__fadeInDown',
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp',
            },
            preConfirm: async () => {
                // Lógica antes de la confirmación
            },
            htmlMode: true
        }).then(async (result) => {
            if (result.isConfirmed) {
              if(currentUserId===undefined) {
                console.log('entra Qui')
                navigate('/loginviajes')
              }else{
await dispatch(handlePayment(infoConfirmacionViaje,currentUserId));
                Swal.fire({
                  title: "Redirigiendo a Mercado Pago",
                  text: "Aguarde unos segundos",
                  /* icon: "success", */
                  allowOutsideClick: false,
                  didOpen:()=>Swal.showLoading()
                }).then(() => {
              
                
                
                // window.history.back();

                });
              }
            }
            else {
              setLoading(false);
                // Restablecer valores al cancelar
                /* const parsedData = JSON.parse(storedInput);
                setInput({
                    origin: parsedData.origin,
                    destination: parsedData.destination,
                    date: parsedData.date,
                    hour: parsedData.hour,
                    quantityPassengers: parsedData.quantityPassengers
                }); */
            }
        });
    
        }
  }, [infoConfirmacionViaje]);


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
    'DECAMERON PUNTA SAL':['AEROPUERTO TUMBES'],
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
    /* setCantidadPasajerosSeleccionada(e.target.value) */
    setInput({
        ...input,
        origin: origenSeleccionado,
        destination: destinoSeleccionado,
        userId: currentUserId,
        quantityPassengers: cantidadPasajerosSeleccionada
    });

    console.log(input)
    
  };

  const handleSubmit =(event) => {
    setLoading(true);
    setInput({
        ...input,
        quantityPassengers: cantidadPasajerosSeleccionada
    });

    console.log(input)
    localStorage.setItem('solicitudViajeInput', JSON.stringify(input));

    dispatch(postNewViaje(input));
    };


    const [horaSeleccionada, setHoraSeleccionada] = useState(0);
    const [fechaSeleccionada, setFechaSeleccionada] = useState(0);
    const [cantidadPasajerosSeleccionada, setCantidadPasajerosSeleccionada] = useState(0);

  return (
      <Box 
        bg='#009ED1' 
        width="400px"
        height="540px"
        padding="1rem"
        borderRadius="md" 
        marginTop={['0px', '0px']}
        >

        <Heading size='lg' mb={2}>
            Reservá tu viaje
        </Heading>

        <Formik  
        initialValues={{
        /* origin: (JSON.parse(localStorage.getItem('solicitudViajeInput'))).origin || '', */
        /* destination: (JSON.parse(localStorage.getItem('solicitudViajeInput'))).destination || '', */
        /* date: parsedInput.date || '',
        hour: parsedInput.hour || '',
        quantityPassengers: parsedInput.quantityPassengers || '', */
        }}
        onSubmit={handleSubmit}
        >
        {(props) => (
        <Form>
          <Field name='name' validate={'hola'}>
            {({ field, form }) => (
              <FormControl marginBottom='1rem' isInvalid={form.errors.name && form.touched.name} isRequired>{/* Despues probar sacar isRequired para no validacion */}


                  <FormLabel
                  fontSize="xl"
                  fontFamily="'DIN Medium',"
                  >Desde:
                  </FormLabel>
                  <Select
                  bg="white"
                  placeholder="Selecciona un origen"
                  value={origenSeleccionado}
                  onChange={(e) => {
                  setOrigenSeleccionado(e.target.value); /* Setea directamente para determinar los detinos */
                  setInput({...input,origin:e.target.value})}}
                  name="origin"
                  >
                    {origenes.map((origen) => (
                        <option key={origen} value={origen}>
                            {origen}
                        </option>
                    ))}
                  </Select>

                  <FormLabel
                  fontSize="xl"
                  fontFamily="'DIN Medium',"
                  >Hasta:
                  </FormLabel>
                  <Select
                  bg="white"
                  placeholder="Selecciona el destino"
                  value={destinoSeleccionado}
                  onChange={(e) => {
                  setDestinoSeleccionado(e.target.value)
                  setInput({...input,destination:e.target.value})}}
                  name="destino"
                  >
                    {destinosDelOrigen.map((destino) => (
                        <option key={destino} value={destino}>
                            {destino}
                        </option>
                    ))}
                  </Select>


                  <FormLabel
                    fontSize="xl"
                    fontFamily="'DIN Medium',"
                  >Fecha</FormLabel>
                  <Input
                    bg="white"
                    placeholder="Select Date and Time"
                    size="md"
                    type="date"
                    name='date'
                    value={fechaSeleccionada}
                    /* value={input.date}
                    onChange={handleChange}*/
                    onChange={(e) => {
                        e.target.value===currentDate?setMinHour(currentHour):null; //Si fecha actual, hora mínima actual
                        setInput({...input,date:e.target.value});
                        setFechaSeleccionada(e.target.value);
                      }}
                    min={currentDate}  
                  />


                  <FormLabel
                    fontSize="xl"
                    fontFamily="'DIN Medium',"
                  >Hora
                  </FormLabel>
                  <Input
                    bg="white"
                    type='time'
                    placeholder='Hora'
                    name='hour'
                    value={horaSeleccionada}
                    /* value={input.hour}
                    onChange={handleChange} */
                    onChange={(e) => {
                        setInput({...input,hour:e.target.value});
                        setHoraSeleccionada(e.target.value);
                      }}
                    min={minHour} 
                  />


                  <FormLabel 
                    htmlFor='pasajeros'
                    fontSize="xl"
                    fontFamily="'DIN Medium',"
                  >Cantidad de pasajeros
                  </FormLabel>
                  <Select 
                  bg="white"  
                  /* placeholder={parsedData.quantityPassengers} 
                  value ={parsedData.quantityPassengers} */ 
                  value ={cantidadPasajerosSeleccionada}
                  id='pasajeros' 
                  name='quantityPassengers' 
                  onChange={(e)=>{
                    console.log(e.target.value)
                    setInput({...input,quantityPassengers:e.target.value});
                    setCantidadPasajerosSeleccionada(e.target.value)
                    handleChange
                  }} 
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
                  bg='#E83D6F' 
                  isLoading={loading} 
                  type='submit' 
                  width='100%' 
                  marginTop='1rem'
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