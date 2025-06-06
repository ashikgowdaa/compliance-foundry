"use client";

import Flex from "@/utitly-css/Flex";
import Wrapper from "@/utitly-css/Wrapper";
import React, { useEffect, useState } from "react";
import Button from "./custom-components/Button";
import CountUp from "react-countup";
import { Brain } from "lucide-react";
import { useInView } from "react-intersection-observer";
import AnimatedSection from "./custom-components/Animated";
import { useInViewAnimation } from "@/lib/utils/useInViewAnimation";
import { imageGenerationUrl } from "@/config";

type aboutDataProps = {
  aboutData: {
    titleText: string;
    descriptionText: string;
    aboutImage: {
      url: string;
      alt: string;
    };
    aboutDescription: string;
    buttonText: string;
  };
};

const projectData = [
  {
    value: "100%",
    type: "Projects Completed",
  },
  {
    value: "15+",
    type: "Successful Years",
  },
  {
    value: "98%",
    type: "Client Retention",
  },
];

const About = ({ aboutData }: aboutDataProps) => {

  // const { ref, inView } = useInView({
  //   triggerOnce: false,
  //   threshold: 0.2,
  // });
  const { ref, inView} = useInViewAnimation()
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    setStartCount(inView); 
  }, [inView]);
  

  return (
    <Wrapper className="bg-background-white my-5" ref={ref} >
      <AnimatedSection animationVariant="zoomIn" duration={0.5}>
        {(inView)=>    <div  >
        <Flex>
          <div className="w-[95%]">
            <Flex className="mt-4 gap-12" direction="col-sm-row" justify="around" gap="4">
              <Flex
                justify="center"
                align="center"
                className="max-w-[600px]"
                responsiveWidth="full-sm-half"
              >
                <img
                  src={
                    imageGenerationUrl(aboutData.aboutImage.url)
                
                  }
                  alt="Image failure"
                  className="object-contain h-full w-full"
                />
              </Flex>
              <Flex
                width="half"
                direction="col"
                gap="2"
                align="start"
                justify="center"
                responsiveWidth="full-sm-half"
              >
                <Flex direction="col" align="start">
                  <Flex
                    className="text-text-blue font-semibold uppercase tertiary-font"
                    gap="2"
                    justify="start"
                  >
                    <Brain /> {aboutData?.titleText}
                  </Flex>
                  <h4 className="text-text-primary text-4xl text-start leading-snug secondary-font">
                    {aboutData?.descriptionText}
                  </h4>
                </Flex>
                <h6 className="text-gray-600 mt-2">
                  {aboutData?.aboutDescription}
                </h6>

                <Flex className="gap-0" gap="10" align="center">
                  {projectData.map((item, index) => {
                    const numericValue = parseInt(item.value.replace(/\D/g, ""));
                    const suffix =
                      item.value.includes("%")
                        ? "%"
                        : item.value.includes("+")
                        ? "+"
                        : "";

                    return (
                      <Flex
                        key={index}
                        direction="col"
                        className="card text-start"
                         align="start" 
                         gap="2"
                      >
                        {startCount ? (
                          <CountUp
                            key={`${index}-${startCount}`} // force re-render on scroll in
                            className="text-text-blue text-2xl sm:text-3xl text-start font-semibold secondary-font !p-0 "
                            end={numericValue}
                            duration={4}
                            suffix={suffix}
                          />
                        ) : (
                          <span className="text-text-blue text-2xl text-start font-semibold">
                            0{suffix}
                          </span>
                        )}
                        <p className="text-gray-600 text-sm sm:text-lg">{item.type}</p>
                      </Flex>
                    );
                  })}
                </Flex>
                <Button title="About Us" variant="outline" width="half" />
              </Flex>
            </Flex>
          </div>
        </Flex>
      </div>}
      </AnimatedSection>
   
    </Wrapper>
  );
};

export default About;
