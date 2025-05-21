import { getMethod } from "@/app/utils-api/getMethod";
import Header from "@/components/Header";

export default async function SubHeaderSection() {
  const data = await getMethod({
    url: "header-websites?populate[headerData][populate]=*",
    options: {
      cache: "force-cache", 
    },
  });
  const header = data?.data?.[0]?.headerData;

  if (!header) {
    return <div>Header data not found</div>; // Or render nothing / fallback component
  }

  return <Header headerData={header} />;
}