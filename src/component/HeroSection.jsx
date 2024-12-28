// import React from 'react'
import sellerbanner from '../assets/seller-banner.png'

const HeroSection = () => {
    return (
        <>
           <section className="relative w-full h-[800px] pt-16 md:pt-20 border-2 border-white">
        {/* Background Image */}
        <img
          src={sellerbanner}
          alt="Hero Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Text Overlay */}
        <div className="div1 absolute inset-0 flex flex-col lg:flex-row items-center justify-evenly text-white z-10 pt-36 lg:pt-20 px-4">
          <div className="flex flex-col lg:gap-14 gap-4">
            <div className="">
              <p className="text-xl font-medium text-black">Sell on 1mdm.com</p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
                Reach millions of B2B buyers <br /> globally
              </h1>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors">
                Start selling
              </button>
              <button className="border-2 border-red-600 text-[#ed1c24] hover:bg-[#ed1c24] hover:text-white px-6 py-2 rounded-full">
                Chat with consultant
              </button>
            </div>
          </div>

          <div className="space-y-8 ">
            <div>
              <h2 className="text-4xl font-semibold text-black">26,000,000</h2>
              <p className="text-black">active buyers globally</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-black">400,000</h2>
              <p className="text-black">product inquiries daily</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-black">200</h2>
              <p className="text-black">countries and regions represented</p>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default HeroSection
