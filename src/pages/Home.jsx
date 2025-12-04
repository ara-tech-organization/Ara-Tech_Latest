import React from "react";
import Hero from "../components/Home/Hero";
import SolutionsSection from "../components/Home/SolutionsSection";
import EaseValueCard from "../components/Home/EaseValueCard";
import InsightsSection from "../components/Home/InsightsSection";
import CoreValues from "../components/Home/CoreValues";
import Industries from "../components/Home/Industries";
import PrivacySection from "../components/Home/PrivacySection";
import FAQ from "../components/Home/FAQ";
import SocialJourney from "../components/Home/SocialLinks";
import SocialLinks from "../components/Home/SocialLinks";
import { useOutletContext } from "react-router-dom";

const Home = () => {
   const { initialLoad } = useOutletContext();

  return (
    <>
       <Hero initialLoad={initialLoad} />
      {/* <SolutionsSection/> */}
      <CoreValues />
      <Industries />
      <EaseValueCard />
      <PrivacySection />
      <FAQ />
      <InsightsSection />
      <SocialLinks/>

    </>
  );
};

export default Home;
