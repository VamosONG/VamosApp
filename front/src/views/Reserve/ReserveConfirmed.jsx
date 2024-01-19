import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from 'sweetalert2';
import { getTripById } from "../../redux/actions/index";  // Ajusta la ruta según sea necesario

const ReserveConfirmed = ({ id }) => {
    const dispatch = useDispatch();
    const reserva = useSelector((state) => state.trip);

    // useEffect para cargar la información del viaje cuando el componente se monta
    useEffect(() => {
        // Llamada a la acción getTripById para obtener la información del viaje
        dispatch(getTripById(id));
    }, [dispatch, id]);

    // Comprobación si la información del viaje está disponible
    if (!reserva) {
        return <div>Cargando...</div>;
    }
    Swal.fire({
      title: "Viaje reservado con éxito",
      text: "Simulando que se abonó..",
      icon: "success"
  });
    // Lógica para mostrar la información del viaje
    return (
        <div> 
            

            <div>
                Datos de su reserva:
                Origen: {reserva.origin}
                Destino: {reserva.destination}
                Fecha: {reserva.date}
                Hora: {reserva.hora}
            </div>
        </div>
    );
};

export default ReserveConfirmed;