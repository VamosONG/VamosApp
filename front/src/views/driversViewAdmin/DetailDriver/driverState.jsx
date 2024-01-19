import { FormControl, FormLabel, InputGroup,InputLeftAddon,Select } from '@chakra-ui/react'
import { useState } from 'react'

const DriverState = (props) => {
    const [stateDriver, setStateDri] = useState('')

    const {driverState} = props;
    
    driverState ? ('Activo') : ('')

    const handleChange = (e) => {
        const property = e.target.name;
        let value = e.target.value;
        console.log(property + " " + value);
        // if (property === 'Activo') {
            
        // }
        setStateDri({
            ...stateDriver,
            [property]: value,
        });
    };

    // const handleDriverState = (value) => {

    // }

    const state = ['Activo', 'Descanso', 'retirado']

    return <>
        <FormControl>
            <FormLabel>Zona</FormLabel>
            <InputGroup color='black' fontWeight='bold' boxShadow='0 0px 4px black'>
                <InputLeftAddon bg='yellow.200'>
                    {props.driverState}
                </InputLeftAddon>
                <Select
                    color="#000"
                    placeholder="Selecciona el Aeropuerto"
                    name="driverState"
                    bg='lightgreen'
                    onChange={handleChange}
                    value={stateDriver.driverState}
                >
                    {state.map((bool, index) => (
                        <option key={index} value={bool}>
                            {bool}
                        </option>
                    ))}
                </Select>
            </InputGroup>
        </FormControl>
    </>
}

export default DriverState