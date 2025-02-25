import React from 'react'
import Title from '../components/Title'
import Card from '../components/Card.jsx'
import star from '../assets/star.svg'
import portfoliaImg from '../assets/portfolio.png'
import lmsImg from '../assets/lms.png'
import Rivian from '../assets/Rivian.png'
import Todo from '../assets/todoappfront.png'


const MyWork = () => {
  return (
    <div
      id='MyWork'
      className='work w-screen flex flex-col items-center justify-center relative rounded-[45px]'
      style={{ paddingTop: '2vh', borderTop:"2px solid black" }}
    >
      <img
        className='absolute h-48 z-30 bottom-5 right-20'
        src={star}
        alt='star'
      />
      <img
        className='absolute h-48 z-10 top-20 -left-12'
        src={star}
        alt='star'
      />
      <div className='h-[28vh] w-full flex items-center justify-center relative'>
        <Title title={'My Works'} />
        <div className='absolute bottom-0 w-[60%] h-[2px] bg-black flex items-center justify-between'>
          <div className='leftCircle h-1.5 w-1.5 rounded-full bg-black'></div>
          <div className='rightCircle h-1.5 w-1.5 rounded-full bg-black'></div>
        </div>
      </div>
      <div
        className='down  w-full flex items-center justify-center gap-5 flex-wrap'
        style={{
          padding: '10vh 10vw'
        }}>
        <Card>
          <div
            className='h-full w-full flex flex-col gap-2 items-center justify-between'
            style={{ padding: '10% 10%' }}
          >
            <div className='img h-[50%] w-[90%] overflow-hidden border-2 border-black rounded-2xl bg-amber-300'>
              <img className='h-full' src={lmsImg} alt='LMS' />
            </div>
            <h2 className='text-2xl font-bold'>LMS Website</h2>
            <p className='text-[17px] text-zinc-600 font-semibold text-center'>
            Created an LMS with authentication, course management using React, Node.js, Express, MongoDB.
            </p>
          </div>
        </Card>
        <Card>
          <div
            className='h-full w-full flex flex-col gap-2 items-center justify-between'
            style={{ padding: '10% 10%' }}
          >
            <div className='img h-[50%] w-[90%] border-2 overflow-hidden border-black rounded-2xl bg-amber-300'>
              <img className='h-full' src={portfoliaImg} alt='Portfolio' />
            </div>
            <h2 className='text-2xl font-bold'>Portfolio</h2>
            <p className='text-[17px] text-zinc-600 font-semibold text-center'>
            Created a portfolio using React, showcasing projects, skills, and experience with a responsive design.
            </p>
          </div>
        </Card>
        <Card>
          <div
            className='h-full w-full flex flex-col gap-2 items-center justify-between'
            style={{ padding: '10% 10%' }}
          >
            <div className='img h-[50%] w-[90%] border-2 overflow-hidden border-black rounded-2xl bg-black'>
              <img className='h-full object-center' src={Rivian} alt='Portfolio' />
            </div>
            <h2 className='text-2xl font-bold'>Rivian Design</h2>
            <p className='text-[17px] text-zinc-600 font-semibold text-center'>
            Recreating the modern Rivian Car Website using React, Tailwind CSS, and GSAP for smooth animations.
            </p>
          </div>
        </Card>
        <Card>
          <div
            className='h-full w-full flex flex-col gap-2 items-center justify-between'
            style={{ padding: '10% 10%' }}
          >
            <div className='img h-[50%] w-[90%] border-2 overflow-hidden border-black rounded-2xl bg-black '>
              <img className='h-full object-cover object-center' src={Todo} alt='Portfolio' />
            </div>
            <h2 className='text-2xl font-bold'>TODO WepApp</h2>
            <p className='text-[17px] text-zinc-600 font-semibold text-center'>
            Building a Full-Stack To-Do Web App with React, Tailwind CSS, Node.js, Express.js, and MongoDB.
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default MyWork
