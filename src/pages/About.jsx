import React from "react";
import AboutHero from "../components/About/AboutHero";
import AboutSection from "../components/About/AboutSection";
import WhyChooseUs from "../components/About/WhyChooseUs";
import ProcessSection from "../components/About/ProcessSection";
import ValuesSection from "../components/About/ValuesSection";
import IndustriesSection from "../components/About/IndustriesSection";
import SecurityTrust from "../components/About/SecurityTrust";
import HeroIntro from "../components/About/HeroIntro";



const About = () => {
  return (
    <>
      {/* <AboutHero/> */}
      <AboutSection/>
      <ValuesSection/>

      <WhyChooseUs/>
      <IndustriesSection/>
      <SecurityTrust/>
      <ProcessSection/>
      <HeroIntro/>
    </>
  );
};

export default About;
