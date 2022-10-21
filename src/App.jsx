import { Shop } from "./components/Shop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "./components/MainPage";
import { Add } from "./components/Add";
import { TubShop } from "./components/TubShop";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage cart={cart} />} />
          <Route path="/collection" element={<Shop />} />
          <Route path="/about" element={<Shop />} />
          <Route path="/add" element={<Add />} />
          <Route
            path="/products/*"
            element={<TubShop cart={cart} setCart={setCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
