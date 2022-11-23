export const ALL_FOOTER_QUERY = `{ 
    data: allFooter {
        results {
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
  `;

export default ALL_FOOTER_QUERY