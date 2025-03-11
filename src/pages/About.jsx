import React, { useEffect, useRef, useState } from 'react'
import star from '../assets/star.svg'
import about from '../assets/about.svg'
import sun from '../assets/sun.svg'
import Profile from '../assets/profile.svg'

const About = () => {

  const [showText,setShowText] = useState(true)

  const aboutRef = useRef()

  useEffect(()=>{
    if(aboutRef.current){
      if (aboutRef.current.offsetHeight < 670) {
        setShowText(false)
      }
    }
  },[])

  return (
    <div
      id='About'
      ref={aboutRef}
      className='w-screen h-screen flex flex-col items-center justify-center relative rounded-t-[45px] overflow-hidden'
      style={{ paddingTop: '2vh', borderTop: '2px solid black' }}
    >
      <div
        className='up h-1/5 w-full flex items-center justify-center relative before:content-[""] before:absolute before:bottom-0 before:h-[3.5px] before:w-[70%] before:bg-black before:rounded-4xl'
        style={{ paddingBottom: '3vh' }}
      >
        <div className='img h-full flex relative '>
          <img
            className='h-[90%] lg:h-[120%] lg:-translate-y-2 md:h-full'
            src={about}
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
        <div
          className='container h-full w-full lg:h-[90%] lg:w-[70%] flex flex-col gap-5 lg:flex-row items-center justify-center lg:justify-between lg:gap-0 overflow-hidden border-2 border-black rounded-md bg-amber-200'
          style={{ padding: '20px',boxShadow:"5px 5px 8px black" }}
        >
          <div className='profile h-[30%] w-full lg:h-[90%] lg:w-[40%] flex items-center justify-center'>
            <img className='h-full' src={Profile} alt='Profile image' />
          </div>
          <div className='z-20 h-full w-full lg:h-[90%] lg:w-[60%] flex flex-col gap-1 lg:gap-5 items-center justify-center overflow-hidden' style={{padding:"20px"}}>
            <h2 className='text-lg lg:text-2xl font-bold'>
              Hii, Myself <span className='text-red-600'>Ganesh Belote.</span>
            </h2>
            <p className='text-sm lg:text-lg font-semibold text-zinc-700'>
              I am a passionate MERN stack developer with expertise in
              JavaScript, React, Redux Toolkit, Node.js, and MongoDB. I
              specialize in building scalable, high-performance web applications
              using Tailwind CSS, GSAP, Locomotive, and Framer Motion for
              seamless UI/UX. I have hands-on experience with authentication,
              API integration, backend optimization, and testing with Postman.
              {showText?"Constantly exploring new technologies, I strive to create efficient, responsive, and engaging digital experiences while enhancing my problem-solving and development skills.":""}
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
        className='absolute h-[15vh] lg:h-[10vw] bottom-16 lg:bottom-0 -right-10'
        src={star}
        alt='star'
      />
    </div>
  )
}

export default About
