import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Text, Image, Flex } from "@chakra-ui/react";

const CarouselVamos = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    "https://res.cloudinary.com/drgnsbah9/image/upload/v1705692184/Vamos/fqmsbe3btogyecds27p2.jpg",
    "https://res.cloudinary.com/drgnsbah9/image/upload/v1705692167/Vamos/gex5z6zoa7e977kfx98i.jpg",
    "https://res.cloudinary.com/drgnsbah9/image/upload/v1705691985/Vamos/zw4yoigq9vjjnobptrfq.jpg",
    "https://res.cloudinary.com/drgnsbah9/image/upload/v1705691985/Vamos/rorwwoewpfrdonpnitwn.jpg",
    "https://res.cloudinary.com/drgnsbah9/image/upload/v1705691983/Vamos/kzcet8fc06pg0uh5jki3.jpg",
  ];


  return (
    <Flex justifyContent="center" alignItems="center" mt={8} flexDirection={{ base: "column", md: "row" }}>
      <Box
        mr={{ md: 8 }}
        width={{ base: "80%", md: "50%" }}
        height={{ base: "300px", md: "400px" }}
        position="relative"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="black"
          opacity="0.7"
          borderRadius="lg"
        />
        <Slider {...settings}>
          {images.map((image, index) => (
            <Box key={index} borderRadius="lg" overflow="hidden" boxShadow="lg">
              <Image
                src={image}
                alt={`Imagen ${index + 1}`}
                style={{ width: "100%", height: "100%", borderTopRadius: "lg" }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
      <Box>
        <Text fontSize="lg" fontWeight="bold" mb={4} color="black">
          EMPLEADOS VAMOS!!
        </Text>
        <Text fontSize="md" color="black">
        En el corazón de Vamos! se encuentra un equipo excepcional, liderado por el fundador José Herrera. 
        Compuesto en un 75 % por adultos mayores, nuestro equipo refleja dedicación y diversidad. 
        Desde Jose Luis Quevedo hasta Bertie Infante, cada miembro contribuye con su experiencia y calidez, 
        haciendo de Vamos ONG un entorno laboral inclusivo y positivo. 
        Valoramos la puntualidad y el compromiso, y nuestro equipo demuestra diariamente su dedicación a la causa. 
        En Vamos! , creemos en brindar oportunidades significativas, donde la experiencia 
        y la dedicación de los adultos mayores son verdaderamente apreciadas.
        </Text>
      </Box>
    </Flex>
  );
};

export default CarouselVamos;
