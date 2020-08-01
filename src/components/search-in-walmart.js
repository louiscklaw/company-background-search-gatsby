import React from 'react'

function SearchInWalmart(props){
  let {search_text} = props

  let search_text_in_google = search_text.replace(' ','+')
  return(
    <div>
      <a href={`https://www.walmart.com/search/?query=casetify`} target="_blank">
        search in rakuten
      </a>
    </div>
  )
}

export default SearchInWalmart