import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./Components/global/Topbar";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Dashboard from "./scenes/dashboard";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import Navbar from "./scenes/navbar";
import BottomNav from "./scenes/bottomNav";


function Home() {
  const [theme, colorMode] = useMode();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 426); // Adjust the value for mobile width as needed
  const [setIsSidebar] = useState(true);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 426); // Adjust the value for mobile width as needed
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            {!isMobile && <Navbar setIsSidebar={setIsSidebar} />}
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
            {isMobile && <BottomNav />}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Home;
