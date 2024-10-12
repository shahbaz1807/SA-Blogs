import React from 'react'
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion , useInView} from 'framer-motion';

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); 


  const fadeInUpAnimation = {
    hidden: {
      opacity: 0,
      y: 50,
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
    <section id='about' className="bg-[#2e2e2e]  text-white py-32 pt-32">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={fadeInUpAnimation}
        className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16"
      >
        <motion.div variants={fadeInUpAnimation} className=" text-center mb-20">
          <motion.h1
            variants={fadeInUpAnimation}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-3 font-amsterdam text-primary"
          >
            ABOUT US
          </motion.h1>
          <motion.p variants={fadeInUpAnimation} className="mt-4 text-gray-300">
            Your trusted resource for web development tutorials and insights.
          </motion.p>
        </motion.div>
        <motion.div
          variants={fadeInUpAnimation}
          className="flex flex-col md:flex-row gap-8 justify-between items-center"
        >
          <motion.div
            variants={fadeInUpAnimation}
            className=" text-center md:text-left md:w-[60%]"
          >
            <motion.h1
              variants={fadeInUpAnimation}
              className="text-4xl sm:text-5xl md:text-6xl text-primary font-amsterdam"
            >
              The Benefits of Choosing SA BLOGS
            </motion.h1>
            <motion.p
              variants={fadeInUpAnimation}
              className="text-[15px] mt-3 md:w-[80%]"
            >
              Welcome to SA BLOGS, where coding meets creativity! Our mission is
              to provide a comprehensive resource for developers of all skill
              levels. We offer in-depth tutorials, insightful articles, and the
              latest trends in web development to help you enhance your skills
              and navigate the ever-evolving tech landscape.
            </motion.p>
            <motion.a
              variants={fadeInUpAnimation}
              href="#_"
              className="relative mt-3 inline-flex items-center justify-center px-5 py-2 overflow-hidden  tracking-tighter text-black font-semibold bg-white rounded-lg group"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-primary rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="relative">Read More</span>
            </motion.a>
          </motion.div>
          <motion.div variants={fadeInUpAnimation} className="img w-[80%] mx-auto md:w-[40%]">
            <img
              src="/images/logo.svg"
              className="rounded-full w-[80%] mx-auto"
              alt="IMG_NOT_FOUND"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default AboutUs
