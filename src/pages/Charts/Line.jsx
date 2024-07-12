import React from 'react'
import { ChartsHeader, Header, LineChart} from '../../components'
import { DashboardLayout } from '../../layout'

function Line() {
  return (
    <DashboardLayout>
       <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl
    '>
     <Header category="chart" title="Inflation Rate" />
     <div className='w-full'>
      <LineChart />
     </div>
    </div>
    </DashboardLayout>
    
  )
}

export default Line
