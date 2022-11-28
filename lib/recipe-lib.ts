import Recipe, {RecipeResults} from "../types/Recipes/recipe-type";
import {fetchAPI} from "./api"
import {RECIPE_QUERY,ALL_RECIPE_QUERY} from "../graphQl/recipe-query";


export async function getAllRecipes(preview: boolean): Promise<Recipe[]> {
    const data = await fetchAPI(`${ALL_RECIPE_QUERY}`);
    
    return extractPosts(data.data);
}

export async function getRecipeById(id: string): Promise<RecipeResults> {
  console.log('getRecipeById');
  console.log('Id: ' + id);
  const query = `{ 
    data: recipe(id: "${id}")
    {
        ${RECIPE_QUERY}
    }
  }`;
  console.log('query');
  console.log(query);
  const data = await fetchAPI(
    `{ 
      data: allRecipe(where: { id_eq: "${id}" })
      {
        __typename
        total
        results {
          ${RECIPE_QUERY}
        }
      }
    }`
  );
  console.log(data);
  return extractPost(data.data);
}

export async function getAllRecipeWithIds(): Promise<Recipe[]> {
  console.log('getAllRecipeWithIds');
  const data = await fetchAPI(
    `{ 
      data: allRecipe(where: { id_neq : null } )
      {
        __typename
        total
        results {
          ${RECIPE_QUERY}
        }
      }
    }`
  );
  return extractPosts(data.data);
}

function extractPosts({ data }: { data: RecipeResults }) {
  console.log('extractPosts');
    console.log(data);
    return data.results.map((post: Recipe) => {
      return post;
    });
}

function extractPost({ data }: { data: Recipe }) {
  return data;
}


