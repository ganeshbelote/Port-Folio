import React, { useEffect, useRef, useState } from 'react'
import star from '../assets/star.svg'
import node from '../assets/node.png'
import react from '../assets/React.png'
import redux from '../assets/redux.svg'
import mongo from '../assets/mongodb.png'
import techstack from '../assets/techstack.svg'
import sun from '../assets/sun.svg'
import skillBg from '../assets/skillBg.svg'
import './Skills.css'

const Skills = () => {
  const [transY, setTransY] = useState(0)
  const [show, setShow] = useState(true)

  const screenRef = useRef()

  useEffect(() => {
    if (screenRef.current) {
      if (screenRef.current.offsetHeight > 600) {
        setTransY(screenRef.current.offsetHeight - 600)
      }
      if (screenRef.current.offsetHeight < 870) {
        setShow(false)
      }
    }
  }, [])

  console.log(transY, screenRef.current?.offsetHeight)

  return (
    <div
      id='Skills'
      ref={screenRef}
      className='skill overflow-hidden h-screen w-screen flex flex-col items-center justify-center relative rounded-t-[45px]'
      style={{ paddingTop: '3vh', borderTop: '2px solid black' }}
    >
      <div
        className='up h-1/5 w-full flex items-center justify-center relative before:content-[""] before:absolute before:bottom-0 before:h-[3.5px] before:w-[70%] before:bg-black before:rounded-4xl'
        style={{ paddingBottom: '3vh' }}
      >
        <div className='img h-full flex relative '>
          <img
            className='h-[90%] lg:h-[120%] lg:-translate-y-2 md:h-full'
            src={techstack}
            alt='point'
          />
          <img
            className='h-[90%] absolute -right-1/3 -bottom-1/3'
            src={sun}
            alt='sun'
          />
        </div>
      </div>
      <div className='down h-4/5 w-full flex items-center justify-center'>
        <div className='main overflow-hidden w-full md:w-[80%] lg:w-[80%] h-full relative flex items-start justify-center gap-7 '>
          <img
            className='bg  h-[95%] md:scale-150 lg:scale-100 lg:w-fit absolute top-0 pointer-events-none'
            style={{ transform: `translateY(-${transY - transY * 0.9}px)` }}
            src={skillBg}
          />
          <div className='left h-full w-[45%] flex items-center justify-end'>
            <div className='content h-[95%] w-[75%] overflow-hidden flex flex-col gap-1'>
              <div className='react w-full h-2/5 overflow-hidden flex flex-col lg:flex-row items-center justify-center border-2 border-black bg-[#808079] rounded-xl z-20 hover:scale-95'>
                <a
                  className='h-1/2 lg:h-full flex items-center justify-center'
                  href='https://react.dev/'
                >
                  <img className='h-[90%]' src={react} />
                </a>
                <p
                  className='w-full h-1/2 lg:h-full lg:w-2/3 flex flex-col items-center justify-center gap-1 text-center text-lg font-semibold'
                  style={{ padding: '10px' }}
                >
                  <span className='text-2xl font-semibold text-blue-500'>
                    React JS
                  </span>
                  Frontend Library.
                </p>
              </div>
              <div className='node w-full h-2/5 overflow-hidden flex flex-col lg:flex-row items-center justify-center border-2 border-black bg-[#808079] rounded-xl z-20 hover:scale-95'>
                <a
                  className='h-1/2 lg:h-full flex items-center justify-center'
                  href='https://nodejs.org/en'
                >
                  <img className='h-[70%]' src={node} />
                </a>
                <p
                  className='w-full h-1/2 lg:h-full lg:w-2/3 flex flex-col items-center justify-center gap-1 text-center text-lg font-semibold'
                  style={{ padding: '10px' }}
                >
                  <span className='text-2xl font-semibold text-green-500'>
                    Node JS
                  </span>
                  Backend purpose.
                </p>
              </div>
              <div className='blank w-full h-1/5 '></div>
            </div>
          </div>
          <div className='right h-full w-[45%] flex items-center justify-start'>
            <div className='content h-[95%] w-[75%] overflow-hidden flex flex-col gap-1'>
              <div className='blank w-full h-1/5 '></div>
              <div className='mongo w-full h-2/5 overflow-hidden flex flex-col lg:flex-row items-center justify-center border-2 border-black bg-[#808079] rounded-xl z-20 hover:scale-95'>
                <a
                  className='h-1/2 lg:h-full flex items-center justify-center'
                  href='https://www.mongodb.com/'
                >
                  <img className='h-[90%]' src={mongo} />
                </a>
                <p
                  className='w-full h-1/2 lg:h-full lg:w-2/3 flex flex-col items-center justify-center gap-1 text-center text-lg font-semibold'
                  style={{ padding: '10px' }}
                >
                  <span className='text-2xl font-semibold text-amber-800'>
                    Mongo DB
                  </span>
                  No-SQL Database.
                </p>
              </div>
              <div className='redux w-full h-2/5 overflow-hidden flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-0 border-2 border-black bg-[#808079] rounded-xl z-20 hover:scale-95'>
                <a
                  className='h-1/2 lg:h-full flex items-center justify-center'
                  href='https://redux-toolkit.js.org/'
                >
                  <img className='lg:translate-x-2 h-[70%]' src={redux} />
                </a>
                <p
                  className='w-full h-1/2 lg:h-full lg:w-2/3 flex flex-col items-center justify-center gap-1 text-center text-lg font-semibold'
                  style={{ padding: '10px' }}
                >
                  <span className='text-2xl font-semibold text-violet-800'>
                    Redux Toolkit
                  </span>
                  State Management {show ? 'and Api handling' : ''}.
                </p>
              </div>
            </div>
          </div>
          <img
            className='absolute h-[15vh] lg:h-[10vw] top-20 -left-12'
            src={star}
            alt='star'
          />
          <img
            className='absolute h-[15vh] lg:h-[10vw]  bottom-0 -right-10'
            src={star}
            alt='star'
          />
        </div>
      </div>
    </div>
  )
}

export default Skills

