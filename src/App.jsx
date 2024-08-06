import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Pages/Home'
import About from './Pages/About'
import Service from './Pages/Service'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/service' element={<Service />} />
      <Route path='/Contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App