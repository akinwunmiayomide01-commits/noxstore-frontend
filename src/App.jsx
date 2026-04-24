import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Games from "./pages/Games";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import Admin from "./pages/Admin";

function App() {
  return (
    <Router>
      <Routes>

        {/* 🏠 Home */}
        <Route path="/" element={<Home />} />

        {/* 🎮 Games list */}
        <Route path="/games" element={<Games />} />

        {/* 💳 Checkout */}
        <Route path="/checkout" element={<Checkout />} />

        {/* ✅ Payment success + verification */}
        <Route path="/payment-success" element={<Success />} />

        {/* 🛠 Admin dashboard */}
        <Route path="/admin" element={<Admin />} />

      </Routes>
    </Router>
  );
}

export default App;