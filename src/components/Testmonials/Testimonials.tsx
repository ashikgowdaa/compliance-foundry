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
    <Wrapper className="my-4 bg-background-greyWhite">
      <AnimatedSection animationVariant="slideRight">
        {(inView) => (
          <Flex>
            <Flex
              direction="col"
              justify="start"
              align="start"
              gap="16"
              className="w-[90%]  rounded-4xl p-5"
            >
              <Flex direction="col" align="start">
                <AnimatedSection animationVariant="zoomIn">
                  {(inView) => (
                    <Flex direction="col" align="start">
                      <Flex
                        justify="start"
                        className="text-text-blue uppercase font-semibold tertiary-font"
                        gap="2"
                      >
                        {" "}
                        <MessageSquareMore strokeWidth={2.25} />{" "}
                        {testimonialData.testimonialHeading}
                      </Flex>
                      <Flex justify="between">
                        <Flex justify="start" align="start" width="half" className="text-text-primary text-3xl font-semibold text-shadow-lg secondary-font">
                          {testimonialData.testimonialSubHeading}
                        </Flex>
                        <Flex justify="end" align="start" width="half" className="text-text-tertiary font-medium text-sm">
                          {" "}
                          <p className="w-[70%]">

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
