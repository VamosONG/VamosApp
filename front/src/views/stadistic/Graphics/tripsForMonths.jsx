
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";  // Importa `useSelector` y `useDispatch` de react-redux
import { getTrips } from "../../../redux/actions";

const TripsForMonths = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = async () => {
          // await dispatch(getTrips());
          await dispatch(getCanceledTrips());
        };
      
        fetchData();
      }, [dispatch]);

    // const trips = useSelector((state) => state.getTrips);
    const trips = useSelector((state)=>state.viajesCompletados)
    
console.log(trips);


    const ENERO = (trips.filter((trip) => trip.date.includes("2024-01"))).length;
    const FEBRERO = (trips.filter((trip) => trip.date.includes("2024-02"))).length;
    const MARZO = (trips.filter((trip) => trip.date.includes("2024-03"))).length;
    const ABRIL = (trips.filter((trip) => trip.date.includes("2024-04"))).length;
    const MAYO = (trips.filter((trip) => trip.date.includes("2024-05"))).length;
    const JUNIO = (trips.filter((trip) => trip.date.includes("2024-06"))).length;
    const JULIO = (trips.filter((trip) => trip.date.includes("2024-07"))).length;
    const AGOSTO = (trips.filter((trip) => trip.date.includes("2024-08"))).length;
    const SEPTIEMBRE = (trips.filter((trip) => trip.date.includes("2024-09"))).length;
    const OCTUBRE = (trips.filter((trip) => trip.date.includes("2024-10"))).length;
    const NOVIEMBRE = (trips.filter((trip) => trip.date.includes("2024-11"))).length;
    const DICIEMBRE = (trips.filter((trip) => trip.date.includes("2024-12"))).length;

    const viajes = [ENERO, FEBRERO, MARZO, ABRIL, MAYO, JUNIO, JULIO, AGOSTO, SEPTIEMBRE, OCTUBRE, NOVIEMBRE, DICIEMBRE];

    return viajes
}


export default TripsForMonths;