import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import GettingStarted from '../components/GettingStarted'
import TruckTypes from '../components/TruckTypes'
import Operation from '../components/Operation'
import TruckServices from '../components/TruxkService'
import TruckLayout from '../components/TrackLayout'
// import ArticleSection from '../components/ArticalSection'

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
        {/* <ArticleSection/> */}
    </div>
  )
}

export default Home