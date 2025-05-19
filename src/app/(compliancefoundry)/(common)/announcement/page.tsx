import { getMethod } from '@/app/utils-api/getMethod';
import Announcement from '@/components/Announcement'
import React from 'react'

const AnnouncementSection = async () => {

  const data = await getMethod({
    url: "announcements?sort[0]=updatedAt:desc&pagination[limit]=1",

  });

  return (
   <Announcement announcementData = {data.data[0]}/>
  )
}

export default AnnouncementSection