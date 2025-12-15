import React from 'react'
import { Contacts } from './Exporting'
import { ClipboardIcon, PhoneIcon } from '@heroicons/react/24/outline'
import {motion,useScroll, useTransform} from 'framer-motion'
import { useRef } from 'react'

const Contact = () => {

    async function copyVal(e) {
      try{
       navigator.clipboard.writeText(e);
       alert(`${e} copied to clipboard`)
      } catch (e) {
        alert(`error copying text`)
      }
    }

  return (
    <>
      <motion.div
      initial={{scale:0.85}}
      animate={{scale:1}}
      transition={{duration:0.8, ease:"easeIn"}}
      className="w-full p-3 flex justify-center items-center flex-col gap-3 mt-5">
        <h1 className="w-full text-xl flex items-center text-purple-800 dark:text-purple-300 font-semibold">
          <PhoneIcon className='h-7 w-7 mr-5' /> Contact me
        </h1>
        <h1 className="text-sm my-1 dark:text-slate-200">
          My cards are draggable
        </h1>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-2 w-full place-items-center">
          {Contacts.map((e,i) => (
            <>
              <motion.div
              whileHover={{
                y:-5,
                scale:1.1,
                rotate: -2,
              }}
              transition={{
                bounceDamping: 10,
                bounceStiffness: 600
              }} drag
              dragConstraints={{
                left: 0,
                top: 0,
                right: 0,
                bottom: 100,
              }}
              initial={{
                x: -100, opacity: 0
              }}
              whileInView={{
                x: 0, opacity: 1
              }}
              viewport={{once: false, amount: 0.5}}
              className=" flex flex-col gap-2 relative rounded-xl border-2 dark:border-purple-700 border-purple-600 w-8/10 max-lg:w-full cursor-grab">
               <div className="flex w-full items-center justify-between">
                  {/* copy button */}
                  <button className="p-2 rounded-bl-xl rounded-tr-md absolute top-0 right-0 flex items-center justify-center
                   hover:bg-purple-800 bg-purple-400 dark:bg-purple-700 text-purple-800 dark:text-purple-300
                  duration-300" onClick={() => copyVal(e.val)}>
                    <ClipboardIcon className='h-4 w-4' />
                  </button>
               </div>
               {/* value */}
               <h1 className="text-lg dark:text-purple-300 text-purple-700 font-bold py-10 pl-3">
                {e.val}
               </h1>
               {/* name */}
               <div className="w-full py-3 bg-purple-600 rounded-br-md rounded-bl-md text-white p-2">
                {e.name}
               </div> 
              </motion.div>
            </>
          )) }
        </div>
      </motion.div>
    </>
  )
}

export default Contact