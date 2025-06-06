"use client";

import { useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import dummyImage from "../../../public/images/about.jpg";
import { IMAGE_END, imageGenerationUrl } from "@/config";

interface AccordionImage {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface AccordionItem {
  accordionId: string;
  accordionTitle: string;
  accordionContentDescription: string;
  accordionImage: AccordionImage;
}

interface AccordionProps {
  accordionData: AccordionItem[];
}

export default function Accordion({ accordionData }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>("2");

  return (
    <div className="w-full px-0  py-8 space-y-6 rounded-md  sm:px-6">
      {accordionData?.map(
        ({
          accordionId,
          accordionTitle,
          accordionContentDescription,
          accordionImage,
        }) => {
          const open = accordionId === openId;

          return (
            <div
              key={accordionId}
              className="border-b-[2px] border-gray-300 pb-6"
            >
              <button
                className="w-full flex items-center justify-between sm:gap-4"
                onClick={() => setOpenId(open ? null : accordionId)}
              >
                <div className="flex items-baseline gap-4 secondary-font sm:gap-16">
                  <span
                    className={`text-md  w-6 font-semibold text-shadow-md sm:text-2xl ${
                      open ? "text-text-blue" : "text-text-primary"
                    }`}
                  >
                    {parseInt(accordionId).toString().padStart(2, "0")}
                  </span>
                  <span
                    className={`uppercase font-semibold text-shadow-md ${
                      open ? "text-text-blue" : "text-text-primary"
                    } tracking-wider text-start text-sm sm:text-2xl`}
                  >
                    {accordionTitle}
                  </span>
                </div>

                {open ? (
                  <span className="w-12 h-8 sm:h-12 rounded-full border border-gray-600 flex justify-center items-center cursor-pointer">
                    <ArrowDown color="#000"size="24"/>
                  </span>
                ) : (
                  <span className="w-12 h-8 sm:h-12 rounded-full border border-gray-600 flex justify-center items-center cursor-pointer">
                    <ArrowUp color="#000" size="24" />
                  </span>
                )}
              </button>

              <div
                className={`transition-all duration-600 ease-in-out overflow-hidden ${
                  open
                    ? "max-h-[1000px] py-6 pt-6 opacity-100"
                    : "max-h-0 opacity-0 py-0"
                } flex justify-between gap-12 items-start sm:flex-row flex-col`}
              >
                <p className="text-md max-w-xl w-full text-text-tertiary text-justify">
                  {accordionContentDescription}
                </p>

                <div className="w-full flex justify-center h-[250px] rounded-md">
                  <img
                    src={imageGenerationUrl(accordionImage.url) }
                    alt={accordionImage.alt || accordionTitle}
                    className="h-full w-full object-contain group-hover:scale-105 transition rounded-2xl"
                  />
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}
