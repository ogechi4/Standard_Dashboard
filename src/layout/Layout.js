import React from 'react'
import { Navbar, Sidebar, ThemeSettings } from '../components'
import {FiSettings } from 'react-icons/fi';
import { TooltipComponent} from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../contexts/ContextProvider'



const Layout = ({children}) => {

  const { activeMenu, currentColor, currentMode, setactiveMenu, themeSettings, setThemeSettings } = useStateContext()
  return (

    <div className={currentMode === 'Dark'? 'dark': ''}>


<div className='flex relative
    dark:bg-main-dark-bg'>
      
      <div className='fixed right-4 bottom-4'
      style={{ zIndex: '1000'}}>
        <TooltipComponent component="Settings"
        position="Top">
          <button type="button" className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray
          text-white' style={{ background:currentColor, borderRadius: '50%'}}
          onClick={() => setThemeSettings(true)}
            >

            <FiSettings />
             
  
          </button>
          
          
        </TooltipComponent>
                

        
      </div>
      
     
  
     {activeMenu ? (
      <div className='w-72 fixed sidebar
      dark:bg-secondary-dark-bg
      bg-white'>
        <Sidebar /> 
        {children}
        
       
      </div>
     ): (
      <div className='w-0 dark:bg-secondary-dark-bg'>
         <Sidebar /> 
         {children}
      </div>
     ) }        
     <div className={ 
      
         `dark:bg-main-dark-bg bg-main-bg min-h-screen  w-full ${activeMenu ? 'md:ml-72':'flex-2'} ` 
      } >
        
     
  
      <div className=' md:static  bg-main-bg   
      dark:bg-main-dark-bg navbar w-full 
      '>
        <Navbar />
      

      
  
      </div>
      {children}
      </div>

      {themeSettings && <ThemeSettings />}
      </div>
    </div>
    
    



  )
}

export default Layout
