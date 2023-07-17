import React, { useState } from "react";
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          {isLoggedIn ? (
            <Redirect to="/home" />
          ) : (
            <div>
              {currentForm === "login" ? (
                <Login onFormSwitch={toggleForm} onLogin={handleLogin} />
              ) : (
                <Register onFormSwitch={toggleForm} onLogin={handleLogin} />
              )}
            </div>
          )}
        </Route>
        <Route path="/home">
          {isLoggedIn ? <Home /> : <Redirect to="/" />}
        </Route>
      </Router>
    </div>
  );
}

export default App;
