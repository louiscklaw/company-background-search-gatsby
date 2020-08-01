import React from 'react'
import LinkToOutside from './link-to-outside'

function SearchInHkgolden(props){
  let {search_text} = props
  return(
    <div>
      <div>
        <div>
          <LinkToOutside href={`https://forum.hkgolden.com/search/T/casetify`} text={`search ${search_text} in lihkg`} target="_blank" />
        </div>
      </div>
    </div>
  )
}

export default SearchInHkgolden
