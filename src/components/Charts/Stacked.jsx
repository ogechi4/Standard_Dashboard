import React from 'react'
import { Area } from '../../pages'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS, 
  CategoryScale,
   LinearScale, 
    BarElement,
    Title,
    Tooltip,
    Legend,
  }from 'chart.js'
import { lineData, stackedCustomSeries, stackedbarChart } from '../../data/dummy'

  ChartJS.register( 
    CategoryScale,
    LinearScale,
     BarElement,
     Title,
     Tooltip,
     Legend 
    )

export const Stacked = () => {

   const options = {
    scales: {
      x: {
        stacked:true
      },
      y: {
        stacked: true
      }
    }
   }
   const data = {}

  return (
    <div>
      <Bar width={320} height={360} options={options} data={stackedbarChart}
       />
    </div>
  )
}

export default Stacked


