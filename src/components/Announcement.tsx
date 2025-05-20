"use client";

import Wrapper from "@/utitly-css/Wrapper";
import React, { useEffect, useRef } from "react";

interface AnnouncementProps {
  announcementData: {
    showAnnouncement: boolean;
    announcementText: string;
  };
}
const Announcement = ({ announcementData }: AnnouncementProps) => {
    const trackRef = useRef<HTMLDivElement>(null);
  
    // restart animation if the text changes
    useEffect(() => {
      if (!trackRef.current) return;
      trackRef.current.style.animation = 'none';
      void trackRef.current.offsetWidth;   // force reflow
      trackRef.current.style.animation = '';
    }, [announcementData.announcementText]);
  
    if (!announcementData.showAnnouncement) return null;
  
    return (
<Wrapper className="bg-background overflow-hidden">
  <div className="relative w-full">
    <div
      ref={trackRef}
      className="flex whitespace-nowrap animate-marquee"
    >
      <span className="mr-8">📢 {announcementData.announcementText}</span>
      <span className="mr-8">📢 {announcementData.announcementText}</span>
    </div>
  </div>
</Wrapper>

    );
  };
  
export default Announcement;
