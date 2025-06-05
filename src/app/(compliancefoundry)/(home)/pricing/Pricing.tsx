import ErrorComponent from "@/app/UI/ErrorComponent";
import { getMethod } from "@/app/utils-api/getMethod";
import Pricing from "@/components/Pricing/Pricing";
import Services from "@/components/Services";
import { API_ENDPOINTS } from "@/config";

export default async function PricingSection({
  websiteSection,
}: {
  websiteSection: string;
}) {
  const data = await getMethod({ url: API_ENDPOINTS.pricing.getPricing });
 console.log(data,"data")
  if (!data || !data?.data ||data?.data[0]?.WebsiteDomain?.webSiteKeys !== websiteSection)
    return <ErrorComponent errorText="Error Fetching Pricing Data " />;

  return <Pricing price={data.data[0]} />;
}
