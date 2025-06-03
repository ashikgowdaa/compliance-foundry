import ErrorComponent from "@/app/UI/ErrorComponent";
import { getMethod } from "@/app/utils-api/getMethod";
import About from "@/components/About";
import { API_ENDPOINTS } from "@/config";

export default async function AboutUs() {

  const   data   = await getMethod({ url: API_ENDPOINTS.about.getAbout });
  if ( !data ||  !data?.data?.length) return <ErrorComponent errorText="Error Fetching About Data"/>

  return <About aboutData={data.data[0]} />;
}
