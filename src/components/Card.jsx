import React from 'react'

const Card = ({children}) => {
  return (
    <div
      className='z-10 relative hover:scale-101 cursor-pointer'
      style={{
        height: '50vh',
        width: '23vw'
      }}
    >
      <div className="before:content-[''] before:absolute before:h-full before:w-full before:bg-gray-600 before:translate-x-[11px] before:translate-y-[11px] before:-z-10 before:rounded-[4px] before:blur-[7px]"></div>
      <div className='front absolute h-full w-full bg-zinc-300 overflow-hidden '>
        {children}
      </div>
      <div className='left absolute left-0 -translate-y-[1.5%] h-[103%] w-[1.5px] bg-black'></div>
      <div className='right absolute right-0 -translate-y-[1.5%] h-[103%] w-[1.5px] bg-black'></div>
      <div className='up absolute top-0 -translate-x-[1.2%] w-[102.4%] h-[1.5px] bg-black'></div>
      <div className='down absolute bottom-0 -translate-x-[1.2%] w-[102.4%] h-[1.5px] bg-black'></div>
    </div>
  )
}

export default Card