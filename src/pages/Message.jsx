import React, { Suspense, useState } from 'react'
import { motion } from 'framer-motion'
import e from 'cors'
import { LoadingBig } from '../components/Exporting'
import { ChatBubbleLeftIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'

const Message = () => {
  const [WhatsappForm, setWhatsappForm] = useState({
    text: '',
    name: '',
    email: '',
  }) 

  async function changeForm (e,name) {
    setWhatsappForm({...WhatsappForm, 
      [name]: e.target.value
    })
  }

  async function submitForm (e) {
    e.preventDefault();

    try{
    const Message = `Name: ${WhatsappForm.name}\nEmail: ${WhatsappForm.email}\nText: ${WhatsappForm.text}`;
    const encodeMess = encodeURIComponent(Message);
    const WhatsappUrl =`https://wa.me/9024572602?text=${encodeMess}`;
    window.open(WhatsappUrl, '_blank')
    } catch (e) {
      alert('network error')
    }
  }

  return (
    <>
  <Suspense fallback={<LoadingBig/>}>
      <motion.div 
      initial={{y:-60}}
      animate={{y:0}}
    className="flex justify-center md:items-center w-full h-[400px]" onSubmit={submitForm}>
      <motion.form 
      drag
      dragConstraints={{
        top:0,
        left:0,
        right: 0,
        bottom:0,
      }}
      transition={{ duration: 1,bounceStiffness: 600}}
      className="p-3 md:border-2 md:dark:border-purple-700 md:border-purple-300 rounded-xl md:shadow-xl mt-10">
        <div className="flex items-center justify-center p-2 max-md:hidden md:cursor-grab">
          <div className="w-30 p-1 rounded-full bg-purple-400 dark:bg-purple-700"></div>
        </div>
        {/* intro */}
        <div className="flex ites-center gap-2 ml-2 text-xl text-slate-800 dark:text-slate-200 my-3">
        <ChatBubbleLeftIcon className='h-7 w-7' />
        Send a Whatsapp Message here
        </div>

      <h1 className="text-sm max-lg:ml-5 dark:text-slate-300 text-slate-800">
        What would you love to tell me?
      </h1>
      
      <textarea type="text"
       className="w-[400px] max-md:w-[300px]  max-lg:ml-5 dark:bg-slate-800 bg-slate-200 rounded-xl text-sm border-2 dark:border-slate-600 border-slate-400 text-slate-900 dark:text-slate-700 my-2"
       placeholder='Type here..' onChange={(e) => changeForm(e,'text')} required/>

      {/* name */}
      <h1 className="text-sm dark:text-slate-300 max-lg:ml-5 text-slate-800">
        Your Name?
      </h1>
      
      <input type="text"
       className="w-[400px] max-md:w-[300px] max-lg:ml-5 dark:bg-slate-800 bg-slate-200 rounded-xl text-sm border-2 dark:border-slate-600 border-slate-400 text-slate-900 dark:text-slate-700 my-2"
       placeholder='Your Name..' onChange={(e) => changeForm(e,'name')} required/>

       {/* email */}
      <h1 className="text-sm dark:text-slate-300 max-lg:ml-5 text-slate-800 mt-3">
        Your Email?
      </h1>
      
      <input type="text"
       className="w-[400px] max-md:w-[300px] max-lg:ml-5 dark:bg-slate-800 bg-slate-200 rounded-xl text-sm border-2 dark:border-slate-600 border-slate-400 text-slate-900 dark:text-slate-700 my-2"
       placeholder='Your Email..' onChange={(e) => changeForm(e,'email')} required/>


      {/* send */}
        <div className="w-full flex justify-center items-center my-2 mt-3">
          <motion.button
          whileTap={{scale: 0.7}}
          className="p-2 w-7/10 max-md:w-[300px] rounded-md dark:bg-purple-700 bg-purple-600 cursor-pointer hover:shadow-md hover:bg-purple-800 text-white dark:text-slate-200 flex items-center gap-2 justify-center 
          duration-300">
            Send <PaperAirplaneIcon className='h-5 w-5 rotate-[310deg]'/>
          </motion.button>
        </div>

      </motion.form>
    </motion.div>
  </Suspense>
    </>
  )
}

export default Message