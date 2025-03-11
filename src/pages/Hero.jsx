import React, { useEffect, useRef, useState } from 'react'
import star from '../assets/star.svg'
import Profile from '../assets/profile.svg'
import './Hero.css'

const Hero = () => {
  const [speciality, setSpeciality] = useState('HTML')
  const [pad,setPad] = useState('50px')
  //Parent Reference for efficient positioning
  const ref = useRef()
  const logoRef = useRef([])
  //State to store and update position
  const [position, setPosition] = useState({
    x: 525,
    y: 250
  })

  const handleMouseMove = e => {
    setPosition({
      x: e.clientX - ref.current.offsetLeft,
      y: e.clientY - ref.current.offsetTop
    })
  }

  const specialitySet = [
    'CSS',
    'JavaScript',
    'Tailwind',
    'React JS',
    'Redux',
    'Node JS',
    'Express JS',
    'Mongo DB',
    'Postman'
  ]

  useEffect(()=>{
    if (ref.current) {
      if (ref.current.offsetWidth < 1026) {
        setPad('0')
        if (ref.current.offsetWidth < 771) {
          [...document.querySelectorAll('i')].map((el)=>el.classList.replace("fa-2x","fa-xl"))
          setPad("0 0 0 15px")
          if (ref.current.offsetWidth < 430) {
            setPad('35px')
            if (ref.current.offsetWidth < 376) {
            setPad('0 0 0 15px')
            }
          }
        }
      }
    }
  },[])

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setSpeciality(specialitySet[index])
      index = (index + 1) % specialitySet.length
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const measures = {
    height: '80vh',
    width: '70vw',
    circles: true
  }

  const profilePos = '20vw'

  return (
    <div
      id='Home'
      className='h-screen w-screen overflow-hidden'
      ref={ref}
      onMouseMove={handleMouseMove}
    >
      <div className='container h-full w-full z-10 relative flex justify-center items-center'>
        <div
          className='circle1 bg-zinc-700 absolute h-10 w-10 rounded-full border-2 transition-all duration-1000 ease-out pointer-events-none'
          style={{
            top: `${position.y}px`,
            left: `${position.x}px`,
            transform: 'translate(-50%,-50%)'
          }}
        ></div>
        <div
          className='circle2 bg-zinc-600 absolute h-14 w-14 rounded-full border-2 transition-all duration-2000 ease-out pointer-events-none'
          style={{
            top: `${position.y}px`,
            left: `${position.x}px`,
            transform: 'translate(-120%,-120%)'
          }}
        ></div>
        <div
          className='circle3 bg-zinc-500 absolute h-20 w-20 rounded-full border-2 transition-all duration-3000 ease-out pointer-events-none'
          style={{
            top: `${position.y}px`,
            left: `${position.x}px`,
            transform: 'translate(-50%, 35%)'
          }}
        ></div>
        <div
          className='circle4 bg-zinc-400 absolute h-32 w-32 rounded-full border-2 transition-all duration-4000 ease-out pointer-events-none'
          style={{
            top: `${position.y}px`,
            left: `${position.x}px`,
            transform: 'translate(10%, -90%)'
          }}
        ></div>
        <div
          className='circle1 bg-zinc-700 absolute h-36 w-36 rounded-full border-2 transition-all duration-1500 ease-out pointer-events-none'
          style={{
            top: `${position.y}px`,
            left: `${position.x}px`,
            transform: 'translate(100%, -40%)'
          }}
        ></div>
        <div
          className='circle2 bg-zinc-600 absolute h-8 w-8 rounded-full border-2 transition-all duration-2500 ease-out pointer-events-none'
          style={{
            top: `${position.y}px`,
            left: `${position.x}px`,
            transform: 'translate(-210%, 0%)'
          }}
        ></div>
        <div
          className='circle3 bg-zinc-500 absolute h-22 w-22 rounded-full border-2 transition-all duration-3500 ease-out pointer-events-none'
          style={{
            top: `${position.y}px`,
            left: `${position.x}px`,
            transform: 'translate(60%, 27%)'
          }}
        ></div>
        <div
          className='circle4 bg-zinc-400 absolute h-12 w-12 rounded-full border-2 transition-all duration-4500 ease-out pointer-events-none'
          style={{
            top: `${position.y}px`,
            left: `${position.x}px`,
            transform: 'translate(-90%, -275%)'
          }}
        ></div>
        <img className='absolute left-0 top-0' src={star} alt="star" />
        <img className='absolute right-0 bottom-0' src={star} alt="star" />
        <div className='profile-container z-5 h-full w-full bg-[#11111189] flex items-center justify-center'>
          <div
            className='text h-[90%] w-[40%] flex flex-col items-center justify-center gap-10'
            style={{ padding: pad }}
          >
            <h2
              className='w-full text-blue-700 text-[65px] font-bold [text-shadow:-1px_-1px_0_white,1px_-1px_0_white,-1px_1px_0_white,1px_1px_0_white]'
              style={{
                lineHeight: '1'
              }}
            >
              <span className='flex flex-col text-black'>Hi,</span> Myself
              Ganesh
            </h2>
            <p
              className='w-[90%] text-zinc-800 leading-7 text-3xl font-semibold'
              style={{ marginRight: '10%', lineHeight: '1.19' }}
            >
              a passionate Web Developer with speciality in
              <span className='text-red-600 transition-all'>
                {' '}
                {speciality}.
              </span>
            </p>
            <div
              className='social-icons self-start h-[12%] z-40 flex items-center justify-start gap-15'
            >
              <a
                className='hover:scale-101'
                href='https://www.linkedin.com/in/ganesh-belote-47a291277'
              >
                <i className='fa-brands fa-linkedin fa-2x hover:scale-105 hover:text-blue-700'></i>
              </a>
              <a href='mailto:ganeshbelote18@gmail.com?subject=Hello&body=Write your message here...'>
                <i className='fa-solid fa-envelope fa-2x hover:scale-105 hover:text-red-700'></i>
              </a>
              <a href='https://www.instagram.com/dig_ganesh_0187/?hl=en'>
                <i className='fa-brands fa-square-instagram fa-2x hover:scale-105 hover:text-[#e4405f]'></i>
              </a>
              <a href='https://github.com/ganeshbelote'>
                <i className='fa-brands fa-github fa-2x hover:scale-105 hover:text-[#ffffff]'></i>
              </a>
            </div>
          </div>
          <div className='profile h-[90%] w-[40%] flex items-center justify-center'>
            <img src={Profile} alt='Profile image' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
