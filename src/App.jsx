import "./App.css";

import { useState } from "react";

import Cart from "./components/Cart/Cart";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cardIsShown, setCardIsShown] = useState(false);

  const showCartHandler = () => setCardIsShown(true);

  const hideCartHandler = () => setCardIsShown(false);

  return (
    <>
      {cardIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
