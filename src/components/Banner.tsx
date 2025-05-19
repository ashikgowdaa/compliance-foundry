import Flex from "@/utitly-css/Flex";
import React from "react";
const API = process.env.IMAGE_END

type BannerProps = {
    MainText: string;
    SubText: string;
    BannerImage_Video: [{
      url:string
    }];
  
};

const Banner = ({ bannerData }: { bannerData: BannerProps }) => {


  return (
    <Flex
      align="center"
      direction="col"
      justify="start"
      className="banner relative text-white"
      style={{ backgroundImage: `url('${API}${bannerData?.BannerImage_Video[0]?.url ? bannerData?.BannerImage_Video[0]?.url : ""}')` }}
    >
      <div className="relative z-10 text-center space-y-4 px-4">
        <h1 className="bannerHeader">
          {bannerData?.MainText.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </h1>
        <h4 className="bannerSubHeader">{bannerData?.SubText}</h4>
      </div>
    </Flex>
  );
};

export default Banner;
