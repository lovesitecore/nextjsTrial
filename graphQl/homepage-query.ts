export const ALL_HEADER_QUERY = `{ 
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

export default ALL_HEADER_QUERY

export const ALL_FOOTER_QUERY = `{ 
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

