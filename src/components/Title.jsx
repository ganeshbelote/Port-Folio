import React from 'react'
import son from '../assets/son.svg'

const Title = ({title}) => {
  return (
    <div className='h-[20vh] w-[30vw] flex flex-col items-center justify-center gap-7 relative'>
        <div className="circle h-8 w-8 bg-zinc-950 rounded-full shadow-lg shadow-black"></div>
        <div className="absolute right-0 top-10 rotate-16 -translate-x-12 h-[2px] w-[38%] bg-black z-20"></div>
        <div className="absolute left-0 top-12 -rotate-22 translate-x-10 h-[2px] w-[40%] bg-black z-20"></div>
        <div className="title h-[60%] w-[80%] rounded-2xl bg-gray-400 -rotate-2 border-black border-[1px] shadow-lg shadow-black z-30 flex items-center justify-center">
            <h2 className='text-4xl text-black font-bold [text-shadow:-0.5px_-0.5px_0_white,0.5px_-0.5px_0_white,-0.5px_0.5px_0_white,0.5px_0.5px_0_white]'>{title}</h2>
        </div>
        <div className="absolute h-[30%] top-5 -right-30 z-30"><img src={son} alt="son" /></div>
    </div>
  )
}

export default Title