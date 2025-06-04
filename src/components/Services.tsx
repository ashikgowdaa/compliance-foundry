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
    <Wrapper className="my-4" ref={ref} >
      <AnimatedSection animationVariant="zoomIn" duration={0.5}>
        {(inView) => (
          <Flex>
            <Flex
              direction="col"
              className="w-[90%] bg-background-greyWhite rounded-4xl p-5 "
            >
              <Flex direction="col" width="half" className="text-center">
                <AnimatedSection
                  animationVariant="fadeDown"
                  duration={0.6}
                  delay={0.8}
                >
                  {(inView) => (
                    <>
                      <Flex
                        className="text-text-blue uppercase font-semibold"
                        gap="2"
                      >
                        {" "}
                        <Lightbulb strokeWidth={2} /> {services.serviceHeading}
                      </Flex>
                      <h4 className="text-text-primary text-3xl font-semibold text-shadow-lg">
                        {services.serviceSubheading}
                      </h4>
                      <p className="text-text-tertiary font-medium">
                        {" "}
                        {services.servicesDescription}
                      </p>
                    </>
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
