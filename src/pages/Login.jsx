import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    remindMe: false,
  });

  const navigate = useNavigate();

  const handleInp = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginData.remindMe === true) {
      localStorage.setItem("email", loginData.email);
      localStorage.setItem("password", loginData.password);
      axios
        .post("https://sa-blogs-backend.vercel.app/user/sign_in", loginData)
        .then((res) => {
          console.log(res.data);

          if (res.data.message) {
            toast.error(res.data.message);
          } else if (res.data.email) {
            navigate("/");
            localStorage.setItem(
              "otpSuccessMessage",
              "Account login successfully!",
            );
            localStorage.setItem("userEmail", res.data.email);
            localStorage.setItem("userName", res.data.name);
            localStorage.setItem("userPassword", res.data.password);
          }
        })
        .catch((error) => {
          console.log(error);
        });
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

  useEffect(() => {
    const storeEmail = localStorage.getItem("email");
    const storePassword = localStorage.getItem("password");
    if (!storeEmail | !storePassword) {
      console.log("User is not logged in.");
    } else {
      const localData = {
        email: storeEmail,
        password: storePassword,
        remindMe: true,
      };
      setLoginData(localData);
    }
  }, []);

  return (
    <>
      <ToastContainer />
      <section className="h-[100vh] overflow-hidden bg-[#303030]">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeInUpAnimation}
          className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
        >
          <motion.a
            variants={fadeInUpAnimation}
            href="/"
            className="flex items-center mb-6 text-2xl font-semibold  text-gray-900 dark:text-white"
          >
            <img className="w-8 h-8 mr-2" src="/images/logo.svg" alt="logo" />
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
                Sigin your account
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
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Your email
                  </motion.label>
                  <motion.input
                    variants={fadeInUpAnimation}
                    value={loginData.email}
                    onChange={handleInp}
                    type="email"
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
                    type="text"
                    name="password"
                    value={loginData.password}
                    onChange={handleInp}
                    id="password"
                    placeholder="Enter Your password"
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
                      variants={fadeInUpAnimation}
                      id="terms"
                      name="remindMe"
                      aria-describedby="terms"
                      type="checkbox"
                      checked={loginData.remindMe}
                      onChange={() =>
                        setLoginData((prevData) => ({
                          ...prevData,
                          remindMe: !prevData.remindMe,
                        }))
                      }
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </motion.div>
                  <motion.div
                    variants={fadeInUpAnimation}
                    className="ml-3 text-sm"
                  >
                    <label htmlFor="terms" className="font-light text-black">
                      Remind me
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
                  I don't have account?{" "}
                  <a
                    href="/signup"
                    className="font-medium text-primary-600  hover:underline dark:text-primary-500"
                  >
                    Signup here
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

export default Login;
