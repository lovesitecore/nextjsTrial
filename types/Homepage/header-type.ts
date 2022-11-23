import {MediaResults} from "../Basics/media-type" 
import { MenuResults } from "./menu-type"

type Header = {
    id: string
    name: string
    heroImage: MediaResults
    logo: MediaResults
    menuItems: MenuResults
  }
export default Header

export type HeaderResults = {
  total: string;
  results: Header[];
}