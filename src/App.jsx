import { Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Navbar = React.lazy(() => import('./components/Navbar.jsx'));
const Home = React.lazy(() => import('./pages/Home.jsx'));
const Message = React.lazy(() => import('./pages/Message.jsx'));
const Works = React.lazy(() => import('./pages/Works.jsx'));
const Skills = React.lazy(() => import('./pages/Skills.jsx'));

export default function App() {
    const htmlElement = document.documentElement;

    const useTheme = JSON.parse(localStorage.getItem('port-theme')) || 'light'

    useEffect(() => {
      if(useTheme == 'dark'){
        htmlElement.classList.add('dark');
      } else {
        htmlElement.classList.remove('dark');
      }
    }, []);


  return (
    <>
    <Navbar/>
    <div className="mt-15 mx-40 max-lg:mx-0">
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/message' element={<Message/>} />
          <Route  path='/work' element={<Works/>}/>
          <Route path='/skills' element={<Skills/>} />
      </Routes>
    </div>
      
    </>
  );
}
