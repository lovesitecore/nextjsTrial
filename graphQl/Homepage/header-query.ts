export const ALL_HEADER_QUERY = `{ 
    data: allHeader {
        total
        results {
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
  `;

export default ALL_HEADER_QUERY