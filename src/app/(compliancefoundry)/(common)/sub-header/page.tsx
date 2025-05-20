import { getMethod } from "@/app/utils-api/getMethod";
import Header from "@/components/Header";
import Subheader from "@/components/Subheader";

export default async function SubFooterSection() {
  const data = await getMethod({
    url: "subheaders?populate[subheader][populate]=*",
    options: {
    
    },
  });


  return <Subheader headerData={data.data[0].subheader} />;
}