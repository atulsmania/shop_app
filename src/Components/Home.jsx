import React from "react";
import Products from "./Products";
import styles from "./Home.module.css";

function Home({ data, dispatch }) {
  const action = "add";
  return (
    <div className={styles.container}>
      <h1>Products</h1>
      {data.map((item, i) => (
        <Products key={item.name} name={item.name}>
          <button
            onClick={() =>
              dispatch({
                type: action,
                payload: i
              })
            }
            disabled={item.inCart}>
            {action} item
          </button>
        </Products>
      ))}
    </div>
  );
}

export default Home;
