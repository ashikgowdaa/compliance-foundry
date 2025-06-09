import Flex from "@/utitly-css/Flex";
import React from "react";
import image from "../../../public/images/about.jpg";

type cardDataProps = {
  title: string;
  image: {
    src: string;
    alt: string;
  };
};

const BlogCard = ({
  cardData,
  onClick,
}: {
  cardData: cardDataProps;
  onClick: (item: any) => void;
}) => {
  return (
    <Flex
      className="w-full sm:w-[45%] 2xl:w-[38%] cursor-pointer "
      direction="col"
      align="start"
      onClick={() =>  onClick(cardData)}
    >
      <img src={image.src} alt="no image " className="w-full rounded-sm" />
      <Flex direction="col" align={"start"} gap="1">
        <span className="text-text-primary text-2xl secondary-font">
          {cardData.title}
        </span>
        <span className="text-text-blue tertiary-font">
          SaaS / Cloud Infrastructure
        </span>
      </Flex>
    </Flex>
  );
};

export default BlogCard;
