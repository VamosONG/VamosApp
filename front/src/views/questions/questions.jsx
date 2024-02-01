import { Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Flex } from "@chakra-ui/react";
import React from "react";

const Questions = () =>{


    return (
        <Flex
        bgImage='https://res.cloudinary.com/drgnsbah9/image/upload/v1705962402/Vamos/eqdrrjmlkojpiiwlhwjo.jpg'
        w='100%'
        h='100%'
        >
        <Box
            bgSize='cover'
            bgPosition='center'
            filter='blur(2px) brightness(0.8)'
            zIndex='-1'
            />

        <Box 
        p={8} 
        bgColor="gray.100" 
        borderRadius="md" 
        mx="auto" 
        maxWidth="1200px"
        mt={140}
        >
            <Accordion allowToggle>
                <AccordionItem borderBottom="1px" borderColor="gray.300" mb={3}>
                    <h2>
                    <AccordionButton borderRadius="md">
                        <Box 
                        as="span" 
                        flex='1' 
                        textAlign='left'
                        fontSize='xl'
                        fontWeight='bold'
                        color='blue.500'
                        >
                        ¿Dónde los encuentro en el Aeropuerto de Tumbes?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                <AccordionPanel pb={4} fontFamily='DIN Medium, sans-serif'>
                        Nuestros vehículos son fáciles de reconocer porque tienen nuestro logo a los costados. 
                        Nos puedes encontrar dentro del estacionamiento del Aeropuerto de Tumbes. 
                        No tenemos una oficina dentro del aeropuerto, sólo te tienes que acercar al vehículo que estará ahí 
                        10 minutos antes de la hora de salida.
                </AccordionPanel>
                </AccordionItem>

                <AccordionItem borderBottom="1px" borderColor="gray.300" mb={3}>
                    <h2>
                    <AccordionButton borderRadius="md">
                        <Box 
                        as="span" 
                        flex='1' 
                        textAlign='left'
                        fontSize="xl"
                        fontWeight="bold"
                        color="blue.500"
                        >
                        ¿Dónde los encuentro en el Aeropuerto de Talara?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                <AccordionPanel pb={4} fontFamily='DIN Medium, sans-serif'>
                        Nuestros vehículos son fáciles de reconocer porque tienen nuestro logo a los costados. 
                        Nos puedes encontrar dentro del estacionamiento del Aeropuerto de Talara. 
                        No tenemos una oficina dentro del aeropuerto, sólo te tienes que acercar al vehículo que estará ahí 
                        10 minutos antes de la hora de salida.
                </AccordionPanel>
                </AccordionItem>

                <AccordionItem borderBottom="1px" borderColor="gray.300" mb={3}>
                    <h2>
                    <AccordionButton borderRadius="md" fontFamily='DIN Medium, sans-serif'>
                        <Box 
                        as="span" 
                        flex='1' 
                        textAlign='left'
                        fontSize="xl"
                        fontWeight="bold"
                        color="blue.500"
                        >
                        ¿Cuál es su horario de atención?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                <AccordionPanel pb={4} fontFamily='DIN Medium, sans-serif'>
                        Realizamos TRASLADOS las 24 horas, de lunes a domingo. Nuestro personal de RESERVAS (al cual puedes contactar 
                        por WhatsApp, teléfono, Instagram o email) trabaja de lunes a domingo de 6 AM a medianoche.
                        Si necesitas un traslado de madrugada, te sugerimos reservarlo a muy tardar la noche anterior.
                </AccordionPanel>
                </AccordionItem>

                <AccordionItem borderBottom="1px" borderColor="gray.300" mb={3}>
                    <h2>
                    <AccordionButton borderRadius="md">
                        <Box 
                        as="span" 
                        flex='1' 
                        textAlign='left'
                        fontSize="xl"
                        fontWeight="bold"
                        color="blue.500"
                        >
                        ¿Hacen traslados de madrugada?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                <AccordionPanel pb={4} fontFamily='DIN Medium, sans-serif'>
                        Sí, tenemos traslados de Miraflores al Aeropuerto desde las 2 AM y del Aeropuerto a Miraflores desde las 3 AM.
                </AccordionPanel>
                </AccordionItem>

                <AccordionItem borderBottom="1px" borderColor="gray.300" mb={3}>
                    <h2>
                    <AccordionButton borderRadius="md">
                        <Box 
                        as="span" 
                        flex='1' 
                        textAlign='left'
                        fontSize="xl"
                        fontWeight="bold"
                        color="blue.500"
                        >
                        ¿Trabajan feriados?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                <AccordionPanel pb={4} fontFamily='DIN Medium, sans-serif'>
                        Sí, trabajamos la mayoría de feriados. Tenemos un horario especial en Navidad, Año Nuevo y Día de la Independencia 
                        (28 de Julio). Si necesitas un traslado en estas fechas, comunícate con nuestro equipo de Atención al Cliente para 
                        consultar la disponibilidad del servicio. Puedes enviarnos un WhatsApp o llamar al +51 935455227, enviarnos un 
                        mensaje por Facebook o un email a vamos.ong@gmail.com
                </AccordionPanel>
                </AccordionItem>

                <AccordionItem borderBottom="1px" borderColor="gray.300" mb={3}>
                    <h2>
                    <AccordionButton borderRadius="md">
                        <Box 
                        as="span" 
                        flex='1' 
                        textAlign='left'
                        fontSize='xl'
                        fontWeight='bold'
                        color='blue.500'
                        >
                        ¿Son los tiempos de viaje exactos? ¿Puedo confiar en la hora programada de llegada?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                <AccordionPanel pb={4} fontFamily='DIN Medium, sans-serif'>
                        En Vamos estamos comprometidos con la puntualidad y hemos tomado en cuenta el tráfico al calcular la hora de llegada. 
                        En nuestra experiencia, el 95% de nuestros viajes llega a la hora programada (+/- 10 minutos).Por otro lado, el 
                        tráfico de Lima es ocasionalmente alterado debido a protestas, cierres de calles por construcción, y eventos especiales 
                        (conciertos, visitas de celebridades). Las horas de mayor tráfico son de lunes a viernes de 7am a 9am y de 5pm a 8pm.
                </AccordionPanel>
                </AccordionItem>

                <AccordionItem borderBottom="1px" borderColor="gray.300" mb={3}>
                    <h2>
                    <AccordionButton borderRadius="md">
                        <Box 
                        as="span" 
                        flex='1' 
                        textAlign='left'
                        fontSize='xl'
                        fontWeight='bold'
                        color='blue.500'
                        >
                        ¿Cómo funciona el servicio “puerta a puerta”?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                <AccordionPanel pb={4} fontFamily='DIN Medium, sans-serif'>
                        El “servicio puerta a puerta” consiste en recoger/dejar a nuestros pasajeros en la misma puerta de su casa/hotel. 
                        ¡Es la opción más cómoda y segura! De ese modo evitas caminar por la calle y tener que cargar tu maleta. 
                        Este servicio está disponible sólo dentro de nuestra zona de operaciones.
                </AccordionPanel>
                </AccordionItem>

                <AccordionItem borderBottom="1px" borderColor="gray.300" mb={3}>
                    <h2>
                    <AccordionButton borderRadius="md">
                        <Box 
                        as="span" 
                        flex='1' 
                        textAlign='left'
                        fontSize='xl'
                        fontWeight='bold'
                        color='blue.500'
                        >
                        La fecha/hora de mi viaje ha cambiado. ¿Cómo puedo modificar mi traslado?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                <AccordionPanel pb={4} fontFamily='DIN Medium, sans-serif'>
                        Comunícate con nuestro equipo de Atención al Cliente y reprogramaremos tu traslado sin ningún costo adicional. 
                        Puedes enviarnos un WhatsApp o teléfono al +51 935455227 o enviarnos un mensaje por Facebook o por un mail a vamos.ong@gmail.com

                </AccordionPanel>
                </AccordionItem>

                <AccordionItem borderBottom="1px" borderColor="gray.300" mb={3}>
                    <h2>
                    <AccordionButton borderRadius="md">
                        <Box 
                        as="span" 
                        flex='1' 
                        textAlign='left'
                        fontSize='xl'
                        fontWeight='bold'
                        color='blue.500'
                        >
                        ¿Tengo que imprimir el email de confirmación?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                <AccordionPanel pb={4} fontFamily='DIN Medium, sans-serif'>
                        No es necesario imprimir nada. Nuestros conductores ya tienen toda la información de tu reserva en los aplicativos de sus teléfonos.
                </AccordionPanel>
                </AccordionItem>

                <AccordionItem borderBottom="1px" borderColor="gray.300" mb={3}>
                    <h2>
                    <AccordionButton borderRadius="md">
                        <Box 
                        as="span" 
                        flex='1' 
                        textAlign='left'
                        fontSize='xl'
                        fontWeight='bold'
                        color='blue.500'
                        >
                        ¿Hay un descuento para niños o adultos mayores?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                <AccordionPanel pb={4} fontFamily='DIN Medium, sans-serif'>
                        Todas las personas pagan la misma tarifa.
                </AccordionPanel>
                </AccordionItem>

                <AccordionItem borderBottom="1px" borderColor="gray.300" mb={3}>
                    <h2>
                    <AccordionButton borderRadius="md">
                        <Box 
                        as="span" 
                        flex='1' 
                        textAlign='left'
                        fontSize='xl'
                        fontWeight='bold'
                        color='blue.500'
                        >
                        ¿Los precios incluyen todos los impuestos?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                <AccordionPanel pb={4} fontFamily='DIN Medium, sans-serif'>
                        Sí, todos los impuestos están incluídos.
                </AccordionPanel>
                </AccordionItem>

                <AccordionItem borderBottom="1px" borderColor="gray.300" mb={3}>
                    <h2>
                    <AccordionButton borderRadius="md">
                        <Box 
                        as="span" 
                        flex='1' 
                        textAlign='left'
                        fontSize='xl'
                        fontWeight='bold'
                        color='blue.500'
                        >
                        ¿Cuál es el equipaje permitido?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                <AccordionPanel pb={4} fontFamily='DIN Medium, sans-serif'>
                        Nuestros vehículos tienen amplio espacio para el equipaje de nuestros pasajeros Permitimos una maleta grande (23 KG) 
                        y una de mano por persona. Si es que tienes más equipaje habrá un recargo adicional. Por favor comunícate con nuestro 
                        equipo de Atención al Cliente indicando cuánto equipo llevas. Puedes enviarnos un WhatsApp o llamar al +51 935455227 
                        o enviarnos un mensaje por Facebook o por un mail a vamos.ong@gmail.com
                </AccordionPanel>
                </AccordionItem>

                <AccordionItem borderBottom="1px" borderColor="gray.300" mb={3}>
                    <h2>
                    <AccordionButton borderRadius="md">
                        <Box 
                        as="span" 
                        flex='1' 
                        textAlign='left'
                        fontSize='xl'
                        fontWeight='bold'
                        color='blue.500'
                        >
                        ¿Tienen espacio para equipaje especial? (tablas de surf, sillas de ruedas, coches de bebé, bicicletas, electrodomésticos, cajas grandes)
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                <AccordionPanel pb={4} fontFamily='DIN Medium, sans-serif'>
                        Sí tenemos espacio pero al ser equipaje voluminoso tendría un recargo adicional. Por favor comunícate con nuestro equipo de Atención al Cliente. 
                        Puedes enviarnos un WhatsApp o llamar al +51 935455227  o enviarnos un mensaje por Instagram o por un mail a vamos.ong@gmail.com
                </AccordionPanel>
                </AccordionItem>

                <AccordionItem borderBottom="1px" borderColor="gray.300" mb={3}>
                    <h2>
                    <AccordionButton borderRadius="md">
                        <Box 
                        as="span" 
                        flex='1' 
                        textAlign='left'
                        fontSize='xl'
                        fontWeight='bold'
                        color='blue.500'
                        >
                        ¿Están permitidas las mascotas?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                <AccordionPanel pb={4} fontFamily='DIN Medium, sans-serif'>
                        Sí, siempre y cuando estén en cajas o jaulas de dimensiones apropiadas.  Las personas discapacitadas pueden viajar con su perro guía. 
                        Debido a que algunos pasajeros pueden ser alérgicos a las mascotas, las mascotas están sólo permitidas en nuestro SERVICIO PRIVADO, 
                        no en el servicio compartido.
                </AccordionPanel>
                </AccordionItem>

                <AccordionItem borderBottom="1px" borderColor="gray.300" mb={3}>
                    <h2>
                    <AccordionButton borderRadius="md">
                        <Box 
                        as="span" 
                        flex='1' 
                        textAlign='left'
                        fontSize='xl'
                        fontWeight='bold'
                        color='blue.500'
                        >
                        Objetos perdidos
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                <AccordionPanel pb={4} fontFamily='DIN Medium, sans-serif'>
                        Nuestros choferes revisan y limpian los vehículos luego de cada viaje. Por favor comunícate con nuestro equipo de Atención al Cliente. 
                        Puedes enviarnos un WhatsApp o llamar al +51 935455227 o enviarnos un mensaje por Facebook o por un mail a vamos.ong@gmail.com
                </AccordionPanel>
                </AccordionItem>

                <AccordionItem borderBottom="1px" borderColor="gray.300" mb={3}>
                    <h2>
                    <AccordionButton borderRadius="md">
                        <Box 
                        as="span" 
                        flex='1' 
                        textAlign='left'
                        fontSize='xl'
                        fontWeight='bold'
                        color='blue.500'
                        >
                        ¿Necesito reservar con anticipación? ¿Puedo comprar mi ticket al subir a la van?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                <AccordionPanel pb={4} fontFamily='DIN Medium, sans-serif'>
                        A veces nuestros vehículos se llenan, por lo tanto es altamente recomendable reservar con anticipación para evitar quedarte sin asiento.

                        No tenemos un límite de tiempo para reservar: puedes reservar tres horas antes, tres días antes o incluso tres meses antes si es que gustas. 
                        La mayoría de nuestros pasajeros reserva con 1-2 días de anticipación.
                </AccordionPanel>
                </AccordionItem>

                <AccordionItem borderBottom="1px" borderColor="gray.300" mb={3}>
                    <h2>
                    <AccordionButton borderRadius="md">
                        <Box 
                        as="span" 
                        flex='1' 
                        textAlign='left'
                        fontSize='xl'
                        fontWeight='bold'
                        color='blue.500'
                        >
                        ¿Cuáles son sus métodos de pago?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                <AccordionPanel pb={4} fontFamily='DIN Medium, sans-serif'>
                Reserva online, puedes reservar aquí en la pagina y pagar con tarjeta de crédito o débito Visa, Mastercard y MercadoPago de cualquier país. El proceso está automatizado.
                Para contactar a nuestro equipo de reservas por favor envía un WhatsApp o llamar al +51 935455227 o enviarnos un mensaje por Instagram o por un mail a vamos.ong@gmail.com
                </AccordionPanel>
                </AccordionItem>

                <AccordionItem borderBottom="1px" borderColor="gray.300" mb={3}>
                    <h2>
                    <AccordionButton borderRadius="md">
                        <Box 
                        as="span" 
                        flex='1' 
                        textAlign='left'
                        fontSize='xl'
                        fontWeight='bold'
                        color='blue.500'
                        >
                        ¿Cómo puedo enviar comentarios sobre el servicio?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                <AccordionPanel pb={4} fontFamily='DIN Medium, sans-serif'>
                        Comunícate con nuestro equipo de Atención al Cliente. Puedes enviarnos un WhatsApp o llamar al +51 935455227 o enviarnos un mensaje por Instagram o por un mail a vamos.ong@gmail.com

                        También puedes dejarnos un comentario en nuestra página de Google.
                </AccordionPanel>
                </AccordionItem>

                <AccordionItem borderBottom="1px" borderColor="gray.300" mb={3}>
                    <h2>
                    <AccordionButton borderRadius="md">
                        <Box 
                        as="span" 
                        flex='1' 
                        textAlign='left'
                        fontSize='xl'
                        fontWeight='bold'
                        color='blue.500'
                        >
                        Mi conductor no se comportó de manera profesional. ¿Cómo puedo enviar un mensaje al respecto?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                <AccordionPanel pb={4} fontFamily='DIN Medium, sans-serif'>
                        Comunícate con nuestro equipo de Atención al Cliente. Puedes enviarnos un WhatsApp o llamar al +51 935455227 
                        o enviarnos un mensaje por Facebook o por un mail a vamos.ong@gmail.com
                </AccordionPanel>
                </AccordionItem>

                <AccordionItem borderBottom="1px" borderColor="gray.300" mb={3}>
                    <h2>
                    <AccordionButton borderRadius="md">
                        <Box 
                        as="span" 
                        flex='1' 
                        textAlign='left'
                        fontSize='xl'
                        fontWeight='bold'
                        color='blue.500'
                        >
                        ¿Los vehículos tienen asientos espaciales/accesorios para niños?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                <AccordionPanel pb={4} fontFamily='DIN Medium, sans-serif'>
                        No tenemos asientos especiales. Todos los asientos de nuestros vehículos tienen cinturón de seguridad.
                </AccordionPanel>
                </AccordionItem>

            </Accordion>

        </Box>
        </Flex>
    );
};

export default Questions;