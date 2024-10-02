import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Drones from './pages/Drones/Drones'
import Accessories from './pages/Accesories/Accessories'
import Footer from './pages/Home/Footer'
import LastF from './pages/Home/LastF'


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Drones" element={<Drones/>}/>
          <Route path="/Accessories" element={<Accessories/>}/>
        </Routes>
        <Footer/>
        <LastF/>
      </BrowserRouter>
    </div>
  )
}
