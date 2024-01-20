import { useDispatch, useSelector } from "react-redux"
import { paginateConductores } from "../../redux/actions";
import { useEffect } from "react";

import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import {Flex, Tooltip, Button, Box} from '@chakra-ui/react'

function Paginado() {

    const dispatch = useDispatch();

    const currentPage = useSelector((state) => state.currentPage);

    const paginate = (e) => {
        console.log(e.target.name);
        dispatch(paginateConductores(e.target.name))
    }

    return (
        <Box position={"relative"} w='100%' justifyContent={"center"} alignContent={"center"}>
            <Flex justify={"center"} >
                <Tooltip label='Atras' placement='left' bg='blue.400'>
                    <Button colorScheme='#000' variant='outline' 
                    name='prev'onClick={paginate}>
                        <BsChevronLeft />
                    </Button>
                </Tooltip>
                <Flex>
                    <Button> {currentPage} </Button>
                </Flex>
                <Tooltip label='Siguiente' placement='right' bg='blue.300'>
                    <Button colorScheme='#000' variant='outline'
                    name="next" onClick={paginate}>
                        <BsChevronRight />
                    </Button>
                </Tooltip>
            </Flex>
        </Box>
    )
}


export default Paginado