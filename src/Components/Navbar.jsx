import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar({ name }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Shop Name</h1>
      {name && (
        <button>
          <Link className="link" to="/cart">
            cart
          </Link>
        </button>
      )}
    </div>
  );
}

export default Navbar;
