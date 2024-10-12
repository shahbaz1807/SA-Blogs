import { motion , useInView } from 'framer-motion';
import React from 'react'
import { useRef } from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); 

    const fadeInUpAnimation = {
      hidden: {
        opacity: 0,
      },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          duration: 1.5,
        },
      },
    };

  return (
    <footer className="text-gray-300 bg-[#2e2e2e] body-font">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={fadeInUpAnimation}
        className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col"
      >
        <motion.a
          variants={fadeInUpAnimation}
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <motion.img
            variants={fadeInUpAnimation}
            src="/images/logo.svg"
            width={35}
            alt="IMG_NOT_FOUND"
          />
          <motion.span
            variants={fadeInUpAnimation}
            className="ml-5 tracking-wider text-primary text-2xl font-amsterdam"
          >
            SA BLOGS
          </motion.span>
        </motion.a>
        <motion.p
          variants={fadeInUpAnimation}
          className="text-sm text-gray-200 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"
        >
          © SHANBAZ ANSARI
        </motion.p>
        <motion.span
          variants={fadeInUpAnimation}
          className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"
        >
          <motion.a
            href="https://www.facebook.com/profile.php?id=61561335181043"
            target="_blank"
            variants={fadeInUpAnimation}
            className="text-gray-200"
          >
            <FaFacebook size={24} />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/shahbaz_ansari_2007/"
            target="_blank"
            variants={fadeInUpAnimation}
            className="ml-3 text-gray-200"
          >
            <AiFillInstagram size={26} />
          </motion.a>
          <motion.a
            href="mailto:shahbazansari8199@gmail.com"
            target='_blank'
            variants={fadeInUpAnimation}
            className="ml-3 text-gray-200"
          >
            <MdEmail size={26} />
          </motion.a>
        </motion.span>
      </motion.div>
    </footer>
  );
}

export default Footer
