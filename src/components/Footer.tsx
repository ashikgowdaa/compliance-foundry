"use client";
import Flex from "@/utitly-css/Flex";
import Wrapper from "@/utitly-css/Wrapper";
import Link from "next/link";
import React from "react";
import { Linkedin } from "lucide-react";
import Button from "./custom-components/Button";
import footerCompaliance from "../../public/images/FooterComplianceFoundry.png";
import ContactUsModal from "./custom-components/ContactUsModal"; 

interface FooterLink {
  href: string;
  icon?: React.ReactNode;
}

interface FooterData {
  title: string;
  links: (string | FooterLink)[];
}

const Footer = ({ footerData }: { footerData: FooterData[] }) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
    {
      modalOpen && (
        <ContactUsModal
          open={modalOpen}
       
        
        
        />
      )
    }
      <Wrapper className="bg-[#0D111B] !m-0 relative !mt-48 flex  justify-center items-center">
        <Flex
          direction={"col"}
          className="absolute h-48 w-[90%] sm:w-[70%] rounded-2xl top-[-18%] sm:top-[-29%]"
          style={{ background: "var(--color-background-linear-blue)" }}
          gap="8"
        
        >
          <h3 className="text-text-secondary text-xl sm:text-4xl text-shadow-lg secondary-font text-center">
            Let’s Talk Compliance, Security, and Scale
          </h3>
          <Button title="Contact Us" variant="ghost" onClick={handleModalOpen} />
        </Flex>
        <Flex direction="col" gap="12" className="pt-[20%] sm:pt-[5%]">
          <Flex>
            <img
              src={footerCompaliance.src}
              alt="Footer Background"
              className="w-full h-auto object-cover"
            />
          </Flex>
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
              <span className="text-4xl text-text-blue font-bold text-shadow-lg/10 secondary-font text-start">
                Compliance <br /> Foundry
              </span>
              <span className="text-gray-300 font-light text-sm">
                Purpose-built compliance. Powered by engineers.
              </span>
              <span className="text-gray-300 font-light text-sm">
                {" "}
                © Compliance Foundry Inc. & FixplianceAI Inc., 2025
              </span>
            </Flex>
            <Flex
              className=" text-white"
              justify="start"
              align="start"
              direction="col-sm-row"
            >
              {footerData.map((section, index) => (
                <Flex direction="col" key={index} align="start-sm-center">
                  <span className="footer-category-header secondary-font">
                    {section.title}
                  </span>

                  <Flex
                    direction={section.title === "Join Us" ? "row" : "col"}
                    gap="4"
                    className="mt-2"
                    justify="start-sm-center"
                    align="start-sm-center"
                  >
                    {section.links.map((link, i) =>
                      typeof link === "string" ? (
                        <Link key={i} href="/" className="footer-category-link">
                          {link}
                        </Link>
                      ) : (
                        <Link
                          key={i}
                          href={link.href}
                          className="footer-category-link text-xl"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.icon}
                        </Link>
                      )
                    )}
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
