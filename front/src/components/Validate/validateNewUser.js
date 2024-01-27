//import {useSelector} from 'react-redux'

const validateNewUser = (input) => {
    //const emailDb = useSelector((state) => state.newUsuario.email)
    let error = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;


    error.name = !input.name ? 'Ingrese un nombre' 
    : input.name.length < 3 ? 'El nombre debe tener mas de 3 caracteres.' 
    : input.name.length > 16 ? 'El nombre no puede tener mas de 16 caracteres.'
    : null;

    error.phone = !input.phone ? 'Ingrese in numero de telefono' 
    : input.phone.length > 12 || input.phone.length < 7 ? 'Le numero de telefono debe estar en 7 y 12 caracteres.'
    : null;

    error.email = !input.email ? 'Ingrese un email'
    : !emailRegex.test(input.email) ? 'Error de correo electronico'
    : input.email === emailDb ? 'Este email ya esta registrado'
    : null;

    error.password = !input.apssword ? 'Ingrese una contraseña'
    : input.password.length < 6 || input.password.length > 25 ? 'La contraseña debe contener entre 6 y 25 caracters'
    : !passwordRegex.test(input.password) ? 'La contrase debe contener: Al menos 8 caracteres de longitud. Al menos una letra minúscula. Al menos una letra mayúscula. Al menos un número.'
    : null;

    return error;
}
export default validateNewUser;
