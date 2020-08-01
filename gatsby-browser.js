import React from "react"

import { GeneralContextProvider } from "./src/contexts/general-context"
import {ThemeProvider} from './src/contexts/theme'

export const wrapRootElement = ({ element }) => (
  <GeneralContextProvider>
    <ThemeProvider>
      {element}
    </ThemeProvider>
  </GeneralContextProvider>
)
