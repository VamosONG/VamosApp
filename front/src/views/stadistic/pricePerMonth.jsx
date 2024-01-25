import { Line } from 'react-chartjs-2';
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



export default function PricePerMonth() {
    const dispatch = useDispatch();
  
    useEffect(async () => {
      await dispatch(getTrips());
      // await dispatch(getCanceledTrips());
    }, [dispatch]);

    const nombreMeses = [
        "Ene", "Feb", "Mar", "Abr", "May", "Jun",
        "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
      ];
  
    // const viajes = useSelector((state)=>state.viajesCompletados)
    const viajes = useSelector((state) => state.getTrips);
    const gananciasPorMes = {};
  
    viajes.forEach((trip) => {
      const mes = new Date(trip.date).getMonth();
      const ganancia = parseFloat(trip.price);
      if (!gananciasPorMes[mes]) {
        gananciasPorMes[mes] = ganancia;
      } else {
        gananciasPorMes[mes] += ganancia;
      }
    });
  
    const meses = Object.keys(gananciasPorMes).map((mes) => nombreMeses[parseInt(mes, 10)]);
    const ganancias = Object.values(gananciasPorMes);
    var midata = {
      labels: meses,
      datasets: [
        {
          label: 'Ganancias',
          data: ganancias,
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
        },
        x: {
          ticks: { color: 'rgb(255, 99, 132)' },
        },
      },
    };
  
    return <Line data={midata} options={misoptions} />;
  }