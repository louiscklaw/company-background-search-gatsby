import React from 'react'

function SearchInGoogle(props){
  let {search_text} = props

  let search_text_in_google = search_text.replace(' ','+')
  return(
    <div>
      <a href={`http://www.google.com/search?q=${search_text_in_google}`} target="_blank">
        search in google
      </a>
    </div>
  )
}

export default SearchInGoogle