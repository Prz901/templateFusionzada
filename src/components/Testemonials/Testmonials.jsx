import React from 'react'

import Slider from 'react-slick'

export default function Testmonials() {
  return (
    <section className='mt-16'>
      <h1 className='text-white uppercase font-semibold text-2xl border-dotted border-b pb-3 border-white'>
        <span className='text-color-span'>Testi</span>monials
      </h1>
      <div className='w-full'></div>
      <div className='mb-20'>
        <Slider slidesToShow={1} autoplay={true} dots={true} arrows={false}>
          <div className='mt-10 pb-4'>
            <div>
              <p className='text-gray-700 font-light text-base text-center'>
                "Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat condi tincidunt sed euismod nibh
                Quisque volutpat condimentum velit class aptent taciti sociosqu ad litora. "
              </p>
            </div>
            <div className='flex items-center justify-center w-full pt-6'>
              <p className='text-white uppercase font-semibold tracking-tight text-base  mr-4'>alex martin</p>
              <p className='text-color-span font-thin text-base tracking-tighter'>Envato Customer</p>
            </div>
          </div>
          <div className='mt-10 pb-4'>
            <div>
              <div>
                <p className='text-gray-700 font-light text-base text-center'>
                  " Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat condi tincidunt sed euismod
                  nibh Quisque volutpat condimentum velit class aptent taciti sociosqu ad litora. "
                </p>
              </div>
              <div className='flex items-center justify-center w-full pt-6'>
                <p className='text-white uppercase font-semibold tracking-tight text-base  mr-4'>alex martin</p>
                <p className='text-color-span font-thin text-base tracking-tighter'>Envato Customer</p>
              </div>
            </div>
          </div>
          <div className='mt-10 pb-4'>
            <div>
              <div>
                <p className='text-gray-700 font-light text-base text-center'>
                  " Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat condi tincidunt sed euismod
                  nibh Quisque volutpat condimentum velit class aptent taciti sociosqu ad litora. "
                </p>
              </div>
              <div className='flex items-center justify-center w-full pt-6'>
                <p className='text-white uppercase font-semibold tracking-tight text-base  mr-4'>alex martin</p>
                <p className='text-color-span font-thin text-base tracking-tighter'>Envato Customer</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  )
}
