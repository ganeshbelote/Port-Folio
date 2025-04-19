import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'
import menuBtn from '../assets/menu.svg'
import cross from '../assets/cross.svg'

const Navbar = () => {
  const [hidden, setHidden] = useState(false)
  const [padHeight, setPadHeight] = useState(0)
  const [rotate, setRotate] = useState(false)
  const [menu, setMenu] = useState(false)
  const [showBorder, setShowBorder] = useState(false)
  const navRef = useRef(null)
  let lastScrollY = 0

  useEffect(() => {
    if (navRef.current) {
      setPadHeight((navRef.current.offsetHeight * 12.5) / 100)
    }
    if (navRef.current.offsetWidth === 0) {
      setShowBorder(true)
    }
  }, [])

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

  const handleRotate = () => {
    setRotate(true)
    setMenu(false)
    setTimeout(() => setRotate(false), 2000)
  }

  return (
    <div
      className={`wrapper bg-[#11111189] w-screen h-[10.5vh] flex items-center justify-center relative ${
        showBorder ? 'border-b-2  border-black' : ''
      }`}
    >
      <div
        ref={navRef}
        className={`navbar z-50 h-[inherit] w-[70%] rounded-md fixed bg-[#E3E6D6] border-2 border-black flex items-center justify-evenly transition-all duration-300 ${
          hidden ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        }`}
        style={{ marginTop: '1.5vh', boxShadow: '5px 5px black' }}
      >
        <Link to='Home' smooth={true} duration={500}>
          <div
            className='text-xl font-semibold bg-[#FEFFF0] border-2 rounded-l-lg hover:scale-105 cursor-pointer'
            style={{
              padding: `${padHeight - 3}px 1vw`
            }}
          >
            Home
          </div>
        </Link>

        <Link to='Skills' smooth={true} duration={500}>
          <div
            className='text-xl font-semibold bg-[#FEFFF0] border-2 hover:scale-105 cursor-pointer'
            style={{
              padding: `${padHeight - 3}px 1vw`
            }}
          >
            Skills
          </div>
        </Link>

        <Link to='MyWork' smooth={true} duration={500}>
          <div
            className='text-xl font-semibold bg-[#FEFFF0] border-2 hover:scale-105 cursor-pointer'
            style={{
              padding: `${padHeight - 3}px 1vw`
            }}
          >
            My Work
          </div>
        </Link>

        <Link to='About' smooth={true} duration={500}>
          <div
            className='text-xl font-semibold bg-[#FEFFF0] border-2 hover:scale-105 cursor-pointer'
            style={{
              padding: `${padHeight - 3}px 1vw`
            }}
          >
            About
          </div>
        </Link>

        <Link to='Contact' smooth={true} duration={500}>
          <div
            className='text-xl font-semibold bg-[#FEFFF0] border-2 rounded-r-lg hover:scale-105 cursor-pointer'
            style={{
              padding: `${padHeight - 3}px 1vw`
            }}
          >
            Contact
          </div>
        </Link>
      </div>
      <div
        className='navBtn z-50 h-full w-full hidden items-start justify-center relative'
        style={{ paddingRight: '28px' }}
      >
        <button
          className='absolute right-6 top-1/2 -translate-y-1/2 h-7 w-7'
          onClick={() => setMenu(true)}
        >
          <img src={menuBtn} />
        </button>
        <div className={`absolute left-0 w-screen ${
              menu
                ? 'top-[0%] transition-all duration-700 ease-in-out'
                : '-top-[750%] transition-all duration-700 ease-in-out'
            }`}>
          <div
            className={`container border-2 border-black shadow-2xl rounded-b-3xl text-xl font-semibold absolute w-full flex flex-col items-center justify-start bg-[#E3E6D6]`}
            style={{
              width: '100%',
              padding: '20px 0'
            }}
          >
            <div
              className='cross absolute right-6 top-5 h-7 w-7 rounded-full flex items-center justify-center bg-red-500'
              onClick={handleRotate}
            >
              <img
                className={`h-5 w-5 ${
                  rotate ? 'rotate-45 transition-all duration-300 ease' : ''
                }`}
                src={cross}
              />
            </div>
            <div
              className="home w-full text-center before:content-[''] before:absolute before:translate-y-[28px] before:h-[2px] before:bg-black before:w-15 before:trans hover:underline"
              style={{ marginTop: '28px' }}
            >
              <Link
                to='Home'
                smooth={true}
                duration={500}
                onClick={() => setMenu(false)}
              >
                Home
              </Link>
            </div>
            <div
              className="skills w-full text-center before:content-[''] before:absolute before:translate-y-[28px] before:h-[2px] before:bg-black before:w-13 before:trans hover:underline"
              style={{ marginTop: '28px' }}
            >
              <Link
                to='Skills'
                smooth={true}
                duration={500}
                onClick={() => setMenu(false)}
              >
                Skills
              </Link>
            </div>
            <div
              className="work w-full text-center before:content-[''] before:absolute before:translate-y-[28px] before:h-[2px] before:bg-black before:w-23 before:trans hover:underline"
              style={{ marginTop: '28px' }}
            >
              <Link
                to='MyWork'
                smooth={true}
                duration={500}
                onClick={() => setMenu(false)}
              >
                My Work
              </Link>
            </div>
            <div
              className="about w-full text-center before:content-[''] before:absolute before:translate-y-[28px] before:h-[2px] before:bg-black before:w-16 before:trans hover:underline"
              style={{ marginTop: '28px' }}
            >
              <Link
                to='About'
                smooth={true}
                duration={500}
                onClick={() => setMenu(false)}
              >
                About
              </Link>
            </div>
            <div
              className="contact w-full text-center before:content-[''] before:absolute before:translate-y-[28px] before:h-[2px] before:bg-black before:w-20 before:trans hover:underline"
              style={{ margin: '28px 0' }}
            >
              <Link
                to='Contact'
                smooth={true}
                duration={500}
                onClick={() => setMenu(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
