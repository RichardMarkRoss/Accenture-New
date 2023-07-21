import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Topbar from "./Components/global/Topbar";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Dashboard from "./scenes/dashboard";
import Cart from "./scenes/cart";
import Lotto from "./scenes/lotto";
import Profile from "./scenes/profile";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import Navbar from "./scenes/navbar";
import BottomNav from "./scenes/bottomNav";
import Home from "./Home";
import { Login } from "./Login";
import Register from "./Register";
import "./App.css";

function App() {
  const [theme, colorMode] = useMode();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 426); // Adjust the value for mobile width as needed
  const [setIsSidebar] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 426); // Adjust the value for mobile width as needed
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return !isLoggedIn ? (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={(
                <div className="Log">
                  {currentForm === "login" ? (
                    <Login onFormSwitch={toggleForm} onLogin={handleLogin} />
                  ) : (
                    <Register onFormSwitch={toggleForm} onLogin={handleLogin} />
                  )}
                </div>
              )}
          />
        </Routes>
      </Router>
    </div>
  ) : (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            {!isMobile && <Navbar setIsSidebar={setIsSidebar} />}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/stats" element={<Dashboard />} />
              <Route path="/lotto" element={<Lotto />} />
              <Route path="/profile" element={<Dashboard />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
            {isMobile && <BottomNav />}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;