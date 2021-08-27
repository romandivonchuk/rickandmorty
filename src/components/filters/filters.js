import React from 'react';
import FilterItem from './filter-item';





export default function SimpleSelect() {
  const arrNameFilter= ["species", "gender", "status"];
 

  

  return (
    <div style={{textAlign: "right", maxWidth: "1750px"}}>
      {arrNameFilter.map((item,idx) => <FilterItem key={idx} filter={item}/>)}
    </div>
  );
}