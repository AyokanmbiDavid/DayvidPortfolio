import React from 'react'
import { motion } from 'framer-motion'
import { ChatBubbleLeftIcon, InformationCircleIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Typed } from 'react-typed'
import { Link } from 'react-router-dom'

const AboutMe = () => {
  return (
    <>
      <motion.div
      initial={{x: -200}}
      animate={{x: 0}}
      viewport={{once:false, amount: 0.7}}
      className=' border-b border-purple-400 mx-2 dark:border-purple-700'>
        <div className="p-2 w-full ">
          <div className=" rounded-xl w-full p-3">
            <div className="flex gap-2 items-center text-xl font-semibold text-slate-800 dark:text-slate-200">
              <InformationCircleIcon className='h-10 w-10 dark:text-purple-300 text-purple-700'/> 
              About Me
            </div>
            <h1 className="text-sm my-2 text-slate-600 dark:text-slate-300">
              I am a Software Developer <span className="text-purple-400">(FullStack Development)</span>.
              I Graduated from a software institute called <span className="text-purple-400">Gomycode</span>, 
              Having over 1 year of project building and building bigger experience. I am at no hesitation to give
              you the best service.
            </h1>

            <motion.button
            animate={{scale:[0.9,1,0.9], y:[0,,-4,0]}}
            transition={{duration: 2, repeat: Infinity}}>
              <Link to={'/message'} 
            className='flex gap-2 items-center w-[150px] p-3 text-sm rounded-xl dark:text-white cursor-pointer bg-green-500 dark:bg-green-800 text-white border-0 shadow-lg'>
              Message me <ChatBubbleLeftIcon className='h-4 w-4' />
            </Link>
            </motion.button>
          </div>

        </div>
        <div className="flex w-full p-2 items-center justify-center">
          <div className="w-8/10">
          {/* mobile */}
            <motion.div
            animate={{x:[0,260,0]}}
            transition={{duration: 3, repeat: Infinity}}
            className='w-5 h-5 rounded-md border-2 border-purple-300 md:hidden dark:border-purple-500'>

            </motion.div>
            {/* desktop */}
            <motion.div
            animate={{x:[0,600,0]}}
            transition={{duration: 5, repeat: Infinity}}
            className='w-5 h-5 rounded-md border-2 max-md:hidden border-purple-300 dark:border-purple-500'>

            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default AboutMe