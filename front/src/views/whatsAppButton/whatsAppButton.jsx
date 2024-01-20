import React from "react";
import { VStack, Box, Link, Image } from "@chakra-ui/react";
import WSP from '../../assets/icons/wspicon.png'

const WhatsAppButton = () => {

    const whatsappLink = "https://wa.me/5493856971908";

    return (
        <VStack
        position="fixed"
        bottom="4"
        right="4"
        spacing="4"
        align="flex-end"
        >
            <Link href={whatsappLink} isExternal>
                <Box
                w="60px"
                h="60px"
                >
                <Image src={WSP} alt="WhatsApp" w="100%" h="100%" />
                </Box>
            </Link>
        </VStack>
    );
};

export default WhatsAppButton;
