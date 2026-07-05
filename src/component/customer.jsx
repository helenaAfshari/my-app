import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import customers from '../customerData';
import blast from "../asset/img/banner-cofee.jpg";
import blast2 from "../asset/img/cofee-baner.jpg"


import CoffeBanner from './CoffeBanner';
export default function customer() {
  return (
    <div className='relative my-20 p-5 max-w-6xl mx-auto bg-gray-50 rounded-lg shadow-md'>
       <div className='text-center my-8'>
            <h4 className='text-5xl font-bold text-amber-900 mb-4'>نظریات مشتریان در مورد ما</h4>
            <p className='text-gray-600 text-3xl'>مشتریان که از خدمات ما رضایت داشته اند  برخی نظرات ان ها را در زیر مشاهده کنید</p>
      
         <div>
            {/* <img className='absolute right-0 top-[-100px] w-[30vh]
            lg:w-[60vh] lg:right-[-100px] ' src={blast} alt="" /> */}
         </div>
       </div>
       <Swiper 
  modules={[Navigation, Pagination, Autoplay]}
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000 }}
  loop={true}
  spaceBetween={30}
  slidesPerView={1}
>
    {
        customers.map((customer)=>(
            <SwiperSlide key={customer.name}>
                <div className='flex flex-col items-center text-center border border-amber-400 rounded-lg bg-white p-6 shadow-sm'>
                    <p className='text-gray-700 italic text-2xl'>{customer.review}</p>
                    <img src={customer.img} alt={customer.name} />
                    <p className='text-amber-800 font-bold text-2xl mt-4'>{customer.name}</p>
                </div>
            </SwiperSlide>
        ))
    }
       </Swiper>
       
    </div>
  )
}
