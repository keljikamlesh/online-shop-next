"use client"
// import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function BannerC() {
  return (
   <>
    <div className="w-full"> 
        <div className="">
            <div className="w-full h-[300px] overflow-hidden bg-slate-400"> 
                
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false,}}
                    pagination={{ clickable: true,}}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="myBannerSwiper"
                >
                    <SwiperSlide className="h-full"><img className="min-w-full min-h-full max-w-max" src="https://images.jdmagicbox.com/standard/shopfront/0700a00a21b956c40970f2ecd8f04af6.png" /></SwiperSlide>
                    <SwiperSlide className="h-full"><img className="min-w-full min-h-full max-w-max" src="https://images.jdmagicbox.com/standard/shopfront/01567c0d241fb9c3383f330e91d63340.png" /></SwiperSlide>
                    <SwiperSlide className="h-full"><img className="min-w-full min-h-full max-w-max" src="https://images.jdmagicbox.com/standard/shopfront/cb5910e632ce9da1cd2fc339fcf85cc3.png" /></SwiperSlide>
                    <SwiperSlide className="h-full"><img className="min-w-full min-h-full max-w-max" src="https://images.jdmagicbox.com/standard/shopfront/9d600279deeb55333e5f8c1856eb550a.png" /></SwiperSlide>
                   
                </Swiper>
            </div>

            
        </div>
    </div>
    
    <style>
        {`
            .myBannerSwiper {height:100%}
            .myBannerSwiper .SwiperSlide {height:100%;}
        `}
    </style>
   </>
  )
}
