import React from 'react'
import Title from '../components/Title'
import Profile from '../components/Profile'
import star from '../assets/star.svg'

const About = () => {
  return (
    <div
      id='About'
      className='w-screen flex flex-col items-center justify-center gap-10 relative rounded-[45px]'
      style={{ padding: '2vh 10vw 10vh', borderTop: '2px solid black' }}
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
      <div className='h-[28vh] w-screen relative flex flex-col items-center justify-center'>
        <Title title={'About Me'} />
        <div className='absolute bottom-0 w-[60%] h-[2px] bg-black flex items-center justify-between'>
          <div className='leftCircle h-1.5 w-1.5 rounded-full bg-black'></div>
          <div className='rightCircle h-1.5 w-1.5 rounded-full bg-black'></div>
        </div>
      </div>
      <div
        className='content w-screen flex items-center gap-5 justify-center'
        style={{ padding: '0 10vw' }}
      >
        <div className='left h-[70vh] w-[30vw] flex items-center justify-center'>
          <Profile />
        </div>
        <div
          className='right h-[70vh] w-[58vw] bg-amber-200 flex flex-col items-start justify-center gap-6 relative'
          style={{ padding: '4vh 5vw', boxShadow:"5px 5px 15px black" }}
        >
          <div className='left absolute left-0 h-[103%] w-[1.5px] bg-black'></div>
          <div className='right absolute right-0 h-[103%] w-[1.5px] bg-black'></div>
          <div className='up absolute top-0 -translate-x-[10.5%] w-[102.4%] h-[1.5px] bg-black'></div>
          <div className='down absolute bottom-0 -translate-x-[10.5%] w-[102.4%] h-[1.5px] bg-black'></div>
          <h2 className='text-4xl font-bold'>
            Hii, Myself <span className='text-red-600'>Ganesh Belote.</span>
          </h2>
          <p className='text-xl font-semibold text-zinc-700'>
            I am a passionate MERN stack developer with expertise in JavaScript,
            React, Redux Toolkit, Node.js, and MongoDB. I specialize in building
            scalable, high-performance web applications using Tailwind CSS,
            GSAP, Locomotive, and Framer Motion for seamless UI/UX. I have
            hands-on experience with authentication, API integration, backend
            optimization, and testing with Postman. Constantly exploring new
            technologies, I strive to create efficient, responsive, and engaging
            digital experiences while enhancing my problem-solving and
            development skills.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
