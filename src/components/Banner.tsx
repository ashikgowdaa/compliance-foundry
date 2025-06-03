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
        className="banner relative text-white "
        style={imageUrl ? { backgroundImage: `url('${imageUrl}')` } : {}}
      >
        <Flex justify="between" className="w-[90%] pb-8">
          <span className="bannerHeader">
            {bannerData?.MainText.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </span>
          <Flex className="w-1/2" justify="end">
            <span className="bannerSubHeader">{bannerData?.SubText}</span>
          </Flex>
        </Flex>
      </Flex>
      <Flex direction="col" gap="2" className="bg-background-greyWhite border-b-2 border-b-gray-300 py-2">
        <h1 className="text-gray-600 font-semibold">{bannerData?.brandHeadingText}</h1>
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
