import Flex from "@/utitly-css/Flex";
import React from "react";

type BannerProps = {
  title: string;
  subtitle: string;
  backgroundImage: string;
};

const Banner = ({ bannerData }: { bannerData: BannerProps }) => {
  return (
    <Flex
      align="center"
      direction="col"
      justify="start"
      className="banner relative text-white"
      style={{ backgroundImage: `url('${bannerData.backgroundImage}')` }}
    >
      <div className="relative z-10 text-center space-y-4 px-4">
        <h1 className="bannerHeader">
          {bannerData.title.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </h1>
        <h4 className="bannerSubHeader">{bannerData.subtitle}</h4>
      </div>
    </Flex>
  );
};

export default Banner;
