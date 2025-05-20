import { getMethod } from "@/app/utils-api/getMethod";
import Header from "@/components/Header";

export default async function HeaderSection() {
  const data = await getMethod({
    url: "header-websites?populate[headerData][populate]=*",
    options: {
      // cache: "force-cache", 
    },
  });




  return <Header headerData={data.data[0].headerData} />;
}