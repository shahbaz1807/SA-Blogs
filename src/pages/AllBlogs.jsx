import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Blogs from "../data/allBlogs.json";
import ShowBlog from "../components/ShowBlog";
import ClientNavbar from "../components/ClientNavbar";
import axios from "axios";
import { toast } from "react-toastify";

const AllBlogs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [blogData, setBlogData] = useState(null);
  const [Popup, setPopup] = useState(false);

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
    <ClientNavbar/>
      <section className="min-h-[100vh] pt-20 bg-[#353535] text-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 py-8">
          <div className=" text-center mb-20">
            <motion.h1
              // ref={ref}
              variants={fadeInUpAnimation}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-3 font-amsterdam text-primary"
            >
              All Blogs
            </motion.h1>
            <motion.p
              ref={ref}
              variants={fadeInUpAnimation}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="text-gray-300"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem iste
              quasi incidunt?
            </motion.p>
          </div>
          <motion.div variants={fadeInUpAnimation} initial="hidden" animate="show"  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-6 gap-y-11">
            {Blogs.map((blog) => {
              return (
                <motion.div
                variants={fadeInUpAnimation}
                  onClick={() => {
                    setPopup(true);
                    setBlogData(blog);
                  }}
                  key={blog.date}
                  className="h-auto group w-full cursor-pointer bg-[#404040] overflow-hidden rounded-lg"
                >
                  <div className="w-full h-56 overflow-hidden">
                    <img
                      src={blog.img}
                      alt="IMG_NOT_FOUND"
                      className="w-full h-full bg-white group-hover:scale-125 transition-all duration-500"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-[12px] text-right">{blog.date}</p>
                    <a className="text-lg sm:text-xl mt-[-7px] font-semibold group-hover:text-primary group-hover:underline">
                      {blog.title}
                    </a>
                    <p className="text-sm mt-2 text-gray-300">
                      {blog.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
      {Popup && <ShowBlog setPopup={setPopup} blogData={blogData} />}
    </>
  );
};

export default AllBlogs;
