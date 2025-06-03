import ErrorComponent from "@/app/UI/ErrorComponent";
import { getMethod } from "@/app/utils-api/getMethod";
import Banner from "@/components/Banner";
import { API_ENDPOINTS } from "@/config";
import { filterData } from "@/lib/utils/utils-filterData";


export default async function BannerSection({
  websiteSection,
}: {
  websiteSection: string;
}) {
  const   data   = await getMethod({ url: API_ENDPOINTS.bannerSection.getBanner });


  if ( !data  ||  !data?.data.length) return <ErrorComponent errorText="Error Fetching Banner Data"/>

  const filteredData = filterData(data.data, websiteSection);
  
  if (!filteredData?.length) return <ErrorComponent errorText="Error Fetching Banner Data"/>

  return <Banner bannerData={filteredData[0]} />;
}
