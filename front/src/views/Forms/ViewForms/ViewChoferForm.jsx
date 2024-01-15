import ChoferForm from "../ChoferFormulario/ChoferForm";
import { Box, Button, Collapse, useDisclosure } from '@chakra-ui/react'

const ViewBtnChoferForm = () => {
    const { isOpen, onToggle } = useDisclosure();
    return (
        <Box zIndex={99}   >
            <Button onClick={onToggle}  >Nuevo Chofer</Button>
            <Collapse initialScale={0.9} direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
                <Box
                    h='auto'
                    mt='4'
                    w='auto'
                    bg='none'
                    overflow='hidden'
                    position='absolute'
                    right='1rem'
                >
                    <ChoferForm />
                </Box>
            </Collapse>
        </Box>
    )
}
export default ViewBtnChoferForm;