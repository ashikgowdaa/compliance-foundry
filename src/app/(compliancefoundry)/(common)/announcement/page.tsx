import { getMethod } from "@/app/utils-api/getMethod";
import Announcement from "@/components/Announcement";

const AnnouncementSection = async () => {
  const data = await getMethod({
    url: "announcements?sort[0]=createdAt:desc&pagination[limit]=1",
  });

  const announcementData =
    data?.data?.length > 0
      ? data?.data[0]
      : { showAnnouncement: false, announcementText: "" };

  return <Announcement announcementData={announcementData} />;
};


export default AnnouncementSection;
