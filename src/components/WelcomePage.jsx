import React from 'react'
import ProfilePic from '../images/Img1.jpg'
import {motion}  from 'framer-motion'
import { ReactTyped } from 'react-typed'


const WelcomePage = () => {
  return (
    <>
      <motion.div 
      initial={{y: -60}}
      whileInView={{
        y:0
      }}
      viewport={{once: false, amount:0.7}}
      className="w-full p-2 flex max-md:flex-col items-center gap-4">
          <div className="border border-slate-800 w-[150px] h-[150px] rounded-full ">
            <img src={ProfilePic} className="object-cover w-full rounded-full h-full" />
          </div>
        <h1
        className="text-xl font-bold dark:text-purple-300 text-purple-800 text-center">
          Hi there,{' '}
          <ReactTyped
            strings={[
            'My name is Ayokanmbi David (Dayvid)',
            'I am a Fullstack Software Developer',
            'I love Coding',
            'The best so far',
            'Passionate and Considerate',
            'Contact me on 09024572602',
            'My Email is davidayokanmbi47@gmail.com'
          ]}
            typeSpeed={60}
            backSpeed={60}
            loop={true}
          /> 
        </h1>
          <div className="w-5 h-5 rounded-lg border-2 border-purple-500 dark:border-purple-600 max-lg:hidden -ml-2 shadow-xl"></div>
      </motion.div>
    </>
  )
}

export default WelcomePage