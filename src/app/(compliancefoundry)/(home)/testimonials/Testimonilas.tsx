import ErrorComponent from "@/app/UI/ErrorComponent";
import { getMethod } from "@/app/utils-api/getMethod";
import Testimonials from "@/components/Testmonials/Testimonials";
import { API_ENDPOINTS } from "@/config";

export default async function TestimonialSection({
  websiteSection,
}: {
  websiteSection: string;
}) {

  const data = await getMethod({ url: API_ENDPOINTS.testimonial.getTestimonials });
  if (!data || !data?.data )
    return <ErrorComponent errorText="Error Fetching Testimonial Data " />;

  return <Testimonials testimonialData= {data?.data[0]} />;
}