import React from 'react';
import { Line } from 'react-chartjs-2'

function Linechart({list}) {
  let dates = [];
  let temps = [];
  for(let i = 0; i < list.length; i++) {
    let date = new Date(list[i].dt * 1000);
    var newdate = (date.getMonth() + 1) + '/' + date.getDate()
    dates.push(newdate);
    temps.push(Math.round(list[i].temp.max))
  };



  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Temperature',
        data: temps,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
    legend: {
      display: false
    }
  };

  const options = {
    scales: {
      x: {
        grid: {
           display:false
          }
        },
      y: {
       grid: {
        display:false
        }
      }
    },
    plugins: {
      legend: false,
      title: {
        display: true,
        text: 'Temperature Forecast'
      }
   },
  };


  return (
    <div className="linechart-cont">
       <Line data={data} options={options} />
    </div>
  );
}

export default Linechart;
