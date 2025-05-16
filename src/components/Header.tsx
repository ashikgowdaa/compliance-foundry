import Flex from "@/utitly-css/Flex";
import Wrapper from "@/utitly-css/Wrapper";
import Link from "next/link";
import React from "react";


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
  headerData: NavLink[]; // headerData is an array of NavLink objects
};



const Header: React.FC<HeaderProps> = ({ headerData }) => {
  return (
    <Wrapper className="bg-primary">
      <Flex justify="around">
        <Flex justify="start" width="half">
          {/* Uncomment and update src if you want to show logo */}
          {/* <Image
            src={headerData.logoImage}
            alt="logo"
            width={80}
            height={80}
          /> */}
          <h1 className="font-bold">Compliance Foundry</h1>
        </Flex>

        <Flex justify="center" gap="10">
          {Array.isArray(headerData) &&
            headerData.map((item) => (
              <div
                key={`${item.id}`}
                className="relative group cursor-pointer"
              >
                <Link href={item.routes}>
                  <span>{item.title}</span>
                </Link>

                {item.Subtype && item.Subtype.length > 0 && (
                  <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white text-black p-2 rounded shadow-lg z-30 min-w-[150px]">
                    {item.Subtype.map((sub) => (
                      <div
                        key={`sub-${sub.id}`}
                        className="py-1 hover:underline"
                      >
                        <Link href={sub.route}>{sub.title}</Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
        </Flex>

        <Flex justify="center" width="half">
          <span className="border-amber-50 border-2 p-2 rounded-md">
            Get in Touch
          </span>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default Header;
