import React from 'react'
import Logo from '../assets/logo.png'


const Header = () => {
  return (
    <div className='fixed top-0 left-0 z-50 w-full flex justify-around py-2 bg-white/70 '>
      <div>
        <img src={Logo} className='h-[60px] hover:cursor-pointer'/>
      </div>
      <div className='flex justify-between items-center w-[600px] font-semibold'>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" className="fill-current hover:text-[#FB2056] w-8">
            <path d="M 12 2 A 1 1 0 0 0 11.289062 2.296875 L 1.203125 11.097656 A 0.5 0.5 0 0 0 1 11.5 A 0.5 0.5 0 0 0 1.5 12 L 4 12 L 4 20 C 4 20.552 4.448 21 5 21 L 9 21 C 9.552 21 10 20.552 10 20 L 10 14 L 14 14 L 14 20 C 14 20.552 14.448 21 15 21 L 19 21 C 19.552 21 20 20.552 20 20 L 20 12 L 22.5 12 A 0.5 0.5 0 0 0 23 11.5 A 0.5 0.5 0 0 0 22.796875 11.097656 L 12.716797 2.3027344 A 1 1 0 0 0 12.710938 2.296875 A 1 1 0 0 0 12 2 z"/>
          </svg>
        </a>
        <a href="#" className='hover:text-[#FB2056]'>About Us</a>
        <a href="#" className='hover:text-[#FB2056]'>Academics</a>
        <a href="#" className='hover:text-[#FB2056]'>Announcements</a>
        <a href="#" className='hover:text-[#FB2056]'>Gallery</a>
        <button className='rounded-full bg-[#FB2056] px-5 py-2 text-white hover:bg-[hsl(345,96%,45%)]'>Contact Us</button>
      </div>
    </div>
  )
}

export default Header