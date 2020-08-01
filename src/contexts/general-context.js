import React from 'react'


let default_value = {
  hello: '',
  setHello: () => {},
  search_text: '',
  setSearchText: () => {}
}


let GeneralContext = React.createContext(default_value)

function GeneralContextProvider(props){
  let [hello, setHello] = React.useState('world')
  let [search_text, setSearchText] = React.useState('')

  return(
    <GeneralContext.Provider value={{
      hello,
      setHello,
      search_text,
      setSearchText
    }}>
      {props.children}
    </GeneralContext.Provider>
  )
}

export default GeneralContext
export {GeneralContextProvider}