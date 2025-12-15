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
                  ${loaction.pathname == e.link ? 'dark:bg-purple-800  shadow-xl text-purple-800 dark:text-purple-200 border-2 border-purple-500 dark:border-purple-700 ' :
                    'dark:bg-slate-900 bg-slate-100 text-purple-700 dark:text-purple-200 hover:bg-purple-600 dark:hover:bg-purple-800 hover:text-purple-200'
                  }`} key={i}>
                  {e.icon}
                </Link>
              </>
            ))}
            {/* theme */}
            <div
            onClick={() => changeTheme()}
            className="p-2 rounded-xl border-2 dark:border-purple-700 border-purple-400 dark:hover:bg-purple-800 dark:bg-purple-900 bg-purple-100 duration-300 cursor-pointer shadow-md
            text-xs flex gap-2 items-center text-purple-800 dark:text-purple-200">
              {theme == 'dark' ? 
            <SunIcon className='h-4 w-4'/> :
            <MoonIcon className='h-4 w-4'/>} theme
            </div>
        </div>

        {/* theme for mobile */}
        <div
            onClick={() => changeTheme()}
            className="p-2 md:hidden rounded-xl border-2 dark:border-purple-700 border-purple-400 dark:hover:bg-purple-800 dark:bg-purple-900 bg-purple-100 duration-300 cursor-pointer shadow-md
            text-xs flex gap-2 items-center text-purple-800 dark:text-purple-200">
              {theme == 'dark' ? 
            <SunIcon className='h-4 w-4'/> :
            <MoonIcon className='h-4 w-4'/>} theme
            </div>

        {/* for mobile */}
        <button className="p-2 md:hidden rounded-xl hover:bg-purple-300 dark:hover:bg-purple-800 duration-300 cursor-pointer text-purple-900 dark:text-purple-300 flex gap-2 text-xs items-center"
        onClick={() => setNavOpen(!navOpen)}>
        Menu
          {!navOpen ?
        <Bars3Icon className='h-5 w-5' /> :
        <XMarkIcon className='h-5 w-5' />}
        </button>


        {/* mobile menus */}
        <div className={`md:hidden fixed z-30  mt-50 ${navOpen ? 'right-10' : '-right-[200px]'} bg-purple-100 dark:bg-purple-900 duration-300
        p-3 flex flex-col w-[200px] rounded-2xl border-2 dark:border-purple-800 border-purple-300 shadow-lg `}>
              {Menus.map((e, i) => (
                <>
                  <Link to={e.link} className={`p-2 rounded-xl flex justify-between items-center duration-300 dark:text-purple-200 text-purple-800
                   ${loaction.pathname == e.link ? 'dark:bg-purple-800 bg-purple-200 shadow-lg border-2 border-purple-300 dark:border-purple-700' : ''}`} key={i}>
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