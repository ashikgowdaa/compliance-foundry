"use client";

import React from "react";
import Wrapper from "@/utitly-css/Wrapper";
import Flex from "@/utitly-css/Flex";
import { LibraryBig } from "lucide-react";
import * as LucideIcons from "lucide-react";
import AnimatedSection from "../custom-components/Animated";
import { inView } from "framer-motion";

type resourceCard = {
  icon: keyof typeof LucideIcons;
  title: string;
  description: string;
};

interface ResourceProps {
  resourceHeading: string;
  resourceSubHeading: string;
  resourceCard: resourceCard[];
}

const Portfolio = ({ data }: { data: ResourceProps }) => {
  return (
    <Wrapper className=" !py-12">
      <Flex>
        <Flex className="w-[90%]" direction="col" gap="12">
          <AnimatedSection
            animationVariant="slideRight"
            duration={0.5}
         
          >
            {(inView: boolean) => (
              <Flex direction="col">
                <Flex direction="col"responsiveWidth="full-sm-half">
                  <Flex className="text-text-blue uppercase font-normal tertiary-font">
                    {" "}
                    <LibraryBig /> {data.resourceHeading}
                  </Flex>
                  <span className="text-text-primary text-2xl sm:text-3xl text-medium text-center font-medium text-shadow-md secondary-font">
                    {data.resourceSubHeading}
                  </span>
                </Flex>
              </Flex>
            )}
          </AnimatedSection>
          <AnimatedSection
            animationVariant="slideRight"
            duration={0.8}
            delay={0.8}
          >
            {(inView) => (
              <Flex wrap={true} gap="12" justify="center" width="full">
                {data?.resourceCard.map((item, index) => {
                  const Icon = LucideIcons[item.icon] as React.ComponentType<{
                    color?: string;
                    size?: number;
                    className?: string;
                    strokeWidth?: number;
                  }>;

                  return (
                    <Flex
                      key={index}
                      className="w-full sm:w-[30%] "
                      direction="col"
                      gap="4"
                      align="start"
                      justify="start"
                    >
                      {Icon && <Icon color="#2D69FF" size={30} strokeWidth={1.5}  />}
                      <div className="text-text-primary text-xl w-[60%] font-medium secondary-font">
                        {item.title}
                      </div>
                      <div className="text-text-tertiary text-sm w-[95%] ">
                        {item.description}
                      </div>
                    </Flex>
                  );
                })}
              </Flex>
            )}
          </AnimatedSection>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default Portfolio;
