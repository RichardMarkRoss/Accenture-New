import { useState } from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Topbar from "./Components/global/Topbar";
import {Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Dashboard from "./scenes/dashboard";
import {createTheme } from "@mui/material/styles";
import {useMemo} from "react";
import { themeSettings } from "./theme";
import Navbar from "./scenes/navbar";

function Home() {
  const [theme, colorMode] = useMode();
  const [ setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard/>} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Home;