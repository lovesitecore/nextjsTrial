export const ALL_RELEASENOTES_QUERY = `{ 
    data: allReleaseNotes
    {
      total
      results
      {
        id 
        name
        addno
        breakingChange
        context
        highlight
        linktooriginreleasenotes
        title
        description
      }
    }
  }
  `;

export default ALL_RELEASENOTES_QUERY