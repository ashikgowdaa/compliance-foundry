"use client";
import React, { useState, useRef } from "react";
import Flex from "@/utitly-css/Flex";
import Wrapper from "@/utitly-css/Wrapper";
import Link from "next/link";

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

const Subheader: React.FC<HeaderProps> = ({ headerData }) => {
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
    <Wrapper className="bg-background">
      <Flex justify="center" gap="8">
        {Array.isArray(headerData) &&
          headerData.map((item) => (
            <span
              key={item.id}
              className="relative inline-block cursor-pointer"
              onMouseEnter={() => handleEnter(item.id)}
              onMouseLeave={handleLeave}
            >
              <Link className="text-sm font-bold" href={item.routes ?? "/"}>{item.title}</Link>
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
    </Wrapper>
  );
};

export default Subheader;
