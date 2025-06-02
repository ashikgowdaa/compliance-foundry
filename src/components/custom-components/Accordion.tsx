"use client";

import { useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import dummyImage from "../../../public/images/about.jpg";
import { IMAGE_END } from "@/config";

interface AccordionImage {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface AccordionItem {
  accordionId: string; // Changed from number to string to match usage
  accordionTitle: string;
  accordionContentDescription: string;
  accordionImage: AccordionImage; // Properly typed as object
}

interface AccordionProps {
  accordionData: AccordionItem[]; // Fixed typo: "acordionData" -> "accordionData"
}


export default function Accordion({ accordionData }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>("2"); 
 console.log(accordionData,"accordionData")
  return (
    <div className="w-full px-6 py-8 space-y-6 rounded-md">
      {accordionData?.map(({
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
              className="w-full flex items-center justify-between gap-4"
              onClick={() => setOpenId(open ? null : accordionId)}
            >
              <div className="flex items-baseline gap-16">
                <span
                  className={`text-2xl w-6 ${
                    open ? "text-text-blue" : "text-text-primary"
                  }`}
                >
                  {/* Safely convert string to number for padding */}
                  {parseInt(accordionId).toString().padStart(2, "0")}
                </span>
                <span
                  className={`uppercase ${
                    open ? "text-text-blue" : "text-text-primary"
                  } tracking-wider text-2xl`}
                >
                  {accordionTitle}
                </span>
              </div>

              {open ? (
                <span className="w-12 h-12 rounded-full border border-gray-600 flex justify-center items-center">
                  <ArrowDown color="#000" />
                </span>
              ) : (
                <span className="w-12 h-12 rounded-full border border-gray-600 flex justify-center items-center">
                  <ArrowUp color="#000" />
                </span>
              )}
            </button>
            
            {open && (
              <div className="py-4 pt-6 animate-fadeIn flex justify-between gap-12 items-center">
                <p className="text-md max-w-xl w-full text-text-tertiary">
                  {accordionContentDescription}
                </p>

                <div className="w-full flex justify-center">
                  <img
                    src={`http://localhost:1337${accordionImage.url}`}
                    alt={accordionImage.alt || accordionTitle}
                    className="h-full w-[70%] object-cover group-hover:scale-105 transition rounded-md"
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
