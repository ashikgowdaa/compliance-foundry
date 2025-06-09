"use client";
import Flex from "@/utitly-css/Flex";
import Wrapper from "@/utitly-css/Wrapper";
import Link from "next/link";
import React from "react";
import { Link2Icon, Linkedin } from "lucide-react";
import Button from "./custom-components/Button";
import footerCompaliance from "../../public/images/FooterComplianceFoundry.png";
import ContactUsModal from "./custom-components/ContactUsModal";
import * as LucideIcons from "lucide-react";

interface FooterData {
  floatingText: string;
  floatingButtonText: string;
  footerCopy: string;
  footerCompanyName: string;
  footerlink: {
    sectionHeading: string;
    footerLinks: { linkText: string; routeLink: string; icon?: keyof typeof LucideIcons }[];
  }[];
}

const Footer = ({ footerData }: { footerData: FooterData }) => {

  const [modalOpen, setModalOpen] = React.useState(false);
  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      {modalOpen && <ContactUsModal open={modalOpen} />}
      <Wrapper className="bg-[#0D111B] !m-0 relative !mt-48 flex  justify-center items-center">
        <Flex
          direction={"col"}
          className="absolute h-48 w-[90%] sm:w-[70%] rounded-2xl top-[-18%] sm:top-[-35%]"
          style={{ background: "var(--color-background-linear-blue)" }}
          gap="8"
        >
          <h3 className="text-text-secondary text-2xl sm:text-4xl text-shadow-lg secondary-font text-center">
            {footerData?.floatingText}
          </h3>
          <Button
            title={footerData?.floatingButtonText}
            variant="ghost"
            onClick={handleModalOpen}
          />
        </Flex>
        <Flex direction="col" gap="12" className="pt-[25%] sm:pt-[8%]">
          <Flex
            align="start"
            direction="col-sm-row"
            className=" w-[90%] sm:w-[70%]"
          >
            <Flex
              direction="col"
              justify="center"
              align="start"
              gap="8"
              className="gap-2"
            >
              <span
                className="text-4xl text-text-blue font-bold text-shadow-lg/10 secondary-font text-start"
                dangerouslySetInnerHTML={{
                  __html: footerData?.footerCompanyName.replace(" ", "<br/>"),
                }}
              />

              <span
                className="text-gray-300 font-light text-sm leading-8"
                dangerouslySetInnerHTML={{
                  __html: footerData?.footerCopy.replace("/n", "<br/>"),
                }}
              />
            </Flex>
            <Flex
              className=" text-white"
              justify="start"
              align="start"
              direction="col-sm-row"
            >
              {footerData?.footerlink.map((section, index) => (
                <Flex direction="col" key={index} align="start-sm-center">
                  <span className="footer-category-header secondary-font">
                    {section.sectionHeading}
                  </span>

                  <Flex
                    direction={
                      section.sectionHeading.toLowerCase() === "join us"
                        ? "col"
                        : "col"
                    }
                    gap="4"
                    className="mt-2"
                    justify="start-sm-center"
                    align="start-sm-center"
                  >
                    {section.footerLinks.map((link) => {
              

                      return (
                        <Link
                          key={link.routeLink}
                          href={link.routeLink}
                          className="footer-category-link flex items-center gap-2"
                          target="_blank" // Optional for external links
                        >
                          
                          {link.linkText}
                        </Link>
                      );
                    })}
                  </Flex>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Wrapper>
    </>
  );
};

export default Footer;
