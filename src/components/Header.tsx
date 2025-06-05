"use client";
import React, { useState, useRef } from "react";
import Flex from "@/utitly-css/Flex";
import Wrapper from "@/utitly-css/Wrapper";
import Link from "next/link";
import Button from "./custom-components/Button";
import { Menu } from "lucide-react";

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
  const [openId, setOpenId] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = (id: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpenId(id);
  };

  const handleLeave = () => {
    timerRef.current = setTimeout(() => setOpenId(null), 300);
  };

  return (
<Wrapper
  className="text-text-primary !py-3"
  style={{ background: "var(--color-background-greyWhite)" }}
>
  <Flex justify="around" className="px-4 sm:px-8 sm:!justify-between">

    <Flex justify="start" className="w-1/4 sm:w-auto">
      <h1 className="text-lg sm:text-xl secondary-font font-extrabold">
        Compliance <br /> Foundry
      </h1>
    </Flex>


    <Flex justify="center" gap="8" className="hidden sm:flex">
      {Array.isArray(headerData) &&
        headerData.map(item => (
          <span
            key={item.id}
            className="relative inline-block cursor-pointer font-semibold text-gray-600 text-lg"
            onMouseEnter={() => handleEnter(item.id)}
            onMouseLeave={handleLeave}
          >
            <Link href={item.routes ?? '/'}>{item.title}</Link>

            {openId === item.id && (item.Subtype ?? []).length > 0 && (
              <div
                className="
                  absolute left-0 top-full mt-2
                  bg-white text-black p-2 rounded shadow-lg z-30
                  min-w-[150px]
                "
                onMouseEnter={() => handleEnter(item.id)}
                onMouseLeave={handleLeave}
              >
                {(item?.Subtype ?? []).map(sub => (
                  <Link
                    key={sub.id}
                    href={sub.route ?? '/'}
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
      <Button title="Contact Us" variant="primary" />
    </Flex>

    {/* Mobile Menu - Only visible on mobile */}
    <Flex justify="end" className="flex sm:hidden">
      <Button title="Contact Us" variant="primary" />
      <Menu />
    </Flex>
  </Flex>
</Wrapper>
  );
};

export default Header;
