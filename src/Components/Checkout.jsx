import React, { useState } from "react";

function Checkout() {
  const [message, setMessage] = useState("Checkout");
  return (
    <>
      <button onClick={() => setMessage("Thank You")}>{message}</button>
    </>
  );
}

export default Checkout;
