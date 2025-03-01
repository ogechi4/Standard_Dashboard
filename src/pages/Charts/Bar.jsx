import React from 'react'
import { ChartComponent, SeriesCollectionDirective,
  SeriesDirective, Inject, DateTime, SplineAreaSeries, Legend,
  Category, ColumnSeries, DataLabel, Tooltip
} from '@syncfusion/ej2-react-charts'
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis
  } from '../../data/dummy'
  import { Header } from '../../components'
  import { DashboardLayout } from '../../layout'

  import { useStateContext } from '../../contexts/ContextProvider'

function Bar() {
  const { currentMode} = useStateContext()
  return (

    <DashboardLayout>
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
       
       

     <Header category="Bar-chart" title="Olympic Medal Counts - RIO" />
        <ChartComponent
      id='charts'
      height='420px'
      primaryXAxis={barPrimaryXAxis}
      primaryYAxis={barPrimaryYAxis}
      chartArea={{ border: { width: 0}}}
      tooltip={{ enable: true}}
      background={ currentMode === 'Dark'?
        '#33373E' : '#fff'
      }
      >
        
        <Inject services ={[ColumnSeries, DataLabel, Category, Legend, Tooltip]}/>
        <SeriesCollectionDirective>
          {
            barCustomSeries.map((item, index)=>
            <SeriesDirective key={index}  {...item}/>)
          }
        </SeriesCollectionDirective>
      </ChartComponent>
    
    
    </div>
    </DashboardLayout>
     
      
  )
}

export default Bar

