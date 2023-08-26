import React from "react";
import { useState } from "react";
import "./App.css";
import { Link, json, useNavigate } from "react-router-dom";

export default function Login() {
  const [mobile, setmobile] = useState("");
  const [password, setpassword] = useState("");
  const [showpassword, setshowpassword] = useState("password");
  const navi = useNavigate();
  function handleshow() {
    if (showpassword === "password") {
      setshowpassword("text");
    } else {
      setshowpassword("password");
    }
  }
  function handlelogin() {
    let users = localStorage.getItem("users") || "[]";
    users = JSON.parse(users);
    const userData = users.find(
      (user) => user.mobile === mobile && user.password === password
    );
    if (userData) {
      alert("Login successful!");
      navi("/tasklist");
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <div className="App">
      <div>
        <img src="" alt="" />
      </div>
      <div className="logincontainer">
        <div className="title">
          <h1>Cognisite Technologies</h1>
        </div>

        <div className="formdetails">
          <div>
            <h2>Login to your account</h2>
          </div>
          <div className="inputdiv">
            <label htmlFor="number">Mobile No</label>
            <input
              className="input"
              type="number"
              name="number"
              id="number"
              placeholder="Enter your Mobile no."
              value={mobile}
              onChange={(e) => setmobile(e.target.value)}
            />
          </div>
          <div className="inputdiv">
            <label htmlFor="password">Password</label>
            <input
              className="input"
              type={showpassword}
              placeholder="Enter your password"
              id="password"
              autoComplete="off"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <div className="check">
              <div>
                <input type="checkbox" onChange={() => handleshow()} />
                Show password
              </div>
              <a href="/">Reset</a>
            </div>
          </div>
          <button type="submit" onClick={() => handlelogin()}>
            Sign in
          </button>
          <div className="register">
            <span>Don't have an account yet?</span>
            <Link to="/">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
