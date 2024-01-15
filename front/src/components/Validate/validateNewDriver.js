export const ValidateNewDriver = (input) => {
    let error = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const imageRegex = /\.(jpg|png|svg|gif|jpeg)$/i;
    const airportOrigin = ['talara', 'tumbes']

    error.name = !input.name ? 'Ingresa un nombre'
        : input.name.length < 3 || input.name.length > 15 ? 'solo puede tener entre 3 y 15 caracteres el nombre'
            : null;

    error.surname = !input.surname ? 'Ingrese el apellido'
        : input.surname.length < 3 || input.surname.length > 15 ? 'solo puede tener entre 3 y 15 caracteres el apellido'
            : null;

    error.dni = !input.dni ? 'Ingrese su DNI'
        : input.dni.length > 9 || input.dni.length < 7 ? 'Le numero de telefono debe tener 8 caracteres.'
            : null;

    error.phone = !input.phone ? 'Ingrese in numero de telefono'
        : input.phone.length > 12 || input.phone.length < 7 ? 'Le numero de telefono debe estar en 7 y 12 caracteres.'
            : null;

    error.driverImg = !imageRegex.test(input.driverImg) ?
        "Por favor ingrese una imagen con estos formatos JPG, PNG, SVG."
        : null;

    error.airport = !input.airport ? 'Ingrese un aeropuerto de origen'
        : !airportOrigin.includes(input.airport.toLowerCase()) ? 'Aeropuerto no válido'
            : null;

    error.carType = !input.carType ? 'Ingrese un modelo de vehiculo'
        : null;
}