import React, { useState } from 'react';
import access from './config.js';
import './App.css';
import Moment from 'react-moment';
import 'moment-timezone';
import logo from './img/logo.png'

import Feed from './components/Feed.js';
import Linechart from './components/Linechart.js';
import MainChart from './components/MainChart.js';
import MainChart3 from './components/MainChart3.js';


function App() {
  // first item
  const [query1, setQuery1] = useState('');
  const [date1, setDate1] = useState('');
  const [city1, setCity1] = useState('');
  const [country1, setCountry1] = useState('');
  const [location1, setLocation1] = useState('');
  const [temp1, setTemp1] = useState('');
  const [min1, setMin1] = useState('');
  const [max1, setMax1] = useState('');
  const [wind1, setWind1] = useState('');
  const [weather1, setWeather1] = useState('');
  const [weatherDesc1, setWeatherDesc1] = useState('');
  const [list1, setList1] = useState('');
  const [renderFlag1, setRenderFlag1] = useState(false);

  // second item
  const [query2, setQuery2] = useState('');
  const [date2, setDate2] = useState('');
  const [city2, setCity2] = useState('');
  const [country2, setCountry2] = useState('');
  const [location2, setLocation2] = useState('');
  const [temp2, setTemp2] = useState('');
  const [min2, setMin2] = useState('');
  const [max2, setMax2] = useState('');
  const [wind2, setWind2] = useState('');
  const [weather2, setWeather2] = useState('');
  const [weatherDesc2, setWeatherDesc2] = useState('');
  const [list2, setList2] = useState('');
  const [renderFlag2, setRenderFlag2] = useState(false);

  // third item
  const [query3, setQuery3] = useState('');
  const [date3, setDate3] = useState('');
  const [city3, setCity3] = useState('');
  const [country3, setCountry3] = useState('');
  const [location3, setLocation3] = useState('');
  const [temp3, setTemp3] = useState('');
  const [min3, setMin3] = useState('');
  const [max3, setMax3] = useState('');
  const [wind3, setWind3] = useState('');
  const [weather3, setWeather3] = useState('');
  const [weatherDesc3, setWeatherDesc3] = useState('');
  const [list3, setList3] = useState('');
  const [renderFlag3, setRenderFlag3] = useState(false);



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
          setWind1(result.wind.speed);
          setWeather1(result.weather[0].main);
          setWeatherDesc1(result.weather[0].description);

          // second fetch
          fetch(`${access.base}forecast/daily?q=${query1}&cnt=16&appid=${access.key}&units=imperial`)
          .then(res => res.json())
          .then(result => {
            setQuery1('');
            setList1(result.list)


            setRenderFlag1(true)


          })
        }
      })
      .catch(err => {
        console.log(err)
      });
    }
  }

  // second item

  const search2 = evt => {
    if (evt.key === "Enter") {
      fetch(`${access.base}weather?q=${query2}&appid=${access.key}&units=imperial`)
      .then(res => res.json())
      .then(result => {
        if(!result.name) {
          console.log('error')
        } else {
          setDate2(<Moment format="ddd, MMM Do YYYY"></Moment>)
          setCity2(result.name);
          setCountry2(result.sys.country);
          setLocation2(`${result.name}, ${result.sys.country}`)
          setTemp2(`${Math.round(result.main.temp)} ${'\u00b0'}`);
          setMin2(result.main.temp_min);
          setMax2(result.main.temp_max);
          setWind2(result.wind.speed);
          setWeather2(result.weather[0].main);
          setWeatherDesc2(result.weather[0].description);

          // second fetch
          fetch(`${access.base}forecast/daily?q=${query2}&cnt=16&appid=${access.key}&units=imperial`)
          .then(res => res.json())
          .then(result => {
            setQuery2('');
            setList2(result.list)
            setRenderFlag2(true)
          })
        }
      })
      .catch(err => {
        console.log(err)
      });
    }
  }

  // third item

  const search3 = evt => {
    if (evt.key === "Enter") {
      fetch(`${access.base}weather?q=${query3}&appid=${access.key}&units=imperial`)
      .then(res => res.json())
      .then(result => {
        if(!result.name) {
          console.log('error')
        } else {
          setDate3(<Moment format="ddd, MMM Do YYYY"></Moment>)
          setCity3(result.name);
          setCountry3(result.sys.country);
          setLocation3(`${result.name}, ${result.sys.country}`)
          setTemp3(`${Math.round(result.main.temp)} ${'\u00b0'}`);
          setMin3(result.main.temp_min);
          setMax3(result.main.temp_max);
          setWind3(result.wind.speed);
          setWeather3(result.weather[0].main);
          setWeatherDesc3(result.weather[0].description);

          // second fetch
          fetch(`${access.base}forecast/daily?q=${query3}&cnt=16&appid=${access.key}&units=imperial`)
          .then(res => res.json())
          .then(result => {
            setQuery3('');
            setList3(result.list)
            setRenderFlag3(true)
          })
        }
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
//conditional feed
  let feed1 = <span></span>;
  let line1 = <span></span>;
  let feed2 = <span></span>;
  let line2 = <span></span>;
  let feed3 = <span></span>;
  let line3 = <span></span>;
  let mainchart = <span></span>;
  let searchbox = <input type="text" className="search-bar" placeholder="Search..." onChange={e => setQuery1(e.target.value)} value={query1} onKeyPress={search1} />
  if(renderFlag1) {
    feed1 = <Feed list={list1} /> ;
    line1 = <Linechart list={list1} />;
    searchbox = <input type="text" className="search-bar" placeholder="Search..." onChange={e => setQuery2(e.target.value)} value={query2} onKeyPress={search2} />
    } else {
  }

  if(renderFlag2) {
    feed2 = <Feed list={list2} /> ;
    line2 = <Linechart list={list2} />;
    searchbox = <input type="text" className="search-bar" placeholder="Search..." onChange={e => setQuery3(e.target.value)} value={query3} onKeyPress={search3} />
    mainchart = <MainChart list1={list1} list2={list2} city1={city1} city2={city2} list3={list3} />
  } else {
  }

  if(renderFlag3) {
    feed3 = <Feed list={list3} /> ;
    line3 = <Linechart list={list3} />;
    searchbox = <span></span>
    mainchart = <MainChart3 list1={list1} list2={list2} city1={city1} city2={city2} list3={list3} city3={city3} />
  } else {
  }

  return (
    <div className="app">
      <div className="hero">
        <div className="logo"><img src={logo} alt="logo" width="300px"/></div>
        <div className="searchContainer">{searchbox}</div>
        </div>
      <div className="body-container">
        <div className="results-container">
          {/* result 1 */}
          <div className="result1-col">
            <div className="result1-box">
              <div className="location">{location1}</div>
              <div className="date">{date1}</div>
            </div>
            <div className="weather-box">
              <div className="temperature">{temp1}</div>
              <div className="weather">{weather1}</div>
              <div className="weather-desc">{capFirst(weatherDesc1)}</div>
            </div>
              <div className="feed1box">
                <div className="feed1-box">{feed1}</div>
                <div className="chart1-box">{line1}</div>
              </div>
            </div>
          {/* result 2 */}

          <div className="result1-col">
            <div className="result1-box">
              <div className="location">{location2}</div>
              <div className="date">{date2}</div>
            </div>
            <div className="weather-box">
              <div className="temperature">{temp2}</div>
              <div className="weather">{weather2}</div>
              <div className="weather-desc">{capFirst(weatherDesc2)}</div>
            </div>
              <div className="feed1box">
                <div className="feed1-box">{feed2}</div>
                <div className="chart1-box">{line2}</div>
              </div>
            </div>

          {/* result 3 */}

          <div className="result1-col">
            <div className="result1-box">
              <div className="location">{location3}</div>
              <div className="date">{date3}</div>
            </div>
            <div className="weather-box">
              <div className="temperature">{temp3}</div>
              <div className="weather">{weather3}</div>
              <div className="weather-desc">{capFirst(weatherDesc3)}</div>
            </div>
              <div className="feed1box">
                <div className="feed1-box">{feed3}</div>
                <div className="chart1-box">{line3}</div>
              </div>
            </div>
          {/* end columns */}
          </div>
          <div className="main-chart-cont">
              {mainchart}

          </div>


      </div>
    </div>
  );
}

export default App;
