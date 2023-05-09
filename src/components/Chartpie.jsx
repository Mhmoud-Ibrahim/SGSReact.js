import React from 'react'
import{
    Chart as Chartjs,
    ArcElement,
    Tooltip,
    Legend
}from 'chart.js'
import { Pie } from 'react-chartjs-2';
Chartjs.register(
    ArcElement,
    Tooltip,
    Legend
)
export default function Chartpie() {
  const data = {
    lable:['one','two','three'],
    datasets:[{
      data:[3,6,9],
      backgroundColor:['aqua','purple','red']
    }]
  };
  const options ={
    
  }
  return <>
  <Pie id='pie' data={data} options={options}></Pie>
  
  </>
}