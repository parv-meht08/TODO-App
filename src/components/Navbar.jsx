import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-violet-700 text-white py-2'>
      <div className="logo">
        <span className='font-bold text-xl mx-3'>iTodo</span>
      </div>
      <ul className=" flex gap-8 mx-9">
        <li className='cursor-pointer transition-all'><a href="https://github.com/parv-mehta10"><FaGithub className=' w-6 h-6' />   </a></li>
        <li className='cursor-pointer transition-all'><a href="https://www.linkedin.com/in/parv-mehta-134889275/"></a><FaLinkedin className=' w-6 h-6' />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
