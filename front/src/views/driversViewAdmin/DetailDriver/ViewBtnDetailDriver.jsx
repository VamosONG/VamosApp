import { Box, Button, Collapse, useDisclosure, Tooltip } from '@chakra-ui/react'
import { EditIcon, ViewIcon } from '@chakra-ui/icons'
import { useState } from 'react';
import DriverDetail from './driverDetail';

const ViewBtnDetailDriver = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const onToggle = () => {
      setIsOpen(!isOpen);
    };
  
    // const closeFormEdit = () => {
    //   setIsOpen(false);
    // };
    
    return (
        <Box  >
            <Tooltip hasArrow label='Ver mas' bg='yellow.300' placement='right-start' color='#000'>

                <Button onClick={onToggle} bg='yellow.300'><ViewIcon /></Button>
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
                    <DriverDetail {...props}  />
                </Box>
            </Collapse>
        </Box>
    )
}

export default ViewBtnDetailDriver;