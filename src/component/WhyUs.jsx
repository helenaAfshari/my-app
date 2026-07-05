import React from 'react'
import WhyImg1 from "../asset/img/beans.jpg"
import WhyImg2 from "../asset/img/cup.jpg"
import WhyImg3 from "../asset/img/premium.jpg"
import WhyImg4 from "../asset/img/banner-cofee.jpg"
export default function WhyUs() {
  return (
    <div className='relative'>
       <div className=''>
            <img src={WhyImg4} className='absolute top-[20px] w-[20vh] lg:w-[30vh]'/>
       </div>
       <div className='my-20 p-5 max-w-6xl mx-auto'>
           <div className='text-center p-4'>
            <h2 className='text-6xl text-amber-950'>چرا کافه گوشه؟</h2>
            <p className='text-4xl text-gray-700 '>با کافه گوشه روزت رو شروع کن</p>
           </div>
           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                <div className='bg-[#FFF9F1] flex flex-col justify-center items-center px-2 py-4 mx-2 my-4 rounded-md border border-amber-500'>
                    <img src={WhyImg1}/>
                    <h4 className='text-2xl text-amber-900'>قهوه های سلطنتی</h4>
                    <p className='text-gray-700 text-2xl my-4'>با دانه های طلایی</p>
                </div>
                  <div className='bg-[#FFF9F1] flex flex-col justify-center items-center px-2 py-4 mx-2 my-4 rounded-md border border-amber-500'>
                    <img src={WhyImg2}/>
                    <h4 className='text-2xl text-amber-900'>کیفیت عالی</h4>
                    <p className='text-gray-700 text-2xl my-4'>ما بهترین کیفیت را فراهم میکنیم</p>
                </div>
                  <div className='bg-[#FFF9F1] flex flex-col justify-center items-center px-2 py-4 mx-2 my-4 rounded-md border border-amber-500'>
                    <img src={WhyImg3}/>
                    <h4 className='text-2xl text-amber-900'>فوق العاده</h4>
                    <p className='text-gray-700 text-2xl my-4'>قهوه ایی شگفت انگیز تجربه کنید</p>
                </div>
                    <div className='bg-[#FFF9F1] flex flex-col justify-center items-center px-2 py-4 mx-2 my-4 rounded-md border border-amber-500'>
                    <img src={WhyImg1}/>
                    <h4 className='text-3xl text-amber-900'>قهوه های سلطنتی</h4>
                    <p className='text-gray-700 text-2xl my-4'>با دانه های طلایی</p>
                </div>

           </div>
           <div className='text-center p-4 my-8'>
            <p className='text-gray-700 text-2xl'>بهترین ایده ها با بهترین قهوه ها شروع می شود</p>
            <h4 className='text-3xl text-amber-950'>از امروز شروع کن</h4>      
             <button className='absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2 bg-amber-950
                        text-white px-6 text-2xl py-2 rounded-full hover:bg-amber-700 transition-colors'>
                            به ما بپیوندید
            </button>    
           </div>
       </div>
    </div>
  )
}
