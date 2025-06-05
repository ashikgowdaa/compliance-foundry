export const IMAGE_END = process.env.NEXT_PUBLIC_IMAGE_END;
const ENVIRONMENT = process.env.NEXT_PUBLIC_ENV;


export const imageGenerationUrl = (url:string) =>{
  if (ENVIRONMENT === "DEV"){
   return IMAGE_END + url
  }
  else{
    return  url 
  }
}

export const StaticWebsiteKeys = {
    CF:  "compliancefoundry",
    RP:  "rapidsoc2.com",
    FAI: "fixplanai",
    HIP: "happyHippa",
    CBS: "comperiscybersecurity",
  } as const;  
  

  export const API_ENDPOINTS = {
    announcement:{
      getAnnouncement : "announcements?sort[0]=createdAt:desc&pagination[limit]=1"

    },
    bannerSection:{
      getBanner : "banners?populate[ClientLogo][populate]=*&populate[BannerImage_Video][populate]=*"

    },
    about : {
      getAbout : "about-uses?populate=*"
    },
    services:{
      getServices:"services?populate[accordionSection][populate]=accordionImage&populate=WebsiteDomain"
    },
    resources:{
      getResources:"resources?populate=*"
    },
    pricing:{
      getPricing:"pricings?populate=*"
    },
    testimonial:{
      getTestimonials:"testimonials?populate[testimonialCard][populate]=authorImage"
    }
  }