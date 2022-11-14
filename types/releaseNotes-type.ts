type ReleaseNote = {
  id: string
  name: string
  linktooriginreleasenotes: string
  hightlight: string
  addno: string
  title: string
  description: string
  }
  
  export default ReleaseNote

  export type ReleaseNoteList = {
    total: string
    results: ReleaseNote[]
  }