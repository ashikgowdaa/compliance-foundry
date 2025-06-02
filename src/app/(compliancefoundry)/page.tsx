import React from "react";
import BannerSection from "./(home)/banner/BannerSection";
import AboutUs from "./(home)/aboutus/page";
import ServicesSection from "./(home)/services/page";
import PortfolioPage from "./(home)/portfolio/page";
import TestimonialSection from "./(home)/testimonials/page";
import ContactSection from "./(home)/contactus/page";
import { StaticWebsiteKeys } from "@/config";



const ComplianceFoundry = () => {
  return (
    <>
      <BannerSection websiteSection={StaticWebsiteKeys.CF} />
      <AboutUs />
      <ServicesSection websiteSection={StaticWebsiteKeys.CF} />
      <PortfolioPage websiteSection={StaticWebsiteKeys.CF} />
      <TestimonialSection />
      <ContactSection />
    </>
  );
};

export default ComplianceFoundry;
