

import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { useState } from 'react';
import axios from 'axios';
import { Box, Image, Heading, Button } from '@chakra-ui/react';



const Product = () => {
    initMercadoPago('TEST-35665577-40d5-4aa6-8db1-3f478f995b3b', {
        locale: "es-PE"
    });
    const [preferenceId, setPreferenceId] = useState(null);
    const createPreference = async () => {
        try {
          const response = await axios.post("https://vamosappserver.onrender.com/merpago/create", { 
            titulo: "Viaje",
            price: 100,
            quantity: 1,
          });

          const { id } = response.data;
          return id;
        } catch (error) {
          throw new Error(error);
        }
      };

      const handleBuy = async () => {
        const id = await createPreference();
        if (id) {
          setPreferenceId(id);
        }
      };
      return (
        <Box
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="lg"
          p="4"
        >
          <Image
            src="https://media.istockphoto.com/id/155439315/es/foto/avión-de-pasajeros-volando-sobre-nubes-durante-la-puesta-del-sol.jpg?s=612x612&w=0&k=20&c=E6zuCTGyaqlKa7_UDwg6vDVNFe5U53tUJZRhinQ02gg="
            alt="Product Image"
            mb="4"
          />
          <Heading as="h3" size="md" mb="2">
            Viaje de Talara a Tumbes
          </Heading>

          <Button colorScheme="teal" onClick={handleBuy}>
            Comprar
          </Button>

          {preferenceId && (
            <Wallet
              initialization={{ preferenceId }}
              customization={{ texts: { valueProp: 'smart_option' } }}
            />
          )}
        </Box>
      );
    };
export default Product