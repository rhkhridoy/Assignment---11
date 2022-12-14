import React from 'react'
import { Link } from 'react-router-dom'

import image from '../Components/imges/animation-4.gif'
import UseTitle from '../Hooks/UseTitle'

const ErrorPage = () => {
  UseTitle('ErrorPage')
  return (
    <section className='flex items-center h-screen p-16  text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <img src={image} alt="" />
        <div className='max-w-md text-center'>
          
          
          <Link
            to='/'
            className='px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900'
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage
