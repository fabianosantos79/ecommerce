'use client'

import Cart from "./components/Cart";
import Header from "./components/Header";
import ListIcons from "./components/ListIcons";
import ListProducts from "./components/ListProducts";
import Provider from "./components/context/Provider";

export default function Home() {

  return (
    <main>
      <Provider>
        <Header />
        <ListIcons />
        <ListProducts />
        <Cart />
      </Provider>
    </main>
  );
}
