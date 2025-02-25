import React, { useEffect, useState } from 'react'
import Page from '../components/Page.jsx'
import star from '../assets/star.svg'
import Profile from '../components/Profile'
import smile from '../assets/smile.svg'
import arrow from '../assets/arrow.svg'
import Navbar from '../components/Navbar'
import Media from '../components/Media.jsx'

const Hero = () => {
  const [speciality, setSpeciality] = useState('HTML, CSS, JavaScript')

  const specialitySet = [
    'Tailwind CSS',
    'React JS',
    'Redux Toolkit',
    'Node JS',
    'Express JS',
    'Mongo DB',
    'Postman'
  ]

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
    <div id='Home' style={{ padding: '10px 0 3vh' }}>
      <div className='w-full h-22 flex justify-center'>
        <Navbar />
      </div>
      <div className='main h-[90vh] w-[100vw] flex items-center justify-center'>
        <Page measures={measures} />
        <img
          className='absolute h-48 z-10 top-5 -left-24'
          src={star}
          alt='star'
        />
        <img
          className='absolute h-48 z-30 bottom-5 right-36'
          src={star}
          alt='star'
        />
        <img
          className='absolute h-12 z-10 top-28 right-[45vw]'
          src={smile}
          alt='smile'
        />
        <img
          className='absolute h-20 z-40 top-30 right-[39vw]'
          src={arrow}
          alt='arrow'
        />
        <Profile profilePos={profilePos} />
        <div className='left h-[70%] w-[37%] absolute left-[20vw] z-20 pointer-events-none flex flex-col gap-6 items-center justify-center'>
          <h2
            className='w-full text-blue-700 text-[65px] font-bold [text-shadow:-1px_-1px_0_white,1px_-1px_0_white,-1px_1px_0_white,1px_1px_0_white]'
            style={{
              lineHeight: '1',
            }}
          >
            <span className='flex flex-col text-black'>Hi,</span> Myself Ganesh
          </h2>
          <p
            className='w-[90%] text-zinc-700 leading-7 text-2xl font-semibold'
            style={{ marginRight: '10%', marginBottom: '18%' }}
          >
            a passionate Web Developer with speciality in
            <span className='text-red-600 transition-all'> {speciality}.</span>
          </p>
        </div>
      </div>
      <div>
        <Media />
      </div>
    </div>
  )
}

export default Hero
