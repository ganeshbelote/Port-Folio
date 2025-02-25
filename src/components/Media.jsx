import React from 'react'

const Media = () => {
  return (
    <div
      className='social-icons self-start h-[12%] w-[20%] z-40 flex items-center justify-start gap-15 absolute top-[65%] right-[59%]'
      style={{ marginTop: '4%' }}
    >
      <a className='hover:scale-101' href='https://www.linkedin.com/in/ganesh-belote-47a291277'>
        <i className='fa-brands fa-linkedin fa-2x hover:scale-105 hover:text-blue-700'></i>
      </a>
      <a href='#'>
        <i className='fa-solid fa-envelope fa-2x hover:scale-105 hover:text-red-700'></i>
      </a>
      <a href='https://www.instagram.com/dig_ganesh_0187/?hl=en'>
        <i className='fa-brands fa-square-instagram fa-2x hover:scale-105 hover:text-[#e4405f]'></i>
      </a>
      <a href='https://github.com/ganeshbelote'>
        <i className='fa-brands fa-github fa-2x hover:scale-105'></i>
      </a>
    </div>
  )
}

export default Media
