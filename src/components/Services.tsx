import Flex from "@/utitly-css/Flex";
import Wrapper from "@/utitly-css/Wrapper";
import React from "react";
import Accordion from "./custom-components/Accordion";

const Services = () => {
  return (
    <Wrapper className="my-4">
      <Flex>
        <Flex direction="col" className="w-[90%] bg-background-greyWhite rounded-md p-5">
          <Flex direction="col" width="half" className="text-center">
            <p className="text-text-blue">Services</p>
            <h4 className="text-text-primary text-3xl">
            Advisory, Engineering & Automation Services to Power Secure Growth
            </h4>
            <p className="text-text-tertiary">From early-stage assessments to enterprise-level managed compliance, we offer a suite of services designed to meet you where you are — and take you further. Our team of security engineers and compliance strategists help you move fast, stay secure, and scale with confidence.</p>
          </Flex>

          <Accordion />
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default Services;
