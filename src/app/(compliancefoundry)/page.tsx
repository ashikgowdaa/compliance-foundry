import React from "react";
import BannerSection from "./(home)/banner/BannerSection";
import AboutUs from "./(home)/aboutus/page";
import ServicesSection from "./(home)/services/Services";
import PortfolioPage from "./(home)/resource/ResourceSection";
import TestimonialSection from "./(home)/testimonials/page";
import ContactSection from "./(home)/contactus/page";
import { StaticWebsiteKeys } from "@/config";
import PricingSection from "./(home)/pricing/Pricing";

const ComplianceFoundry = () => {
  return (
    <>
      <BannerSection websiteSection={StaticWebsiteKeys.CF} />
      <AboutUs />
      <ServicesSection websiteSection={StaticWebsiteKeys.CF} />
      <PortfolioPage websiteSection={StaticWebsiteKeys.CF} />
      <PricingSection websiteSection={StaticWebsiteKeys.CF}/>
      {/* <TestimonialSection />
      <ContactSection /> */}
    </>
  );
};

export default ComplianceFoundry;
