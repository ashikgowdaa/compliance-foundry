import { imageGenerationUrl } from "@/config";
import React from "react";
import TestimonialCard from "./Testimonialcard";
import { testimonialCard } from "./Testimonials";

const InfiniteTestimonialScroller = ({
  commentData,
  scrollEffect,
}: {
  commentData: testimonialCard[];
  scrollEffect?: boolean;
}) => {
  return (
    <div className="overflow-hidden relative py-4">
      <div
        className={`${
          scrollEffect ? "scroll-right" : "scroll-left"
        } paused-on-hover whitespace-nowrap scroll-smooth `}
      >
        <div className="inline-flex gap-12">
          {[...commentData , ...commentData].map((item) => (
            <TestimonialCard item={item}  />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteTestimonialScroller;
