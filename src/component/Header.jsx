import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";


export default function Header() {
  const [isMenuOpen,setIsMenuOpen]=useState(false)
  // این فانکشن باید بنویسیم که فالس یا ترو یا درست بود  نمایش بده منو رو همبرگری 
 const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
}; 
  return (
     <header className='absolute top-0 left-0 w-full text-white z-10'>
       <nav className='px-10 py-5'>
         <div className='flex justify-between items-center'>
            <div className='hidden lg:flex'>
              <h1 className='text-5xl'>کافه گوشه</h1>
            </div>
            <div className='lg:hidden'>
                <button onClick={toggleMenu} className='lg:hidden '>
                    <IoMenu className='w-6 h-6'/>
                </button>
            </div>
            <div className='hidden lg:flex gap-10'>
              <ul className='flex gap-10'>
                <li className='text-5xl'>خانه</li>
                <li className='text-5xl'>منو</li>
                <li className='text-5xl'>درباره ما</li>
                <li className='text-5xl'>ارتباط با ما</li>
              </ul>
            </div>
            <div className='flex'>
              <button className='mx-2 hidden bg-cream px-4 py-2 rounded-3xl text-gray-950 lg:block text-5xl'>ثبتنام</button>
              <button className='hidden mx-2 lg:block text-5xl'>ورود</button>
            </div>
         </div>
       </nav>
       {/* بخش طراحی منو همبرگری موبایل*/}
       <div className={`w-[300px] fixed top-0 right-0 h-screen bg-gray-300 text-gray-950 p-4 transform transition-transform duration-300
       ease-in-out ${
       isMenuOpen ? "translate-x-0" : "translate-x-full"
       }`}>

       </div>
       <div>
        
       </div>
     </header>
  )
}
