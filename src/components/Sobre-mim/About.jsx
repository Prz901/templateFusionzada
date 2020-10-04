import React from 'react'

import WhatIDo from '../whatIDo/whatIDo'
import MyOffers from '../MyOffers/MyOffers'
import Testmonials from '../Testemonials/Testmonials'
import Funfacts from '../Funfacts/Funfacts'

export default function About() {
  return (
    <div className='w-full background-home relative'>
      <img src='https://nstark.netlify.app/img/1.jpg' alt='hero' className='h-screen w-5/12 fixed right-0 top-0 z-10'></img>
      <section className='background-home px-16 pt-20 w-7/12'>
        <h1 className='text-2xl font-thin text-white tracking-widest'>
          <span className='text-5xl'>A</span>bout Me
        </h1>
        <div className='flex flex-col items-center justify-center w-full'>
          <h2 className='text-white text-2xl font-normal text-center tracking-tighter mt-10'>
            I am a creative <span className='text-color-span font-thin'>web designer</span> from USA, California. I love to talk
            with you about our unique services
          </h2>
          <p className='mt-6 text-color-p text-sm text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Maecenas in pulvinar neque Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas in pulvinar neque
          </p>
        </div>
        <div className='flex items-center justify-center mt-12'>
          <button className='text-white font-medium tracking-wide border-cv hover:bg-white hover:text-primary-500  py-3 px-6 rounded-md uppercase'>
            Download C.V
          </button>
          <button className='ml-4 py-3 px-6 border-hire tracking-wide rounded-md text-color-span uppercase hover:text-white'>
            Hire Me!
          </button>
        </div>
        <div className='w-full background-items flex items-center justify-between my-20 py-10 px-32 rounded-md'>
          <div className='flex flex-col items-center'>
            <i className='fas fa-phone text-color-span text-lg' />
            <h2 className='uppercase font-medium text-white py-2 text-sm'>phone</h2>
            <p className='text-color-p text-xs'>+20 010 251 789 18</p>
          </div>
          <div className='flex flex-col items-center'>
            <i className='fas fa-envelope text-color-span text-lg' />
            <h2 className='uppercase font-medium text-white py-2 text-sm'>email</h2>
            <p className='text-color-p text-xs'>Stark_support@website.com</p>
          </div>
          <div className='flex flex-col items-center'>
            <i className='fas fa-check-circle text-color-span text-lg' />
            <h2 className='uppercase font-medium text-white py-2 text-sm'>freelancer</h2>
            <p className='text-color-p text-xs'>Available</p>
          </div>
        </div>
        <WhatIDo />
        <MyOffers />
        <Testmonials />
        <Funfacts />
      </section>
    </div>
  )
}
