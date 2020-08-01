import React from 'react'

function SearchInRakutenJp(props){
  let {search_text} = props

  let search_text_in_google = search_text.replace(' ','+')
  return(
    <div>
      <a href={`https://search.rakuten.co.jp/search/mall/casetify/`} target="_blank">
        search in rakuten
      </a>
    </div>
  )
}

export default SearchInRakutenJp