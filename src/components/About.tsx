import { IMAGE_END } from "@/config";
import Flex from "@/utitly-css/Flex";
import Wrapper from "@/utitly-css/Wrapper";
import Image from "next/image";
import React from "react";
import Button from "./custom-components/Button";

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
    type: "Projects Completed"
  },
  {
    value: "15+",
    type: "Successful Years"
  },
  {
    value: "98%",
    type: "Client Retention"
  }
];

const About = ({ aboutData }: aboutDataProps) => {
  return (
    <>
      <Wrapper className="bg-background-white my-5">
        <Flex>
          <div className="w-[95%]">
            <Flex className="mt-4" justify="around" gap="0">
              <Image
                src={
                  aboutData?.aboutImage?.url
                    ? `${IMAGE_END}${aboutData.aboutImage.url}`
                    : "/placeholder.png"
                }
                alt={"Image faliure"}
                width={600}
                height={600}
              />
              <Flex width="half" direction="col" gap="2" align="start" justify="center">
                <Flex direction="col" align="start">
                  <p className="text-text-blue">{aboutData?.titleText}</p>
                  <h4 className="text-text-primary text-4xl text-start leading-snug">
                    {aboutData?.descriptionText}
                  </h4>
                </Flex>
                <h6 className="text-gray-600">{aboutData?.aboutDescription}</h6>
                <Flex className="" gap="10" align="center">
                  {projectData.map((item, index) => {
                    return (
                      <Flex key={index} direction="col" className="card text-start" align="start">
                        <h5 className="text-text-blue text-3xl text-start font-semibold">{item.value}</h5>
                        <p className="text-gray-600">{item.type}</p>
                      </Flex>
                    );
                  })}
                </Flex>
                <Button title="Contact Us" variant="outline"/>
              </Flex>
            </Flex>
          </div>
        </Flex>
      </Wrapper>
    </>
  );
};

export default About;
