import React from 'react'

function SearchInRakutenTw(props){
  let {search_text} = props

  let search_text_in_google = search_text.replace(' ','+')
  return(
    <div>
      <a href={`https://www.rakuten.com.tw/search/casetify/`} target="_blank">
        search in rakuten
      </a>
    </div>
  )
}

export default SearchInRakutenTw