export const filterData = (data: any[], websiteSection: string) => {
  return data
    .flat()
    .filter(
      (item: { WebsiteDomain: string }) => item.WebsiteDomain === websiteSection
    );
};
