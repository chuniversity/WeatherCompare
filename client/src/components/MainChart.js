import React from 'react';
import { Line } from 'react-chartjs-2';


function MainChart({list1, list2, city1, city2}) {
  let dates = [];
  let temps1 = [];
  let temps2 = [];
  for(let i = 0; i < list1.length; i++) {
    let date = new Date(list1[i].dt * 1000);
    var newdate = (date.getMonth() + 1) + '/' + date.getDate()
    dates.push(newdate);
    temps1.push(Math.round(list1[i].temp.max))
  };

  for(let i = 0; i < list2.length; i++) {
    temps2.push(Math.round(list2[i].temp.max))
  };

  const data = {
    labels: dates,
    datasets: [
      {
        label: city1,
        data: temps1,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
        yAxisID: 'y-axis-1',
      },
      {
        label: city2,
        data: temps2,
        fill: false,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
        yAxisID: 'y-axis-1',
      },
    ],
  };

  const options = {

  };



  return (
    <div className="mainchart">
        <Line data={data} options={options} />

    </div>
  );
}

export default MainChart;
