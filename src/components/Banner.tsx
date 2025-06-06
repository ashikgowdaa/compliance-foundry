"use client";

import { IMAGE_END, imageGenerationUrl } from "@/config";
import Flex from "@/utitly-css/Flex";
import React from "react";
import Image from "next/image";
import InfiniteBrandScroller from "./custom-components/SliderBrands";

type BannerProps = {
  MainText: string;
  SubText: string;
  BannerImage_Video: [
    {
      url: string;
    }
  ];
  brandHeadingText: string;
  ClientLogo: [
    {
      ClientLogo: {
        url: string;
      };
    }
  ];
};

const Banner = ({ bannerData }: { bannerData: BannerProps }) => {
  const imageUrl =
    Array.isArray(bannerData?.BannerImage_Video) &&
    bannerData.BannerImage_Video.length > 0
      ? imageGenerationUrl(bannerData.BannerImage_Video[0].url)
      : "";
      
  return (
    <>
      <Flex
        align="center"
        direction="col"
        justify="end"
        className="banner !relative text-white bg-fixed"
        style={imageUrl ? { backgroundImage: `url('${imageUrl}')` } : {}}
      >
        <Flex justify="between" direction="col-sm-row"  className="w-[90%] pb-8 gap-4 sm:pb-14" gap="12">
          <Flex >
          <div className="bannerHeader w-full secondary-font ">
            {bannerData?.MainText.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>
          </Flex>
          <Flex className="w-full" justify="end">
            <span className="bannerSubHeader w-full  sm:max-w-[80%]">{bannerData?.SubText}</span>
          </Flex>
        </Flex>
      <div className="absolute bg-gradient-to-t from-[#0000004f] to-transparent top-0 h-full w-full">{""}</div>
      </Flex>


      <Flex direction="col" gap="2" className="text-center bg-background-greyWhite border-b-1 border-b-gray-300 py-0 ">
        <h1 className="text-text-tertiary font-semibold  text-xs sm:text-sm pt-4 ">{bannerData?.brandHeadingText}</h1>
        <Flex justify="around">
          {
            bannerData?.ClientLogo && (
              <InfiniteBrandScroller brands={bannerData?.ClientLogo} />
            )
          }
        </Flex>
      </Flex>
    </>
  );
};

export default Banner;
