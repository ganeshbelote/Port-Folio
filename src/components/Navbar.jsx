import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [hidden, setHidden] = useState(false)
  let lastScrollY = 0

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      lastScrollY = window.scrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`navbar fixed z-50 bg-[#E3E6D6] h-20 w-[70vw] rounded-xl border-2 flex items-center justify-between transition-all duration-300 ${
        hidden ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      }`}
      style={{
        padding: '20px',
        boxShadow: '5px 5px black'
      }}
    >
      <Link to='Home' smooth={true} duration={500}>
        <div
          className='text-xl font-semibold bg-[#FEFFF0] border-2 rounded-l-lg hover:scale-105 cursor-pointer'
          style={{
            padding: '8px 12px'
          }}
        >
          Home
        </div>
      </Link>
      <Link to='Skills' smooth={true} duration={500}>
        <div
          className='text-xl font-semibold bg-[#FEFFF0] border-2 hover:scale-105 cursor-pointer'
          style={{
            padding: '8px 12px'
          }}
        >
          Tech Stack
        </div>
      </Link>

      <Link to='MyWork' smooth={true} duration={500}>
        <div
          className='text-xl font-semibold bg-[#FEFFF0] border-2 hover:scale-105 cursor-pointer'
          style={{
            padding: '8px 12px'
          }}
        >
          My Work
        </div>
      </Link>

      <Link to='About' smooth={true} duration={500}>
        <div
          className='text-xl font-semibold bg-[#FEFFF0] border-2 hover:scale-105 cursor-pointer'
          style={{
            padding: '8px 12px'
          }}
        >
          About
        </div>
      </Link>

      <Link to='Contact' smooth={true} duration={500}>
        <div
          className='text-xl font-semibold bg-[#FEFFF0] border-2 rounded-r-lg hover:scale-105 cursor-pointer'
          style={{
            padding: '8px 12px'
          }}
        >
          Contact
        </div>
      </Link>
    </div>
  )
}

export default Navbar
