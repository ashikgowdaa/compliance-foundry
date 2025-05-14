import Flex from "@/utitly-css/Flex";
import Wrapper from "@/utitly-css/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type NavLink = {
  label: string;
  href: string;
};

type HeaderDataProps = {
  headerData: {
    logoImage: string;
    navLinks: NavLink[];
  };
};

const Header = ({ headerData }: HeaderDataProps) => {
  return (
    <Wrapper className="bg-primary">
      <Flex justify="around">
        <Flex justify="start" width="half" >
          <Image
            src={headerData.logoImage}
            alt={"logo-image-error"}
            width={80}
            height={80}
          />
        </Flex>
        <Flex justify="center" gap="10">
          {headerData.navLinks.map((item, index) => (
            <Link key={index} href={item.href}>
              {item.label}
            </Link>
          ))}
        </Flex>
        <Flex justify="center" width="half" >
       <span className="border-amber-50 border-2 p-2 rounded-md" >Get in Touch</span>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default Header;
