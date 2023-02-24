import { ColorModeContext, useMode } from './theme.js';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
// import Team from './scenes/team';
// import FAQ from './scenes/faq';
// import Line from './scenes/line';
// import Bar from './scenes/bar';
// import Pie from './scenes/pie';
// import Calendar from './scenes/calendar';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className='content'>
            <Topbar />
            <Routes>
              <Route path='/' element={<Dashboard/>}/>
              {/*<Route path='/team' element={<Team/>}/>*/}
              {/*<Route path='/faq' element={<FAQ/>}/>*/}
              {/*<Route path='/line' element={<Line/>}/>*/}
              {/*<Route path='/bar' element={<Bar/>}/>*/}
              {/*<Route path='/pie' element={<Pie/>}/>*/}
              {/*<Route path='/calendar' element={<Calendar/>}/>*/}
              {/*<Route path='/form' element={<Calendar/>}/>*/}
              {/*<Route path='/geography' element={<Calendar/>}/>*/}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;