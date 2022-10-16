import "./App.css";
import { Shop } from "./components/Shop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "./components/MainPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<Shop />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
