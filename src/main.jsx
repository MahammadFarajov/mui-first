import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  palette: {
    customlightblue: {
      main: "#629dfc"
    },
    customblack: {
      main: "#42454A",
    },
    customdarkblue: {
      main: '#0a6efa',
    },
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
