import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import GettingStarted from '../components/GettingStarted'
import TruckTypes from '../components/TruckTypes'
import Operation from '../components/Operation'
import TruckServices from '../components/TruxkService'
import TruckLayout from '../components/TrackLayout'
import ArticleSection from '../components/ArticalSection'
import ContactForm from '../components/Contact'
import TrustSection from '../components/TrustSection'
import Testimonials from '../components/Testimonials'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'
import CopyRight from '../components/CopyRight'

const Home = () => {
  return (
    <div>
         <HeroSection/>
        <About/>
        <GettingStarted/>
        <TruckTypes/>
        <Operation/>
        <TruckServices/>
        <TruckLayout/> 
        <ArticleSection/>
        <ContactForm/>
         <TrustSection/>
        <Testimonials/> 
        <CallToAction/>
        <Footer/>
        <CopyRight/>
    </div>
  )
}

export default Home