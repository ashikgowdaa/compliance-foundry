import Flex from "@/utitly-css/Flex";
import Wrapper from "@/utitly-css/Wrapper";
import Link from "next/link";
import React from "react";
import { Linkedin } from "lucide-react";
import Button from "./custom-components/Button";

interface FooterData {
  title: string;
  links: string[];
}

const Footer = ({ footerData }: { footerData: FooterData[] }) => {
  return (
    <>
      <Wrapper className="bg-[#0D111B] !m-0 relative !mt-48 flex justify-center">
        <Flex direction={"col"} className="absolute h-48 w-[70%] rounded-2xl top-[-29%]" style={{ background:"var(--color-background-linear-blue)" }} gap="8">
          <h3 className="text-text-secondary text-4xl text-shadow-lg secondary-font">Let’s Talk Compliance, Security, and Scale</h3>
          <Button title="Contact Us" variant="ghost"/>
        </Flex>
        <Flex align="start" className="pt-[8%] w-[70%]"  >
          <Flex direction="col" justify="between" gap="8">
            <span className="text-2xl text-text-blue font-bold text-shadow-lg/10 secondary-font">
              Compliance Foundry
            </span>
            <span>@Compliance Foundry 2025</span>
            <Flex>
              <Link href="/" className="text-text-blue hover:underline ">
                {" "}
                <Linkedin color="gray" />{" "}
              </Link>
            </Flex>
          </Flex>
          <Flex className=" text-white" justify="between" align="end" >
            {footerData.map((section, index) => (
              <Flex
                direction="col"
                key={index}
              
              >
                <span className="footer-category-header text-text-blue secondary-font">{section.title}</span>
                {section.links.map((link, i) => (
                  <Link key={i} href="/" className="footer-category-link ">
                    {link}
                  </Link>
                ))}
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Wrapper>
    </>
  );
};

export default Footer;
