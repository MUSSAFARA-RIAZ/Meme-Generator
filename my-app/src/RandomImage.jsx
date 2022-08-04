import React from 'react';
import  ReactDOM  from 'react-dom';
import './index.css';

export default function RandomImage({details}) {
  return (
   <div id='parent-div'>

    <img className='rd-img' src={details.url}/>
 
  </div>
 


   
  )
}
