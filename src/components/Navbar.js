import React, { useState } from 'react'
import {RxCross2, RxTokens} from 'react-icons/rx'

<RxTokens.Provider value={{ color: "blue", className: "global-class-name" }}>

</RxTokens.Provider>;

function Navbar() {
    const [nav,setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='flex justify-between items-center mx-auto px-4 pt-2 max-w-[1240px] text-brown'>  {/*Desktop Menu*/}
      <img src='../logo.png' alt='logo' className='max-w-[90px]'></img>
      <ul className='hidden md:flex text-white font-medium'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Projects</li>
        <li className='p-4'>Contact</li>
        <li className='p-4'>About</li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">    {/*Mobile Menu*/}
        {!nav ? <RxCross2 size={35} color="#FCD34D"/> : < RxTokens size={35} color="#FCD34D"/>}
      </div>
      <div className= {!nav? 'w-[100%] h-[38%] fixed right-0 top-0 border- bg-[#415a77] ease-in-out duration-500 ' : 'fixed right-[-100%] '}>
        <div onClick={handleNav} className="block md:hidden p-6">   {/*Mobile Menu*/}
        {!nav ? <RxCross2 size={35} color="#FCD34D"/> : < RxTokens size={35} color="#FCD34D"/>}
      </div>
        <ul className='p-4 uppercase font-medium text-white'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Projects</li>
            <li className='p-4'>Contact</li>
            <li className='p-4'>About</li> 
        </ul>
      </div>
    </div>
  );
};



export default Navbar
