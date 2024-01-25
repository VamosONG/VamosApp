import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);


import {getTrips, getCanceledTrips} from '../../redux/actions/index'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';



export default function TripsPerMonths() {
    const dispatch = useDispatch();
  
    useEffect(async () => {
      await dispatch(getTrips());
    //   await dispatch(getCanceledTrips());
    }, [dispatch]);

    const nombreMeses = [
        "Ene", "Feb", "Mar", "Abr", "May", "Jun",
        "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
      ];
  
    // const viajes = useSelector((state)=>state.viajesCompletados)
    const viajes = useSelector((state) => state.getTrips);
    const tripsPorMes = {};

    viajes.forEach((trip) => {
      const mes = new Date(trip.date).getMonth();
      if (!tripsPorMes[mes]) {
        tripsPorMes[mes] = 1; 
      } else {
        tripsPorMes[mes] += 1; 
      }
    });
  
    const meses = Object.keys(tripsPorMes).map((mes) => nombreMeses[parseInt(mes, 10)]);
    const trips = Object.values(tripsPorMes);
  
    var midata = {
      labels: meses,
      datasets: [
        {
          label: 'Nro Viajes',
          data: trips,
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    };
  
    var misoptions = {
      scales: {
        y: {
          min: 0,
          stepSize: 1, 
        },
        x: {
          ticks: { color: 'rgb(255, 99, 132)' },
        },
      },
    };
  
    return <Bar data={midata} options={misoptions} />;
  }