import { getMethod } from "@/app/utils-api/getMethod";
import Banner from "@/components/Banner";
import { filterData } from "@/lib/utils/utils-filterData";
export default async function BannerSection({
  websiteSection,
}: {
  websiteSection: string;
}) {
  const data = await getMethod({
    url: "banners?populate=*",
  });

  const filteredData = filterData(data.data , websiteSection)

  return <Banner bannerData={filteredData[0]} />;
}
