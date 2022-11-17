import { SitecoreProductResults } from "./sitecoreProduct-type"

type SitecoreProductInternal = {
    id: string
    name: string
    roductAbbreviationInternal: string
    productNameInternal: string
    productOwnerInteral: string
    sitecoreProducts: SitecoreProductResults

}
export default SitecoreProductInternal

export type SitecoreProductInternalResults = {
    total: string;
    results: SitecoreProductInternal[];
}