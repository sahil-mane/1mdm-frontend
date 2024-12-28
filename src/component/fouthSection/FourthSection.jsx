// import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


import Comma from '../icons/Comma';

const FourthSection = () => {
  const data = [
    {
      id: 1,
      description: "Lab Evolution is an import-export company of reagents and laboratory equipment established over a decade. Our company’s team of experts (in the instrumentations and reagents market) carefully follows customers all over the world. Lab Evolution is able to offer all the most competitive and popular brands and the best quality products for your laboratory.",
      image: "https://1mdm.com/about/assets/slider-4.webp"
    },
    {
      id: 2,
      description: "Mr David runs a manufacturing company that works in this field of medical devices. With administrative and production across the country. With full respect for environment and several years’ experience using IP systems that are conventional.",
      image: "https://1mdm.com/about/assets/slider-1.webp"
    },
    {
      id: 3,
      description: "Lab Evolution is an import - export company of reagents and laboratory equipment established over a decade. Our company’s team of experts (in the instrumentations and reagents market) carefully follows customers all over the world. Lab Evolution is able to offer all the most competitive and popular brands and the best quality products for your laboratory.",
      image: "https://1mdm.com/about/assets/slider-2.webp"
    },
    {
      id: 4,
      description: "Rupesh Kanna found himself in between jobs in 2016. He started a blog, and wrote about his past experience as a lab technician while sharing his knowledge on imaging techniques. Kanna wanted to see more diversity in the medical devices industry and specilised high-quality pigmented imaging process, so he decided to create his own product line",
      image: "https://1mdm.com/about/assets/slider-3.webp"
    },
  ];

  return (
    <div className=" py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <Swiper
          modules={[Navigation, Pagination,Autoplay]}
          autoplay={{ delay: 2000,  disableOnInteraction: false }}
          navigation          
          pagination={{ clickable: false }}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 bg-white shadow-lg rounded-lg overflow-hidden mb-2 lg:mb-0">
                {/* Text Content */}
                <div className="p-6 lg:p-12 flex flex-col justify-center">
                  <div>
                    <span>
                      <Comma />
                    </span>
                    <p className="text-sm text-gray-700 mt-4">{item.description}</p>
                  </div>
                </div>
                {/* Image Content */}
                <div className="overflow-hidden">
                  <img
                    className="object-cover w-full h-64 lg:h-full"
                    src={item.image}
                    alt="Client Testimonial"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FourthSection;
