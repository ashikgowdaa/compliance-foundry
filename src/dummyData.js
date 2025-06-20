
import { Instagram, Linkedin, X, Youtube } from "lucide-react"; 

export  const headerDataWebsite = {
  logoImage: "https://media.licdn.com/dms/image/v2/D560BAQHI9GXVQmSMDA/company-logo_200_200/company-logo_200_200/0/1697048974016/compliancefoundry_logo?e=1752710400&v=beta&t=wyCT94nYtvvl8hsL-9REJw1uDZEgoF66UIa7FzN8WYU", 
  navLinks: [
    { label: "Compliance foundry", href: "/compliancefoundry" },
    { label: "Fixplan Ai", href: "/fixpliance" },
    { label: "RapidSoc2", href: "/rapidsoc2" },
  ],
};

export  const headerData = {
    logoImage: "https://media.licdn.com/dms/image/v2/D560BAQHI9GXVQmSMDA/company-logo_200_200/company-logo_200_200/0/1697048974016/compliancefoundry_logo?e=1752710400&v=beta&t=wyCT94nYtvvl8hsL-9REJw1uDZEgoF66UIa7FzN8WYU", 
    // navLinks: [
    //   { label: "Compliance foundry", href: "/compliancefoundry" },
    //   { label: "Fixplan Ai", href: "/fixpliance" },
    //   { label: "RapidSoc2", href: "/rapidsoc2" },
    //   { label: "Contact", href: "/contact" },
    //   { label: "About", href: "/about" },

    // ],
    navLinks: [
      { label: "Home", href: "/home" },
      { label: "Services", href: "/Services" },
      { label: "Contact", href: "/contact" },
      { label: "About", href: "/about" },

    ],
  };
  
export const footerData = [
    {
      title: "Company",
      links: ["About Us",  "Contact"],
    },
    {
      title: "Product",
      links: ["Features", "Pricing", ],
    },
    {
      title: "Join Us",
      links: [
        { icon: <Linkedin />, href: "https://www.linkedin.com" },
        { icon: <X />, href: "https://twitter.com" },
        { icon: <Instagram />, href: "https://twitter.com" },
       { icon: <Youtube />, href: "https://twitter.com" },

      ],
    },
  ];
  
