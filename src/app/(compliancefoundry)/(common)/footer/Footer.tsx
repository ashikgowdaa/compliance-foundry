import ErrorComponent from "@/app/UI/ErrorComponent";
import { getMethod } from "@/app/utils-api/getMethod";
import Footer from "@/components/Footer";
import { API_ENDPOINTS } from "@/config";
import { footerData } from "@/dummyData";
export default async function FooterSection() {

 


  const data = await getMethod({
    url: API_ENDPOINTS.footer.getFooter,
    options: {
      // cache: "force-cache",
    },
  });

  if (!data || !data?.data?.length)
    return <ErrorComponent errorText="Error Fetching Header  Data" />;

  const footerData = data?.data;

  if (!footerData) {
    return <div>Footer data not found</div>;
  }



  return <Footer footerData={footerData[0]} />;
}
