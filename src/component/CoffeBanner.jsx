import React from 'react'
import img1 from "../asset/img/cofee-baner.jpg"
export default function CoffeBanner() {
  return (
    <div className='relative w-full h-[300px] sm:h-[600px] lg:h-[400px]
    text-white flex justify-center items-center'
     alt="بنر قهوه"
     style={{backgroundImage: `url(${img1})`}}>
      
      <div className='absolute left-20 top-1/2 text-center transform -translate-y-1/2 sm:w-[70%] md:[50%]
      lg:w-[40%] p-4 sm:text-right'>
        <h4 className='text-xl sm:text-4xl text-white font-bold mb-4'>صبح را شگفت انگیز شروع کنید</h4>
        <p className='text-sm sm:text-3xl text-gray-200 mb-6'>با هر جرعه طعم زندگی را بچشید قهوه ایی با عطر بی نظیر
         و انرژی بخش از اولین لحظه تا آخرین قطره  روزتان را با ما خاص کنید</p>
          <button className='mx-2 bg-cream px-4 rounded-3xl text-gray-950 text-4xl h-24 shadow-lg shadow-cream'>
          ثبت سفارش
        </button>
      </div>
    </div>
  )
}
