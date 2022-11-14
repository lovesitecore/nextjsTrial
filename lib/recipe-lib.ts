import Recipe, {RecipeResults} from "../types/recipe-type";
import {fetchAPI} from "./api"
import {ALL_RECIPE_QUERY} from "../graphQl/recipe-query";


export async function getAllRecipes(preview: boolean): Promise<Recipe[]> {
    const data = await fetchAPI(`${ALL_RECIPE_QUERY}`);
    
    return extractPosts(data.data);
}


function extractPosts({ data }: { data: RecipeResults }) {
    console.log(data);
    return data.results.map((post: Recipe) => {
      return post;
    });
}
