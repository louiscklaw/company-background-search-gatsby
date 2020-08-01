// https://www.bbc.co.uk/search?q=casetify

import React from 'react'
import LinkToOutside from './link-to-outside'

function SearchInBBC(props){

  return(
    <div>
      <LinkToOutside href={`https://www.bbc.co.uk/search?q=casetify`} text={`search in BBC`} />
    </div>
  )
}

export default SearchInBBC