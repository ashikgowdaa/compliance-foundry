"use client";
import Wrapper from "@/utitly-css/Wrapper";
import React from "react";
import PageTitle from "../custom-components/PageTitle";
import BlogCard from "./BlogCard";
import Flex from "@/utitly-css/Flex";
import Searchbar from "../custom-components/Searchbar";

import { useRouter } from 'next/navigation';

type cardDataProps = {
  label: string;
  subtitle: string;
  studies: {
    title: string;
    description: string;
    image: {
      src: string;
      alt: string;
    };
    contentComponent: any[];
  }[];
};

const CaseStudies = ({
  caseStudiesData,
}: {
  caseStudiesData: any;
}) => {

  const router = useRouter();

  const handleBlogClick = (item: any) => {
    // router.push(`/case-studies/${item.id}`);
  };

  return (
    <Wrapper className="!py-0">
      <Flex direction="col" gap="4" className="py-8">
        <PageTitle title={caseStudiesData.label} />
        <span className="text-3xl   text-text-primary  font-normal">
          {caseStudiesData.subtitle}
        </span>
        <Searchbar
          placeholder="Search case studies..."
          className="hidden sm:block"
        />
      </Flex>
      <Flex justify="center">
        <Flex
          wrap={true}
          justify="center"
          gap="8"
          className="w-[90%] 2xl:w-[80%] "
        >
          {caseStudiesData.studies.map((item:any) => (
            <BlogCard cardData={item} onClick={handleBlogClick} />
          ))}
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default CaseStudies;
