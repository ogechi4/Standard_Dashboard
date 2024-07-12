import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import {GoArrowDown, GoPrimitiveDot} from 'react-icons/go'

import { Stacked, Pie, Button, SparkLine, Navbar } from '../components'
import { DashboardLayout } from "../layout"
import  {earningData,lineData, ecomPieChartData} from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'
import {Linegraph} from '../components/Charts/Line'
import { Bar, BarChart } from '../components/Charts/Bar'


function Ecommerce() {
  const  { currentColor} = useStateContext()
  return (
   <DashboardLayout>
    
         <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
         <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3
         bg-hero-pattern bg-no-repat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-white-400'>Earnings</p>
              <p className='text-2xl'>$63,448.78</p>
            </div>
          </div>

          <div className='mt-6'>
            <Button
            color="white"
            bgColor={currentColor}
            text="Download"
            borderRadius="10px"
            size="md"
            />

          </div>

         </div>

         <div className='flex m-3 flex-wrap justify-center gap-7 items-center'>
          {earningData.map((item) =>(
            <div 
            key={item.title} className='bg-purple-500 dark:text-gray-200 dark:bg-secondary-dark-bg
            md:w-56 p-4 pt-9 rounded-2xl'>
               <button type='button' style={{color: item.iconColor, backgroundColor: item.iconBg}}
               className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'>
                 {item.icon}
               </button>
               <p className='mt-3'>
                 <span className='text-lg font-semibold'>
                   {item.amount}
                 </span>
                 <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                 </span>
               </p>
                
                <p className='text-sm text-white font-semibold mt-1'>
                  {item.title}
                </p>
            </div>
          ))}

         </div>
      </div>

    <div className='flex gap-10 flex-wrap justify-center
       '>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3
        p-4 rounded-2xl  '>
           <div className='flex justify-between'>
              <p className='font-semibold text-xl' 
              >Revenue Updates</p>
              <div className='flex items-center
              gap-4 md:justify-between'>
               <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl

               '>
                <span><GoArrowDown />
                </span>
                <span className='semi-bold text-xl'>Expense</span>
               </p>

               <p className='flex items-center gap-2 text-purple-400 hover:drop-shadow-xl
               
               '>
                <span><GoArrowDown />
                </span>
                <span className='semi-bold text-xl'>Budget</span>
               </p>
              </div>
           </div>

           <div className='mt-10 flex gap-10 flex-wrap justify-center '>
            <div className='border-r-1 border-color m-4 pr-10'>
              <div >
                {/* <p>
                  <span className='text-3xl font-semibold'>$33,000</span>
                  <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400
                  ml-3 text-xs' >23%</span>
                </p>
                <p className='text-green-500 mt-1'>
                 Budget
                </p>
              </div>

              <div className='mt-8'>
                <p>
                  <span className='text-3xl font-semibold'>$44,500</span>
                  
                </p>
                <p className='text-gray-500 mt-1'>
                 Expenses
                </p> */}
              </div>

              <div className='mt-5 '>
                {/* Line graph with chart-js */}
               <Linegraph 
                 
               />
              </div>

              <div className='mt-10'>
                 <Button
                 color="white"
                 bgColor={currentColor} 
                 text="DownLoad Report"
                 borderRadius="10px"/>
              </div>
            </div>

            <div>
              <Stacked width="320px"
              height="360px"/>
            </div>

           </div>
        </div>

    </div>

    </div>
   </DashboardLayout>
  )
}

export default Ecommerce
