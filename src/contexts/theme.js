import React from 'react'

import scss_style from '../scss/style.module.scss'

let default_value = {
  hello:'', setHello: () => {},
  active_style:{}, setActiveStyle: () => {}
}

let ThemeContext = React.createContext(default_value)

function ThemeProvider(props){
  let [hello, setHello] = React.useState('world')
  let [active_style, setActiveStyle] = React.useState(scss_style)
  return(
    <ThemeContext.Provider value={{
      hello, setHello,
      active_style, setActiveStyle
    }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext

export { ThemeProvider }