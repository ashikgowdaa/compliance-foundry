"use client";

import { useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import dummyImage from "../../../public/images/about.jpg";

const sections = [
  {
    id: 1,
    title: "Enterprise Service",
    content: null,
  },
  {
    id: 2,
    title: "Expertise Service",
    content: (
      <>
        <p className="text-sm text-gray-300 max-w-xl mb-4">
          Lorem ipsum dolor sit amet consectetur. Eu amet posuere
          consequat donce suspendisse lorem enim. Elit viverra nisl non nisi
          eleifend. Cursus erat mattis fames et mollis risus at.
        </p>

        <div className="grid grid-cols-4 gap-4">
          {[
            { label: "Artificial\nIntelligence", img: "/ai.jpg" },
            { label: "Front‑End\nDevelopment", img: "/frontend.jpg" },
            { label: "Dedicated\nDeveloper", img: "/team.jpg" },
            { label: "Mobile App\nDevelopment", img: "/mobile.jpg" },
          ].map(({ label, img }) => (
            <div
              key={label}
              className="relative h-28 rounded-sm overflow-hidden group"
            >
              <img
                src={img}
                alt={label}
                className="h-full w-full object-cover group-hover:scale-105 transition"
              />
              <span className="absolute inset-0 bg-black/60 flex items-center justify-center text-center text-white text-xs whitespace-pre-line px-2" />
              <span className="absolute inset-0 flex items-center justify-center text-center text-white text-xs whitespace-pre-line px-2">
                {label}
              </span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: 3,
    title: "Process",
    content: null,
  },
  {
    id: 4,
    title: "Mobile App Development",
    content: null,
  },
];

export default function Accordion() {
  const [openId, setOpenId] = useState<number | null>(2); // default open section
  return (
    <div className=" w-full  px-6 py-8 space-y-6 rounded-md">
      {sections.map(({ id, title, content }) => {
        const open = id === openId;
        return (
          <div key={id} className="border-b border-white/10 pb-6">
            <button
              className="w-full flex items-center justify-between gap-4"
              onClick={() => setOpenId(open ? null : id)}
            >
              <div className="flex items-baseline gap-16">
                <span
                  className={`text-2xl  w-6  ${
                    open ? "text-text-blue" : "text-text-primary"
                  } `}
                >
                  {id.toString().padStart(2, "0")}
                </span>
                <span
                  className={`uppercase ${
                    open ? "text-text-blue" : "text-text-primary"
                  } tracking-wider  text-2xl`}
                >
                  {title}
                </span>
              </div>

              {open ? (
                <span className="w-12 h-12 rounded-full border border-gray-600 flex justify-center items-center">
                  {" "}
                  <ArrowDown color="#000" />{" "}
                </span>
              ) : (
                <span className="w-12 h-12 rounded-full border border-gray-600 flex justify-center items-center">
                  <ArrowUp color="#000" />
                </span>
              )}
            </button>
            {open && (
              <div className="py-4 pt-6 animate-fadeIn flex justify-between gap-12">
                <p className="text-sm  max-w-xl  w-full text-text-tertiary">
                  Lorem ipsum dolor sit amet consectetur. Eu amet posuere
                  consequat donce suspendisse lorem enim. Elit viverra nisl non
                  nisi eleifend. Cursus erat mattis fames et mollis risus at.
                  Lorem ipsum dolor sit amet consectetur. Eu amet posuere
                  consequat donce suspendisse lorem enim. Elit viverra nisl non
                  nisi eleifend. Cursus erat mattis fames et mollis risus at.
                </p>

                <div className="w-full">
                  <img
                    src={dummyImage ?? ""}
                    className="h-full w-full object-cover group-hover:scale-105 transition"
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
