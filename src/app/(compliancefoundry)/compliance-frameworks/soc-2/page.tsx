import React from 'react';
import BannerSection from '../../(home)/banner/BannerSection';
import AboutUs from '../../(home)/aboutus/page';
import ServicesSection from '../../(home)/services/page';
import PortfolioPage from '../../(home)/portfolio/page';
import TestimonialSection from '../../(home)/testimonials/page';
import ContactSection from '../../(home)/contactus/page';
import { StaticWebsiteKeys } from '@/config';



const RapidSoc2 = () => {

  return (
   <>

      <BannerSection websiteSection={StaticWebsiteKeys.RP} />
      <AboutUs />
      <ServicesSection  websiteSection={StaticWebsiteKeys.RP}/>
      <PortfolioPage websiteSection={StaticWebsiteKeys.RP} />
      <TestimonialSection />
      <ContactSection />
   </>
  )
}

export default RapidSoc2