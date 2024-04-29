import { useEffect, useState } from 'react';
import {
  Button,
  TableContainer,
  Table,
  TableCaption, Thead, Tr, Th, Tbody, Td, Input, Flex, Box, FormErrorMessage, FormControl, FormLabel, Heading, Select,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Image
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import Swal from 'sweetalert2'
import { renderToString } from 'react-dom/server';

import { Navigate, useNavigate } from 'react-router-dom';

import { Field, Form, Formik } from 'formik';
import { handlePayment, postNewViaje } from '../../../redux/actions';


/* import { PhoneIcon } from '@chakra-ui/icons'; */
/* import { CiLocationOn } from "react-icons/ci" */;
import ubicacion from '../../../assets/icons/pngwing.com.png'
import personas from '../../../assets/icons/people_878820.png'




const SolicitudwViajeForm = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [input, setInput] = useState({})
  const [loading, setLoading] = useState(false);

  const currentUserId = useSelector((state) => state.currentUser?.id)
  const infoConfirmacionViaje = useSelector((state) => state.infoConfirmacionViaje)


  useEffect(() => {
    const storedInput = localStorage.getItem('solicitudViajeInput');

    if (storedInput) {
      const parsedInput = JSON.parse(storedInput);
     
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

      if (currentUserId == undefined) {
        Swal.fire({
          title: "Inicia sesión para continuar",
          
          html: renderToString(confirmationText),
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Iniciar sesión",
          

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
            if (currentUserId === undefined) {
            
              navigate('/loginviajes')
            } 
          }
          else {
            setLoading(false);
            
          }
        });
      }else {
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
          if (currentUserId === undefined) {
           
            navigate('/loginviajes')
          } else {
            await dispatch(handlePayment(infoConfirmacionViaje, currentUserId));
            Swal.fire({
              title: "Redirigiendo a Mercado Pago",
              text: "Aguarde unos segundos",
              /* icon: "success", */
              allowOutsideClick: false,
              didOpen: () => Swal.showLoading()
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

    }}
  }, [infoConfirmacionViaje]);


  //*************RUTAS*************** */
  const origenes = [
    'AEROPUERTO TALARA',
    'AEROPUERTO TUMBES',
    'AEROPUERTO PIURA',
    'DECAMERON PUNTA SAL',
    'ZORRITOS',
    'MANCORA',
    'DECAMERON'
  ]
  const destinos = {
    'AEROPUERTO TALARA': ['MANCORA', 'DECAMERON'],
    'AEROPUERTO TUMBES': ['DECAMERON PUNTA SAL', 'ZORRITOS', 'MANCORA'],
    'AEROPUERTO PIURA':['MANCORA', 'DECAMERON'],
    'DECAMERON PUNTA SAL': ['AEROPUERTO TUMBES'],
    'ZORRITOS': ['AEROPUERTO TUMBES'],
    'MANCORA': ['AEROPUERTO TUMBES', 'AEROPUERTO TALARA','AEROPUERTO PIURA'],
    'DECAMERON': ['AEROPUERTO TALARA','AEROPUERTO PIURA'],
  }
  const [origenSeleccionado, setOrigenSeleccionado] = useState('');
  const [destinoSeleccionado, setDestinoSeleccionado] = useState('');

  const destinosDelOrigen = destinos[origenSeleccionado] || [];
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

   

  };

  const handleSubmit = (event) => {
    setLoading(true);
    setInput({
      ...input,
      quantityPassengers: cantidadPasajerosSeleccionada
    });

  
    localStorage.setItem('solicitudViajeInput', JSON.stringify(input));

    dispatch(postNewViaje(input));
  };


  const [horaSeleccionada, setHoraSeleccionada] = useState(0);
  const [fechaSeleccionada, setFechaSeleccionada] = useState(0);
  const [cantidadPasajerosSeleccionada, setCantidadPasajerosSeleccionada] = useState(0);

  return (
    <Box
      /* bg='#009ED1' */
      bg='white'
      /* width="400px" */
      width="1200px"
      /* height="540px" */
      padding="1rem"
      /* borderRadius="md" */
      borderRadius="full"
      /* marginTop={['0px', '0px']} */

      /* boxShadow="xl" */
      boxShadow="0px 1px 10px rgba(0, 0, 0, 0.3)"
      
    >

      {/* <Heading size='lg' mb={2}>
        Reserva tu viaje
      </Heading> */}

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
          <Form >
              <Box 
                display="flex"
                justifyContent="space-between" 
                /* mb="1rem" */ 
                gap="1rem"
                marginLeft="2rem" // Margen a la izquierda
                marginRight="2rem"
              >

            <Field name='name' validate={'hola'}>
              {({ field, form }) => (
                <FormControl /* marginBottom='1rem' */ isInvalid={form.errors.name && form.touched.name} isRequired>{/* Despues probar sacar isRequired para no validacion */}
                    <Box display="flex" justifyContent="space-between" /* mb="1rem" */ gap="0.5rem">
                  {/* <FormLabel
                    fontSize="xl"
                    fontFamily="'DIN Medium',"
                    >Desde:
                  </FormLabel> */}
                  
                  <Image
                    src={ubicacion} // Reemplaza con la ruta de tu ícono
                    alt='📍' 
                    boxSize='1.5rem' // Ajusta el tamaño del ícono
                    mt='0.5rem'
                  />
                  
                    <Select
                    bg="white"
                    /* placeholder="Selecciona un origen" */
                    placeholder="Origen"
                    value={origenSeleccionado}
                    onChange={(e) => {
                      setOrigenSeleccionado(e.target.value); /* Setea directamente para determinar los detinos */
                      setInput({ ...input, origin: e.target.value })
                    }}
                    name="origin"

                    /* paddingLeft="0.1rem" */
                    width="200px"
                  >
                    {origenes.map((origen) => (
                      <option key={origen} value={origen}>
                        {origen}
                      </option>
                    ))}
                  </Select>
                  
                  

                  {/* <FormLabel
                    fontSize="xl"
                    fontFamily="'DIN Medium',"
                  >Hasta:
                  </FormLabel> */}
                  {/* <InputGroup>
                    <InputLeftElement pointerEvents='none' fontSize='20px' fontWeight='bold'> */}
                      
                    {/* </InputLeftElement> */}

                    <Box fontSize='20px' fontWeight='bold' mt='0.1rem'>🏳️</Box>

                  <Select
                    bg="white"
                    /* placeholder="Selecciona el destino" */
                    placeholder="Destino"
                    value={destinoSeleccionado}
                    onChange={(e) => {
                      setDestinoSeleccionado(e.target.value)
                      setInput({ ...input, destination: e.target.value })
                    }}
                    name="destino"

                    /* paddingLeft="0.1rem" */
                    width="200px"
                  >
                    {destinosDelOrigen.map((destino) => (
                      <option key={destino} value={destino}>
                        {destino}
                      </option>
                    ))}
                  </Select>
                    
                  {/* </InputGroup> */}


                  {/* <FormLabel
                    fontSize="xl"
                    fontFamily="'DIN Medium',"
                  >Fecha</FormLabel> */}
                  <Input
                    bg="white"
                    /* placeholder="Select Date and Time" */
                    placeholder="Fecha"
                    size="md"
                    type="date"
                    name='date'
                    value={fechaSeleccionada}
                    /* value={input.date}
                    onChange={handleChange}*/
                    onChange={(e) => {
                      e.target.value === currentDate ? setMinHour(currentHour) : null; //Si fecha actual, hora mínima actual
                      setInput({ ...input, date: e.target.value });
                      setFechaSeleccionada(e.target.value);
                    }}
                    min={currentDate}

                    width="200px"
                  />
                  

                  {/* <FormLabel
                    fontSize="xl"
                    fontFamily="'DIN Medium',"
                  >Hora
                  </FormLabel> */}
                  <Input
                    bg="white"
                    type='time'
                    placeholder='Hora'
                    name='hour'
                    value={horaSeleccionada}
                    /* value={input.hour}
                    onChange={handleChange} */
                    onChange={(e) => {
                      setInput({ ...input, hour: e.target.value });
                      setHoraSeleccionada(e.target.value);
                    }}
                    min={minHour}

                    width="130px"
                  />

                  <Image
                    src={personas} // Reemplaza con la ruta de tu ícono
                    alt='📍' 
                    boxSize='1.5rem' // Ajusta el tamaño del ícono
                    mt='0.5rem'
                  />


                  {/* <FormLabel
                    htmlFor='pasajeros'
                    fontSize="xl"
                    fontFamily="'DIN Medium',"
                  >Cantidad de pasajeros
                  </FormLabel> */}
                  <Select
                    bg="white"
                    /* placeholder={parsedData.quantityPassengers} 
                    value ={parsedData.quantityPassengers} */
                    value={cantidadPasajerosSeleccionada}
                    id='pasajeros'
                    name='quantityPassengers'

                    width="100px"

                    onChange={(e) => {
                      const selectedValue = parseInt(e.target.value, 10);

                      // validación para el valor seleccionado 0
                      if (selectedValue === 0) {

                        alert("La cantidad de pasajeros no puede ser 0");
                        return;
                      }
                      setInput({ ...input, quantityPassengers: e.target.value });
                      setCantidadPasajerosSeleccionada(e.target.value)
                      handleChange
                    }}
                  >
                    {(() => {
                      setMaxPasajeros((origenSeleccionado === "AEROPUERTO TALARA" && destinoSeleccionado === "MANCORA") ||
                        (origenSeleccionado === "MANCORA" && destinoSeleccionado === "AEROPUERTO TALARA") || (origenSeleccionado === "AEROPUERTO PIURA" && destinoSeleccionado === "MANCORA") ||
                        (origenSeleccionado === "MANCORA" && destinoSeleccionado === "AEROPUERTO PIURA")? 15 : 10);

                      return [...Array(maxPasajeros + 1).keys()].map((number) => (
                        <option key={number} value={number}>
                          {number}
                        </option>
                      ))
                    })()}
                  </Select>


                  </Box>
                  {/* <FormErrorMessage>{form.errors.name}</FormErrorMessage> */}
                </FormControl>
              )}
            </Field>
            <Button
            /* bg='#E83D6F' */
            bg='#054C84'
            isLoading={loading}
            type='submit'
            /* width='100%' */
            /* marginTop='1rem' */

            color="white"
            >
              🡴RESERVAR
            </Button>
                </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
export default SolicitudwViajeForm

/* [...Array(maxPasajeros).keys()].map((number) => (
                        <option key={number + 1} id={`number-${number + 1}`} value={number + 1}>
                            {number + 1}
                        </option>
                    ));
                    } */