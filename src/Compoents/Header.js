import React from 'react'
import background from "../Assests/letter-s.png"
const Header = () => {
  return (
    <div>

      <div className=' flex   text-white gap-11 justify-around py-3  border-b '>
        <div className=' flex gap-4 ml-auto border border-none pl-[14%]'>
          <img src={background} alt='background' className=' w-[10%] rounded-full' ></img>
          <h1 className=' text-3xl mt-2 '>Saravanan</h1>
        </div>

        <div className=' mt-4 pr-[7%]    
        lg:flex gap-20
        
        ' >
          <a href=''>HOME</a>
          <a href=''>ABOUT</a>
          <a href=''>PROJECTS</a>
          <a href=''> SKILLS</a>
          <a href='' className='  
          lg:border border-solid
          lg:pl-3 p-1
          lg:w-24 rounded-full 
          lg:relative bottom-2 
          lg:mt-1
          lg: bg-blue-600 '>Contents</a>
        </div>


      </div>
    </div>

  )
}

export default Header
