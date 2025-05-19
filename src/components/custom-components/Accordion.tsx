"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp,  } from "lucide-react";
<ChevronUp />

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
  const [openId, setOpenId] = useState(2); // default open section

  return (
    <div className="bg-[#111] text-white px-6 py-8 space-y-6">
      {sections.map(({ id, title, content }) => {
        const open = id === openId;
        return (
          <div key={id} className="border-b border-white/10 pb-6">
            <button
              className="w-full flex items-center justify-between"
              onClick={() => setOpenId(open ? null : id)}
            >
              <div className="flex items-baseline gap-4">
                <span className="text-lg font-medium w-6">
                  {id.toString().padStart(2, "0")}
                </span>
                <span
                  className={`uppercase ${
                    open ? "text-white" : "text-gray-400"
                  } tracking-wider`}
                >
                  {title}
                </span>
              </div>

              {/* icon changes */}
              {open ?<ChevronUp /> : <ChevronDown />}
            </button>

            {/* panel */}
            {open && content && (
              <div className="pl-10 pt-6 animate-fadeIn">{content}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

