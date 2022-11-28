export const THEME_QUERY = 
` 
    id
    name
    buttonColor
    buttonpadding
    `;
export default THEME_QUERY;


export const ALL_THEME_QUERY = `{ 
    data: allTheme {
        results {
          ${THEME_QUERY}
         }    
      }
  `;