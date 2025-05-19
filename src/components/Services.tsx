import Flex from "@/utitly-css/Flex";
import Wrapper from "@/utitly-css/Wrapper";
import React from "react";
import Accordion from "./custom-components/Accordion";

const Services = () => {
  return (
    <Wrapper className="bg-background">
      <Flex>
        <div className="w-[80%]">
          <Flex direction="col">
            <p>aboutData?.sectionLabel</p>
            <h4>
              aboutData?.title <br /> aboutData?.subtitle
            </h4>
          </Flex>

          <Accordion />
        </div>
      </Flex>
    </Wrapper>
  );
};

export default Services;
