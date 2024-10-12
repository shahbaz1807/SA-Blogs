import React from "react";
import { useState , useRef } from "react";
import Otp_send from "../components/Otp_send";
import { motion, useInView } from "framer-motion";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const [otpPage, setOtpPage] = useState(true);

    const [signUpData, setsignUpData] = useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    });

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleInp = (e) => {
      setsignUpData({ ...signUpData, [e.target.name]: e.target.value });
    };

const handleForm = async (e) => {
  e.preventDefault();

  const emailData = { email: signUpData.email };

  if (signUpData.password === signUpData.confirmPassword) {
          setOtpPage(false);
          const emailData = { email: signUpData.email };
          console.log(setsignUpData);
          console.log(emailData);
          axios
            .post(
              "https://sa-blogs-backend.vercel.app/user/send_otp",
              emailData,
            )
            .then((res) => {
              console.log(res.data);
            })
            .catch((error) => {
              console.log(error);
            });
  } else {
    toast.error("Passwords do not match.");
  }
};


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
      {otpPage ? (
        <>
          {" "}
          <section className="h-[100vh] overflow-hidden bg-[#303030]">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              variants={fadeInUpAnimation}
              className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
            >
              <motion.a
                variants={fadeInUpAnimation}
                href="/"
                className="flex items-center mb-6 text-2xl font-semibold  text-gray-900 dark:text-white"
              >
                <img
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
                    className="text-xl font-bold mb-5 leading-tight tracking-tight text-black md:text-2xl"
                  >
                    Create an account
                  </motion.h1>
                  <motion.form
                    onSubmit={handleForm}
                    variants={fadeInUpAnimation}
                    className="space-y-4 md:space-y-6"
                    action="#"
                  >
                    <motion.div variants={fadeInUpAnimation}>
                      <motion.label
                        variants={fadeInUpAnimation}
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-black"
                      >
                        Name
                      </motion.label>
                      <motion.input
                        variants={fadeInUpAnimation}
                        type="text"
                        value={signUpData.name}
                        onChange={handleInp}
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter your name"
                        required
                      />
                    </motion.div>
                    <motion.div variants={fadeInUpAnimation}>
                      <motion.label
                        variants={fadeInUpAnimation}
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-black"
                      >
                        Email
                      </motion.label>
                      <motion.input
                        variants={fadeInUpAnimation}
                        type="email"
                        value={signUpData.email}
                        onChange={handleInp}
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter your email"
                        required
                      />
                    </motion.div>
                    <motion.div variants={fadeInUpAnimation}>
                      <motion.label
                        variants={fadeInUpAnimation}
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-black"
                      >
                        Password
                      </motion.label>
                      <motion.input
                        variants={fadeInUpAnimation}
                        value={signUpData.password}
                        onChange={handleInp}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter Your password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                    </motion.div>
                    <motion.div variants={fadeInUpAnimation}>
                      <motion.label
                        variants={fadeInUpAnimation}
                        htmlFor="confirm-password"
                        className="block mb-2 text-sm font-medium text-black"
                      >
                        Confirm password
                      </motion.label>
                      <motion.input
                        variants={fadeInUpAnimation}
                        value={signUpData.confirmPassword}
                        onChange={handleInp}
                        type="password"
                        name="confirmPassword"
                        id="confirm-password"
                        placeholder="Confirm your password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                    </motion.div>
                    <motion.div
                      variants={fadeInUpAnimation}
                      className="flex items-start"
                    >
                      <motion.div
                        variants={fadeInUpAnimation}
                        className="flex items-center h-5"
                      >
                        <input
                          id="terms"
                          aria-describedby="terms"
                          type="checkbox"
                          name="acceptTerm"
                          checked={signUpData.acceptTerms}
                          onChange={() =>
                            setsignUpData((prevData) => ({
                              ...prevData,
                              acceptTerms: !prevData.acceptTerms,
                            }))
                          }
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required
                        />
                      </motion.div>
                      <motion.div
                        variants={fadeInUpAnimation}
                        className="ml-3 text-sm"
                      >
                        <label
                          htmlFor="terms"
                          className="font-light text-black"
                        >
                          I accept the{" "}
                          <a
                            className="font-medium  hover:underline dark:text-primary-500"
                            href="/login"
                          >
                            Terms and Conditions
                          </a>
                        </label>
                      </motion.div>
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
      ) : (
        <Otp_send data={signUpData} />
      )}
    </>
  );
};

export default Signup;
