import React from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { Index } from '../components/Index';
import { Contact } from '../components/Contact';
import { Curriculum } from '../components/Curriculum';
import { Portfolio } from '../components/Portfolio';
import { Services } from '../components/Services';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      {/* HEADER Y NAVEGATION*/}
      <HeaderNav/>

      {/* CENTRAL CONTENT */}
      <section className= 'content'>
        <Routes>
            <Route path='/' element={<Navigate to="/index"/>} />
            <Route path='/index' element={<Index/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/curriculum' element={<Curriculum/>} />
            <Route path='/portfolio' element={<Portfolio/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='*' element={
              <div className='page'>
                <h1>Error 404</h1>
              </div>
            } />
        </Routes>

      </section>


      {/* FOOTER*/}

      <Footer/>
    

    </BrowserRouter>
  )
}
