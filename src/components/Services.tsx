import Flex from "@/utitly-css/Flex";
import Wrapper from "@/utitly-css/Wrapper";
import React from "react";
import Accordion, { AccordionItem } from "./custom-components/Accordion";

type ServicesProps = {
  serviceHeading: string; 
  serviceSubheading: string;
  servicesDescription: string;
  accordionSection: AccordionItem[]; 
};

const Services = ({ services }: { services: ServicesProps }) => {
  return (
    <Wrapper className="my-4">
      <Flex>
        <Flex
          direction="col"
          className="w-[90%] bg-background-greyWhite rounded-[3%] p-5 "
        >
          <Flex direction="col" width="half" className="text-center">
            <p className="text-text-blue">{services.serviceHeading}</p>
            <h4 className="text-text-primary text-3xl">
              {services.serviceSubheading}
            </h4>
            <p className="text-text-tertiary">
              {" "}
              {services.servicesDescription}
            </p>
          </Flex>
          <Accordion accordionData={services.accordionSection} />
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default Services;