export const bannerData = {
    title :`Elevate your vision ignite.\nTomorrow's Innovation`,
    subtitle : "Crafting digital Excellence for a future Beyond Imagination",
    backgroundImage :"/images/bannerBG.jpg"
  }


  export const aboutData = {

    title: "EPIC BEGINNINGS: UNVEILING OUR ESSENCE",
    subtitle: "CRAFTING FUTURE WITH EXCELLENCE",
    sectionLabel: "who we are",
    logo: {
      src: "/images/about.jpg",
      alt: "logo-image-error",
    },
    content: {
      heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt reprehenderit reiciendis sed iure, optio esse!",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt atque ipsum illo nam, recusandae similique dolore, veritatis quibusdam sunt sequi explicabo ullam. Adipisci dignissimos, voluptatem numquam ea sint vero impedit deleniti consectetur nemo esse nostrum quod doloremque molestias perspiciatis harum nam similique! Tempora dicta quo ab assumenda sapiente! Possimus, deserunt.`,
      buttonText: "Who we are ?",
    },
  };
  


  export const caseStudiesData = {
    label: "Case Studies",
    subtitle: "Explore our success stories",
    studies: [
      {
        id:1,
        title: "Case Study 1",
        description: "<p>This is <strong>rich</strong> text with <a href='https://example.com'>links</a>, lists, and more.</p>",
        image: "/images/case1.jpg",
        contentComponent : [
          {
            title: "Our Approach",
            descriptionContent: "<p>This is <strong>rich</strong> text with <a href='https://example.com'>links</a>, lists, and more.</p>",
            "images": {
              "data": [
                {
                  "id": 10,
                  "attributes": {
                    "url": "/uploads/image1.jpg",
                    "alternativeText": "Image 1"
                  }
                },
                {
                  "id": 11,
                  "attributes": {
                    "url": "/uploads/image2.jpg",
                    "alternativeText": "Image 2"
                  }
                }
              ]
            }
          },
          {
            id:2,
            title: "Results Achieved",
            descriptionContent: "<ul><li>First benefit of using our platform</li><li>Second feature highlighted clearly</li><li>Third point to consider</li></ul>",
            "images": {
              "data": [
                {
                  "id": 10,
                  "attributes": {
                    "url": "/uploads/image1.jpg",
                    "alternativeText": "Image 1"
                  }
                },
                {
                  "id": 11,
                  "attributes": {
                    "url": "/uploads/image2.jpg",
                    "alternativeText": "Image 2"
                  }
                }
              ]
            }
          },
        ]
      },
      {
        id:3,
        title: "Case Study 2",
        contentComponent : [
          {
            title: "Our Approach",
            descriptionContent: "<p>This is <strong>rich</strong> text with <a href='https://example.com'>links</a>, lists, and more.</p>",
            "images": {
              "data": [
                {
                  "id": 10,
                  "attributes": {
                    "url": "/uploads/image1.jpg",
                    "alternativeText": "Image 1"
                  }
                },
                {
                  "id": 11,
                  "attributes": {
                    "url": "/uploads/image2.jpg",
                    "alternativeText": "Image 2"
                  }
                }
              ]
            }
          },
          {
            title: "Results Achieved",
            descriptionContent: "<ul><li>First benefit of using our platform</li><li>Second feature highlighted clearly</li><li>Third point to consider</li></ul>",
            "images": {
              "data": [
                {
                  "id": 10,
                  "attributes": {
                    "url": "/uploads/image1.jpg",
                    "alternativeText": "Image 1"
                  }
                },
                {
                  "id": 11,
                  "attributes": {
                    "url": "/uploads/image2.jpg",
                    "alternativeText": "Image 2"
                  }
                }
              ]
            }
          },
        ]    ,
        image: "/images/case2.jpg",
      },
      {
        title: "Case Study 3",
        contentComponent : [
          {
            title: "Our Approach",
            descriptionContent: "<p>This is <strong>rich</strong> text with <a href='https://example.com'>links</a>, lists, and more.</p>",
            "images": {
              "data": [
                {
                  "id": 10,
                  "attributes": {
                    "url": "/uploads/image1.jpg",
                    "alternativeText": "Image 1"
                  }
                },
                {
                  "id": 11,
                  "attributes": {
                    "url": "/uploads/image2.jpg",
                    "alternativeText": "Image 2"
                  }
                }
              ]
            }
          },
          {
            title: "Results Achieved",
            descriptionContent: "<ul><li>First benefit of using our platform</li><li>Second feature highlighted clearly</li><li>Third point to consider</li></ul>",
            "images": {
              "data": [
                {
                  "id": 10,
                  "attributes": {
                    "url": "/uploads/image1.jpg",
                    "alternativeText": "Image 1"
                  }
                },
                {
                  "id": 11,
                  "attributes": {
                    "url": "/uploads/image2.jpg",
                    "alternativeText": "Image 2"
                  }
                }
              ]
            }
          },
        ],
        image: "/images/case3.jpg",
      },
      {
        title: "Case Study 3",
        contentComponent : [
          {
            title: "Our Approach",
            descriptionContent: "<p>This is <strong>rich</strong> text with <a href='https://example.com'>links</a>, lists, and more.</p>",
            "images": {
              "data": [
                {
                  "id": 10,
                  "attributes": {
                    "url": "/uploads/image1.jpg",
                    "alternativeText": "Image 1"
                  }
                },
                {
                  "id": 11,
                  "attributes": {
                    "url": "/uploads/image2.jpg",
                    "alternativeText": "Image 2"
                  }
                }
              ]
            }
          },
          {
            title: "Results Achieved",
            descriptionContent: "<ul><li>First benefit of using our platform</li><li>Second feature highlighted clearly</li><li>Third point to consider</li></ul>",
            "images": {
              "data": [
                {
                  "id": 10,
                  "attributes": {
                    "url": "/uploads/image1.jpg",
                    "alternativeText": "Image 1"
                  }
                },
                {
                  "id": 11,
                  "attributes": {
                    "url": "/uploads/image2.jpg",
                    "alternativeText": "Image 2"
                  }
                }
              ]
            }
          },
        ],
        image: "/images/case3.jpg",
      },
      {
        title: "Case Study 3",
        contentComponent : [
          {
            title: "Our Approach",
            descriptionContent: "<p>This is <strong>rich</strong> text with <a href='https://example.com'>links</a>, lists, and more.</p>",
            "images": {
              "data": [
                {
                  "id": 10,
                  "attributes": {
                    "url": "/uploads/image1.jpg",
                    "alternativeText": "Image 1"
                  }
                },
                {
                  "id": 11,
                  "attributes": {
                    "url": "/uploads/image2.jpg",
                    "alternativeText": "Image 2"
                  }
                }
              ]
            }
          },
          {
            title: "Results Achieved",
            descriptionContent: "<ul><li>First benefit of using our platform</li><li>Second feature highlighted clearly</li><li>Third point to consider</li></ul>",
            "images": {
              "data": [
                {
                  "id": 10,
                  "attributes": {
                    "url": "/uploads/image1.jpg",
                    "alternativeText": "Image 1"
                  }
                },
                {
                  "id": 11,
                  "attributes": {
                    "url": "/uploads/image2.jpg",
                    "alternativeText": "Image 2"
                  }
                }
              ]
            }
          },
        ],
        image: "/images/case3.jpg",
      },
      {
        title: "Case Study 3",
        contentComponent : [
          {
            title: "Our Approach",
            descriptionContent: "<p>This is <strong>rich</strong> text with <a href='https://example.com'>links</a>, lists, and more.</p>",
            "images": {
              "data": [
                {
                  "id": 10,
                  "attributes": {
                    "url": "/uploads/image1.jpg",
                    "alternativeText": "Image 1"
                  }
                },
                {
                  "id": 11,
                  "attributes": {
                    "url": "/uploads/image2.jpg",
                    "alternativeText": "Image 2"
                  }
                }
              ]
            }
          },
          {
            title: "Results Achieved",
            descriptionContent: "<ul><li>First benefit of using our platform</li><li>Second feature highlighted clearly</li><li>Third point to consider</li></ul>",
            "images": {
              "data": [
                {
                  "id": 10,
                  "attributes": {
                    "url": "/uploads/image1.jpg",
                    "alternativeText": "Image 1"
                  }
                },
                {
                  "id": 11,
                  "attributes": {
                    "url": "/uploads/image2.jpg",
                    "alternativeText": "Image 2"
                  }
                }
              ]
            }
          },
        ],
        image: "/images/case3.jpg",
      },
    ],
  }