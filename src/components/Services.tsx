"use client";
import Flex from "@/utitly-css/Flex";
import Wrapper from "@/utitly-css/Wrapper";
import React from "react";
import Accordion, { AccordionItem } from "./custom-components/Accordion";
import { Lightbulb } from "lucide-react";
import AnimatedSection from "./custom-components/Animated";
import { useInViewAnimation } from "@/lib/utils/useInViewAnimation";

type ServicesProps = {
  serviceHeading: string;
  serviceSubheading: string;
  servicesDescription: string;
  accordionSection: AccordionItem[];
};

const Services = ({ services }: { services: ServicesProps }) => {
  const { inView, ref } = useInViewAnimation();

  return (
    <Wrapper className="py-4  " ref={ref} >
      <AnimatedSection animationVariant="zoomIn" duration={0.5}>
        {(inView) => (
          <Flex>
            <Flex
              direction="col"
              className="w-[95%] bg-background-greyWhite rounded-4xl p-3  shadow border border-gray-300 "
            >
              <Flex direction="col" responsiveWidth="full-sm-half" className="text-center" >
                <AnimatedSection
                  animationVariant="fadeDown"
                  duration={0.6}
                  delay={0.3}
                >
                  {(inView) => (
                    <Flex gap="6" direction="col" className="py-6" >
                      <Flex
                        className="text-text-blue uppercase font-normal tertiary-font"
                        gap="2"
                      >
                        {" "}
                        <Lightbulb strokeWidth={2} /> {services.serviceHeading}
                      </Flex>
                      <h4 className="text-text-primary text-2xl sm:text-3xl font-medium  secondary-font w-full">
                        {services.serviceSubheading}
                      </h4>
                      <p className="text-text-tertiary font-normal text-sm sm:text-base">
                        {" "}
                        {services.servicesDescription}
                      </p>
                    </Flex>
                  )}
                </AnimatedSection>
              </Flex>
              <Accordion accordionData={services.accordionSection} />
            </Flex>
          </Flex>
        )}
      </AnimatedSection>
    </Wrapper>
  );
};

export default Services;
