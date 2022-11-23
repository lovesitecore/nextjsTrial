export const ALL_HOMEPAGE_QUERY = `{ 
  data: allHomepage {
    results{
      id
      name
      header {
        total
        results {
          __typename
        	... on Header {
						id
            name
            heroImage {
              total
              results {
                id
                name
                fileId
                fileUrl
                fileName
                fileSize
                description
                fileHeight
                fileWidth
                fileType
            	}
          	}
          	logo {
              total
            	results {
                id
                name
                fileId
                fileUrl
                fileName
                fileSize
                description
                fileHeight
                fileWidth
                fileType
              }
          	}
          	menuItems {
            	total
            	results {
              	__typename
              	... on Menu {
                  id
                  name
                  label
                  link
                }
            	}
            }
          }
        }
      }
      recipeTitle
      recipeSectionText
      recipes {
        total
        results {
          __typename
          ... on Recipe {
            id
            name
            Title: recipeTitle
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
      footer {
        total
        results {
          __typename
          ... on Footer {
            id
            name
            menuItems {
            	total
            	results {
              	__typename
              	... on Menu {
                  id
                  name
                  label
                  link
                }
              }
            }
          } 
        }
      }
    }
  }
}
`;

export default ALL_HOMEPAGE_QUERY


