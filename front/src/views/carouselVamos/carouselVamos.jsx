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
    "https://res.cloudinary.com/drgnsbah9/image/upload/v1705798276/Vamos/c7u1o4qspjmzh3abskod.jpg",
    "https://res.cloudinary.com/drgnsbah9/image/upload/v1705691985/Vamos/rorwwoewpfrdonpnitwn.jpg",
    "https://res.cloudinary.com/drgnsbah9/image/upload/v1705691983/Vamos/kzcet8fc06pg0uh5jki3.jpg",
  ];


  return (
    <Flex 
    justifyContent="center" 
    alignItems="center" 
    flexDirection={{ base: "column", md: "row" }}
    mt={8} 
    mx={10} // Agrega margen a los lados
    mb={30} // Agrega margen inferior
    >
      <Box
        mr={{ md: 8 }}
        width={{ base: "100%", md: "300%" }}
        height={{ base: "200px", md: "600" }}
        position="relative"
        overflow="hidden"
      >
        <Slider {...settings}>
          {images.map((image, index) => (
            <Box key={index} borderRadius="lg" overflow="hidden" boxShadow="lg">
              <Image
                src={image}
                alt={`Imagen ${index + 1}`}
                style={{ 
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
      <Box>
        <Text 
        fontSize="lg" 
        fontWeight="bold" 
        mb={4} 
        color="black"
        fontFamily="'DIN Alternate Black', sans-serif"
        fontSize={['2xl', null, '5xl']}
        textShadow='2px 2px 4px rgb(0, 0, 0, 0.4)'
        >
          EMPLEADOS VAMOS!!
        </Text>
        <Text 
        fontSize="md" 
        color="black"
        fontFamily="'DIN Alternate Black', sans-serif"
        fontSize={['lg', null, '1xl']}
        textShadow='2px 2px 4px rgb(0, 0, 0, 0.3)'
        >
        Compuesto en un 75 % por adultos mayores, nuestro equipo refleja dedicación y diversidad. 
        Cada miembro contribuye con su experiencia y calidez, haciendo de Vamos ONG un entorno laboral inclusivo y positivo. 
        En Vamos! creemos en brindar oportunidades significativas, donde la experiencia 
        y la dedicación de los adultos mayores son verdaderamente apreciadas. 
        </Text>
      </Box>
    </Flex>
  );
};

export default CarouselVamos;
