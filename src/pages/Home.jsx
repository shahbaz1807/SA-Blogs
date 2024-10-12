import React, { useEffect } from 'react'
import ClientNavbar from '../components/ClientNavbar'
import HeroSection from '../components/HeroSection'
import LatestBlogs from '../components/LatestBlogs'
import AboutUs from '../components/AboutUs'
import NewWebsites from '../components/NewWebsites'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import { toast } from 'react-toastify'

const Home = () => {
    useEffect(() => {
      const successMessage = localStorage.getItem("otpSuccessMessage");

      if (successMessage) {
        toast.success(successMessage);
        localStorage.removeItem("otpSuccessMessage");
        localStorage.getItem("user" , true)
      }
    }, []);
  return (
    <>
      <ClientNavbar/>
      <HeroSection/>
      <LatestBlogs/>
      <NewWebsites/>
      <AboutUs/>
      <ContactSection/>
      <Footer/>
    </>
  )
}

export default Home
