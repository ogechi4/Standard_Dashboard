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

export const BarChart = () => {

   const options = {}
   const data = {}

  return (
    <div>
      <Bar options={options} data={stackedbarChart}
       />
    </div>
  )
}

export default BarChart

