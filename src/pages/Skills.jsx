import React, { useState } from 'react'
import Title from '../components/Title'
import star from '../assets/star.svg'
import honey from '../assets/Honeycomb.png'
import node from '../assets/node.png'
import react from '../assets/React.png'
import redux from '../assets/redux.svg'
import mongo from '../assets/mongodb.png'
import postman from '../assets/postman.png'
import tailwind from '../assets/tailwindlogo.png'

import popup from '../assets/Popupmsg.png'

const Skills = () => {

  const [reactHover, setReactHover] = useState(false)
  const [nodeHover, setNodeHover] = useState(false)
  const [mongoHover, setMongoHover] = useState(false)
  const [postmanHover, setPostmanHover] = useState(false)
  const [cssHover, setCssHover] = useState(false)
  const [reduxHover, setReduxHover] = useState(false)

  return (
    <div
    id='Skills'
      className='skill w-screen flex flex-col items-center justify-center relative rounded-[45px]'
      style={{ paddingTop: '3vh', borderTop:"2px solid black" }}
    >
      <img
        className='absolute h-48 z-10 top-20 -left-12'
        src={star}
        alt='star'
      />
      <img
        className='absolute h-48 z-30 bottom-5 right-20'
        src={star}
        alt='star'
      />
      <div
        className='h-[28vh] w-full flex items-center justify-center rounded-t-4xl relative'
        style={{ paddingBottom: '3vh' }}
      >
        <Title title={'Skills'} />
        <div className='absolute bottom-0 w-[60%] h-[2px] bg-black flex items-center justify-between'>
          <div className='leftCircle h-1.5 w-1.5 rounded-full bg-black'></div>
          <div className='rightCircle h-1.5 w-1.5 rounded-full bg-black'></div>
        </div>
      </div>
      <div className='h-[90vh] w-full flex items-center justify-center'>
        <div
          className='h-[90%] w-[60%] relative'
          style={{
            backgroundImage: `url(${honey})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        >
          <div className='react absolute top-30 left-25 flex'
          onMouseEnter={()=>setReactHover(prev => !prev)}
          onMouseLeave={()=>setReactHover(prev => !prev)}
          >
            <a href='https://react.dev/'>
              <img
                className='h-30 hover:scale-105 cursor-pointer'
                src={react}
                alt='Reactlogo'
              />
            </a>
            <div
             className={`text h-12 font-bold flex items-center justify-center ${reactHover ? 'opacity-[100%]' : 'opacity-0'} bg-[#ffffff60]`}
              style={{
                backgroundImage: `url(${popup})`,
                padding: '0 15px',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            >
              React JS
            </div>
          </div>
          <div className='css absolute top-52 left-[159px] flex'
          onMouseEnter={()=>setCssHover(prev => !prev)}
          onMouseLeave={()=>setCssHover(prev => !prev)}
          >
            <a href='https://tailwindcss.com/'>
              <img
                className='h-27 hover:scale-105 cursor-pointer'
                src={tailwind}
                alt='tailwindlogo'
              />
            </a>
            <div
             className={`text h-14 font-bold flex items-center justify-center ${cssHover ? 'opacity-[100%]' : 'opacity-0'} bg-[#ffffff60]`}
              style={{
                backgroundImage: `url(${popup})`,
                padding: '0 25px',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            >
              Tailwind CSS
            </div>
          </div>
          <div className='redux absolute top-76 left-29.5 flex'
          onMouseEnter={()=>setReduxHover(prev => !prev)}
          onMouseLeave={()=>setReduxHover(prev => !prev)}
          >
            <a href='https://redux-toolkit.js.org/'>
              <img
                className='h-18 hover:scale-105 cursor-pointer'
                src={redux}
                alt='Reactlogo'
              />
            </a>
            <div
             className={`text h-12 font-bold flex items-center justify-center ${reduxHover ? 'opacity-[100%]' : 'opacity-0'} bg-[#ffffff60]`}
              style={{
                backgroundImage: `url(${popup})`,
                padding: '0 20px',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            >
              Redux
            </div>
          </div>
          <div className='node absolute top-12 -right-[46px] flex gap-1'
          onMouseEnter={()=>setNodeHover(prev => !prev)}
          onMouseLeave={()=>setNodeHover(prev => !prev)}
          >
            <a href='https://nodejs.org/en'>
              <img
                className='h-[90px] hover:scale-105 cursor-pointer'
                src={node}
                alt='Nodelogo'
              />
            </a>
            <div
             className={`text h-12 font-bold flex items-center justify-center ${nodeHover ? 'opacity-[100%]' : 'opacity-0'} bg-[#ffffff60]`}
              style={{
                backgroundImage: `url(${popup})`,
                padding: '0 15px',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            >
              Node JS
            </div>
          </div>
          <div className='mongo absolute top-29 -right-[50px] flex gap-1 z-10'
          onMouseEnter={()=>setMongoHover(prev => !prev)}
          onMouseLeave={()=>setMongoHover(prev => !prev)}
          >
            <a href='https://www.mongodb.com/'>
              <img
                className='h-[120px] hover:scale-105 cursor-pointer'
                src={mongo}
                alt='Mongologo'
              />
            </a>
            <div
             className={`text h-12 font-bold flex items-center justify-center ${mongoHover ? 'opacity-[100%]' : 'opacity-0'} bg-[#ffffff0d]`}
              style={{
                backgroundImage: `url(${popup})`,
                padding: '0 25px',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            >
              Mongo DB
            </div>
          </div>
          <div className='Postman absolute top-51 -right-[80px] flex '
          onMouseEnter={()=>setPostmanHover(prev => !prev)}
          onMouseLeave={()=>setPostmanHover(prev => !prev)}
          >
            <a href='https://www.postman.com/'>
              <img
                className='h-[108px] hover:scale-105 cursor-pointer'
                src={postman}
                alt='Postman'
              />
            </a>
            <div
             className={`text h-12 font-bold flex items-center justify-center ${postmanHover ? 'opacity-[100%]' : 'opacity-0'} bg-[#ffffff0d]`}
              style={{
                backgroundImage: `url(${popup})`,
                padding: '0 15px',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            >
              Postman
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Skills
