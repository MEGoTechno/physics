import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ThemeProvider, CssBaseline } from "@mui/material"
import { createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { themeSettings } from './style/theme';

import { useMemo } from 'react';

import * as locales from '@mui/material/locale';
import { arSD } from '@mui/x-data-grid/locales';
import { routes } from './settings/routes/routes';

import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache'


function App() {
  const mode = useSelector(state => state.global.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode), locales["arSD"], arSD), [mode]) // he used useMemo ???

  const routesObj = createBrowserRouter(routes)

  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

  const cacheLtr = createCache({
    key: 'muiltr',
  })

  return (
    <div className="App">

      <CacheProvider value={cacheRtl}>

        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={routesObj}></RouterProvider>
        </ThemeProvider>

      </CacheProvider>
    </div>
  );
}

export default App;
