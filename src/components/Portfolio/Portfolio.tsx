"use client";

import React from "react";
import Wrapper from "@/utitly-css/Wrapper";
import Flex from "@/utitly-css/Flex";
import SwiperCarousel from "../custom-components/Slider";
import  SlideContent from "./SlideContent";

const data = [
  {
    id: 1,
    title: "Dave Financial CRM",
    desc: "Lorem ipsum dolor sit amet consectetur. Eu lobortis aliquet nec dui blandit faucibus proin vitae adipiscing.",
    img: "/laptop-dave.png",
    tech: [
      "html5-plain",
      "css3-plain",
      "react-original",
      "wordpress-plain",
      "aws-plain",
    ],
  },
  {
    id: 2,
    title: "Dave  CRM",
    desc: "Lorem ipsum dolor sit amet consectetur. Eu lobortis aliquet nec dui blandit faucibus proin vitae adipiscing.",
    img: "/laptop-dave.png",
    tech: [
      "html5-plain",
      "css3-plain",
      "react-original",
      "wordpress-plain",
      "aws-plain",
    ],
  },
  {
    id: 2,
    title: " Financial CRM",
    desc: "Lorem ipsum dolor sit amet consectetur. Eu lobortis aliquet nec dui blandit faucibus proin vitae adipiscing.",
    img: "/laptop-dave.png",
    tech: [
      "html5-plain",
      "css3-plain",
      "react-original",
      "wordpress-plain",
      "aws-plain",
    ],
  },
  // add more case‑studies here...
];

const Portfolio = () => {
  return (
    <Wrapper className="bg-primary">
      <Flex>
        <div className="w-[80%]">
          <Flex direction="col">
            <p>aboutData?.sectionLabel</p>
            <h4>
              aboutData?.title <br /> aboutData?.subtitle
            </h4>
          </Flex>

          <SwiperCarousel
            data={data}
            SlideComponent={SlideContent}
            gap={40} // optional
          />
        </div>
      </Flex>
    </Wrapper>
  );
};

export default Portfolio;
