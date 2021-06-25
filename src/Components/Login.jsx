import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = ({ setName }) => {
  const input = useRef();
  return (
    <div className={styles.form}>
      <label htmlFor={styles.name}>
        <h1>Your Name</h1>
      </label>
      <input ref={input} type="text" placeholder="required" />
      <button onClick={() => setName(input.current.value)}>
        <Link to={"/home"}>Login</Link>
      </button>
    </div>
  );
};

export default Login;
