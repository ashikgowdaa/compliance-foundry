import Flex from "@/utitly-css/Flex";
import Wrapper from "@/utitly-css/Wrapper";
import React from "react";
import Accordion, { AccordionItem } from "./custom-components/Accordion";
import { Lightbulb } from 'lucide-react';


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
          className="w-[90%] bg-background-greyWhite rounded-4xl p-5 "
        >
          <Flex direction="col" width="half" className="text-center">
            <Flex className="text-text-blue uppercase font-semibold" gap="2">   <Lightbulb strokeWidth={2} /> {services.serviceHeading}</Flex>
            <h4 className="text-text-primary text-3xl font-semibold text-shadow-lg">
              {services.serviceSubheading}
            </h4>
            <p className="text-text-tertiary font-medium">
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
