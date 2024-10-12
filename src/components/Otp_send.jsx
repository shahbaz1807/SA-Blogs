import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Otp_send = ({ data }) => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState({ otpCode: "" });
  const [code, setCode] = useState(null);

  const handleInp = (e) => {
    setOtp({ ...otp, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("https://sa-blogs-backend.vercel.app/user/check_otp")
      .then((res) => {
        setCode(res.data);
        console.log(res.data);
        if (parseInt(code.code) === parseInt(otp.otpCode)) {
          axios
            .post("https://sa-blogs-backend.vercel.app/user/sign_up", data)
            .then((res) => {
              console.log(res.data);
              if (res.data.message) {
                toast.warning("You Have Already Account!");
              } else if (res.data.email) {
                navigate("/");
                toast.success("Account created successfully!");
                localStorage.setItem(
                  "otpSuccessMessage",
                  "Account Created Successfully!",
                );
                localStorage.setItem("userEmail", res.data.email);
                localStorage.setItem("userName", res.data.name);
                localStorage.setItem("userPassword", res.data.password);
              }
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          toast.error("Your OTP is incorrect.");
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios
      .get("https://sa-blogs-backend.vercel.app/user/check_otp")
      .then((res) => {
        setCode(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

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
        duration: 0.7,
      },
    },
  };

  return (
    <>
      <ToastContainer />
      <section className="overflow-hidden h-[100vh] bg-[#303030]">
        <motion.div
          variants={fadeInUpAnimation}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
        >
          <motion.a
            variants={fadeInUpAnimation}
            href="/"
            className="flex items-center mb-6 text-2xl font-semibold  text-gray-900 dark:text-white"
          >
            <motion.img
              variants={fadeInUpAnimation}
              className="w-8 h-8 mr-2"
              src="/images/logo.svg"
              alt="logo"
            />
            SA BLOGS
          </motion.a>
          <motion.div
            variants={fadeInUpAnimation}
            className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-primary"
          >
            <motion.div
              variants={fadeInUpAnimation}
              className="p-6 space-y-4 md:space-y-6 sm:p-8"
            >
              <motion.h1
                variants={fadeInUpAnimation}
                className="text-sm mb-5 leading-tight tracking-tight text-black md:text-base"
              >
                A Text Message with 6-digit verification code we just send to{" "}
                {data.email}
              </motion.h1>
              <motion.form
                onSubmit={handleSubmit}
                variants={fadeInUpAnimation}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <motion.div variants={fadeInUpAnimation}>
                  <motion.label
                    variants={fadeInUpAnimation}
                    htmlFor="email"
                    className="block mb-2 text-lg font-medium text-black"
                  >
                    Enter The Code
                  </motion.label>
                  <motion.input
                    variants={fadeInUpAnimation}
                    type="text"
                    name="otpCode"
                    value={otp.otpCode}
                    onChange={handleInp}
                    id="otp"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your code"
                    required=""
                  />
                </motion.div>
                <motion.button
                  variants={fadeInUpAnimation}
                  type="submit"
                  className="w-full text-white bg-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </motion.button>
                <motion.p
                  variants={fadeInUpAnimation}
                  className="text-sm font-light text-black"
                >
                  Already have an account?{" "}
                  <a
                    href="/login"
                    className="font-medium text-primary-600  hover:underline dark:text-primary-500"
                  >
                    Login here
                  </a>
                </motion.p>
              </motion.form>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Otp_send;
