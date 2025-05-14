import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import {headerData} from "../../../dummyData";
import {bannerData} from "../../../dummyData";
import {footerData} from "../../../dummyData";


const Fixpliance = () => {

// API WILL FETCHING THINGS HEADER DATA
  return (
   <>
   <Header headerData={headerData} />
   <Banner bannerData={bannerData}/>
   <Footer footerData={footerData} />
   </>
  )
}

export default Fixpliance