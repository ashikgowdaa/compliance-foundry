"use client";

import { IMAGE_END } from "@/config";
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
      ? `${bannerData.BannerImage_Video[0].url}`
      : "";

  return (
    <>
      <Flex
        align="center"
        direction="col"
        justify="end"
        className="banner !relative text-white"
        style={imageUrl ? { backgroundImage: `url('${imageUrl}')` } : {}}
      >
        <Flex justify="between" className="w-[90%] pb-14" gap="12">
          <Flex >
          <div className="bannerHeader w-full ">
            {bannerData?.MainText.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>
          </Flex>
          <Flex className="w-full" justify="end">
            <span className="bannerSubHeader w-full  max-w-[80%]">{bannerData?.SubText}</span>
          </Flex>
        </Flex>
      </Flex>
      <div className="absolute bg-gradient-to-t from-text-tertiary to-transparent top-[5.5%] h-full w-full"></div>
      <Flex direction="col" gap="2" className="bg-background-greyWhite border-b-1 border-b-gray-300 py-6">
        <h1 className="text-text-tertiary font-semibold text-shadow-lg/5 text-sm">{bannerData?.brandHeadingText}</h1>
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
