import ErrorComponent from "@/app/UI/ErrorComponent";
import { getMethod } from "@/app/utils-api/getMethod";
import Announcement from "@/components/Announcement";
import { API_ENDPOINTS } from "@/config";


const AnnouncementSection = async () => {
  const data = await getMethod({
    url: API_ENDPOINTS.announcement.getAnnouncement,
  });

  if ( !data ) return <ErrorComponent errorText="Error Fetching Announcement  Data"/>

  const announcementData =
    data?.data?.length > 0
      ? data?.data[0]
      : { showAnnouncement: false, announcementText: "" };

  return <Announcement announcementData={announcementData} />;
};


export default AnnouncementSection;
