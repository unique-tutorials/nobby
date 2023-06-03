import React, { useEffect, useState } from "react";
import Image from "next/image";
import "swiper/css/effect-flip";
import { Keyboard, Autoplay, Pagination, A11y, EffectCube, EffectFade, EffectFlip, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-flip";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

export default function MainSlider() {

  

  return (
    <>
      <Swiper modules={[Keyboard, Autoplay, Pagination, A11y, EffectCube]}
        slidesPerView={1}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="relative">
          <div className="absolute w-1/2  h-full flex items-center justify-center flex-col">
            <h3 className="text-white font-bold text-4xl w-2/3 text-start max-lg:text-xs leading-10 tracking-wider">Sorunsuz Kargo Hizmetleri için Nobby Transport</h3>
            <p className="text-white font-bold text-xl w-2/3 text-start max-lg:text-xs leading-10 tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure commodi nemo ut hic quas sequi quaerat rerum dolorum optio reiciendis!</p>
            {/* <Link className="border px-7 mt-5 py-2 text-xl text-white bg-[#fe8704] font-bold duration-150 hover:bg-black hover:text-white hover:bg-[#ffffff50]" href="/">
              İncele
            </Link> */}
          </div>
          <Image src="/banner-2.jpeg" width={1920} height={600} alt="slide1" />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute w-1/2  h-full flex items-center justify-center flex-col">
            <h3 className="text-white font-bold text-4xl w-2/3 text-start max-lg:text-xs leading-10 tracking-wider">Nobby Transport ile Kargonuz Güvende</h3>
            <p className="text-white font-bold text-xl w-2/3 text-start max-lg:text-xs leading-10 tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure commodi nemo ut hic quas sequi quaerat rerum dolorum optio reiciendis!</p>
            {/* <Link className="border px-7 mt-5 py-2 text-xl max-lg:text-lg text-white bg-[#fe8704]  font-bold duration-150 hover:bg-black hover:text-white hover:bg-[#ffffff50] backdrop-blur-sm" href="/">
              İncele
            </Link> */}
          </div>
          <Image src="/banner.jpeg" width={1920} height={600} alt="slide1" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

