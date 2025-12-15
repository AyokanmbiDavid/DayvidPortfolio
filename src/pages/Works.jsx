import React,{Suspense, useState} from 'react'
import { motion } from 'framer-motion'
import { LoadingBig, MyWorks } from '../components/Exporting'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

const Works = () => {
  const [workDown, setworkDown] = useState()

  return (
    <>
     <Suspense fallback={<LoadingBig/>}>
      <motion.div
      initial={{scale:1.2}}
      animate={{scale:1}}
      transition={{duration:0.4, ease:"easeIn"}}
     className="p-2">
         <h1 className="text-lg dark:text-purple-300 text-purple-800">
        My works
      </h1>

      <div className="grid grid-cols-2 max-md:grid-cols-1 place-items-start p-2 my-2 gap-2">
        {MyWorks.map((e,i) => (
          <>
            <div className="border-2 border-purple-400 dark:border-purple-700 rounded-2xl p-3 w-full">
              {/* top */}
             <div className="">
              <div className="flex w-full justify-between items-center">
               <h1 className="dark:text-purple-300 text-purple-800 flex gap-2 items-center ">
                <div className="bg-purple-700 h-[50px] w-[50px] rounded-full"></div>
                {e.name}
              </h1>

              <div className="flex gap-2 items-center">
                {/* visit */}
                <a href={e.desc} className='text-blue-600'>visit</a>
                {/* dropdown button */}
              <button className="p-2 rounded-md hover:bg-purple-300 dark:hover:bg-purple-800 text-purple-700 dark:text-purple-200 duration-300" 
              onClick={() => setworkDown(workDown == e.name ? '' : e.name)}>
                {workDown != e.name ? 
                <ChevronDownIcon className='h-4 w-4' /> :
                <ChevronUpIcon  className='h-4 w-4'/>}
              </button>
              </div>
             </div>
             {/* description */}
             <div className={`dark:bg-purple-800 bg-purple-300 ${workDown == e.name ? 'p-2 my-2' : ''} rounded-lg  dark:text-purple-200 text-purple-800 duration-300`}>
              {workDown == e.name && e.desc}
             </div>
             </div>
            </div>
          </>
        ))}
      </div>
      </motion.div>
     </Suspense>
    </>
  )
}

export default Works