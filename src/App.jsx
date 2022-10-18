import { Shop } from "./components/Shop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "./components/MainPage";
import { Add } from "./components/Add";
import { TubShop } from "./components/TubShop";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<Shop />} />
          <Route path="/add" element={<Add />} />
          <Route path="/tub" element={<TubShop />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
