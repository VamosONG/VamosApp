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
    console.log(property + " " + value);
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

      console.log(response.data);

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
          title: "Bien hecho!",
          text: "Datos registrados!",
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
      console.log(validationForm.error);
      console.log("form " + form);
      Swal.fire({
        icon: "error",
        title: "Error en validate",
        text: "Hay un input con errores",
      });
    }
  };

  const carTypeFount = ["auto", "camioneta", "van", 'van plus'];
  const airportsFount = ["Aeropuerto Tumbes", "Aeropuerto Talara"];
  const carModelFount = ["toyota", "hiunday", "ford"];

  return (
    <form onSubmit={handleSubmit}>
      <Stack
        spacing={4}
        bg="#009ED1"
        p="5"
        h="auto"
        borderRadius="20"
        boxShadow="dark-lg"
        color="white"
        border="1px solid white"
        mx="2rem"
        w={{ base: "20rem", md: "50rem" }}
        scrollMarginX="auto"
      >
        <Heading>Datos del chofer</Heading>
        <Box>
          <Flex flexDirection={{ base: "column" }}>
            <Center
              py={2}
              gap={4}
              flexDirection={{ base: "column", md: "row" }}
            >
              <FormControl isRequired>
                <FormLabel>Nombre</FormLabel>
                <Input
                  type="text"
                  placeholder="Ingrese su nombre"
                  name="name"
                  onChange={handleChange}
                  value={form.name}
                />
                {error.name && <p>{error.name}</p>}
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Apellido</FormLabel>
                <Input
                  type="text"
                  placeholder="Ingrese su apellido"
                  name="surname"
                  onChange={handleChange}
                  value={form.surname}
                />
                {error.surname && <p>{error.surname}</p>}
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Correo electronico</FormLabel>
                <Input
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
              gap={4}
              flexDirection={{ base: "column", md: "row" }}
            >
              <FormControl isRequired>
                <FormLabel>Fecha de Nac.</FormLabel>
                <Input
                  size="md"
                  type="date"
                  name="birthday"
                  onChange={handleChange}
                  value={form.birthday}
                />
                {error.birthday && <p>{error.birthday}</p>}
              </FormControl>

              <FormControl isRequired>
                <FormLabel>DNI</FormLabel>
                <Input
                  type="number"
                  placeholder="Numero de DNI"
                  name="dni"
                  onChange={handleChange}
                  value={form.dni}
                />
                {error.dni && <p>{error.dni}</p>}
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Numero de Celular</FormLabel>
                <Input
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
                <FormLabel>Foto del Chofer</FormLabel>
                <Input
                  type="file"
                  name="driverImg"
                  accept="image/*"
                  onChange={(e) => changeUploadImage(e, 'driverImg')}
                />
                {error.driverImg && <p>{error.driverImg}</p>}
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Aeropuerto Origen</FormLabel>
                <Select
                  color="#000"
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

        <Box bg="#10447E" py={4} px={2} borderRadius={10} color="white">
          <Heading>Datos del vehiculo</Heading>
          <Center py={2} gap={4} flexDirection={{ base: "column", md: "row" }}>
            <FormControl as="fieldset" isRequired>
              <FormLabel as="legend">Tipo de Vehiculo:</FormLabel>
              <Select
                color="#000"
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

            <FormControl as="fieldset" isRequired>
              <FormLabel as="legend">Modelo de Vehiculo:</FormLabel>
              <Select
                color="#000"
                placeholder="Selecciona un Vehiculo"
                name="carModel"
                onChange={handleChange}
                value={form.carModel}
              >
                {carModelFount.map((carM, index) => (
                  <option key={index} value={carM}>
                    {" "}
                    {carM}{" "}
                  </option>
                ))}
              </Select>
              {error.carModel && <p>{error.carModel}</p>}
            </FormControl>

            <FormControl as="fieldset" isRequired>
              <FormLabel>Numero de placa</FormLabel>
              <Input
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
              <FormLabel>Licencia de manejo</FormLabel>
              <Input
                type="text"
                placeholder="Numero de licencia de manejo"
                name="driverLicense"
                onChange={handleChange}
                value={form.driverLicense}
              />
              {error.driverLicense && <p>{error.driverLicense}</p>}
            </FormControl>
          </Center>

          <Center py={2} gap={4} flexDirection={{ base: "column", md: "row" }}>
            <FormControl isRequired>
              <FormLabel>Foto del vehiculo</FormLabel>
              <Input
                type="file"
                name="carImg"
                accept="image/*"
                onChange={(e) => changeUploadImage(e, 'carImg')}
              />
              {error.carImg && <p>{error.carImg}</p>}
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Fecha de Nac. SOAT</FormLabel>
              <Input
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
              <FormLabel>Permiso de Circulacion</FormLabel>
              <Input
                type="file"
                name="circulationPermit"
                accept="image/*"
                onChange={(e) => changeUploadImage(e, 'circulationPermit')}
              />
              {error.circulationPermit && <p>{error.circulationPermit}</p>}
            </FormControl>

            <FormControl as="fieldset" isRequired>
              <FormLabel htmlFor="pasajeros">Maximo de pasajeros</FormLabel>
              <Select
                color="#000"
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
          <Button colorScheme="green" w="100%" type="submit">
            Registrar Chofer
          </Button>
        </Box>
      </Stack>
    </form>
  );
};
export default ChoferForm;
