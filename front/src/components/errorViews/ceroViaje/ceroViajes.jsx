import {Flex, Image,Text, keyframes} from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon,WarningTwoIcon } from '@chakra-ui/icons'

const animation = keyframes
`from {
    opacity: 0
}
to {
    opacity: 1
}
`
;

const CeroViaje = () => {
    const myAnimate = ` ${animation} lineal 1s`
    return (
        <Flex justify={'center'} align={'center'} animation={myAnimate}>
            <Flex flexDirection={'column'} justify={'center'} align={'center'}>
                <Flex fontSize={'10rem'} color={'red'}>
                    <WarningTwoIcon/>
                </Flex>
                <Text fontSize={'1.5rem'} >
                    ¡Sin viajes registrados!
                </Text>
            </Flex>
        </Flex>
    )
}

export default CeroViaje