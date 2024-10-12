import React from "react";
import { useRef } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { motion, useInView } from "framer-motion";

const ShowBlog = ({ setPopup, blogData }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
        duration: 0.5,
      },
    },
  };

  const hidePopup = () => {
    setPopup(false);
  }

  return (
    <motion.div
      ref={ref}
      className="fixed top-0 left-0 w-full h-screen z-[2] flex justify-center items-center backdrop-blur-md bg-black/30"
    >
      <motion.div
        variants={fadeInUpAnimation}
        initial="hidden"
        animate="show"
        className="w-[90%] px-5 relative sm:px-7 md:px-10 py-7 m-auto min-h-[70vh] overflow-hidden rounded-xl bg-[#3f3f3f]"
      >
        <motion.div
          variants={fadeInUpAnimation}
          className="flex flex-col gap-7"
        >
          <motion.div variants={fadeInUpAnimation} className="w-1/2 mx-auto">
            <motion.img
              variants={fadeInUpAnimation}
              src={blogData.img}
              className="bg-white rounded-md"
              alt=""
            />
          </motion.div>
          <motion.div variants={fadeInUpAnimation} className="text-white">
            <motion.h1
              variants={fadeInUpAnimation}
              className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl"
            >
              {blogData.title}
            </motion.h1>
            <motion.p
              variants={fadeInUpAnimation}
              className="mt-4 text-gray-300"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates nam fuga minus amet. Accusantium beatae tenetur quam
              porro nisi! Excepturi voluptatum laudantium dolores maiores vel,
              impedit omnis labore, iure id quis vero? Voluptates repudiandae
              sequi recusandae numquam at, enim dolorum fugiat, ut consequuntur
              harum unde.
            </motion.p>
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
        <motion.div
          variants={fadeInUpAnimation}
          className="absolute top-5 right-6"
        >
          <IoMdCloseCircle
            onClick={hidePopup}
            className="text-white cursor-pointer hover:text-gray-300"
            size={30}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ShowBlog;
