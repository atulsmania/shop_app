import React from "react";
import styles from "./Products.module.css";

const Products = ({ name, children }) => {
  return (
    <div className={styles.item}>
      <h2 className={styles.itemName}>{name}</h2>
      <p className={styles.itemDescription}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit placeat
        adipisci laborum quia aliquam quasi eum rem quos atque commodi.
      </p>
      {children}
    </div>
  );
};

export default Products;
