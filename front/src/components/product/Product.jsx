// import React from 'react'
// import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
// import axios from "axios"
// import { useState } from 'react'



// const Product = () => {

//     const [preferenceId, setPreferenceId] = useState(null)

//     initMercadoPago('TEST-35665577-40d5-4aa6-8db1-3f478f995b3b', {
//         locale: 'es-PE',
//     });

//     const createPreference = async () => {
//         try {
//           const response = await axios.post("https://vamosappserver.onrender.com/merpago/create", 
          
//           {
//             items: [
//               {
//                 description: "Banana contenta",
//                 price: 100,
//                 quantity: 1,
//               },
//               {
//                 description: "Otro producto",
//                 price: 50,
//                 quantity: 2,
//               },
             
//             ],
//           }
//           );
    
//           const { id } = response.data;
//           return id;
//         } catch (error) {
//           console.log(error);
//         }
//       };

//       const handleBuy = async () => {
//         const id = await createPreference();
//         if (id) {
//           setPreferenceId(id);
//         }
//       };

// return (
//     <div >
//         <div > 
//             <div >
//         <img src="https://pm1.aminoapps.com/6352/32d872b12bd90b04d70f7b7816026f175482f810_128.jpg"
//                     alt="Product Image"/>
// <h3>Banana contenta</h3>
// <p>precio 100</p>
// <button onClick={handleBuy}>Comprar</button>
// {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} customization={{ texts:{ valueProp: 'smart_option'}}} />}

// <br />
// <br />
// <br />
// <br />
// <br />
// <br />
// <br />
// <br />
// </div>
// </div>
// </div>
// )
// }
// export default Product


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
          console.log(error);
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