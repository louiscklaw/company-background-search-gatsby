import React from 'react'

import GlobalContext from '../contexts/general-context'
import ThemeContext from '../contexts/theme'

function SearchInput(props){
  let {hello, setHello} = React.useContext(GlobalContext)
  // let {hello, setHello} = React.useContext(ThemeContext)

  let {active_style} = React.useContext(ThemeContext)
  // console.log(React.useContext(ThemeContext))

  let search_input_ref = React.useRef()

  const handleSearchOnChange = (e) =>{
    let input_box_text = e.target.value
    search_input_ref.value = input_box_text
    setHello(input_box_text)
  }

  return(
    <>
      <input className={active_style.input} ref={search_input_ref} default_value="casetify" onChange={handleSearchOnChange}/>
    </>
  )
}

export default SearchInput