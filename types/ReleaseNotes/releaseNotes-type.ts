import { MediaResults } from "../Basics/media-type"
import { ChangeTypeResults } from "./changeType-type"
import { SitecoreProductResults } from "./sitecoreProduct-type"
import { SitecoreProductInternalResults } from "./sitecoreProductInternal-type"
import {PortableText} from '@portabletext/react'
import { JSONContent } from "@tiptap/core";

type ReleaseNote = {
  id: string
  name: string
  linktooriginreleasenotes: string
  hightlight: string
  addno: string
  title: string
  descriptionrt: JSONContent
  context: string
  highlight: boolean
  breakingChange: boolean
  sitecoreProduct: SitecoreProductResults
  internalProduct: SitecoreProductInternalResults
  type: ChangeTypeResults
  release: string
  publishDate: string
  notesImage: MediaResults
}
  
export default ReleaseNote

export type ReleaseNoteList = {
  total: string
  results: ReleaseNote[]
}