//import {useSelector} from 'react-redux'

<<<<<<< HEAD
const validateNewUser = (input) => {
    //const emailDb = useSelector((state) => state.newUsuario.email)
=======
export const ValidateNewUser = (input) => {
  
>>>>>>> 91409bffe2bfb88ca928a2e72d8e5ea1e7ce52ff
    let error = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const phoneRegex = /^[0-9]{6,14}$/;

    error.name = !input.name ? 'Ingrese un nombre.' 
    : input.name.length < 2 ? 'El nombre debe tener mas de 2 caracteres.' 
    : input.name.length > 16 ? 'El nombre no puede tener mas de 16 caracteres.'
    : null;

    error.surname = !input.surname ? 'Ingrese un apellido.' 
    : input.surname.length < 2 ? 'El apellido debe tener mas de 2 caracteres.' 
    : input.surname.length > 16 ? 'El apellido no puede tener mas de 16 caracteres.'
    : null;

    error.phone = !input.phone ? 'Ingrese número de teléfono.' 
    : !phoneRegex.test(input.phone) ? 'Ingrese teléfono con formato "(cod.pais)(número) sin paréntesis ni espacios".'
    : null;

    error.email = !input.email ? 'Ingrese un email.'
    : !emailRegex.test(input.email) ? 'Ingrese email válido.'
    : null;

<<<<<<< HEAD
=======
    error.password = !input.password ? 'Ingrese una contraseña.'
    : !passwordRegex.test(input.password) ? 'La contraseña debe contener al menos 8 caracteres, una minúscula, una mayúscula y un número.'
    : null;

>>>>>>> 91409bffe2bfb88ca928a2e72d8e5ea1e7ce52ff
    return error;
}
export default validateNewUser;
