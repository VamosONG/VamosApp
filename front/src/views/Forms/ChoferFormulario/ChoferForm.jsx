// STYLE
import { Box, Center, useDisclosure } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Heading,
  Stack,
  Image,
  Text,
  Flex,
} from "@chakra-ui/react";
import Swal from "sweetalert2";
// import withReactContent from 'sweetalert2-react-content'

// HOOKS
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// DEPENDECIES
import axios from "axios";
import { createNewChofer, getAllConductores } from "../../../redux/actions";

const ChoferForm = ({ closeForm }) => {
  const dispatch = useDispatch();
  const [image_Url, setImage_Url] = useState("");

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
    carPatent: "",
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
    carPatent: "",
    carSoat: "",
    circulationPermit: "",
    capacityPassengers: "",
  });

  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    
    setForm((prevForm) => ({
      ...prevForm,
      [property]: value,
    }));
  };

  const changeUploadImage = async (event, imageField) => {
    const fileChofer = event.target.files[0];
    const data = new FormData();

    data.append("file", fileChofer);
    data.append("upload_preset", "Presets_vamos");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/drgnsbah9/image/upload",
        data
      );

      

      setForm((prevForm) => ({
        ...prevForm,
        [imageField]: response.data.secure_url,
      }));
    } catch (error) {
      console.error("Error al cargar la imagen:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form) {
      const response = await axios.post(
        "http://localhost:3001/drivers/create",
        form
      );
      if (response) {
        Swal.fire({
          title: "¡Bien hecho!",
          text: "¡Chofer creado éxitosamente!",
          icon: "success",
        });
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
          carPatent: "",
          carSoat: "",
          circulationPermit: "",
          capacityPassengers: "",
        });
        await dispatch(getAllConductores())
        closeForm();
      } else {
        throw new Error(
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Hubo un error en el registro",
          })
        );
      }
    } else {
     
     
      Swal.fire({
        icon: "error",
        title: "Error al validar los datos",
        text: "Hay un campo con errores, revise e intentelo nuevamente.",
      });
    }
  };

  const carTypeFount = ["auto", "camioneta", "van", 'van plus'];
  const airportsFount = ["Aeropuerto Tumbes", "Aeropuerto Talara"];
  //const carModelFount = ["toyota", "hiunday", "ford"];

  return (
    <form onSubmit={handleSubmit}>
      <Stack
        spacing={2}
        bg="gray.200"
        p="5"
        borderRadius="md"
        boxShadow="dark-lg"
        color="black"
        border="1px solid black"
        mx="1rem"
        w="100%"  // Ajusta el ancho para ocupar el 100% del contenedor
        align="center"
      >
        <Box bg='#009ED1' py={2} px={10} borderRadius="md" color="white" fontFamily="'DIN Medium',">
        <Heading fontSize="4xl" fontFamily="'DIN Medium',">Datos del chofer</Heading>
          <Flex flexDirection={{ base: "column" }}>
            <Center
              py={2}
              gap={120}
              flexDirection={{ base: "column", md: "row" }}
            >
              <FormControl isRequired>
                <FormLabel fontSize="lg" fontFamily="'DIN Medium',">Nombre</FormLabel>
                <Input
                  color="black"
                  bgColor="white"
                  type="text"
                  placeholder="Ingrese su nombre"
                  name="name"
                  onChange={handleChange}
                  value={form.name}
                />
                {error.name && <p>{error.name}</p>}
              </FormControl>
              <FormControl isRequired>
                <FormLabel fontSize="lg" fontFamily="'DIN Medium',">Apellido</FormLabel>
                <Input
                  color="black"
                  bgColor="white"
                  type="text"
                  placeholder="Ingrese su apellido"
                  name="surname"
                  onChange={handleChange}
                  value={form.surname}
                />
                {error.surname && <p>{error.surname}</p>}
              </FormControl>
              <FormControl isRequired>
                <FormLabel fontSize="lg" fontFamily="'DIN Medium',">Correo electronico</FormLabel>
                <Input
                  color="black"
                  bgColor="white"
                  type="mail"
                  placeholder="Correo electronico"
                  name="email"
                  onChange={handleChange}
                  value={form.email}
                />
                {error.email && <p>{error.email}</p>}
              </FormControl>
            </Center>

            <Center
              py={2}
              gap={10}
              flexDirection={{ base: "column", md: "row" }}
            >
              <FormControl isRequired>
                <FormLabel fontSize="lg" fontFamily="'DIN Medium',">Fecha de Nac.</FormLabel>
                <Input
                  color="black"
                  bgColor="white"
                  size="md"
                  type="date"
                  name="birthday"
                  onChange={handleChange}
                  value={form.birthday}
                />
                {error.birthday && <p>{error.birthday}</p>}
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontSize="lg" fontFamily="'DIN Medium',">DNI</FormLabel>
                <Input
                  color="black"
                  bgColor="white"
                  type="number"
                  placeholder="Numero de DNI"
                  name="dni"
                  onChange={handleChange}
                  value={form.dni}
                />
                {error.dni && <p>{error.dni}</p>}
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontSize="lg" fontFamily="'DIN Medium',">Numero de Celular</FormLabel>
                <Input
                  color="black"
                  bgColor="white"
                  type="number"
                  placeholder="Numero de celular"
                  name="phone"
                  onChange={handleChange}
                  value={form.phone}
                />
                {error.phone && <p>{error.phone}</p>}
              </FormControl>
            </Center>

            <Center
              py={2}
              gap={4}
              flexDirection={{ base: "column", md: "row" }}
            >
              <FormControl>
                <FormLabel fontSize="lg" fontFamily="'DIN Medium',">Foto del Chofer</FormLabel>
                <Input
                  color="black"
                  bgColor="white"
                  type="file"
                  name="driverImg"
                  accept="image/*"
                  onChange={(e) => changeUploadImage(e, 'driverImg')}
                />
                {error.driverImg && <p>{error.driverImg}</p>}
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontSize="lg" fontFamily="'DIN Medium',">Aeropuerto Origen</FormLabel>
                <Select
                  color="black"
                  bgColor="white"
                  placeholder="Selecciona el Aeropuerto"
                  name="airports"
                  onChange={handleChange}
                  value={form.airports}
                >
                  {airportsFount.map((airports, index) => (
                    <option key={index} value={airports}>
                      {" "}
                      {airports}{" "}
                    </option>
                  ))}
                </Select>
                {error.airports && <p>{error.airports}</p>}
              </FormControl>
            </Center>
          </Flex>
        </Box>

        <Box bg='#009ED1' py={4} px={5} borderRadius="md" color="white" fontFamily="'DIN Medium',">
          <Heading fontSize="4xl">Datos del vehiculo</Heading>
          <Center py={2} gap={10} flexDirection={{ base: "column", md: "row" }}>
            <FormControl as="fieldset" isRequired>
              <FormLabel as="legend" fontSize="lg" fontFamily="'DIN Medium',">Tipo de Vehiculo:</FormLabel>
              <Select
                color="black"
                bgColor="white"
                placeholder="Selecciona un Vehiculo"
                name="carType"
                onChange={handleChange}
                value={form.carType}
              >
                {carTypeFount.map((carT, index) => (
                  <option key={index} value={carT}>
                    {" "}
                    {carT}{" "}
                  </option>
                ))}
              </Select>
              {error.carType && <p>{error.carType}</p>}
            </FormControl>

              <FormControl isRequired>
                <FormLabel fontSize="lg" fontFamily="'DIN Medium',">Modelo del vehículo</FormLabel>
                <Input
                  color="black"
                  bgColor="white"
                  type="text"
                  placeholder="Modelo del vehículo"
                  name="carModel"
                  onChange={handleChange}
                  value={form.carModel}
                />
                {error.carModel && <p>{error.carModel}</p>}
              </FormControl>
            
            <FormControl as="fieldset" isRequired>
              <FormLabel fontSize="lg" fontFamily="'DIN Medium',">Numero de placa</FormLabel>
              <Input
                color="black"
                bgColor="white"
                type="text"
                placeholder="Numero de placa"
                textTransform="uppercase"
                name="carPatent"
                onChange={handleChange}
                value={form.carPatent}
              />
              {error.carPatent && <p>{error.carPatent}</p>}
            </FormControl>

            <FormControl as="fieldset" isRequired>
              <FormLabel fontSize="lg" fontFamily="'DIN Medium',">Licencia de manejo</FormLabel>
              <Input
                color="black"
                bgColor="white"
                type="text"
                placeholder="Numero de licencia de manejo"
                name="driverLicense"
                onChange={handleChange}
                value={form.driverLicense}
              />
              {error.driverLicense && <p>{error.driverLicense}</p>}
            </FormControl>
          </Center>

          <Center py={4} gap={10} flexDirection={{ base: "column", md: "row" }}>
            <FormControl isRequired>
              <FormLabel fontSize="lg" fontFamily="'DIN Medium',">Foto del vehiculo</FormLabel>
              <Input
                color="black"
                bgColor="white"
                type="file"
                name="carImg"
                accept="image/*"
                onChange={(e) => changeUploadImage(e, 'carImg')}
              />
              {error.carImg && <p>{error.carImg}</p>}
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontSize="lg" fontFamily="'DIN Medium',">Fecha de Nac. SOAT</FormLabel>
              <Input
                color="black"
                bgColor="white"
                placeholder="Select birthday and Time"
                size="md"
                type="date"
                name="carSoat"
                onChange={handleChange}
                value={form.carSoat}
              />
              {error.carSoat && <p>{error.carSoat}</p>}
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontSize="lg" fontFamily="'DIN Medium',">Permiso de Circulacion</FormLabel>
              <Input
                color="black"
                bgColor="white"
                type="file"
                name="circulationPermit"
                accept="image/*"
                onChange={(e) => changeUploadImage(e, 'circulationPermit')}
              />
              {error.circulationPermit && <p>{error.circulationPermit}</p>}
            </FormControl>

            <FormControl as="fieldset" isRequired>
              <FormLabel htmlFor="pasajeros" fontSize="lg" fontFamily="'DIN Medium',">Maximo de pasajeros</FormLabel>
              <Select
                color="black"
                bgColor="white"
                placeholder="Cantidad de pasajeros"
                id="pasajeros"
                name="capacityPassengers"
                onChange={handleChange}
                value={form.capacityPassengers}
              >
                {[...Array(20).keys()].map((number) => (
                  <option
                    key={number + 1}
                    id={`number-${number + 1}`}
                    value={number + 1}
                  >
                    {number + 1}
                  </option>
                ))}
              </Select>
              {error.capacityPassengers && <p>{error.capacityPassengers}</p>}
            </FormControl>
          </Center>
        </Box>

        <Box mt={4}>
          <Button bg='#E83D6F' w="100%" type="submit">
            Registrar Chofer
          </Button>
        </Box>
      </Stack>
    </form>
  );
};
export default ChoferForm;
