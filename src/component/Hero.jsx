import React from 'react'
import ImageHero from "../asset/img/cofee.jpg"
export default function Hero() {
  return (
    <div  style={{backgroundImage:`url(${ImageHero})`}}
   className="w-full h-[130vh] bg-cover bg-no-repeat relative flex justify-center items-center"> 
    <div className='absolute backdrop-blur-sm top-2 right-28 lg:top-40 lg:backdrop-blur-0 '>
      <div>
         <h2 className='text-cream text-4xl my-10 text-5xl'>کافه گوشه</h2>
      </div>
      <div>
         <p className='text-4xl text-gray-200 my-10 '>فراتر از یک کافه جایی برای استراحت ارامش و تجربه های جدید
                   <br />
                   به کافه ما خوش امدید
         </p>
      </div>
      <div>
        <button className='mx-2 bg-cream px-4 rounded-3xl text-gray-950 text-4xl h-24 shadow-lg shadow-cream'>
          ثبت سفارش
        </button>
      </div>
    </div>
    </div>
  )
}
