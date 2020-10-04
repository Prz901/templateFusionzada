import React from 'react'

export default function Funfact() {
  return (
    <section className='w-full'>
      <div>
        <h1 className='text-white uppercase font-semibold text-2xl border-dotted border-b pb-3 border-white'>
          Fun <span className='text-color-span'>Facts</span>
        </h1>
      </div>
      <div className=' py-12 '>
        <div className='w-full background-items flex items-center py-10 justify-between px-32 rounded-md border border-solid border-gray-800 '>
          <div className='flex flex-col items-center'>
            <i class='fas fa-heart text-color-span mb-4 text-2xl' />
            <h2 className='text-white text-3xl font-semibold'>368</h2>
            <p className='text-gray-800 font-medium tracking-tighter mt-3 text-sm'>Happy Clients</p>
          </div>
          <div className='flex flex-col items-center'>
            <i class='fas fa-images text-color-span mb-4 text-2xl' />
            <h2 className='text-white text-3xl font-semibold'>937</h2>
            <p className='text-gray-800 font-medium tracking-tighter mt-3 text-sm'>Projects Compleated</p>
          </div>
          <div className='flex flex-col items-center'>
            <i class='fas fa-sort-amount-down text-color-span mb-4 text-2xl' />
            <h2 className='text-white text-3xl font-semibold'>438</h2>
            <p className='text-gray-800 font-medium tracking-tighter mt-3 text-sm'>Files Downloaded</p>
          </div>
        </div>
      </div>
    </section>
  )
}
