import React, { useState } from 'react';
import access from './config.js';
import './App.css';
import Moment from 'react-moment';
import 'moment-timezone';


function App() {
  const [query1, setQuery1] = useState('');

  const [date1, setDate1] = useState('');
  const [city1, setCity1] = useState('');
  const [country1, setCountry1] = useState('');
  const [location1, setLocation1] = useState('');
  const [temp1, setTemp1] = useState('');
  const [min1, setMin1] = useState('');
  const [max1, setMax1] = useState('');
  const [humidity1, setHumidity1] = useState('');
  const [wind1, setWind1] = useState('');
  const [weather1, setWeather1] = useState('');
  const [weatherDesc1, setWeatherDesc1] = useState('');
  const [list1, setList1] = useState('');


  const search1 = evt => {
    if (evt.key === "Enter") {
      fetch(`${access.base}weather?q=${query1}&appid=${access.key}&units=imperial`)
      .then(res => res.json())
      .then(result => {
        if(!result.name) {
          console.log('error')
        } else {
          setDate1(<Moment format="ddd, MMM Do YYYY"></Moment>)
          setCity1(result.name);
          setCountry1(result.sys.country);
          setLocation1(`${result.name}, ${result.sys.country}`)
          setTemp1(`${Math.round(result.main.temp)} ${'\u00b0'}`);
          setMin1(result.main.temp_min);
          setMax1(result.main.temp_max);
          setHumidity1(result.main.humidity);
          setWind1(result.wind.speed);
          setWeather1(result.weather[0].main);
          setWeatherDesc1(result.weather[0].description);
        }
      })
      .catch(err => {
        console.log(err)
      });
      fetch(`${access.base}forecast?q=${query1}&cnt=16&appid=${access.key}&units=imperial`)
      .then(res => res.json())
      .then(result => {
        setQuery1('');
        console.log('result2', result)
      })
      .catch(err => {
        console.log(err)
      });
    }
  }

  //capitalize first letter
  const capFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="app">
      <div className="title"> </div>
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          onChange={e => setQuery1(e.target.value)}
          value={query1}
          onKeyPress={search1}
        />
      </div>
      <div className="result-box">
        <div className="location">{location1}</div>
        <div className="date">{date1}</div>
      </div>
      <div className="weather-box">
        <div className="temperature">{temp1}</div>
        <div className="weather">{weather1}</div>
        <div className="weather-desc">{capFirst(weatherDesc1)}</div>
      </div>
    </div>
  );
}

export default App;
