import './App.css'
import Topbar from './scenes/global/Tobar';
import { ColorModeContext, useMode } from './theme.jsx'
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  const [theme, colorMode] = useMode();

  return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
           <CssBaseline />
          <div className='app'>
            <main className='content'>
              <Topbar/>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
  )

}

export default App
