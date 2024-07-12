import React from 'react';
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Routers, Route, Routes, } from 'react-router-dom'
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area,
   Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Login,
   DashboardLayout,  } from './pages';

import Register from './pages/Register'
import { ThemeSettings } from './components'

function App() {

  return (
    <>

   
    
     
   <Routers>
    <Routes>
      <Route path="/" exact index element={<Login />} />
  
     <Route path="/register" element={<Register />} />
     <Route path="/ecommerce" element ={<Ecommerce />} />

     <Route path="/orders" element ={<Orders />} />
     <Route path="/employees" element ={<Employees />} />
     <Route path="/customers" element ={<Customers />} />
              {/* APPS */}
     <Route path="/kanban" element ={<Kanban />} />
     <Route path="/editor" element ={<Editor />} />
     <Route path="/calendar" element ={<Calendar />} />
     <Route path="/color-picker" element ={<ColorPicker />} />
             {/* CHARTS */}
     <Route path="/line" element ={<Line />} />
     <Route path="/area" element ={<Area />} />
     <Route path="/bar" element ={<Bar />} />
     <Route path="/pie" element ={<Pie />} />
     <Route path="/financial" element ={<Financial />} />
     <Route path="/color-mapping" element ={<ColorMapping />} />
     <Route path="/pyramid" element ={<Pyramid />} />
     <Route path="/stacked" element ={<Stacked />} />
     <Route path="/themesettings" element ={<ThemeSettings />} />

        
    </Routes>
    </Routers>  
    </>
  )
}

export default App