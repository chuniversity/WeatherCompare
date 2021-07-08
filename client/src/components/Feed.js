import React from 'react';
import Moment from 'react-moment';

function Feed({list}) {
  console.log(list)
  return (
    <div className="thefeed">
      {list.map((item, index) => (
          <p key={index}><Moment unix format="MMM Do">{item.dt}</Moment> : {item.temp.max} : {item.weather[0].description}</p>
      ))}

    </div>
  );
}

export default Feed;
