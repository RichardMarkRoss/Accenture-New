import React, { useState } from "react";
import axios from "axios"; // Import Axios for making HTTP requests

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create a data object with the email and password
    const data = {
      email: email,
      password: pass
    };

    // Make a POST request to your API endpoint
    axios.post("https://your-api-url.com/login", data)
      .then((response) => {
        // Handle the response from the API
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit">Log In</button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register here.
      </button>
    </div>
  );
};
