import React from 'react'


function LinkToOutside({href, text}){
  return(
    <>
      <a href={href}>{text}</a>
    </>
  )
}

export default LinkToOutside