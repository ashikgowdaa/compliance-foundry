"use client";
import React, { useState, useRef } from "react";
import Flex from "@/utitly-css/Flex";
import Wrapper from "@/utitly-css/Wrapper";
import Link from "next/link";
import Button from "./custom-components/Button";
import {  ChevronUp, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ContactUsModal from "./custom-components/ContactUsModal";

type Subtype = {
  id: number;
  title: string;
  route: string;
};

type NavLink = {
  id: number;
  title: string;
  routes: string;
  Subtype?: Subtype[];
};

type HeaderProps = {
  headerData: NavLink[];
};

const Header: React.FC<HeaderProps> = ({ headerData }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [openId, setOpenId] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<
    boolean | undefined
  >();
  const handleEnter = (id: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpenId(id);
  };

  const handleLeave = () => {
    timerRef.current = setTimeout(() => setOpenId(null), 300);
  };

  const handleOpenMobilMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Wrapper
      className=" text-text-primary !py-1 sm:!py-3 fixed top-[5%] left-0 w-full z-50 shadow-xl"
      style={{ background: "var(--color-background-greyWhite)" }}
    >
      <Flex
        justify="around"
        className="px-0 py-1  sm:border-0  sm:px-8 sm:!justify-between"
      >
        <Flex justify="start" className="w-1/4 sm:w-auto">
          <h1 className="text-md sm:text-xl secondary-font font-bold">
            Compliance <br /> Foundry
          </h1>
        </Flex>

        <Flex justify="center" gap="8" className="hidden sm:flex">
          {Array.isArray(headerData) &&
            headerData.map((item) => (
              <span
                key={item.id}
                className="relative inline-block cursor-pointer font-light text-gray-600 text-md"
                onMouseEnter={() => handleEnter(item.id)}
                onMouseLeave={handleLeave}
              >
                <Link
                  href={item.routes ?? "/"}
                  className="flex items-end justify-center gap-2"
                >
                  {item.title}
                  {(item.Subtype ?? []).length > 0 && (
                    <span
                      className={`transition-transform duration-300 ${
                        openId === item.id ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <ChevronUp />
                    </span>
                  )}
                </Link>

                {openId === item.id && (item.Subtype ?? []).length > 0 && (
                  <div
                    className="
                  absolute left-0 top-full mt-2
                  bg-background-greyWhite text-black p-2 rounded shadow-lg z-30
                  min-w-[250px]
                "
                    onMouseEnter={() => handleEnter(item.id)}
                    onMouseLeave={handleLeave}
                  >
                    {(item?.Subtype ?? []).map((sub) => (
                      <Link
                        key={sub.id}
                        href={sub.route ?? "/"}
                        className="block py-1 hover:underline"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </span>
            ))}
        </Flex>

        {/* CTA Button - Hidden on mobile, visible on desktop */}
        <Flex justify="center" className="hidden sm:flex sm:w-1/4">
          <Button title="Contact Us" variant="primary" onClick={()=>handleModalOpen()} />
        </Flex>

        {/* Mobile Menu - Only visible on mobile */}
        <Flex justify="end" className="flex sm:hidden">
          <Button title="Contact Us" variant="primary"  onClick={()=>handleModalOpen()}/>
          {isMobileMenuOpen ? (
            <X onClick={handleOpenMobilMenu} className="cursor-pointer" />
          ) : (
            <Menu onClick={handleOpenMobilMenu} className="cursor-pointer" />
          )}
        </Flex>
      </Flex>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Flex className="w-full px-4 py-2 mt-2 sm:hidden border-t" direction="col">
              {headerData.map((item) => (
                <Flex
                  key={item.id}
                  direction="col"
                  align="start"
                  className="relative inline-block cursor-pointer  secondary-font text-lg font-light"
                  onClick={
                    openId === item.id
                      ? () => handleLeave()
                      : () => handleEnter(item.id)
                  }
                >
                  <Link
                    href={item.routes ?? "/"}
                    className="flex items-end justify-between gap-2 w-full "
                  >
                    {item.title}
                    {(item.Subtype ?? []).length > 0 && (
                      <span
                        className={`transition-transform duration-300 ${
                          openId === item.id ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        <ChevronUp />
                      </span>
                    )}
                  </Link>
                  {openId === item.id && (item.Subtype ?? []).length > 0 && (
                    <div className="mt-2 text-black p-2 rounded gap-8">
                      {(item?.Subtype ?? []).map((sub) => (
                        <Link
                          key={sub.id}
                          href={sub.route ?? "/"}
                          className="block py-1 hover:underline text-sm"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </Flex>
              ))}

              <Flex
                justify="center"
                className="border-t border-gray-300 mt-4 pt-4"
              >
                <Button
                  title="Contact Us"
                  variant="primary"
                  width="full"
                  className="py-2 !text-lg"
                  onClick={()=>handleModalOpen()}
                />
              </Flex>
            </Flex>
          </motion.div>
        )}
      </AnimatePresence>
      {modalOpen && <ContactUsModal open={modalOpen}/>}
    </Wrapper>
  );
};

export default Header;
