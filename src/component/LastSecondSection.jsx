import React from 'react'
import bannerImage from '../assets/footer-banner.png'

const LastSecondSection = () => {
  return (
    <>
    <section className="h-[50vh] relative">
  {/* Image */}
  <img src={bannerImage} className="absolute top-0 left-0 w-full h-full object-cover" alt="Banner" />

  {/* Text Overlay */}
  <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-10">
    <h1 className="text-white text-center text-4xl font-bold">Ready to Grow Your Business? </h1>
    
    <div className='flex flex-col lg:flex-row gap-3'>
      <button className='border-2 border-white px-4 py-2 rounded-full text-xl bg-white text-red-600 hover:bg-red-600 hover:text-white '>Start Selling</button>
      <button className='border-2 border-white px-4 py-2 rounded-full text-xl text-white hover:text-red-600 hover:bg-white'>Chat with consultant</button>
    </div>
  </div>
</section>
    </>
  )
}

export default LastSecondSection