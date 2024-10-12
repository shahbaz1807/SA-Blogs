import React, { useEffect, useRef } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { motion, useInView } from "framer-motion";

const NewWebsites = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); 
  const swiperRef = useRef()

  const enterMouse = () => {
    swiperRef.current.swiper.autoplay.stop()
  }
  const leaveMouse = () => {
    swiperRef.current.swiper.autoplay.start()
  }

  const fadeInUpAnimation = {
    hidden: {
      opacity: 0,
      y: 90,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 1.5,
      },
    },
  };

  return (
    <section className="bg-[#303030] py-32 text-white">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={fadeInUpAnimation}
        className="text-center mb-20"
      >
        <motion.h1
          variants={fadeInUpAnimation}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-3 font-amsterdam text-primary"
        >
          Coming Soon Blogs
        </motion.h1>
        <motion.p variants={fadeInUpAnimation} className="mt-4 text-gray-300">
          Stay tuned for our upcoming blogs packed with valuable insights and
          tips!
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={fadeInUpAnimation}
        className="w-[90%] mx-auto"
      >
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          loop={true}
          autoplay={{ delay: 2000 }}
          className="z-[0]"
        >
          <SwiperSlide
            onMouseEnter={enterMouse}
            onMouseLeave={leaveMouse}
            className="max-h-[65vh] h-auto cursor-pointer rounded-lg overflow-hidden bg-red-400 "
          >
            <img
              src="https://templatesjungle.com/wp-content/uploads/edd/2023/04/roofers-roofing-free-figma-website-template-cover-1280x800.jpg"
              className="w-full"
              alt="IMG_NOT_FOUND"
            />
          </SwiperSlide>
          <SwiperSlide
            onMouseEnter={enterMouse}
            onMouseLeave={leaveMouse}
            className="max-h-[65vh] h-auto cursor-pointer rounded-lg overflow-hidden bg-red-400 "
          >
            <img
              src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/website-templates/Flowers%20Shop%20Ecommerce%20Website.png"
              className="w-full"
              alt="IMG_NOT_FOUND"
            />
          </SwiperSlide>
          <SwiperSlide
            onMouseEnter={enterMouse}
            onMouseLeave={leaveMouse}
            className="max-h-[65vh] h-auto cursor-pointer rounded-lg overflow-hidden bg-red-400 "
          >
            <img
              src="https://newtemplate.net/wp-content/uploads/2021/01/Dexam-Angular-10-Bootstrap-4-Html-SaaS-Startup-Product-Landing-Page.jpg"
              className="w-full"
              alt="IMG_NOT_FOUND"
            />
          </SwiperSlide>
          <SwiperSlide
            onMouseEnter={enterMouse}
            onMouseLeave={leaveMouse}
            className="max-h-[65vh] h-auto cursor-pointer rounded-lg overflow-hidden bg-red-400 "
          >
            <img
              src="https://img.freepik.com/free-psd/botanical-garden-template-design_23-2150311052.jpg"
              className="w-full"
              alt="IMG_NOT_FOUND"
            />
          </SwiperSlide>
          <SwiperSlide
            onMouseEnter={enterMouse}
            onMouseLeave={leaveMouse}
            className="max-h-[65vh] h-auto cursor-pointer rounded-lg overflow-hidden bg-red-400 "
          >
            <img
              src="https://assets.wpdeveloper.com/2022/03/Blog_Banner__1280x720_%E2%80%93_1.jpeg"
              className="w-full"
              alt="IMG_NOT_FOUND"
            />
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </section>
  );
};

export default NewWebsites;
