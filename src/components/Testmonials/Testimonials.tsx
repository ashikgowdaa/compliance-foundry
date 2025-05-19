"use client";

import React from "react";
import Wrapper from "@/utitly-css/Wrapper";
import Flex from "@/utitly-css/Flex";
import SwiperCarousel from "../custom-components/Slider";
import Cardcontent from "./Cardcontent";

 const data = [
    {
      id: 1,
      photo: "/images/team/jacob.jpg",
      name: "Jacob",
      role: "CEO – IT Solution Company",
      text:
        "Lorem ipsum dolor sit amet consectetur. Bibendum quis fringilla odio " +
        "maecenas magna eu ultrices aliquam egestas. Erim phasellus eu commodo " +
        "nibh vitae amet elit. Ut natoque dui.",
    },
    {
      id: 2,
      photo: "/images/team/emma.jpg",
      name: "Emma Clark",
      role: "Head of Product",
      text:
        "Cras mattis nunc vitae nulla imperdiet, a ultrices nibh elementum. " +
        "Integer tincidunt ex vel nisi elementum, sed placerat sem cursus.",
    },
    {
      id: 3,
      photo: "/images/team/liam.jpg",
      name: "Liam Rodriguez",
      role: "Senior UX Designer",
      text:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices " +
        "posuere cubilia curae; Vivamus dictum dolor vel viverra fermentum.",
    },
  ];

const Testimonials = () => {
  return (
    <Wrapper className="bg-background">
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
            SlideComponent={Cardcontent}
            gap={40} // optional
            slidesPreview={2}
          />
        </div>
      </Flex>
    </Wrapper>
  );
};

export default Testimonials;
