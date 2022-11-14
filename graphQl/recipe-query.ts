export const ALL_RECIPE_QUERY = `{ 
    data: allRecipe
    {
        __typename
        total
        results {
          id
          Title: recipeTitle
          Name: name
          Ingredients: ingredients
          Duration: minutesToPrepare
          Description: preparationDescription
          ImageList: image{
            total
            results{
              id
              name
              fileName
              fileUrl
              description
              fileWidth
              fileHeight
              fileId
              fileSize
              fileType
            }
          }
          }
    }
  }
  `;

export default ALL_RECIPE_QUERY