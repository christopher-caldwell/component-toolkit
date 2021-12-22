import { FC, useContext, useMemo } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider as MuiThemeProvider, createTheme, ThemeOptions } from '@mui/material/styles'

import { WhichTheme } from './ChosenTheme'

export const ThemeProvider: FC<{ options: ThemeOptions }> = ({ children, options }) => {
  const { theme } = useContext(WhichTheme)
  const muiTheme = useMemo(() => createThemeHelper(theme, options), [theme, options])

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}

const createThemeHelper = (theme: 'dark' | 'light', options: ThemeOptions) => {
  return createTheme({
    palette: {
      mode: theme,
      ...options,
    },
  })
}
