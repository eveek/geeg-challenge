import './barchart.scss';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);



const options = {
    // responsive: true,
    maintainAspectRatio: false,
    locale: 'en-US',
    scales: {
        x: {
            grid: {
                display: false,
                drawBorder: false,
            },
            border: {
                display: false
            },

        },
        y: {
            beginAtZero: true,
            max: 50000,
            min: 0,
            grid: {
                drawBorder: false,
                // color: '#E5EAEF'
            },
            border: {
                display: false
            },
            ticks: {
                stepSize: 10000,
                drawTicks: false,

            }
        }
    },
    plugins: {
        legend: {
            display: false
        },
        labels: {
            color: 'black'
        }
    },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const data = {
    labels,
    datasets: [
        {
        data: [20000, 7500, 30000, 20000, 9500, 10000, 40000, 25000, 30000, 5000, 30000, 25000],
        backgroundColor: '#34CAA51A',
        borderRadius: 24,
        hoverBackgroundColor: '#34CAA5',
        barPercentage: 1,
        categoryPercentage: 1,
        categorySpacing: 1,
        barThickness: 27
        }
    ],
};

function Barchart() {
    return (
        <section>
            <div className='head'>
                <dix className='One'  >Sales Trends</dix>
                <div className='Two'>
                    <div>Sort by:</div>
                    <select name="" id="">
                        <option value="">Daily</option>
                        <option value="" selected>Weekly</option>
                        <option value="">Yearly</option>
                    </select>
                </div>
            </div>
            <div className='boxContainer'>
                <div className='barBox'>
                    <Bar options={options} data={data} />;
                </div>
            </div>
        </section>
    )
}

export default Barchart;
