import React from 'react';


function Queries({data, searchAll}) {
  return (
    <div className="queries">
      {data.map((item, index) => (
        <>
          <a href="#" key={index} onClick={() => searchAll(item.city1, item.city2, item.city3) }>{item.city1} : {item.city2} : {item.city3}</a> <span key={index + 1000} className="spacer"></span>
        </>
      ))}

    </div>
  );
}

export default Queries;
