import React, { useEffect, useState } from 'react'
import { Menus } from './Exporting';
import { Bars3Icon } from '@heroicons/react/16/solid';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const loaction = useLocation();
  const [theme, setTheme] = useState()

  const htmlElement = document.documentElement;
  
  const useTheme = JSON.parse(localStorage.getItem('port-theme')) || 'light'

  useEffect(() => {
      if(useTheme == 'dark'){
        htmlElement.classList.add('dark');
        setTheme('dark')
      } else {
        htmlElement.classList.add('dark');
        setTheme('light')
      }
    }, []);
  
    function changeTheme () {
      if (theme == 'dark') {
        localStorage.setItem('port-theme', JSON.stringify('light'));
        htmlElement.classList.remove('dark');
        setTheme('light');
      } else {
        localStorage.setItem('port-theme', JSON.stringify('dark'));
        htmlElement.classList.add('dark');
        setTheme('dark');
      }
    }
  

  return (
   <>
    <motion.nav
    initial={{y:-20}}
    animate={{y:0}}
    transition={{duration:0.6, ease:"easeIn"}}
    className="w-full p-2 z-20 fixed top-0 left-0 dark:bg-slate-900 bg-slate-100">
      <div className="w-full flex justify-end items-center">
        {/* for desktop */}
        <div className="max-md:hidden flex items-center">
            {Menus.map((e,i) => (
              <>
                <Link to={e.link} className={`p-2 rounded-xl duration-300 cursor-pointer 
                  ${loaction.pathname == e.link ? 'dark:bg-slate-800 bg-slate-700 shadow-md text-slate-200 dark:text-slate-200 hover:bg-slate-700 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700' :
                    'dark:bg-slate-900 bg-slate-100 text-slate-700 dark:text-slate-200 hover:bg-slate-800 dark:hover:bg-slate-800 hover:text-slate-200'
                  }`}>
                  {e.icon}
                </Link>
              </>
            ))}
            {/* theme */}
            <div
            onClick={() => changeTheme()}
            className="p-2 rounded-xl border-2 dark:border-slate-700 border-slate-400 dark:hover:bg-slate-800 dark:bg-slate-900 bg-slate-100 duration-300 cursor-pointer shadow-md
            text-xs flex gap-2 items-center text-slate-800 dark:text-slate-200">
              {theme == 'dark' ? 
            <SunIcon className='h-4 w-4'/> :
            <MoonIcon className='h-4 w-4'/>} theme
            </div>
        </div>

        {/* theme for mobile */}
        <div
            onClick={() => changeTheme()}
            className="p-2 md:hidden rounded-xl border-2 dark:border-slate-700 border-slate-400 dark:hover:bg-slate-800 dark:bg-slate-900 bg-slate-100 duration-300 cursor-pointer shadow-md
            text-xs flex gap-2 items-center text-slate-800 dark:text-slate-200">
              {theme == 'dark' ? 
            <SunIcon className='h-4 w-4'/> :
            <MoonIcon className='h-4 w-4'/>} theme
            </div>

        {/* for mobile */}
        <button className="p-2 md:hidden rounded-xl hover:bg-slate-300 dark:hover:bg-slate-800 duration-300 cursor-pointer text-slate-900 dark:text-slate-300"
        onClick={() => setNavOpen(!navOpen)}>
          {!navOpen ?
        <Bars3Icon className='h-5 w-5' /> :
        <XMarkIcon className='h-5 w-5' />}
        </button>


        {/* mobile menus */}
        <div className={`md:hidden fixed z-30  mt-50 ${navOpen ? 'right-10' : '-right-[200px]'} bg-slate-100 dark:bg-slate-900 duration-300
        p-3 flex flex-col w-[200px] rounded-2xl border-2 dark:border-slate-800 border-slate-300 shadow-lg `}>
              {Menus.map((e, i) => (
                <>
                  <Link to={e.link} className={`p-2 rounded-xl flex justify-between items-center duration-300 dark:text-slate-200 text-slate-800
                   ${loaction.pathname == e.link ? 'dark:bg-slate-800 bg-slate-200 shadow-lg border-2 border-slate-300 dark:border-slate-700' : ''}`}>
                    {e.name}
                    {e.icon}
                  </Link>
                </>
              ))}
        </div>
      </div>
    </motion.nav>
   </>
  )
}

export default Navbar