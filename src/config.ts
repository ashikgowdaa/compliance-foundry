export const IMAGE_END = process.env.IMAGE_END

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
    }
  }