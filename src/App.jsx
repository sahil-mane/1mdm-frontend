import Footer from './component/Footer'
import SectionTwo from './component/sectionTwo'
import LastSecondSection from './component/LastSecondSection'
import HeroSection from './component/HeroSection'
import { Header } from './component/Header'
import ThirdSection from './component/thirdSection/ThirdSection'
import FourthSection from './component/fouthSection/FourthSection'
function App() {


  return (
    <>
      <Header />
      <HeroSection />
      <SectionTwo />
      <div className='h-fit my-3 mb-2'>
        <ThirdSection />
      </div>
      <div className='bg-gray-200 h-[720px]  lg:h-fit mb-4 p-2'>
        <h1 className=" flex justify-center items-center text-2xl text-[#a10005] text-center lg:text-4xl font-semibold my-4 ">
          Success stories from 1mdm.com sellers
        </h1>
        <FourthSection />
      </div>

      <section className='bg-red-600 text-center text-white py-9 px-2 h-fit flex flex-col items-center justify-center gap-8 '>
        <h1 className='text-5xl font-semibold text-wrap lg:w-3/4'>Largest number of products & categories of <br></br>
          medical devices on a single place - 1mdm.com</h1>
        <p className='text-lg font-semibold'>Connect with buyers worldwide for your product &<br></br>
          start selling now.</p>
      </section>
      <LastSecondSection />
      <Footer />


    </>
  )
}

export default App
