
import React from 'react'
import { coffeMenu } from "../data";
export default function Menu() {
  return (
    <div>
       <div className='text-center mb-10'>
          <h4 className='text-4xl font-bold text-amber-900'>
            از یک ترکیب نوین و دل انگیز و قهوه لذت ببرید
          </h4>
          <p className='text-gray-600 text-3xl'>
            همه طعم های قهوه را با ما کشف کنید
            همیشه فنجان جدید برای تجربه کردن وجود دارد
          </p>
       </div>
       <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
            {coffeMenu.map((items)=>(
                <div key={items.id} className='bg-white rounded-lg shadow-lg relative pb-8'>
                        <img src={items.image} alt={items.name}
                         className='w-full object-contain h-48'
                        />
                        <div className='text-center p-4'>
                              <h3 className='text-3xl font-semibold text-amber-800'>{items.name}</h3>
                              <p className='text-gray-900 mb-2 text-3xl '>{items.ingeredients.join(" + ")}</p>
                              <p className='text-3xl'>{items.price.toLocaleString()} تومان</p>
                        </div>
                        <button className='absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2 bg-amber-950
                        text-white px-6 text-2xl py-2 rounded-full hover:bg-amber-700 transition-colors'>
                            سفارش
                        </button>
                </div>
         ))}
       </div>
    </div>
  )
}
