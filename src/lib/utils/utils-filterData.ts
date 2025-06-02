export const filterData = (data: any[], websiteSection: string) => {
  return data
    .flat()
    .filter(
      (item: { WebsiteDomain: string }) => item.WebsiteDomain === websiteSection
    );
};


export const filterData2 = (data: any[], websiteSection: string) => {
  return data
    .flat()
    .filter(
      (item: { WebsiteDomain: string }) => item.WebsiteDomain === websiteSection
    );
};
