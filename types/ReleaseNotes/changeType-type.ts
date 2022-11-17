type ChangeType = {
    id: string
    name: string
    changeType: string
    description: string
}
export default ChangeType


export type ChangeTypeResults = {
    total: string;
    results: ChangeType[];
}