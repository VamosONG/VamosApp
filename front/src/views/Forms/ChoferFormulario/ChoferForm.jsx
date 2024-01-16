import { Box, Center, useDisclosure } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    Input, Select, Button, Heading, Stack, Image, Text, Flex
} from '@chakra-ui/react'
import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import choferes from '../../../utils/chofer'
import axios from 'axios'
import { createNewChofer } from '../../../redux/actions';
import { ValidateNewDriver } from '../../../components/Validate/validateNewDriver';



    const ChoferForm = () => {
        const dispatch = useDispatch();
        const choferData = useSelector((state) => state.conductores)
        const [image_Url, setImage_Url] = useState("")
        

    const [form, setForm] = useState({
        name: "",
        surname: "",
        email: "",
        birthday: "",
        dni: "",
        phone: "",
        driverImg: "",
        airports: "",
        carType: "",
        carModel: "",
        driverLicense: "",
        carImg: "",
        carPatent: '',
        carSoat: "",
        circulationPermit: "",
        capacityPassengers: "",
    });

    const [error, setError] = useState({
        name: "",
        surname: "",
        email: "",
        birthday: "",
        dni: "",
        phone: "",
        driverImg: "",
        airports: "",
        carType: "",
        carModel: "",
        driverLicense: "",
        carImg: "",
        carPatent: '',
        carSoat: "",
        circulationPermit: "",
        capacityPassengers: "",
    })

    const handleChange = (e) => {
        const property = e.target.name;
        const value = e.target.value;
        console.log(property + ' ' + value);
        setForm({
            ...form,
            [property]: value
        })
    }

    const urlCloudinary = 'https://api.cloudinary.com/v1_1/dzd6hfguw/image/upload'

    const changeUploadImage = async (event) => {
        const fileChofer= event.target.files[0];
        const data = new FormData()

        data.append("file", fileChofer)
        data.append("upload_preset", "Presets_vamos")
        const response= await axios.post('https://api.cloudinary.com/v1_1/dcjdkojad/image/upload', data)

        console.log(response.data);

        setImage_Url(response.data.secure_url)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

    // //     const formData = new FormData()
    // //     formData.append('file', file)
    // //     formData.append('upload_preset', 'VamosONGFormChoferes')

    // //     console.log(file);

    // //     const response = await fetch(urlCloudinary, {
    // //         method: 'POST',
    // //         body: formData,
    // //     })
    // //     const data = response
    // //     console.log(data);
    // //     setImage_Url(data.url)

    // //     if (!response.ok) {
    // //         throw new Error(`Error: ${response.status} - ${response.statusText}`);
        // const validationForm = ValidateNewDriver(form)
        // setError(validationForm)
        // const hasError = Object.values(validationForm).some((error) => !!error)

        // console.log(form);
        // console.log(error);

        if (form) {
            const response = await axios.post('http://localhost:3001/drivers/create', form)
            if (response) {
                Swal.fire({
                    title: "Bien hecho!",
                    text: "Datos registrados!",
                    icon: "success"
                })
                setForm({
                    name: "",
                    surname: "",
                    email: "",
                    birthday: "",
                    dni: "",
                    phone: "",
                    driverImg: "",
                    airports: "",
                    carType: "",
                    carModel: "",
                    driverLicense: "",
                    carImg: "",
                    carPatent: '',
                    carSoat: "",
                    circulationPermit: "",
                    capacityPassengers: "",
                })
            } else {
                throw new Error(Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Hubo un error en el registro"
                }))
            }
        } else {
            console.log(validationForm.error);
            console.log('form '+ form);
            Swal.fire({
                icon: "error",
                title: "Error en validate",
                text: "Hay un input con errores"
            })
        } 
        }

        const carTypeFount = ['auto', 'camioneta', 'van'];
        const airportsFount = ['tumbes', 'talara', 'lima'];
        const carModelFount = ['toyota', 'hiunday', 'ford'];
    
    return (
        <form onSubmit={handleSubmit} >
            <input type="file"
            accept='image/*'
            onChange={changeUploadImage}
            />
                    <button type='submit'> Enviar imagen </button>
            {image_Url && (
                <div>
                    <img src={image_Url} alt='foto del'/>
                </div>
            )}
             
        </form>
    )
}
export default ChoferForm;