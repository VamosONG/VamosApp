import { Box, Flex, Text, Image, Heading, useBreakpointValue } from "@chakra-ui/react";

const MiniBanner = () => {
    const benefits = [
    { logo: "https://res.cloudinary.com/drgnsbah9/image/upload/v1706568847/Vamos/prhy1z8vaoy5pyaytngv.png", description: "Viaje Seguro hacia tu destino" },
    { logo: "https://res.cloudinary.com/drgnsbah9/image/upload/v1706568845/Vamos/kvlqid15e8ucc6v2hjlk.png", description: "PetFriendly" },
    { logo: "https://res.cloudinary.com/drgnsbah9/image/upload/v1706568847/Vamos/wihneum994tpjqlyqsiq.png", description: "Apoyas una causa Social" },
    { logo: "https://res.cloudinary.com/drgnsbah9/image/upload/v1706568847/Vamos/qeze81qnlzm2pnlfww9e.png", description: "Vehículos Modernos" },
    ];

    const fontSizeHeading = useBreakpointValue({ base: "xl", md: "lg", lg: "5xl" });
    const fontSizeText = useBreakpointValue({ base: "md", md: "md", lg: "2xl" });

    return (
        <Box 
        bgColor='#009ED1'
        bgSize="cover" 
        p={5}
        >
            <Heading 
            mb={4}
            color="white"
            textShadow='3px 3px 4px rgb(0, 0, 0, 0.4)'
            fontFamily="'DIN Alternate Black', sans-serif"
            fontSize={fontSizeHeading}
            >
                Beneficios de Viajar con Nosotros
            </Heading>
            <Flex justify="space-around">
            {benefits.map((benefit, index) => (
            <Flex direction="column" align="center" key={index}>
                <Image src={benefit.logo} boxSize="50px" />
                <Text 
                mt={3}
                color="white"
                fontFamily='DIN Medium, sans-serif'
                textShadow='3px 3px 4px rgb(0, 0, 0, 0.4)'
                fontSize={fontSizeText}
                >
                {benefit.description}
                </Text>
            </Flex>
            ))}
            </Flex>
        </Box>
    );
};

export default MiniBanner;
