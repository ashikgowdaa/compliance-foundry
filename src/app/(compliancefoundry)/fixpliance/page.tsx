import React from "react";
import BannerSection from "../(home)/banner/page";
import AboutUs from "../(home)/aboutus/page";
import ServicesSection from "../(home)/services/page";
import PortfolioPage from "../(home)/portfolio/page";
import TestimonialSection from "../(home)/testimonials/page";
import ContactSection from "../(home)/contactus/page";
import SubHeaderSection from "../(common)/sub-header/page";
import SubFooterSection from "../(common)/sub-header/page";
import { StaticWebsiteKeys } from "@/config";

export const Fixpliance = () => {

  return (
    <>
      <SubHeaderSection />
      <BannerSection websiteSection={StaticWebsiteKeys.FAI} />
      <AboutUs />
      <ServicesSection />
      <PortfolioPage />
      <TestimonialSection />
      <ContactSection />
      <SubFooterSection/>
    </>
  );
};

export default Fixpliance;
