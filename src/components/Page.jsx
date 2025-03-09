import React, { useRef, useState } from 'react'

const Page = ({ measures }) => {
  //Parent Reference for efficient positioning
  const ref = useRef()
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

  return (
    <div
      className='z-10 relative '
      style={{
        height: measures.height,
        width: measures.width
      }}
    >
      {measures.circles?<div className='above h-full w-full flex items-center justify-center overflow-hidden relative'>
        <div
          className='z-10'
          style={{
            height: `calc(${measures.height} * 70/100)`,
            width: `calc(${measures.width} * 70/100)`,
          }}
          onMouseMove={handleMouseMove}
          ref={ref}
        >
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
        </div>
      </div>:""}
    </div>
  )
}

export default Page
