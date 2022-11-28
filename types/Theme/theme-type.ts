type Theme = {
    id: string
    name: string
    buttonColor: string
    buttonPadding: string
    }
export default Theme

export type ThemeResults = {
  total: string;
  results: Theme[];
}