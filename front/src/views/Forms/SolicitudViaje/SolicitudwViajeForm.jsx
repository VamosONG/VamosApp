import { useEffect, useState } from 'react';
import {
  Button,
  TableContainer,
  Table,
  TableCaption, Thead, Tr, Th, Tbody, Td, Input, Flex, Box, FormErrorMessage, FormControl, FormLabel, Heading, Select,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Image,
  useBreakpointValue
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
    'PUNTA SAL',
    'ZORRITOS',
    'MANCORA'
  ]
  const destinos = {
    'AEROPUERTO TALARA': ['PUNTA SAL', 'ZORRITOS', 'MANCORA'],
    'AEROPUERTO TUMBES': ['PUNTA SAL', 'ZORRITOS', 'MANCORA'],
    'AEROPUERTO PIURA':['PUNTA SAL', 'ZORRITOS', 'MANCORA'],
    'PUNTA SAL': ['AEROPUERTO TUMBES','AEROPUERTO TALARA','AEROPUERTO PIURA'],
    'ZORRITOS': ['AEROPUERTO TUMBES','AEROPUERTO TALARA','AEROPUERTO PIURA'],
    'MANCORA': ['AEROPUERTO TUMBES','AEROPUERTO TALARA','AEROPUERTO PIURA']
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

  const placeholder1 = useBreakpointValue({
    base: "📍Origen", // Se mostrará en dispositivos móviles
    md: "Origen", // Se mostrará en pantallas medianas y más grandes
  });

  const placeholder2 = useBreakpointValue({
    base: "🏳️Destino", // Se mostrará en dispositivos móviles
    md: "Destino", // Se mostrará en pantallas medianas y más grandes
  });

  return (
    <Box
     
      bg='white'
      
      maxWidth={['80%', '1200px']}
      
      padding="1rem"
      marginLeft='1rem'
      marginRight='1rem'
      
      borderRadius={['md', 'lg', 'full']}
     
      boxShadow="0px 1px 10px rgba(0, 0, 0, 0.3)"
      overflowX='hidden'
      
      
    >

    
      <Formik
        initialValues={{
          
        }}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <Form >
              <Flex 
                
                justifyContent="space-between" 
                 
                gap="1rem"
                marginLeft="1rem" 
                marginRight="1rem"

                direction={['column', 'row']}
              >

            <Field name='name' validate={'hola'}>
              {({ field, form }) => (
                <FormControl  isInvalid={form.errors.name && form.touched.name} isRequired>{/* Despues probar sacar isRequired para no validacion */}
                    <Flex  justifyContent="space-between" /* mb="1rem" */ gap="0.5rem" direction={['column', 'row']}>
                 
                  
                  <Flex direction='row' gap='0.5rem'>
                  <Image
                    src={ubicacion}
                    alt='📍' 
                    boxSize='1.5rem' // Ajusta el tamaño del ícono
                    mt='0.5rem'
                    display={['none', 'block']}
                  />
                  
                    <Select
                    bg="white"
                   
                    placeholder={placeholder1}
                    value={origenSeleccionado}
                    onChange={(e) => {
                      setOrigenSeleccionado(e.target.value); /* Setea directamente para determinar los detinos */
                      setInput({ ...input, origin: e.target.value })
                    }}
                    name="origin"

                    
                    maxWidth="200px"
                    minWidth="100px"
                    
                  >
                    {origenes.map((origen) => (
                      <option key={origen} value={origen}>
                        {origen}
                      </option>
                    ))}
                  </Select>
                  
                  


                    <Box 
                      fontSize='20px'
                      fontWeight='bold' 
                      mt='0.1rem' 
                      maxWidth="30px"
                      display={['none', 'block']}
                      >🏳️</Box>

                  <Select
                    bg="white"
                  
                    placeholder={placeholder2}
                    value={destinoSeleccionado}
                    onChange={(e) => {
                      setDestinoSeleccionado(e.target.value)
                      setInput({ ...input, destination: e.target.value })
                    }}
                    name="destino"

                    /* paddingLeft="0.1rem" */
                    /* width="200px" */
                    maxWidth="200px"
                    minWidth="100px"
                  >
                    {destinosDelOrigen.map((destino) => (
                      <option key={destino} value={destino}>
                        {destino}
                      </option>
                    ))}
                  </Select>
                    
                  </Flex>
               

                  <Flex direction='row' gap='0.5rem'>


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

                    maxWidth="170px"
                    minWidth="120px"
                  />
                  

                 
                  <Input
                    bg="white"
                    type='time'
                    placeholder='Hora'
                    name='hour'
                    value={horaSeleccionada}
                  
                    onChange={(e) => {
                      setInput({ ...input, hour: e.target.value });
                      setHoraSeleccionada(e.target.value);
                    }}
                    min={minHour}

                    maxWidth="170px"
                    minWidth="120px"
                  />

                  </Flex>


                  <Flex direction='row' gap='0.4rem'>
                  <Image
                    src={personas} // Reemplaza con la ruta de tu ícono
                    alt='📍' 
                    boxSize='1.5rem' // Ajusta el tamaño del ícono
                    mt='0.5rem'
                  />


                  
                  <Select
                    bg="white"
               
                    value={cantidadPasajerosSeleccionada}
                    id='pasajeros'
                    name='quantityPassengers'

                    width={['100%', '100px']}

                    onChange={(e) => {
                      const selectedValue = parseInt(e.target.value, 10);

                   
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
                      setMaxPasajeros(/* (origenSeleccionado === "AEROPUERTO TALARA" && destinoSeleccionado === "MANCORA") ||
                        (origenSeleccionado === "MANCORA" && destinoSeleccionado === "AEROPUERTO TALARA") || (origenSeleccionado === "AEROPUERTO PIURA" && destinoSeleccionado === "MANCORA") ||
                        (origenSeleccionado === "MANCORA" && destinoSeleccionado === "AEROPUERTO PIURA")? 15 : */ 10); //Se comentó todo al eliminar la Van plus

                      return [...Array(maxPasajeros + 1).keys()].map((number) => (
                        <option key={number} value={number}>
                          {number}
                        </option>
                      ))
                    })()}
                  </Select>

                  </Flex>
                  </Flex>
                
                </FormControl>
              )}
            </Field>
            <Button
            /* bg='#E83D6F' */
            bg='#054C84'
            isLoading={loading}
            type='submit'
           

            color="white"
            >
              🡴RESERVAR
            </Button>
                </Flex>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
export default SolicitudwViajeForm

