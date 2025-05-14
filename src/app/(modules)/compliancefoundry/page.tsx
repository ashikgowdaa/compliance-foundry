import React from 'react';
// import Banner from '@/components/Banner';
// import Footer from '@/components/Footer';
// import Header from '@/components/Header';
// import {headerData} from "../../../dummyData";
// import {bannerData} from "../../../dummyData";
// import {footerData} from "../../../dummyData";

type ComplianceFoundryProps = {
  children: React.ReactNode;

};
const ComplianceFoundry = ({children}:ComplianceFoundryProps) => {

// API WILL FETCHING 
  return (
    <>
    {children}
   {/* <Header headerData={headerData} />
   <Banner bannerData={bannerData}/>
   <Footer footerData={footerData} /> */}
   </>
  )
}

export default ComplianceFoundry