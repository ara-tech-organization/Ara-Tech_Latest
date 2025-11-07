import React from "react";
import Hero from "../components/Organisation/Hero";
import FeatureHighlights from "../components/Organisation/FeatureHighlights";
import Suites from "../components/Organisation/Suites";
import TeamsGrid from "../components/Organisation/TeamsGrid";
import TestimonialShowcase from "../components/Organisation/TestimonialShowcase";



const Organisation = () => {
  return (
    <>
     <Hero/>
     <FeatureHighlights/>
     <Suites/>
     <TeamsGrid/>
     <TestimonialShowcase/>
    </>
  );
};

export default Organisation;
