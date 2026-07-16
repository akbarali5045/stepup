"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import HeroCard from "./HeroCard";
import { heroSlides } from "@/data/heroData";


export default function Hero() {

  return (
    <section className="w-full">

      <Swiper
  modules={[Autoplay, Pagination]}
  autoplay={{
    delay: 2000,
  }}
  loop={true}
  pagination={{
    clickable: true,
  }}
>

        {
          heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>

              <HeroCard
                image={slide.image}
                alt={slide.alt}
              />

            </SwiperSlide>
          ))
        }

      </Swiper>

    </section>
  );
}