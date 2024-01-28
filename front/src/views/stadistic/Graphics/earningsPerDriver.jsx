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

import { getAllConductores } from '../../../redux/actions/index';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function EarningsPerDriver() {
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(getAllConductores());
  }, [dispatch]);

  const conductores = useSelector((state) => state.allData);
  const gananciasPorConductor = {};

  conductores.forEach((conductor) => {
    conductor.Trips.forEach((trip) => {
      const mes = new Date(trip.date).getMonth();
      const ganancia = parseFloat(trip.price);

      if (!gananciasPorConductor[conductor.name]) {
        gananciasPorConductor[conductor.name] = {};
      }

      if (!gananciasPorConductor[conductor.name][mes]) {
        gananciasPorConductor[conductor.name][mes] = ganancia;
      } else {
        gananciasPorConductor[conductor.name][mes] += ganancia;
      }
    });
  });

  const conductoresNombres = Object.keys(gananciasPorConductor);
  const gananciasPorMes = conductoresNombres.map((conductor) => {
    const ganancias = Object.values(gananciasPorConductor[conductor]);
    return ganancias.reduce((total, ganancia) => total + ganancia, 0);
  });

  var midata = {
    labels: conductoresNombres,
    datasets: [
      {
        label: 'Ganancias',
        data: gananciasPorMes,
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
        stepSize: 100,
      },
      x: {
        ticks: { color: 'rgb(255, 99, 132)' },
      },
    },
  };

  return <Bar data={midata} options={misoptions} />;
}