import whitelogo from '../assets/logo-white.png'

const Footer = () => {
  return (
    <>
      <footer>
        <div className='main bg-black text-white grid grid-cols-2 lg:grid-cols-4  py-8'>
          {/* Left Column */}
          <div className='mt-4 flex justify-center'>
            <div className="logo-section text-center">
              <img className="logo" src={whitelogo} alt="1mdm" />
              <p><br />One Medical Devices<br /> Market Place</p>
            </div>
          </div>

          {/* Platform Column */}
          <div className="flex justify-center">
            <div className="text-center">
              <h1 className='text-xl font-semibold my-4'>Platform</h1>
              <ul className='space-y-3'>
                <li>Sell on 1MDM</li>
                <li>Pricing</li>
                <li>About Us</li>
                <li>Our Story</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Brands</li>
              </ul>
            </div>
          </div>

          {/* Press Room and Policies Column */}
          <div className=" justify-center">
            <div className="text-center">
              <h1 className='text-xl font-semibold my-4'>Press Room</h1>
              <p className='text-gray-400'>Images & B-roll</p>
            </div>
            <div className="text-center">
              <h1 className='text-xl font-semibold my-4'>Policies</h1>
              <ul className='space-y-3'>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Delivery information</li>
              </ul>
            </div>
          </div>

          {/* Reach Us Column */}
          <div className="flex justify-center">
            <div className="text-center">
              <h1 className='text-xl font-semibold my-5'>Reach Us</h1>
              <ul className='space-y-3'>
                <li>Corporate information</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className='flex justify-center p-3'>
          <p> © 2024 1MDM ⚡ by </p>
          <a href="https://www.superlabs.co" target="_blank" className='text-black'>SuperLabs</a>
        </div>
      </footer>
    </>
  )
}

export default Footer
