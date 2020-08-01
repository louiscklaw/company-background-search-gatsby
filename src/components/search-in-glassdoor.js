import React from 'react'
import LinkToOutside from './link-to-outside'

function SearchInGlassdoor(props){
  let {search_text} = props
  return(
    <div>
      <div>
        <div>
          <LinkToOutside href={`https://www.glassdoor.com.hk/Reviews/company-reviews.htm?suggestCount=0&suggestChosen=false&clickSource=searchBtn&typedKeyword=&locT=&locId=&jobType=&context=Review&sc.keyword=${search_text}&dropdown=1`} text={`search ${search_text} in glassdoor`} target="_blank" />
        </div>
      </div>
    </div>
  )
}

export default SearchInGlassdoor