import React from 'react'

function SearchInGoogleTrends(props){
  let {search_text} = props

  let search_text_in_google = search_text.replace(' ','+')
  return(
    <div>
      <a href={`https://trends.google.com/trends/explore?date=all&geo=HK&q=casetify`} target="_blank">
        search in google trends
      </a>
    </div>
  )
}

export default SearchInGoogleTrends