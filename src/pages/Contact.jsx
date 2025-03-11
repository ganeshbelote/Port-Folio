import React, { useState } from 'react'
import star from '../assets/star.svg'
import sun from '../assets/sun.svg'
import contact from '../assets/contact.svg'


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <div
      id='Contact'
      className='w-screen h-screen rounded-t-[45px] relative flex flex-col items-center justify-center gap-2'
      style={{ padding: '3vh 0', borderTop: '2px solid black' }}
    >
      <div
        className='up h-1/5 w-full flex items-center justify-center relative before:content-[""] before:absolute before:bottom-0 before:h-[3.5px] before:w-[70%] before:bg-black before:rounded-4xl'
        style={{ paddingBottom: '3vh' }}
      >
        <div className='img h-full flex relative '>
          <img
            className='h-[90%] lg:h-[120%] lg:-translate-y-2 md:h-full'
            src={contact}
            alt='point'
          />
          <img
            className='h-[90%] absolute -right-1/3 -bottom-1/3'
            src={sun}
            alt='sun'
          />
        </div>
      </div>
      <div
        className='form w-full h-4/5  lg:w-[60%] bg-amber-200 relative flex flex-col items-center justify-evenly'
        style={{ boxShadow: '5px 5px 15px black' }}
      >
        <div className='identity w-[80%] h-[15%] flex flex-col gap-3 lg:gap-0 lg:flex-row items-center justify-evenly' style={{marginTop:"30px"}}>
          <div
            className='name h-[70%] w-full lg:w-[48%] rounded-xs'
            style={{ boxShadow: '5px 5px black' }}
          >
            <input
              name='name'
              className='h-full w-full text-sm lg:text-lg font-semibold rounded-xs outline-0 border-2 border-gray-800 focus:border-black'
              style={{ padding: '5px 10%' }}
              type='text'
              placeholder='Your Name...'
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div
            className='email h-[70%] w-full lg:w-[48%] rounded-xs '
            style={{ boxShadow: '5px 5px black' }}
          >
            <input
              name='email'
              className='h-full w-full text-sm lg:text-lg font-semibold rounded-xs outline-0 border-2 border-gray-800 focus:border-black'
              style={{ padding: '5px 10%' }}
              type='text'
              placeholder='Your Email...'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='w-[80%] h-[65%] flex items-center justify-center' style={{marginTop:"20px"}}>
          <div
            className='name h-[95%] w-full lg:w-[97%] rounded-xs'
            style={{ boxShadow: '5px 5px black' }}
          >
            <textarea
              name='message'
              className='h-full w-full text-sm lg:text-lg font-semibold rounded-xs outline-0 border-2 border-gray-800 focus:border-black'
              style={{ padding: '3% 6%' }}
              type='text'
              placeholder='Your message...'
              value={formData.message}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='w-[80%] h-[15%] flex items-center justify-center' style={{marginBottom:"40px"}}>
          <button
            className='lg:h-[70%] h-[50%] w-fit cursor-pointer bg-amber-600 text-sm lg:text-xl font-semibold rounded-xs border-2 border-black hover:scale-102 hover:bg-green-900 hover:text-white transition-all'
            style={{ boxShadow: '5px 5px black',padding:"0 10px" }}
            onClick={handleSubmit}
          >
            Send Message
          </button>
        </div>
      </div>
      <img
        className='absolute h-[15vh] lg:h-[10vw] top-20 -left-12'
        src={star}
        alt='star'
      />
      <img
        className='absolute h-[15vh] lg:h-[10vw] bottom-16 lg:bottom-0 -right-10'
        src={star}
        alt='star'
      />
    </div>
  )
}

export default Contact
