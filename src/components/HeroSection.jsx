import React from 'react'
import { motion } from 'framer-motion';


const HeroSection = () => {
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
    <section className="bg-no-repeat lg:h-[60vh] bg-[url(https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080)] bg-cover gap-14 lg:gap5 flex-col  bg-black text-white">
      <div className="hero-section-effect h-full flex justify-center items-center   px-5 md:px-10 pt-32 pb-20 lg:px-16 z-[-1]">
        <motion.div
          variants={fadeInUpAnimation}
          initial="hidden"
          animate="show"
          className="hero-contant text-center"
        >
          <motion.h1
            variants={fadeInUpAnimation}
            className="font-amsterdam leading-[58px] texh text-[55px] md:text-7xl lg:text-[5.8rem] sm:text-6xl hero-section-title "
          >
            WELCOME TO SA BLOGS
          </motion.h1>
          <motion.p
            variants={fadeInUpAnimation}
            className="mt-2 text-gray-300  w-[100%]  md:w-[70%] mx-auto"
          >
            SA BLOGS is dedicated to sharing coding tips and tutorials to help
            developers enhance their skills and stay updated with the latest web
            trends.
          </motion.p>
          <motion.button variants={fadeInUpAnimation}>
            <a
              variants={fadeInUpAnimation}
              href={"/all_blogs"}
              className="relative mt-4 inline-flex ga items-center justify-between px-5 py-2 pb-[5px] overflow-hidden font-medium text-[15px] transition-all bg-white rounded hover:bg-white group"
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] hero-section-btn absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out">
                VIEW MORE
              </span>
            </a>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection
