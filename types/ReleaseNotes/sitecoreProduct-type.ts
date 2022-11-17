import { SitecoreCloudResults } from "./sitecoreCloud-type"

type SitecoreProduct = {
    id: string
    name: string
    productName: string
    productDescription: string
    abbreviation: string
    productowner: string
    sitecoreCloud: SitecoreCloudResults
}
export default SitecoreProduct

export type SitecoreProductResults = {
    total: string;
    results: SitecoreProduct[];
}