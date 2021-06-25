import React from "react";
import { Link } from "react-router-dom";
import Products from "./Products";
import styles from "./Cart.module.css";

function Cart({ cartItems, dispatch }) {
  const length = Boolean(cartItems.filter((item) => item.inCart).length);
  const action = "remove";
  return (
    <>
      <div className={styles.container}>
        {!length && <h1>Cart is Empty</h1>}
        {cartItems.map(
          (item, i) =>
            item.inCart && (
              <Products key={item.name} name={item.name}>
                <button
                  className="btn"
                  onClick={() =>
                    dispatch({
                      type: action,
                      payload: i
                    })
                  }>
                  {action} item
                </button>
              </Products>
            )
        )}
      </div>
      <div className={styles.buttons}>
        <button>
          <Link to="/home">continue shopping</Link>
        </button>
        {length && (
          <button>
            <Link to="/checkout">checkout</Link>
          </button>
        )}
      </div>
    </>
  );
}

export default Cart;
