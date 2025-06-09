import React from "react";
import { caseStudiesData } from "@/dummyData";
import CaseStudies from "@/components/caseStudies/CaseStudies";

export default async function BlogListPage() {
  // const res = await fetch("https://your-strapi.com/api/blogs?populate=*");
  // const data = await res.json();
  // const blogs = data.data;

  return <CaseStudies caseStudiesData={caseStudiesData} />;
}
