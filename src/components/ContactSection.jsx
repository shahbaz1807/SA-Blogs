import React from 'react'
import { motion, useInView } from "framer-motion";
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useForm, ValidationError } from "@formspree/react";
import { toast } from 'react-toastify';

const ContactSection = () => {

  const ref = useRef(null);
  const formRef = useRef(null)
  const isInView = useInView(ref, { once: true }); 

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

  function ContactForm() {
  const [state, handleSubmit] = useForm("xgvewero");
  if (state.succeeded) {
      toast.success("Thanks for contact us");
      formRef.current.reset()
  }
  return (
    <motion.form
    ref={formRef}
      onSubmit={handleSubmit}
      variants={fadeInUpAnimation}
      className="flex flex-wrap -m-2"
    >
      <motion.div variants={fadeInUpAnimation} className="p-2 w-1/2">
        <div className="relative">
          <label htmlFor="name" className="leading-7 text-sm text-gray-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            required
          />
        </div>
      </motion.div>
      <motion.div variants={fadeInUpAnimation} className="p-2 w-1/2">
        <div className="relative">
          <label htmlFor="email" className="leading-7 text-sm text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            required
          />
        </div>
      </motion.div>
      <motion.div variants={fadeInUpAnimation} className="p-2 w-full">
        <div className="relative">
          <label htmlFor="message" className="leading-7 text-sm text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            required
          ></textarea>
        </div>
      </motion.div>
      <motion.div variants={fadeInUpAnimation} className="p-2 w-full">
        <button className="flex mx-auto font-medium text-black bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Submit
        </button>
      </motion.div>
      <motion.div
        variants={fadeInUpAnimation}
        className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"
      >
        <a
          href={"mailto:shahbazansari8199@gmail.com"}
          target="_blank"
          className="text-indigo-500"
        >
          shahbazansari8199@gmail.com
        </a>
        <p className="leading-normal my-5">Shahbaz Ansari</p>
        <span className="inline-flex">
          <a className="text-gray-500"></a>
          <a className="ml-4 text-gray-500"></a>
          <a className="ml-4 text-gray-500"></a>
          <a className="ml-4 text-gray-500"></a>
        </span>
      </motion.div>
    </motion.form>
  );
}

  return (
    <section className="bg-[#303030] text-gray-300 body-font relative">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={fadeInUpAnimation}
        className="container px-5 py-24 mx-auto"
      >
        <motion.div
          variants={fadeInUpAnimation}
          className="flex flex-col text-center w-full mb-12"
        >
          <motion.h1
            variants={fadeInUpAnimation}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-3 font-amsterdam text-primary"
          >
            Contact Us
          </motion.h1>
          <motion.p
            variants={fadeInUpAnimation}
            className="lg:w-2/3 mx-auto leading-relaxed text-base mt-4 text-gray-300"
          >
            We’d love to hear from you! Reach out with any questions or
            feedback.
          </motion.p>
        </motion.div>
        <motion.div
          variants={fadeInUpAnimation}
          className="lg:w-1/2 md:w-2/3 mx-auto"
        >
            <ContactForm/>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ContactSection
