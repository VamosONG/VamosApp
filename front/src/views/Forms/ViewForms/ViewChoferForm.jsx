import ChoferForm from "../ChoferFormulario/ChoferForm";
import { Box, Button, Collapse, useDisclosure } from '@chakra-ui/react'
import LogOut from "../LogOut/logout";
import { useState } from "react";

const ViewBtnChoferForm = () => {
    const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeForm = () => {
    setIsOpen(false);
  };
    return (
        <Box zIndex={99}   >
            <Button onClick={onToggle}  >Nuevo Chofer</Button>
            <Collapse initialScale={0.9} direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
                <Box
                    h='auto'
                    mt='8'
                    w='auto'
                    bg='none'
                    overflow='hidden'
                    position='absolute'
                    right='1rem'
                >
                    <ChoferForm closeForm={closeForm}/>
                </Box>
            </Collapse>
        </Box>
    )
}
export default ViewBtnChoferForm;