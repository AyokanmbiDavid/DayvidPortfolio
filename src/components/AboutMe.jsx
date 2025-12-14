import React from 'react'
import { motion } from 'framer-motion'
import { ChatBubbleLeftIcon, InformationCircleIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Typed } from 'react-typed'
import { Link } from 'react-router-dom'

const AboutMe = () => {
  return (
    <>
      <motion.div
      animate={{scale:[0.95,1,0.95]}}
      transition={{duration:2, repeat: Infinity}}
      className=''>
        <div className="p-2 w-full ">
          <div className="dark:bg-slate-800 bg-slate-300 rounded-xl w-full p-3 border-2 border-slate-400 dark:border-slate-700">
            <InformationCircleIcon className='h-5 w-5 dark:text-slate-300 text-slate-700'/>
            <h1 className="text-sm dark:text-slate-200 text-slate-800 my-2">
              I am a Software Developer <span className="text-slate-400">(FullStack Development)</span>.
              I Graduated from a software institute called <span className="text-slate-400">Gomycode</span>, 
              Having over 1 year of project building and building bigger experience. I am at no hesitation to give
              you the best service.
            </h1>

            <Link to={'/message'} 
            className='flex gap-2 items-center w-[150px] p-3 text-sm rounded-xl dark:text-green-500 dark:border-2 dark:border-green-300 cursor-pointer bg-green-500 dark:bg-slate-800 text-white border-0 shadow-lg'>
              Message me <ChatBubbleLeftIcon className='h-4 w-4' />
            </Link>
          </div>

        </div>
      </motion.div>
    </>
  )
}

export default AboutMe