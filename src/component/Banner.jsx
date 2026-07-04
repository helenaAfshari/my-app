
import React from 'react'
import ImageBaner from "../asset/img/banner-cofee.jpg"
import cofeeBlast from "../asset/img/cup-coffe.jpg"

export default function Banner() {
  return (
    <div className='relative flex flex-col items-center md:flex-row mt-[10vh]'>
        {/* {image section} */}
        <div className='flex justify-center md:w-1/2'>
          <img 
          className='w-[60%] h-[auto] object-contain'
          src= {cofeeBlast} 
          alt='کافه گوشه'
          />
        </div>
         {/* {content section} */}
        <div className='text-center ml-5 md:text-right p-4 md:w-1/2'>
            <h2 className='text-2xl md:text-4xl lg:text-6xl text-amber-950 mb-5'>دنبال بهترین قهوه باشید</h2>
            <p className='ml-10px text-sm md:text-base lg:text-4xl text-gray-600 mb-6'>قهوه یکی از محبوب‌ترین نوشیدنی‌های جهان است که از دانه‌های گیاه قهوه تهیه می‌شود.
               این نوشیدنی علاوه بر طعم و عطر دلپذیر، به دلیل 
               داشتن کافئین می‌تواند باعث افزایش هوشیاری، تمرکز و کاهش 
               احساس خستگی شود. قهوه در فرهنگ‌های مختلف جایگاه ویژه‌ای دارد و
                از گذشته تاکنون به عنوان نمادی از دورهمی، گفتگو
                 و آرامش شناخته شده است.</p>
            <button className='mx-2 bg-cream px-4 rounded-3xl text-gray-950 text-4xl lg:h-60 shadow-lg shadow-cream'>
          ثبت سفارش
        </button>
        </div>

        <div className='absolute left-0 bottom-[-30px] md:bottom-[-30px] lg:bottom-[-20]'>
          <img className='w-[10vh] lg:w-[30vh]' src={ImageBaner} alt="" />
        </div>
    </div>
  )
}
