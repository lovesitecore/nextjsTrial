import {MediaResults} from "./media" 

type Recipe = {
    Title: string
    id: string
    Name: string
    Ingredients: string
    Duration: string
    Description: string
    ImageList: MediaResults
  }
export default Recipe

export type RecipeResults = {
  total: string;
  results: Recipe[];
}