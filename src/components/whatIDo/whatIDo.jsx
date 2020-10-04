import React from 'react'

export default function whatIDo() {
  return (
    <div>
      <h1 className='text-white text-2xl font-medium uppercase border-dotted border-b pb-3 border-white'>
        What <span className='text-color-span'>I Do</span> ?
      </h1>
      <div className='grid grid-flow-col grid-rows-2 grid-cols-2  gap-8 mt-12'>
        <div className='border border-gray-900 border-solid px-6 py-6 rounded-md'>
          <i className='fas fa-pen-nib text-color-span text-2xl mb-4 mt-3' />
          <h2 className='text-white text-lg font-light mb-4'>Web Design</h2>
          <p className='text-gray-700 text-base font-thin mb-3'>
            Lorem ipsum consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit Maecenas in pulvinar neque.
          </p>
        </div>
        <div className='border border-gray-900 border-solid px-6 py-6 rounded-md'>
          <i className='fas fa-tv text-color-span text-2xl mb-4 mt-3' />
          <h2 className='text-white text-lg font-light mb-4'>Web Development</h2>
          <p className='text-gray-700 text-base font-thin mb-3'>
            Lorem ipsum consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit Maecenas in pulvinar neque.
          </p>
        </div>
        <div className='border border-gray-900 border-solid px-6 py-6 rounded-md'>
          <i className='fas fa-shield-alt text-color-span text-2xl mb-4 mt-3 ' />
          <h2 className='text-white text-lg font-light mb-4'>Branding</h2>
          <p className='text-gray-700 text-base font-thin mb-3'>
            Lorem ipsum consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit Maecenas in pulvinar neque.
          </p>
        </div>
        <div className='border border-gray-900 border-solid px-6 py-6 rounded-md'>
          <i className='fas fa-chart-line text-color-span text-2xl mb-4 mt-3'></i>
          <h2 className='text-white text-lg font-light mb-4'>Marketing</h2>
          <p className='text-gray-700 text-base font-thin mb-3'>
            Lorem ipsum consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit Maecenas in pulvinar neque.
          </p>
        </div>
      </div>
    </div>
  )
}
