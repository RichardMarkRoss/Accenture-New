import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [identityNumber, setIdentityNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: name,
      surname: surname,
      email: email,
      password: password,
      identityNumber: identityNumber
    };

    axios.post("http://localhost:5179/api/Users/register", data)
      .then((response) => {
        alert("User has been registered!");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Your name"
          id="name"
          name="name"
        />
        <label htmlFor="surname">Surname</label>
        <input
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          type="text"
          placeholder="Your surname"
          id="surname"
          name="surname"
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <label htmlFor="identityNumber">Identity Number</label>
        <input
          value={identityNumber}
          onChange={(e) => setIdentityNumber(e.target.value)}
          type="text"
          placeholder="Your identity number"
          id="identityNumber"
          name="identityNumber"
        />
        <button type="submit">Register</button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("login")}
      >
        Already have an account? Login here.
      </button>
    </div>
  );
};

export default Register;
