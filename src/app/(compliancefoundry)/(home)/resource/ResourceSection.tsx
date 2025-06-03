import ErrorComponent from "@/app/UI/ErrorComponent";
import { getMethod } from "@/app/utils-api/getMethod";
import Portfolio from "@/components/Portfolio/Portfolio";
import { API_ENDPOINTS } from "@/config";

export default async function ResourceSection({
  websiteSection,
}: {
  websiteSection: string;
}) {
  const data = await getMethod({ url: API_ENDPOINTS.resources.getResources});

  if (!data || !data?.data || data?.data[0]?.WebsiteDomain?.webSiteKeys !== websiteSection)
    return <ErrorComponent errorText="Error Fetching Services Data " />;

  return <Portfolio data={data?.data[0]} />;
}