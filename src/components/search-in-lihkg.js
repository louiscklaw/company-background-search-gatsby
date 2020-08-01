import React from 'react'
import LinkToOutside from './link-to-outside'

function SearchInLihkg(props){
  let {search_text} = props
  return(
    <div>
      <div>
        <div>
          <LinkToOutside href={`https://lihkg.com/search?q=casetify`} text={`search ${search_text} in lihkg`} target="_blank" />
        </div>
      </div>
    </div>
  )
}

export default SearchInLihkg