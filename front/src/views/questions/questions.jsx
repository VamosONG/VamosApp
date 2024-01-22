import { Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Flex } from "@chakra-ui/react";
import React from "react";

const Questions = () =>{


    return (
        <Flex
        bg="blue.200"
        >

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
                <AccordionPanel pb={4}>
                        Nuestros vehículos son fáciles de reconocer porque son vanes MORADAS y tienen nuestro logo a los costados. 
                        Nos puedes encontrar detrás del Hotel Costa del Sol (dentro del estacionamiento del Aeropuerto). 
                        No tenemos una oficina dentro del aeropuerto, sólo te tienes que acercar al vehículo que estará ahí 
                        10 minutos antes de la hora de salida. Hay otras empresas que brindan un servicio parecido a un precio 
                        mayor, así que no te vayas a confundir.
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
                <AccordionPanel pb={4}>
                        Nuestros vehículos son fáciles de reconocer porque son vanes MORADAS y tienen nuestro logo a los costados. 
                        Nos puedes encontrar detrás del Hotel Costa del Sol (dentro del estacionamiento del Aeropuerto). 
                        No tenemos una oficina dentro del aeropuerto, sólo te tienes que acercar al vehículo que estará ahí 
                        10 minutos antes de la hora de salida. Hay otras empresas que brindan un servicio parecido a un precio 
                        mayor, así que no te vayas a confundir.
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
                        ¿Cuál es su horario de atención?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                <AccordionPanel pb={4}>
                        Realizamos TRASLADOS las 24 horas, de lunes a domingo.Nuestro personal de RESERVAS (al cual puedes contactar 
                        por WhatsApp, teléfono, Facebook o email) trabaja de lunes a domingo de 6 AM a medianoche.
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
                <AccordionPanel pb={4}>
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
                <AccordionPanel pb={4}>
                        Sí, trabajamos la mayoría de feriados. Tenemos un horario especial en Navidad, Año Nuevo y Día de la Independencia 
                        (28 de Julio). Si necesitas un traslado en estas fechas, comunícate con nuestro equipo de Atención al Cliente para 
                        consultar la disponibilidad del servicio. Puedes enviarnos un WhatsApp o llamar al +51 960165148, enviarnos un 
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
                <AccordionPanel pb={4}>
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
                <AccordionPanel pb={4}>
                        El “servicio puerta a puerta” consiste en recoger/dejar a nuestros pasajeros en la misma puerta de su casa/hotel. 
                        ¡Es la opción más cómoda y segura! De ese modo evitas caminar por la calle y tener que cargar tu maleta. 
                        Este servicio está disponible sólo dentro de nuestra zona de operaciones en Miraflores. 
                        También tienes la alternativa de ir a nuestro paradero ubicado a pocos metros del Óvalo de Miraflores (Parque Kennedy), en Av. Ricardo Palma 262
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
                        ¿A qué hoteles van?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                <AccordionPanel pb={4}>
                        Podemos recogerte en más de 200 hoteles ubicados en Miraflores. Puedes consultar la lista de hoteles acá [LINK]

                        Recuerda que si estás en una casa o departamento también te podemos recoger de ahí. No es necesario que vayas a un hotel.
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
                <AccordionPanel pb={4}>
                        Comunícate con nuestro equipo de Atención al Cliente y reprogramaremos tu traslado sin ningún costo adicional. 
                        Puedes enviarnos un WhatsApp o teléfono al +51 960165148 o enviarnos un mensaje por Facebook o por un mail a vamos.ong@gmail.com

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
                <AccordionPanel pb={4}>
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
                <AccordionPanel pb={4}>
                        Niños de menos de 12 años reciben un descuento de 5 soles. Todas las demás personas pagan la misma tarifa.
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
                <AccordionPanel pb={4}>
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
                <AccordionPanel pb={4}>
                        Nuestros vehículos tienen amplio espacio para el equipaje de nuestros pasajeros Permitimos una maleta grande (23 KG) 
                        y una de mano por persona. Si es que tienes más equipaje habrá un recargo adicional. Por favor comunícate con nuestro 
                        equipo de Atención al Cliente indicando cuánto equipo llevas. Puedes enviarnos un WhatsApp o llamar al +51 999999999 
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
                <AccordionPanel pb={4}>
                        Sí tenemos espacio pero al ser equipaje voluminoso tendría un recargo adicional. Por favor comunícate con nuestro equipo de Atención al Cliente. 
                        Puedes enviarnos un WhatsApp o llamar al +51 999999999  o enviarnos un mensaje por Facebook o por un mail a vamos.ong@gmail.com
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
                <AccordionPanel pb={4}>
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
                <AccordionPanel pb={4}>
                        Nuestros choferes revisan y limpian los vehículos luego de cada viaje. Por favor comunícate con nuestro equipo de Atención al Cliente. 
                        Puedes enviarnos un WhatsApp o llamar al +51 999999999 o enviarnos un mensaje por Facebook o por un mail a cvamos.ong@gmail.com
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
                <AccordionPanel pb={4}>
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
                <AccordionPanel pb={4}>
                Reserva online – puedes reservar aquí [LINK] y pagar con tarjeta de crédito o débito Visa, Mastercard y MercadoPago de cualquier país. El proceso está automatizado.
                Reserva ahora, paga después – puedes reservar con la asistencia de nuestro equipo de reservas y pagar en efectivo al conductor al momento de abordar. 
                Para contactar a nuestro equipo de reservas por favor envía un WhatsApp o llamar al +51 999999999 o enviarnos un mensaje por Facebook o por un mail a vamos.ong@gmail.com
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
                <AccordionPanel pb={4}>
                        Comunícate con nuestro equipo de Atención al Cliente. Puedes enviarnos un WhatsApp o llamar al +51 999999999 o enviarnos un mensaje por Facebook o por un mail a vamos.ong@gmail.com

                        También puedes dejarnos un comentario en nuestra página de TripAdvisor (LINK)
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
                <AccordionPanel pb={4}>
                        Comunícate con nuestro equipo de Atención al Cliente. Puedes enviarnos un WhatsApp o llamar al +51 999999999 
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
                <AccordionPanel pb={4}>
                        No tenemos asientos especiales. Todos los asientos de nuestros vehículos tienen cinturón de seguridad.
                </AccordionPanel>
                </AccordionItem>

            </Accordion>

        </Box>
        </Flex>
    );
};

export default Questions;