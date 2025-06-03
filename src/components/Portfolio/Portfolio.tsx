"use client";

import React from "react";
import Wrapper from "@/utitly-css/Wrapper";
import Flex from "@/utitly-css/Flex";
import { LibraryBig } from 'lucide-react';
import * as LucideIcons from "lucide-react";

type resourceCard = {
  icon: keyof typeof LucideIcons;
  title: string;
  description: string;
}

interface ResourceProps {
  resourceHeading: string;
  resourceSubHeading: string;
  resourceCard: resourceCard[];
}

const Portfolio = ({ data }: { data: ResourceProps }) => {
  return (
    <Wrapper className="bg-primary">
      <Flex>
        <Flex className="w-[90%]" direction="col" gap="12">
          <Flex direction="col" width="half">
            <Flex className="text-text-blue uppercase font-semibold">  <LibraryBig /> {data.resourceHeading}</Flex>
            <span className="text-text-primary text-3xl text-medium text-center font-semibold text-shadow-md">
              {data.resourceSubHeading}
            </span>
          </Flex>
          <Flex wrap={true} gap="12" justify="center" >
            {data?.resourceCard.map((item, index) => {
              const Icon = LucideIcons[item.icon] as React.ComponentType<{
                color?: string;
                size?: number;
                className?: string;
              }>;
              
              return (
                <Flex key={index} className="w-[30%]" direction="col" gap="4" align="start" justify="start">
                  {Icon && <Icon color="blue" size={30} />}
                  <div className="text-text-primary text-xl w-1/2 font-semibold">
                    {item.title}
                  </div>
                  <div className="text-text-tertiary text-sm w-[95%] font-semibold">
                    {item.description}
                  </div>
                </Flex>
              );
            })}
          </Flex>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default Portfolio;