import React from 'react'
import star from '../assets/star.svg'
import work from '../assets/work.svg'
import sun from '../assets/sun.svg'
import portfolio from '../assets/portWork.svg'
import Rivian from '../assets/Rivian.svg'
import Todo from '../assets/Todo.svg'
import lmsImg from '../assets/lms.svg'
import './MyWork.css'

const MyWork = () => {
  return (
    <div
      id='MyWork'
      className='work h-screen w-screen flex flex-col items-center justify-start relative rounded-t-[45px] overflow-hidden'
      style={{ paddingTop: '2vh', borderTop: '2px solid black' }}
    >
      <div
        className='up h-1/5 w-full flex items-center justify-center relative before:content-[""] before:absolute before:bottom-0 before:h-[3.5px] before:w-[70%] before:bg-black before:rounded-4xl'
        style={{ paddingBottom: '3vh' }}
      >
        <div className='img h-full flex relative '>
          <img
            className='h-[90%] lg:h-[120%] lg:-translate-y-2 md:h-full'
            src={work}
            alt='point'
          />
          <img
            className='h-[90%] absolute -right-1/3 -bottom-1/3'
            src={sun}
            alt='sun'
          />
        </div>
      </div>
      <div className='down h-3/5 lg:h-4/5 w-full flex items-center justify-center'>
        <div
          className='container h-full lg:h-[80%] w-full flex items-center justify-center gap-3'
          style={{ padding: '0 30px' }}
        >
          <div
            className='Set w-full h-2/3 lg:h-full lg:w-1/2 flex items-center justify-center gap-5'
            style={{ padding: '0 15px' }}
          >
            <img
              className='w-1/2 lg:h-[85%] cursor-pointer hover:scale-101'
              src={portfolio}
              alt='portfolio'
            />
            <img
              className='w-1/2 lg:h-[85%] cursor-pointer hover:scale-101'
              src={Rivian}
              alt='Rivian'
            />
          </div>
          <div
            className='Set w-full h-2/3 lg:h-full lg:w-1/2 flex items-center justify-center gap-5'
            style={{ padding: '0 15px' }}
          >
            <img
              className='w-1/2 lg:h-[85%] cursor-pointer hover:scale-101'
              src={Todo}
              alt='Todo'
            />
            <img
              className='w-1/2 lg:h-[85%] cursor-pointer hover:scale-101'
              src={lmsImg}
              alt='lmsImg'
            />
          </div>
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

export default MyWork
