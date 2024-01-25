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


import {getAllConductores} from '../../redux/actions/index'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


export default function TripsPerDriver() {
    const dispatch = useDispatch();
  
    useEffect(async () => {
      await dispatch(getAllConductores());
    }, [dispatch]);
  
    const conductores = useSelector((state) => state.allData);
    const conductoresConTrips = conductores.filter((conductor) => conductor.Trips && conductor.Trips.length > 0);
  
    const tripsPorConductor = {};
  
    conductoresConTrips.forEach((conductor) => {
      tripsPorConductor[conductor.name] = conductor.Trips.length;
    });
  
    const conductoresNombres = Object.keys(tripsPorConductor);
    const cantidadTrips = Object.values(tripsPorConductor);
  
    var midata = {
      labels: conductoresNombres,
      datasets: [
        {
          label: 'Nro de Viajes',
          data: cantidadTrips,
          tension: 0.5,
          fill: true,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          pointRadius: 5,
          pointBorderColor: 'rgba(255, 99, 132)',
          pointBackgroundColor: 'rgba(255, 99, 132)',
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