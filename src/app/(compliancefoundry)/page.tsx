import React from "react";
import BannerSection from "./(home)/banner/BannerSection";
import AboutUs from "./(home)/aboutus/page";
import ServicesSection from "./(home)/services/Services";
import PortfolioPage from "./(home)/resource/ResourceSection";
import TestimonialSection from "./(home)/testimonials/page";
import ContactSection from "./(home)/contactus/page";
import { StaticWebsiteKeys } from "@/config";
import AnimatedSection from "@/components/custom-components/Animated";



const ComplianceFoundry = () => {
  return (
    <>
    <AnimatedSection animationVariant="fadeUp">
      <BannerSection websiteSection={StaticWebsiteKeys.CF} />
    </AnimatedSection>
    <AnimatedSection animationVariant="fadeUp">

      <AboutUs />
    </AnimatedSection>
      <ServicesSection websiteSection={StaticWebsiteKeys.CF} />
      <PortfolioPage websiteSection={StaticWebsiteKeys.CF} />
      {/* <TestimonialSection />
      <ContactSection /> */}
    </>
  );
};

export default ComplianceFoundry;
