import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import { Login } from "./Login";
import Register from "./Register";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <Router>
        <Routes> 
          <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : (
            <div className="Log">
              {currentForm === "login" ? (
                <Login onFormSwitch={toggleForm} onLogin={handleLogin} />
              ) : (
                <Register onFormSwitch={toggleForm} onLogin={handleLogin} />
              )}
            </div>
          )} />
          <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/" />} />
        
          </Routes>
      </Router>
    </div>
  );
}

export default App;
