import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../../../src/style.css";

import sink from "../../../public/ourproducts/sink.webp";
import panels from "../../../public/ourproducts/panels.webp";
import urinal from "../../../public/ourproducts/urinal.webp";
import mirror from "../../../public/ourproducts/mirror.webp";


import { motion } from "framer-motion";
import {
  ContainerAnimation,
  imageAnimation,
  LtRtextAnimation,
  textAnimation,
  itemAnimation,
} from "../../../utils/motion";

import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Carousel() {


  return (
    <motion.div
      variants={ContainerAnimation}
      initial="hidden"
      animate="show"
      className="w-[100%] h-full px-4 pb-6 md:px-0">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}

        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="max-w-screen-xl pt-[30px] pb-[50px] sm:pb-[100px]"
      >
        <SwiperSlide className="bg-center bg-cover w-full bg-secondary-default opacity-60 rounded-lg">
          <motion.img
            variants={textAnimation}
            src={sink}
            className="h-[300px] sm:h-[300px] md:h-[400px] object-cover block w-full select-none rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover w-full bg-secondary-default opacity-60 rounded-lg">
          <motion.img
            variants={textAnimation}
            src={panels}
            className="h-[300px] sm:h-[300px] md:h-[400px] object-cover block w-full select-none rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover w-full bg-secondary-default opacity-60 rounded-lg">
          <motion.img
            variants={textAnimation}
            src={urinal}
            className="h-[300px] sm:h-[300px] md:h-[400px] object-cover block w-full select-none rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover w-full bg-secondary-default opacity-60 rounded-lg">
          <motion.img
            variants={textAnimation}
            src={mirror}
            className="h-[300px] sm:h-[300px] md:h-[400px] object-cover block w-full select-none rounded-lg"
          />
        </SwiperSlide>

      </Swiper>
    </motion.div>
  );
}
