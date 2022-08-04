import React from 'react';
import  ReactDOM  from 'react-dom';
import './index.css';
import RandomImage from './RandomImage';
import Meme from './Meme';
import { useState } from 'react';
import InputComponent from './InputComponent';


export default function ButtonComponent() {
 
  const [randomImages,setRandomImages]=useState(Meme[0]);
  const ShowImage=()=>{
    const randomelement=Math.floor(Math.random()*Meme.length)
    setRandomImages(Meme[randomelement])

  };


   return (
    <>
      <button onClick={ShowImage} className='btn'>Get New Image</button>
 
    <RandomImage details={randomImages} />
  
    </>
  )  
  }



 
    
