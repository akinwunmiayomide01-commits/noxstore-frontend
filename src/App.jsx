import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Games from "./pages/Games";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";

import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>

        {/* 🏠 Home */}
        <Route path="/" element={<Home />} />

        {/* 🎮 Games */}
        <Route path="/games" element={<Games />} />

        {/* 💳 Checkout */}
        <Route path="/checkout" element={<Checkout />} />

        {/* ✅ Payment success verification */}
        <Route path="/payment-success" element={<Success />} />

        {/* 🔐 Admin login (public) */}
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* 🛠 Admin dashboard (protected) */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;