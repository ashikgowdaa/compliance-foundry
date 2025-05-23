import { getMethod } from "@/app/utils-api/getMethod";
import About from "@/components/About";
import { API_ENDPOINTS } from "@/config";

export default async function AboutUs() {
  const data = await getMethod({
    url: API_ENDPOINTS.ABOUT.GET_ABOUT,
    options: {
  
    },
  });
  return <About aboutData={data.data[0]} />;
}
