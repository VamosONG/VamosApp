import { Box, Button, Collapse, useDisclosure, Tooltip } from '@chakra-ui/react'
import { EditIcon, WarningIcon } from '@chakra-ui/icons'
import UpdateDriverData from '../ChoferFormulario/UpdateChoferForm';
import { useState } from 'react';

const ViewBtnUpdateDriver = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const onToggle = () => {
      setIsOpen(!isOpen);
    };
  
    const closeFormEdit = () => {
      setIsOpen(false);
    };
    
    return (
        <Box  >
            <Tooltip hasArrow label='Editar' bg='#009ED1' placement='right-end'>

                <Button onClick={onToggle} bg='#009ED1'><EditIcon /></Button>
            </Tooltip>
            <Collapse initialScale={0.7} direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
                <Box
                    h='auto'
                    mt='8'
                    w='auto'
                    overflow='hidden'
                    position='absolute'
                    right='1rem'
                    borderRadius={20}
                    zIndex={99}
                >
                    <UpdateDriverData {...props} closeFormEdit={closeFormEdit}/>
                </Box>
            </Collapse>
        </Box>
    )
}

export default ViewBtnUpdateDriver;