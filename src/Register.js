import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const [mobile, setmobile] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [ischecked, setischecked] = useState("false");
  const navi = useNavigate();
  function handleregister() {
    if (
      name !== "" &&
      password !== "" &&
      mobile !== "" &&
      ischecked === "true"
    ) {
      let userData = [];
      let users = localStorage.getItem("users") || "[]";
      users = JSON.parse(users);

      userData = { name, mobile, password };
      users.push(userData);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Registered successfully!");
      navi("login");
    } else {
      alert("fill all details and give the consent");
    }
  }

  function handlecheck() {
    if (ischecked === "true") {
      setischecked("false");
    } else {
      setischecked("true");
    }
  }
  console.log(ischecked);
  return (
    <div className="container">
      <h1>Registration form</h1>
      <div className="container2">
        <div className="formcontainer">
          <h2>Penthara Technologies</h2>
          <div className="regform">
            <div className="labelinput">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                placeholder="Enter your name"
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div className="labelinput">
              <label htmlFor="mobile">Mobile No</label>
              <input
                type="number"
                id="mobile"
                placeholder="Enter your Mobile no"
                value={mobile}
                onChange={(e) => setmobile(e.target.value)}
              />
            </div>
            <div className="labelinput">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <div className="checkinput">
              <input
                type="checkbox"
                className="regcheckbox"
                onChange={() => handlecheck()}
              />
              <p>
                By clicking on this consent box you agree to the Terms and
                Coditions of the company
              </p>
            </div>
            <div>
              <button type="submit" onClick={() => handleregister()}>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
