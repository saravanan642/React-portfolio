import React, { useState } from 'react'
import background from "../Assests/letter-s.png"
import { TiThMenu } from "react-icons/ti";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>

      <div className=' flex   text-white gap-11 justify-around py-3  border-b  font-serif'>
        <div className=' flex gap-4 ml-auto border border-none pl-[14%]'>
          <img src={background} alt='background' className=' w-[10%] rounded-full' ></img>
          <h1 className=' text-3xl mt-2 '>Saravanan</h1>
        </div>

        <div className=" flex  flex-col md:flex-row  gap-5 md:gap-16  mt-3  lg:mt-4  lg:pr-[7%] hidden md:flex">

          <a href="/" className="relative hover:text-cyan-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full">
            HOME
          </a>

          <a href="/" className="relative hover:text-cyan-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full">
            ABOUT
          </a>

          <a href="/" className="relative hover:text-cyan-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full">
            PROJECTS
          </a>

          <a href="/" className="relative hover:text-cyan-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full">
            SKILLS
          </a>

          <a href="/" className="relative p-1 rounded-full bg-blue-600 hover:bg-blue-900 lg:border lg:pl-[14px] lg:w-24 lg:bottom-2 lg:mt-1">
            Contents
          </a>

        </div>

        <div className=' text-5xl mr-9 md:hidden' onClick={()=>setOpen(!open)}>
          <TiThMenu  />
        </div>
      </div>

      <div>{open && (
  <div className="flex flex-col gap-6 mt-4 text-center text-white px-6 md:hidden">
    <a href="/">HOME</a>
    <a href="/">ABOUT</a>
    <a href="/">PROJECTS</a>
    <a href="/">SKILLS</a>
    <a href="/" className="bg-blue-600 p-2 rounded-md w-fit ">
      Contents
    </a>
  </div>
)}
</div>
    </div>

  )
}

export default Header
