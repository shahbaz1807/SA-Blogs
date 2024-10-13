import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { FaBarsStaggered, FaUserLarge } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { animate, stagger } from "framer-motion/dom";

const ClientNavbar = () => {
  const Navlinks = useRef();
  const [user, setUser] = useState(false);

  const showNav = () => {
    Navlinks.current.style.right = "0";
  };
  const hideNav = () => {
    Navlinks.current.style.right = "-400px";
  };

  useEffect(() => {
    const user = localStorage.getItem("userEmail");
    if (!user) {
      setUser(true);
    }
  }, []);

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
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-between fixed top-0 z-[3] w-full items-center px-5 md:px-10 lg:px-16 text-white h-20 bg-[#2e2e2e] "
    >
      <motion.div
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="logo flex gap-2 items-center text-white"
      >
        <img src="/images/logo.svg" width={35} alt="IMG_NOT_FOUND" />
        <h1 className="text-2xl font-bold">SA BlOGS</h1>
      </motion.div>
      <motion.ul
        variants={fadeInUpAnimation}
        initial="hidden"
        animate="show"
        className="navlinks lg:flex gap-10 hidden"
      >
        <motion.li variants={fadeInUpAnimation}>
          <Link to={"/"}>HOME</Link>
        </motion.li>
        <motion.li variants={fadeInUpAnimation}>
          <Link to={"/about_us"}>About</Link>
        </motion.li>
        <motion.li variants={fadeInUpAnimation}>
          <Link to={"/all_blogs"}>Blogs</Link>
        </motion.li>
        <motion.li variants={fadeInUpAnimation}>
          <Link to={"/contact_us"}>Contact</Link>
        </motion.li>
      </motion.ul>
      <div
        ref={Navlinks}
        className="m-navlinks py-5 px-5 transition-all duration-500 z-40 absolute top-0 bg-[#000000] w-[360px] -right-[400px]  h-screen gap-10 lg:hidden"
      >
        <div className="text-right">
          <button onClick={hideNav}>
            <IoIosCloseCircle size={34} />
          </button>
        </div>
        <ul className="space-y-6 text-center mt-12">
          <li>
            <Link to={"/"}>HOME</Link>
          </li>
          <li>
            <Link to={"/about_us"}>About</Link>
          </li>
          <li>
            <Link to={"/all_blogs"}>Blogs</Link>
          </li>
          <li>
            <Link to={"/contact_us"}>Contact</Link>
          </li>
        </ul>
        {user && (
          <div className="w-[165px] mt-9 mx-auto">
            <Link
              to={"/signup"}
              className="flex items-center py-2 px-4 rounded-md gap-2 bg-primary text-sm text-black"
            >
              <FaUserLarge />
              Create Account
            </Link>
          </div>
        )}
      </div>
      {user && (
        <motion.div
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="hidden lg:block"
        >
          <Link
            to={"/signup"}
            className="flex items-center py-2 px-4 rounded-md gap-2 bg-primary text-sm text-black"
          >
            <FaUserLarge />
            Create Account
          </Link>
        </motion.div>
      )}
      <motion.div
        initial={{ x: 50 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="lg:hidden"
      >
        <FaBarsStaggered size={25} onClick={showNav} />
      </motion.div>
    </motion.nav>
  );
};

export default ClientNavbar;
