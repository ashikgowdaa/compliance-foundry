import Button from "@/app/UI/Button";
import Flex from "@/utitly-css/Flex";
import Wrapper from "@/utitly-css/Wrapper";
import Image from "next/image";
import React from "react";

type aboutDataProps = {
  aboutData: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    logo: {
      src: string;
      alt: string;
    };
    content: {
      heading: string;
      description: string;
      buttonText: string;
    };
  };
};

const About = ({ aboutData }: aboutDataProps) => {
  return (
    <>
      <Wrapper className="bg-background">
        <Flex>
          <div className="w-[80%]">
            <Flex direction="col">
              <p>{aboutData?.sectionLabel}</p>
              <h4>
                {aboutData?.title} <br /> {aboutData?.subtitle}
              </h4>
            </Flex>
            <Flex className="mt-4">
              <Image
                src={aboutData?.logo.src}
                alt={aboutData?.logo.alt}
                width={400}
                height={400}
              />
              <Flex width="half" direction="col" gap="6">
                <h6>{aboutData?.content?.heading}</h6>
                <p>{aboutData?.content?.description}</p>

                <Button text={aboutData?.content.buttonText} />
              </Flex>
            </Flex>
          </div>
        </Flex>
      </Wrapper>
      <Wrapper className="bg-primary">
        <Flex className="py-6" gap="10" align="center">
          {[1, 2, 3, 4].map((_, index) => {
            return (
              <div
                key={index}
                className="card"
              >
                <h6>400+</h6>
                <p>Projects Completed</p>
              </div>
            );
          })}
        </Flex>
      </Wrapper>
    </>
  );
};

export default About;
