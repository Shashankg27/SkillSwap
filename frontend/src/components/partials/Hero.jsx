import React from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 grid grid-cols-2'>
      <div className='flex justify-center flex-col px-30 gap-6'>
        <p className='text-5xl text-white font-bold'>Exchange Skills, Build Community</p>
        <p className='text-xl text-gray-200 font-semibold'>Connect with learners and teachers worldwide. Offer what you know, learn what you need.</p>
        <div className='flex gap-4 items-center'>
          <Link to='/signup' className='text-indigo-500 bg-white px-6 py-2 font-semibold rounded-lg'>Start Learning</Link>
          <Link to='/demo' className='text-white border border-white border-2 px-6 py-2 font-semibold rounded-lg'>Watch Demo</Link>
        </div>
      </div>
      <div className='p-2'>
        <img src="/HeroIMG.png" alt="IMG" className='rounded-xl shadow-2xl' />
      </div>
    </div>
  )
}

export default Hero
