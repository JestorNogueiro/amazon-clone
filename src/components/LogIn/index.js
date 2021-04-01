import React, { useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import "./login.css";
const LogIn = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {})
      .catch((e) => alert(e.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //create user and log in and redirect to login
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <Link to="/login">
        <img
          className="login__logo"
          src="https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white.png "
          alt=""
        />
      </Link>
      <div className="login__form">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <button type="submit" className="login__button" onClick={login}>
            Sign In
          </button>
        </form>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
          voluptates obcaecati exercitationem iusto expedita vel. Fugiat itaque
          maiores maxime eaque!
        </p>
        <button className="login__reg" onClick={register}>
          Create your Account
        </button>
      </div>
    </div>
  );
};

export default LogIn;
