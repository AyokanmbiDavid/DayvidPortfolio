import React, { Suspense, useState } from 'react'
import {motion} from 'framer-motion'
import { backendSkills, frontendSkills, LoadingBig } from '../components/Exporting'

const Skills = () => {
  const [frontHoveredIndex, setFrontHovered] = useState();
  const [backHoveredIndex, setBackHovered] = useState();

  function Frontend () {
    return(
      <>
       
      </>
    )
  }

  function Backend () {
    return(
      <>
         
      </>
    )
  }

  return (
    <>
      <Suspense fallback={<LoadingBig/>}>
        <motion.div
      initial={{opacity:0.5}}
      animate={{opacity: 1}}
      transition={{duration:0.7,}}
      className='w-full p-2'>
        <h1 className="text-lg font-bold text-purple-800 dark:text-purple-300">
          My Skills
        </h1>

        <h1 className="my-2 text-sm dark:text-slate-200">
          tap on any skill
        </h1>

        {/* Frontend */}

        <div
        className='w-full rounded-xl p-2 my-2'
        >
          <h1 className="text-md dark:text-purple-300 text-purple-800">
            Frontend
          </h1>

          {/* grid display */}
          <div className="grid grid-cols-2 place-items-center gap-2 max-lg:grid-cols-2
          max-md:grid-cols-2 mt-3">
            {frontendSkills.map((e,i) => (
              <>
                <motion.div
                key={i}
                 initial ={ frontendSkills.indexOf(e) % 2 == 0 ?{x:-50} : {x:50}}
                whileInView={{x:0}}
                viewport={{once: false, amount: 0.8}}
                whileHover={{
                  scale: 1.2,
                  y:-5,
                  rotate: -3
                }}
                whileTap={{
                  scale: 1.2,
                  y:-5,
                  rotate: -3
                }}
                onMouseOver={() => setFrontHovered(frontendSkills.indexOf(e))}
                onMouseLeave={() => setFrontHovered()}
                className={`w-full relative max-md:w-[150px] py-5  ${frontendSkills.indexOf(e) % 2 == 0 ? 'rounded-bl-3xl rounded-tl-3xl' : 'rounded-br-3xl rounded-tr-3xl'}
                 border-3 border-purple-300 dark:border-purple-600 text-center
                gap-3 cursor-pointer`}>
                 <h1 className="text-lg dark:text-purple-300 text-purple-600">
                   {e.name}
                 </h1>
                  {frontHoveredIndex == frontendSkills.indexOf(e) &&
                  <motion.div
                  initial={{y:100}}
                  animate={{y:-40}}
                  className="absolute top-1/2 right-2 py-4 px-3 bg-purple-600 rounded-3xl z-0
                  max-w-full text-white">
                    {e.desc}
                  </motion.div>}
                </motion.div>
              </>
            ))}
          </div>

        </div>

        {/* Backend */}
             <div
        className='w-full rounded-xl p-2 my-2'
        >
          <h1 className="text-md text-purple-300">
            Backend
          </h1>

          {/* grid display */}
          <div className="grid grid-cols-2 place-items-center gap-2 max-lg:grid-cols-2
          max-md:grid-cols-2 mt-3">
            {backendSkills.map((e,i) => (
              <>
                <motion.div
                key={i}
                initial ={ backendSkills.indexOf(e) % 2 == 0 ?{x:-50} : {x:50}}
                whileInView={{x:0}}
                viewport={{once: false, amount: 0.8}}
                whileHover={{
                  scale: 1.2,
                  y:-5,
                  rotate: -3
                }}
                 whileTap={{
                  scale: 1.2,
                  y:-5,
                  rotate: -3
                }}
                onMouseOver={() => setBackHovered(backendSkills.indexOf(e))}
                onMouseLeave={() => setBackHovered()}
                className={`w-full relative max-md:w-[150px] py-5  ${backendSkills.indexOf(e) % 2 == 0 ? 'rounded-bl-3xl rounded-tl-3xl' : 'rounded-br-3xl rounded-tr-3xl'} text-center border-3 border-purple-500 dark:border-purple-500
                gap-3 cursor-pointer'`}>
                 <h1 className="text-lg text-purple-900 dark:text-purple-100 ">
                   {e.name}
                 </h1>
                  {backHoveredIndex == backendSkills.indexOf(e) &&
                  <motion.div
                  initial={{y:100}}
                  animate={{y:-40}}
                  className="absolute top-1/2 right-2 py-4 px-3 bg-purple-600 rounded-full z-0
                  max-w-full text-white">
                    {e.desc}
                  </motion.div>}
                </motion.div>
              </>
            ))}
          </div>

        </div>

      </motion.div>
      </Suspense>
    </>
  )
}

export default Skills