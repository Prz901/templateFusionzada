import React from 'react'

export default function MyOffers() {
  return (
    <div className='mt-16'>
      <p className='text-white uppercase font-semibold text-2xl border-dotted border-b pb-3 border-white '>
        My <span className='text-color-span'>Offers</span>
      </p>
      <div className='flex items-center mt-16'>
        <div className='w-1/2 border border-gray-800 border-solid px-6 py-8 rounded-sm'>
          <div className='flex flex-col items-center border-b border-solid border-gray-800'>
            <h2 className='text-white  text-base font-bold uppercase '>Basic</h2>
            <h1 className='text-white mt-2 font-semibold text-5xl'>
              10 <span className='text-base'>/Mo</span>
            </h1>
            <p className='text-gray-700 text-sm font-thin tracking-tight mt-2 mb-6'>Lorem Ipsum is simply text.</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-gray-800 font-medium tracking-tighter mt-6 text-sm'>10 GB Disk Space</p>
            <p className='text-gray-800 font-medium tracking-tighter mt-3 text-sm'>15 Domain Names</p>
            <p className='text-gray-800 font-medium tracking-tighter mt-3 text-sm'>Enhanced Security</p>
            <p className='text-gray-800 font-medium tracking-tighter mt-3 text-sm'>Unlimited Support</p>
          </div>
          <div className='flex justify-center '>
            <button className='border-hire py-2 px-8 mt-10 text-color-p uppercase  hover:text-white mb-5'>Get Started</button>
          </div>
        </div>
        <div className='w-1/2 border border-gray-800 border-solid px-6 py-8 ml-8 rounded-sm'>
          <div className='flex flex-col items-center border-b border-solid border-gray-800 '>
            <div className='flex items-center flex-col px-6'>
              <h2 className='text-white  text-base font-bold uppercase '>Standard</h2>
              <h1 className='text-white mt-2 font-semibold text-5xl'>
                30 <span className='text-base'>/Mo</span>
              </h1>
              <p className='text-gray-700 text-sm font-thin tracking-tight mt-2 mb-6'>Lorem Ipsum is simply text.</p>
            </div>
          </div>

          <div className='flex flex-col items-center'>
            <p className='text-gray-800 font-medium tracking-tighter mt-6 text-sm'>100 GB Disk Space</p>
            <p className='text-gray-800 font-medium tracking-tighter mt-3 text-sm'>30 Domain Names</p>
            <p className='text-gray-800 font-medium tracking-tighter mt-3 text-sm'>Enhanced Security</p>
            <p className='text-gray-800 font-medium tracking-tighter mt-3 text-sm'>Unlimited Support</p>
          </div>
          <div className='flex justify-center '>
            <button className='border-hire py-2 px-8 mt-10 mb-5 text-white border-cv uppercase  hover:text-primary-500 hover:bg-white'>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
