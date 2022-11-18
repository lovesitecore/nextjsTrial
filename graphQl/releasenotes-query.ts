export const ALL_RELEASENOTES_QUERY = `{ 
    data: allReleaseNotes{
      total
      results {
        id
        name
        title
        context
        description
        addno
        linktooriginreleasenotes
        breakingChange
        highlight
        descriptionrt
        release
        publishDate
        notesimage {
          total
          results {
            id
            name
            description
            fileHeight
            fileId
            fileName
            fileSize
            fileType
            fileUrl
            fileWidth
          }
        }
        sitecoreProduct{
          total
          results {
            __typename
            ... on SitecoreProducts {
              id
              name
              productname
              productDescription
              abbreviation
              productowner
              sitecoreCloud {
                total
                results
                {
                  __typename
                  ... on SitecoreCloud {
                    id
                    name
                  } 
              }
            }
            }
          }
        }
        internalProduct{
          total
          results {
            __typename
            ... on SitecoreProductsInternal {
              id
              name
              productAbbreviationInternal
              productNameInternal
              productOwnerInteral
            }
          }
        }
        type
        {
          total
          results {
            __typename
            ... on Changetype {
              id
              name
              changeType
              description
            }
          }
        }
      }
    }
  }
  `;
export default ALL_RELEASENOTES_QUERY