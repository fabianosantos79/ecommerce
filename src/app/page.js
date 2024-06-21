'useClient'

import Header from "./components/Header";
import ListIcons from "./components/ListIcons";
import ListProducts from "./components/ListProducts";

export default function Home() {
  return (
    <main>
      <Header />
      <ListIcons />
      <ListProducts />
    </main>
  );
}
