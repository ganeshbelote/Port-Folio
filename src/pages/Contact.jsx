import React, { useState } from 'react'
import Title from '../components/Title'
import star from '../assets/star.svg'

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
      className='w-screen rounded-[45px] relative flex flex-col items-center justify-center'
      style={{ padding: '3vh 0', borderTop: '2px solid black' }}
    >
      <img
        className='absolute h-48 z-10 top-20 -left-12'
        src={star}
        alt='star'
      />
      <img
        className='absolute h-48 z-30 bottom-5 right-20'
        src={star}
        alt='star'
      />
      <div
        className='h-[28vh] w-full flex items-center justify-center rounded-t-4xl relative'
        style={{ paddingBottom: '3vh' }}
      >
        <Title title={'Contact Me'} />
        <div className='absolute bottom-0 w-[60%] h-[2px] bg-black flex items-center justify-between'>
          <div className='leftCircle h-1.5 w-1.5 rounded-full bg-black'></div>
          <div className='rightCircle h-1.5 w-1.5 rounded-full bg-black'></div>
        </div>
      </div>
      <div className='below h-[90vh] w-screen flex items-center justify-center'>
        <div className='form h-[90%] w-[60%] bg-amber-200 relative flex flex-col items-center justify-evenly' style={{boxShadow:"5px 5px 15px black"}}>
          <div className='left absolute left-0  h-[103%] w-[1.5px] bg-black'></div>
          <div className='right absolute right-0 h-[103%] w-[1.5px] bg-black'></div>
          <div className='up absolute top-0 w-[102.4%] h-[1.5px] bg-black'></div>
          <div className='down absolute bottom-0 w-[102.4%] h-[1.5px] bg-black'></div>
          <div className='identity w-[80%] h-[15%] flex items-center justify-evenly'>
            <div
              className='name h-[70%] w-[48%] rounded-xs'
              style={{ boxShadow: '5px 5px black' }}
            >
              <input
                name='name'
                className='h-full w-full text-lg font-semibold rounded-xs outline-0 border-2 border-gray-800 focus:border-black'
                style={{ padding: '0 10%' }}
                type='text'
                placeholder='Your Name...'
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div
              className='email h-[70%] w-[48%] rounded-xs '
              style={{ boxShadow: '5px 5px black' }}
            >
              <input
                name='email'
                className='h-full w-full text-lg font-semibold rounded-xs outline-0 border-2 border-gray-800 focus:border-black'
                style={{ padding: '0 10%' }}
                type='text'
                placeholder='Your Email...'
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='w-[80%] h-[65%] flex items-center justify-center'>
            <div
              className='name h-[95%] w-[97%] rounded-xs'
              style={{ boxShadow: '5px 5px black' }}
            >
              <textarea
                name='message'
                className='h-full w-full text-lg font-semibold rounded-xs outline-0 border-2 border-gray-800 focus:border-black'
                style={{ padding: '3% 6%' }}
                type='text'
                placeholder='Your message...'
                value={formData.message}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='w-[80%] h-[15%] flex items-center justify-center'>
            <button
              className='h-[70%] w-[25%] cursor-pointer bg-amber-600 text-xl font-semibold rounded-xs border-2 border-black hover:scale-102 hover:bg-green-900 hover:text-white transition-all'
              style={{ boxShadow: '5px 5px black' }}
              onClick={handleSubmit}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
