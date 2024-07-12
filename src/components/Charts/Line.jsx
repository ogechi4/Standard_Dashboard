import React from 'react'
import { Area } from '../../pages'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS, 
  CategoryScale,
   LinearScale,
    PointElement, 
    LineElement,
    Title,
    Tooltip,
    Legend,
  }from 'chart.js'
import { lineData } from '../../data/dummy'

  ChartJS.register( 
    CategoryScale,
    LinearScale,
     PointElement, 
     LineElement,
     Title,
     Tooltip,
     Legend 
    )

export const Linegraph = () => {
  const options = {}

  const data = {}
  return (
    <>
       <Line options={options} data={lineData} />
       </>
  )
}

export default Linegraph
