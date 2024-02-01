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
import TripsForMonths from "./tripsForMonths"



function LinesChart() {
    const viajes = TripsForMonths()
    
    var meses = [
        "Ene", "Feb", "Mar", "Abr", "May", "Jun",
        "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
      ]
    var midata = {
        labels: meses,
        datasets: [ // Cada una de las líneas del gráfico
            {
                label: 'Viajes',
                data: viajes,
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
            yAxes: [ // Cambiado de 'y' a 'yAxes'
                {
                    min: 0
                }
            ],
            x: {
                ticks: { color: 'rgb(255, 99, 132)' }
            }
        }
    };

    return (
        <Line data={midata} options={misoptions} />
    )
}

export default LinesChart;