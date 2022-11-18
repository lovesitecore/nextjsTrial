import ReleaseNote, {ReleaseNoteList} from "../types/ReleaseNotes/releaseNotes-type";
import {fetchAPI} from "./api"
import {ALL_RELEASENOTES_QUERY} from "../graphQl/releasenotes-query";
import RTE from "../types/Basics/richText-type";


export async function getAllReleaseNotes(preview: boolean): Promise<ReleaseNote[]> {
    const data = await fetchAPI(`${ALL_RELEASENOTES_QUERY}`);
    
    return extractPosts(data.data);
}


function extractPosts({ data }: { data: ReleaseNoteList }) {
    console.log("Data: "+ data);
    return data.results.map((post: ReleaseNote) => {
      return post;
    });
}

/*function parsePost(post: ReleaseNote): ReleaseNote {
  return {

  }
}*/