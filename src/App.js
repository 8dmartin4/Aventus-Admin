import { ColorModeContext, useMode } from './theme.js';
import { CSSBaseline, ThemeProvider } from '@mui/material';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value = {colorMode}>
      <ThemeProvider theme = {theme}>
        <CSSBaseline />
        <div className="app">
          <main className = 'content'></main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
