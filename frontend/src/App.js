import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'
import Certificates from './components/certificates'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/certificates' element={<Certificates />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
