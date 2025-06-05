import React from "react";
import BannerSection from "../../(home)/banner/BannerSection";
import AboutUs from "../../(home)/aboutus/page";
import ServicesSection from "../../(home)/services/Services";
import PortfolioPage from "../../(home)/resource/ResourceSection";
import TestimonialSection from "../../(home)/testimonials/Testimonilas";
import ContactSection from "../../(home)/contactus/page";
import { StaticWebsiteKeys } from "@/config";



const Hippa = () => {
  return (
    <>
      <BannerSection websiteSection={StaticWebsiteKeys.HIP} />
      <AboutUs />
      <ServicesSection websiteSection={StaticWebsiteKeys.HIP} />
      <PortfolioPage websiteSection={StaticWebsiteKeys.HIP}/>
      <TestimonialSection websiteSection={StaticWebsiteKeys.HIP} />
      <ContactSection />
    </>
  );
};

export default Hippa;
