import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { ShoppingCartContextProvider } from "./context/ShoppingCartContext";
import { ShoppingCart } from "./components/ShoppingCart";

function App(): JSX.Element {
  return (
    <ShoppingCartContextProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <ShoppingCart />
      </div>
    </ShoppingCartContextProvider>
  );
}

export default App;
