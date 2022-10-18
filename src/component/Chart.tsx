import React from 'react';
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

  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
    maintainAspectRatio: false 
  };
  const labels = ['confirmed', 'recovered', 'death'];


  
const Chart = ({confirmed,recovered,death}:any) => {
    
  const data = {
    labels,
    datasets: [
      {
        label: 'covid',
        data: [confirmed,recovered,death], 
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
     
    ],
  };
    return(
        <div>
 <Bar height={500} width={1500} options={options} data={data} />
        </div>
    )
}

export default Chart