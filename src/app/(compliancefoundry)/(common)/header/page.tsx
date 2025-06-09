import ErrorComponent from "@/app/UI/ErrorComponent";
import { getMethod } from "@/app/utils-api/getMethod";
import Header from "@/components/Header";
import { API_ENDPOINTS } from "@/config";

export default async function HeaderSection() {
  const announcementData = await getMethod({
    url: API_ENDPOINTS.announcement.getAnnouncement,
  });

  if (!announcementData)
    return <ErrorComponent errorText="Error Fetching Announcement  Data" />;

  const announcement =
    announcementData?.data?.length > 0
      ? announcementData?.data[0]
      : { showAnnouncement: false, announcementText: "" };

  const data = await getMethod({
    url: "header-websites?populate[headerData][populate]=*",
    options: {
      // cache: "force-cache",
    },
  });

  if (!data || !data?.data?.length)
    return <ErrorComponent errorText="Error Fetching Header  Data" />;

  const header = data?.data?.[0]?.headerData;

  if (!header) {
    return <div>Header data not found</div>;
  }

  return <Header headerData={header} announcement={announcement}/>;
}
