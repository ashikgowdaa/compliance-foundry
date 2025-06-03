import React from "react";
import BannerSection from "../(home)/banner/BannerSection";
import AboutUs from "../(home)/aboutus/page";
import ServicesSection from "../(home)/services/Services";
import PortfolioPage from "../(home)/resource/ResourceSection";
import TestimonialSection from "../(home)/testimonials/page";
import ContactSection from "../(home)/contactus/page";
import SubHeaderSection from "../(common)/sub-header/page";
import SubFooterSection from "../(common)/sub-header/page";
import { StaticWebsiteKeys } from "@/config";

export default function Fixpliance() {
  return (
    <>
      <SubHeaderSection />
      <BannerSection websiteSection={StaticWebsiteKeys.FAI} />
      <AboutUs />
      <ServicesSection  websiteSection={StaticWebsiteKeys.FAI}/>
      <PortfolioPage  websiteSection={StaticWebsiteKeys.FAI} />
      <TestimonialSection />
      <ContactSection />
      <SubFooterSection />
    </>
  );
}
