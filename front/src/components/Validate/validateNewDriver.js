export const ValidateNewDriver = (input) => {
    let error = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const imageRegex = /\.(jpg|png|svg|gif|jpeg)$/i;
    const airportOrigin = ['talara', 'tumbes', 'lima']
    const carTypeFount = ['auto', 'camioneta', 'van'];

    const ageValidate = (birthday) => {
        const dateNow = new Date()

        const dateBorn = new Date(birthday)

        const age = dateNow.getFullYear() - dateBorn.getFullYear();
        if (age < 18 || age > 90) {
            return false
        } else {
            return true
        }
    }

    const soatValidate = (carSoat) => {
        const dateNow = new Date()

        const dateSoat = new Date(carSoat)

        const diffMeses = (dateSoat.getFullYear() - dateNow.getFullYear()) * 12 + dateSoat.getMonth() - dateNow.getMonth();

        if (diffMeses > 12) {
            return false
        } else {
            return true
        }
    }

    error.name = !input.name ? 'Ingresa un nombre'
        : input.name.length < 3 || input.name.length > 15 ? 'solo puede tener entre 3 y 15 caracteres el nombre'
            : null;

    error.surname = !input.surname ? 'Ingrese el apellido'
        : input.surname.length < 3 || input.surname.length > 15 ? 'solo puede tener entre 3 y 15 caracteres el apellido'
            : null;

    error.birthday = !input.birthday ? 'Ingresa tu fecha de nacimiento'
        : !ageValidate(input.birthday) ? 'Debes tener entre 18 y 90 años de edad'
            : null;

    error.email = !input.email ? 'Ingrese un email'
        : !emailRegex.test(input.email) ? 'Error de correo electronico'
            : null;

    error.dni = !input.dni ? 'Ingrese su DNI'
        : input.dni.length > 9 || input.dni.length < 7 ? 'Le numero de telefono debe tener 8 caracteres.'
            : null;

    error.phone = !input.phone ? 'Ingrese in numero de telefono'
        : input.phone.length > 12 || input.phone.length < 7 ? 'Le numero de telefono debe estar en 7 y 12 caracteres.'
            : null;

    // error.driverImg = !imageRegex.test(input.driverImg) ?
    //     "Por favor ingrese una imagen con estos formatos JPG, PNG, SVG."
    //     : null;

    error.airports = !input.airports ? 'Ingrese un aeropuerto de origen'
        : !airportOrigin.includes(input.airports.toLowerCase()) ? 'Aeropuerto no válido'
            : null;

    error.carType = !input.carType ? 'Ingrese un tipo de vehiculo'
        : !carTypeFount.includes(input.carType.toLowerCase()) ? 'Vehiculo no valido'
            : null;

    error.carModel = !input.carModel ? 'Ingrese un modelo de vehiculo'
        : input.carModel.length < 2 || input.carModel.length > 25 ? 'Debe tener entre 2 y 25 caracteres'
            : null;

    error.driverLicense = !input.driverLicense ? 'Ingrese su licencia'
        : input.driverLicense.length < 7 || input.driverLicense.length > 12 ? 'Debe tener entre 7 y 12 caracteres'
            : null;

    // error.carImg = !input.carImg ? 'Carga una imagen'
    //     : !imageRegex.test(input.carImg) ? "Por favor ingrese una imagen con estos formatos JPG, PNG, SVG."
    //         : null;

    error.carPatent = !input.carPatent ? 'Ingrese la placa del vehiculo'
        : input.carPatent.length < 4 || input.carPatent.length > 10 ? 'Debe tener entre 4 y 10 caracteres'
            : null;

    error.carSoat = !input.carSoat ? 'Ingrese la fecha de vencimiento del Soat'
        : !soatValidate(input.carSoat) ? 'El Soat no puede estar vencido'
            : null;

    // error.circulationPermit = !input.circulationPermit ? 'Carga tu persmiso de circulacion'
    //     : !imageRegex.test(input.circulationPermit) ? "Por favor ingrese una imagen con estos formatos JPG, PNG, SVG."
    //         : null;

    error.capacityPassengers = !input.capacityPassengers ? 'Ingrese la cantidad de pasajeros'
        : input.capacityPassengers < 1 || input.capacityPassengers > 20 ? 'Solo se admite un rango entre 1 y 20 pasajeros'
            : null;

    return { message: 'Error en validacion', error }
}