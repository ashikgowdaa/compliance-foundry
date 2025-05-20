import ErrorComponent from "@/app/UI/ErrorComponent";
import { getMethod } from "@/app/utils-api/getMethod";
import Banner from "@/components/Banner";
import { filterData } from "@/lib/utils/utils-filterData";
export default async function BannerSection({
  websiteSection,
}: {
  websiteSection: string;
}) {
  const   {data}  = await getMethod({ url: "banners?populate=*" });

  if (  !data?.length) return <ErrorComponent errorText="Error Fetching Banner Data"/>
   console.log(data ,"bannerData")
  const filteredData = filterData(data, websiteSection);
  
  if (!filteredData?.length) return <ErrorComponent errorText="Error Fetching Banner Data"/>

  return <Banner bannerData={filteredData[0]} />;
}
