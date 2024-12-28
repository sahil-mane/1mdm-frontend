// import React from 'react'

const SectionTwo = () => {
  return (
    <>
    <div className=' space-y-5 pt-8'>
        <h1 className='text-center text-4xl font-semibold w-1/2 mx-auto'>1mdm.com is a leading ecommerce platform that<br />
          helps SMEs go global</h1>
        <div className='flex justify-center '>
        <div className="w-full max-w-6xl mx-auto p-4 grid md:grid-cols-2 gap-8 items-center">
      {/* Video Column */}
      <div className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/TN7iJyc5Uks"
          title="SIGNA™ Explorer Lift Installation"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Text Column */}
      <div className="space-y-6">
        <div className="space-y-4">
          <p className="text-xl text-gray-900">
            Connect with millions of business buyers from around the world.
          </p>
          
          <p className="text-xl text-gray-900">
            Get the tools and know-how to build a successful ecommerce presence for your business.
          </p>
          
          <p className="text-xl text-gray-900">
            Pocket more from each sale, with take rates as low as 0% in some cases.
          </p>
        </div>
      </div>
    </div>
        </div>
      </div>
    </>
  )
}

export default SectionTwo