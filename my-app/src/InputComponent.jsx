import React from 'react';
import { useState } from 'react';
import  ReactDOM  from 'react-dom';
import RandomImage from './RandomImage';
import './index.css';
import ButtonComponent from './ButtonComponent';


export default function InputComponent() {
  const [text,settext]=useState("TOP TEXT")
  const ChangeState =(event)=>{
    settext(event.target.value);



  }
  const[text2,settext2]=useState("BOTTOM TEXT")
  const handletype=(event)=>{
    settext2(event.target.value);
  }


  return (
    <div>
      <input type="text" placeholder='Enter the Top Text' onChange={ChangeState} />
      <input type="text" placeholder='Enter the Bottom Text' onChange={handletype} />
  
      <h1 id='head-img'>{text}</h1>
      <h1 id='down-img'>{text2}</h1>


    </div>
  )
}
