import { useReducer, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login, Navbar, Home, Checkout, Cart } from "./Components";
import reducer from "./reducer.js";
import "./styles.css";

let i = 1;
const data = Array.from({ length: 12 }, () => ({
  name: "Item : " + i++,
  inCart: false
}));

function App() {
  const [cartItems, dispatch] = useReducer(reducer, data);
  const [name, setName] = useState("");

  return (
    <div className="App">
      <Router>
        <Navbar name={name} />
        <Switch>
          {name && (
            <>
              <Route exact path="/home">
                <Home data={data} dispatch={dispatch} />
              </Route>
              <Route exact path="/cart">
                <Cart cartItems={cartItems} dispatch={dispatch} />
              </Route>
              <Route exact path="/checkout">
                <Checkout />
              </Route>
            </>
          )}
          <Route path="/">
            <Login setName={setName} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
