import { Box, Image, useBreakpointValue, Modal, ModalOverlay, ModalContent, ModalBody, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";

const Gallery = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
    'https://res.cloudinary.com/drgnsbah9/image/upload/v1706560318/Vamos/gxyenadjjmxqhth3youa.jpg',
    'https://res.cloudinary.com/drgnsbah9/image/upload/v1706560319/Vamos/aabwu26gkl11jbmxomyr.jpg',
    'https://res.cloudinary.com/drgnsbah9/image/upload/v1706560319/Vamos/qpunay8x9f3jl33atkno.jpg',
    'https://res.cloudinary.com/drgnsbah9/image/upload/v1706560320/Vamos/sqdrfqcdidmgc9jdxdkc.jpg',
    'https://res.cloudinary.com/drgnsbah9/image/upload/v1706560321/Vamos/jf2wnpsxrijucvwvxbmd.jpg',
    'https://res.cloudinary.com/drgnsbah9/image/upload/v1706562331/Vamos/nfvrirbtrq5qn1ve6xq8.jpg',
    'https://res.cloudinary.com/drgnsbah9/image/upload/v1706562332/Vamos/mdnuzkz4r3zl5ecf7frb.jpg',
    'https://res.cloudinary.com/drgnsbah9/image/upload/v1706562332/Vamos/xlmeyrokcqo9qk8g98bf.jpg',
  ];

  const columns = useBreakpointValue({ base: 2, md: 2, lg: 4 });

  const handleClick = (src) => {
    setSelectedImage(src);
    onOpen();
  };

  return (
    <>
      <Box display="grid" gridTemplateColumns={`repeat(${columns}, 1fr)`} gap={6}>
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            objectFit="cover"
            borderRadius="md"
            transition="all 0.2s ease"
            _hover={{
              transform: "scale(1.1)",
            }}
            onClick={() => handleClick(src)}
          />
        ))}
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered> {/* Añadido isCentered */}
        <ModalOverlay />
        <ModalContent
          display="flex"
          alignItems="center" // Centra verticalmente
          justifyContent="center" // Centra horizontalmente
        >
          <ModalBody>
            <Image src={selectedImage} objectFit="contain" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Gallery;
