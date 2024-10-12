import React, { useRef, useState } from "react";
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
import { Link } from "react-router-dom";
import Blogs from "../data/latestBlogs.json";
import ShowBlog from "./ShowBlog";
import { data } from "autoprefixer";

const LatestBlogs = () => {
  const swiperRef = useRef();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [blogData, setBlogData] = useState(null);
 const [Popup, setPopup] = useState(false)

  const mouseEnter = () => {
    swiperRef.current.swiper.autoplay.stop();
  };
  const mouseLeave = () => {
    swiperRef.current.swiper.autoplay.start();
  };

  const fadeInUpAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
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
    <>
      <section className="bg-[#2e2e2e] py-10 text-white">
        <motion.div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
          <div className=" text-center mb-20">
            <motion.h1
              ref={ref}
              variants={fadeInUpAnimation}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-3 font-amsterdam text-primary"
            >
              Latest Blogs
            </motion.h1>
            <motion.p
              ref={ref}
              variants={fadeInUpAnimation}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="mt-4 text-gray-300"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem iste
              quasi incidunt?
            </motion.p>
          </div>
          <div className="">
            <motion.div
              ref={ref}
              variants={fadeInUpAnimation}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="mb-10"
            >
              <Swiper
                // install Swiper modules
                ref={swiperRef}
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                breakpoints={{
                  520: {
                    slidesPerView: 2,
                  },
                  800: {
                    slidesPerView: 3,
                  },
                }}
                loop={true}
                autoplay={{ delay: 2000 }}
                className="z-[0]"
              >
                {Blogs.map((data) => {
                  return (
                    <SwiperSlide
                      onClick={() => {
                        setPopup(true);
                        setBlogData(data);
                      }}
                      key={data.title}
                      onMouseEnter={mouseEnter}
                      onMouseLeave={mouseLeave}
                      className="h-auto group"
                    >
                      <div className="w-full cursor-pointer bg-[#404040] overflow-hidden rounded-lg">
                        <div className="w-full h-56 overflow-hidden">
                          <img
                            src={data.img}
                            alt="IMG_NOT_FOUND"
                            className="w-full bg-white  h-full group-hover:scale-125  transition-all duration-500"
                          />
                        </div>
                        <div className="p-3">
                          <p className="text-[12px] text-right">{data.date}</p>
                          <a className=" text-lg sm:text-xl mt-[-7px] font-semibold group-hover:text-primary group-hover:underline">
                            {data.title}
                          </a>
                          <p className="text-sm mt-2 text-gray-300">
                            {data.description}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </motion.div>
          </div>
          <motion.div
            variants={fadeInUpAnimation}
            initial="hidden"
            animate="show"
            className="text-center"
          >
            <motion.a
              variants={fadeInUpAnimation}
              href="/all_blogs"
              className="relative mt-3 inline-flex items-center justify-center px-5 py-2 overflow-hidden  tracking-tighter text-black font-semibold bg-white rounded-lg group"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-primary rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="relative">View More</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
      {Popup && <ShowBlog setPopup={setPopup} blogData={blogData} />}
    </>
  );
};

export default LatestBlogs;
