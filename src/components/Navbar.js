import React, { useState } from 'react'
import {RxCross2, RxTokens} from 'react-icons/rx'

function Navbar() {
    const [nav,setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='flex justify-between items-center mx-auto px-4 pt-2 max-w-[1240px] text-brown'> {/*Desktop Menu*/}
      <img src='../logo.png' alt='logo' className='max-w-[90px]'></img>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Projects</li>
        <li className='p-4'>Contact</li>
        <li className='p-4'>About</li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">   {/*Mobile Menu*/}
        {!nav ? <RxCross2 size={35}/> : < RxTokens size={35}/>}
      </div>
      <div className= {!nav? 'w-[50%] h-full fixed right-0 top-0 border-r border-teal-700 bg-[#bbd5db] ease-in-out duration-500' : 'fixed right-[-100%]'}>
        <div onClick={handleNav} className="block md:hidden p-6">   {/*Mobile Menu*/}
        {!nav ? <RxCross2 size={35}/> : < RxTokens size={35}/>}
      </div>
        <ul className='p-4 uppercase'>
            <li className='p-4 border-b border-teal-800'>Home</li>
              <li className='p-4 border-b border-teal-800'>Projects</li>
            <li className='p-4 border-b border-teal-800'>Contact</li>
            <li className='p-4'>About</li> 
        </ul>
      </div>
    </div>
  );
};

export default Navbar
