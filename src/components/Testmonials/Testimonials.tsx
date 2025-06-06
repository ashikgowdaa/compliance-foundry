"use client";

import React from "react";
import Wrapper from "@/utitly-css/Wrapper";
import Flex from "@/utitly-css/Flex";
import { MessageSquareMore } from "lucide-react";
import AnimatedSection from "../custom-components/Animated";
import InfiniteTestimonialScroller from "./TestimonialSlider";

export type testimonialCard = {
  comment: string;
  author: string;
  id: string;
  authorImage: {
    url: string;
    alt: string;
  };
};
interface TestimonialData {
  testimonialHeading: string;
  testimonialSubHeading: string;
  testimonialDescription: string;
  testimonialCard: testimonialCard[];
}

const Testimonials = ({
  testimonialData,
}: {
  testimonialData: TestimonialData;
}) => {
  return (
    <Wrapper className=" ">
      <AnimatedSection animationVariant="slideRight">
        {(inView) => (
          <Flex>
            <Flex
              direction="col"
              justify="start"
              align="start"
              gap="16"
              className="w-[90%]  rounded-4xl sm:p-5"
            >
              <Flex direction="col" align="start">
                <AnimatedSection animationVariant="zoomIn">
                  {(inView) => (
                    <Flex direction="col" align="start">
                      <Flex
                        justify="start"
                        className="text-text-blue uppercase font-normal tertiary-font"
                        gap="2"
                      >
                        {" "}
                        <MessageSquareMore strokeWidth={2.25} />{" "}
                        {testimonialData.testimonialHeading}
                      </Flex>
                      <Flex justify="between" direction="col-sm-row">
                        <Flex justify="start" align="start" responsiveWidth="full-sm-half" className="text-text-primary text-3xl font-medium text-shadow-lg secondary-font">
                          {testimonialData.testimonialSubHeading}
                        </Flex>
                        <Flex justify="start-sm-center" align="start" responsiveWidth="full-sm-half" className="text-text-tertiary  text-sm">
                          {" "}
                          <p className="w-full sm:w-[70%]">

                          {testimonialData.testimonialDescription}
                          </p>
                        </Flex>
                      </Flex>
                    </Flex>
                  )}
                </AnimatedSection>
              </Flex>
            </Flex>
          </Flex>
        )}
      </AnimatedSection>
      <InfiniteTestimonialScroller
        commentData={testimonialData.testimonialCard}
        scrollEffect={true}
      />
      <InfiniteTestimonialScroller
        commentData={testimonialData.testimonialCard}
      />
    </Wrapper>
  );
};

export default Testimonials;
