type SitecoreCloud = {
    id: string
    name: string
}
export default SitecoreCloud

export type SitecoreCloudResults = {
    total: string;
    results: SitecoreCloud[];
}