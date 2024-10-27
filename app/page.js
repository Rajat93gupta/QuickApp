import React from 'react'
import HeroSection from './component/HeroSection/HeroSection'
import ShareApp from './component/Body/ShareApp'
import FeatureSection from './component/Body/FeatureSection'
import PreviewApp from './component/Body/PreviewApp'
import TimeLineApp from './component/Body/TimelineCost'
import FeatureLookingFor from './component/Body/FeatureLookingFor'
import RequestDemo from './component/Body/RequestDemo'
import AccordianSection from './component/Body/AccordianSection'
import Brainstorm from './component/Body/BrainStorm'
import TestimonialSlider from './component/Body/Slider'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <ShareApp/>
      <FeatureSection/>
      <PreviewApp/>
      <TimeLineApp/>
      <FeatureLookingFor/>
      <RequestDemo/>
      <TestimonialSlider/>
      <AccordianSection/>
      <Brainstorm/>
    </div>
  )
}

export default Home
