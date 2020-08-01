import React from 'react'
import LinkToOutside from './link-to-outside'

function SearchInYoutube(props){

  return(
    <div>
      <LinkToOutside href={`https://www.youtube.com/results?search_query=casetify`} text={`search in youtube`} />
    </div>
  )
}

export default SearchInYoutube