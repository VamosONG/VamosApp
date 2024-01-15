import React, { useState, useEffect } from 'react';
import { Box, Heading, HStack, VStack, Avatar, Divider, Text, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Ana Rodriguez",
      role: "Cliente Satisfecho",
      text: "¡Increíble servicio! Me encantó viajar con 'Vamos'.",
    },
    {
      name: "Maria Jose",
      role: "Usuario Feliz",
      text: "Buen servicio, puntual y confiable.",
    },
    {
      name: "María Gómez",
      role: "Viajera Regular",
      text: "Siempre elijo 'Vamos' para mis traslados, excelente atención.",
    },
    {
      name: "Carlos González",
      role: "Cliente Asiduo",
      text: "Servicio impecable, conductores amigables, siempre puntuales.",
    },
    {
      name: "Laura Fernández",
      role: "Cliente Satisfecha",
      text: "Los mejores traslados que he tenido, definitivamente recomiendo 'Vamos'.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = React.useRef();

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1));
    }, 10000);

    intervalRef.current = intervalId;

    return () => {
      clearInterval(intervalId);
    };
  }, [testimonialsData.length]);

  return (
    <Box p={8} bg="gray.100">
      <Heading mb={8} textAlign="center">
        Testimonios de Clientes
      </Heading>
      <HStack spacing={8} align="start" justify="center" overflowX="hidden" whiteSpace="nowrap">
        {testimonialsData.map((testimonial, index) => (
          <Card key={index} {...testimonial} isActive={index === currentIndex} />
        ))}
      </HStack>
      <IconButton
        icon={<ChevronLeftIcon />}
        onClick={handlePrev}
        position="absolute"
        left={0}
        top="50%"
        transform="translateY(-50%)"
      />
      <IconButton
        icon={<ChevronRightIcon />}
        onClick={handleNext}
        position="absolute"
        right={0}
        top="50%"
        transform="translateY(-50%)"
      />
    </Box>
  );
};

const Card = ({ name, role, text, isActive }) => {
  return (
    <VStack
      p={4}
      align="start"
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      width={['100%', '500px']}
      opacity={isActive ? 1 : 0.5}
      transition="opacity 0.3s"
    >
      <Avatar name={name} src={`https://i.pravatar.cc/150?u=${name}`} />
      <Text fontSize="xl" fontWeight="bold" isTruncated>
        {name}
      </Text>
      <Text fontSize="md" color="gray.500" isTruncated>
        {role}
      </Text>
      <Divider />
      <Text fontSize="sm" isTruncated>
        {text}
      </Text>
    </VStack>
  );
};

export default Testimonials;
