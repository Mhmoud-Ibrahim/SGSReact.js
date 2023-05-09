import React from 'react'
import{
    Chart as Chartjs,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
   Legend,
   Tooltip
}from 'chart.js'
import { Line} from 'react-chartjs-2';

Chartjs.register(
   LineElement,
CategoryScale,
LinearScale,
    PointElement,
  Legend,
    Tooltip
)
export default function Chartline() {

const data ={
labels:['January','Febrauary','March','April'],
datasets:[{
    labels:'sales of the week',
    data:'3,6,9,1',
    backgroundColor:'purple',
    borderColor:'black',
    pointBorderColor:'red',
    fill:true,
    tension:0.4, 
}]

}
const options ={
    plugins:{
        legend:true
    },
    scals:{
        y:{
            min:3,
            max:6
        }
    }
}

  return (
  <Line data={data} options={options}></Line>

  )
}
