import Theme, {ThemeResults} from "../../types/Theme/theme-type";
import {fetchAPI} from "../api"
import THEME_QUERY,{ALL_THEME_QUERY} from "../../graphQl/Theme/theme-query";

export async function getAllTheme(preview: boolean): Promise<Theme[]> {
    const data = await fetchAPI(`${ALL_THEME_QUERY}`);
    
    return extractPosts(data.data);
}


function extractPosts({ data }: { data: ThemeResults }) {
    console.log(data);
    return data.results.map((post: Theme) => {
      return post;
    });
}