import { Link } from 'react-router-dom'
import noDataFound from '../assets/noDataFound.jpg'
import { useEffect } from 'react'

export const PageNotFound = () => {
  useEffect(()=>{
    document.title = 'Page Not Found - Cinemate'
  })
  return (
    <main className='bg-white dark:bg-gray-800 text-center pt-10 min-h-screen'>
      <section>
        <div className='flex items-center flex-col'>
          <p className='dark:text-white font-bold text-2xl text-black'>Opps!! 404 Not Found</p>
          <div className='w-80 mt-5 rounded-lg overflow-hidden'>
            <img src={noDataFound} alt="no data found" />
          </div>
        </div>
        <div>
          <p className='text-black dark:text-white mt-10'>
            <Link to='/'>Back to Home</Link>
          </p>
        </div>
      </section>
    </main>
  )
}
