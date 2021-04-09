import React, { useContext, useEffect, useRef } from "react";
import MyContext from "../context/MyContext";
import { Redirect } from "react-router-dom";

const Login = () => {
  const context = useContext(MyContext);
  const { initialUser, user, setUser, login, setLogin, ACCOUNT } = context;
  const usernameInputRef = useRef();

  const handleText = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    Object.keys(user).forEach((key) => {
      if (user[key] !== ACCOUNT[key]) initialUser[key] = `incorrect ${key}`;
    });
    setLogin("reject");
    setUser(initialUser);
    if (
      user.username === ACCOUNT.username &&
      user.email === ACCOUNT.email &&
      user.password === ACCOUNT.password
    )
      setLogin("true");
  };

  useEffect(() => usernameInputRef.current.focus(), []);

  if (login === "true") return <Redirect to="/products" />;

  return (
    <section className="login-section">
      <h2>Please Sign In</h2>
      <form className="login-form" autoComplete="on">
        <label htmlFor="username">User name</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleText}
          ref={usernameInputRef}
          spellCheck="false"
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleText}
          spellCheck="false"
        />
        <label htmlFor="password">Password</label>
        <input
          type={login === "reject" ? "text" : "password"}
          name="password"
          value={user.password}
          onChange={handleText}
          spellCheck="false"
        />
        <button onClick={handleSubmit}>Login</button>
        <p>Forgot your password?</p>
        <h4>Create a new account</h4>
      </form>
    </section>
  );
};

export default Login;
