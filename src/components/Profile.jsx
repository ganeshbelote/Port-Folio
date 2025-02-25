import React from 'react'
import bulb from "../assets/bulb.svg"
import profilePic from "../assets/profile.jpg"


const Profile = ({profilePos}) => {
  return (
    <div className='outer z-20 absolute h-[65vh] w-[25vw] pointer-events-none'
    style={{
        right:profilePos,
    }}
    >
      <div className="before:content-[''] before:absolute before:h-full before:w-full before:bg-gray-600 before:translate-x-[11px] before:translate-y-[11px] before:-z-10 before:rounded-[4px] before:blur-[7px]"></div>
      <div className='front absolute h-full w-full bg-zinc-100 overflow-hidden '></div>
      <div className='left absolute left-0 -translate-y-[1.5%] h-[103%] w-[1.5px] bg-black'></div>
      <div className='right absolute right-0 -translate-y-[1.5%] h-[103%] w-[1.5px] bg-black'></div>
      <div className='up absolute top-0 -translate-x-[1.2%] w-[102.4%] h-[1.5px] bg-black'></div>
      <div className='down absolute bottom-0 -translate-x-[1.2%] w-[102.4%] h-[1.5px] bg-black'></div>
    <div className='inner absolute h-full w-full z-20 flex items-center justify-center'>
        <div className="img h-[80%] w-[80%] rounded-sm border-2">
            <img className=' h-full object-cover object-center' src={profilePic} alt="profile" />
        </div>
        <img className='h-16 absolute left-3 top-7' src={bulb} alt="bulb" />
    </div>
    </div>
  )
}

export default Profile
