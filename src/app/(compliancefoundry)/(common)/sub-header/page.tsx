import { getMethod } from "@/app/utils-api/getMethod";
import Header from "@/components/Header";
import Subheader from "@/components/Subheader";

export default async function SubFooterSection() {
  const data = await getMethod({
    url: "subheaders?populate[subheader][populate]=*",
    options: {
    
    },
  });

  const subheaderData = data?.data?.[0]?.subheader ?? {};

  return <Subheader headerData={subheaderData} />;
}