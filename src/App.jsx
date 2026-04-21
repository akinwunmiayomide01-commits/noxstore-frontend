import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopUp from "./pages/TopUp";
import PaymentSuccess from "./pages/PaymentSuccess";

const Home = () => {
  return (
    <div style={styles.home}>
      <h1>🎮 Welcome to Noxstore</h1>
      <p>Fast & Secure Game Top-Ups</p>

      <a href="/topup" style={styles.button}>
        Start Top-Up
      </a>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topup" element={<TopUp />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;

/**
 * SIMPLE UI STYLES
 */
const styles = {
  home: {
    minHeight: "100vh",
    background: "#0f172a",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    textAlign: "center",
  },
  button: {
    padding: "12px 20px",
    background: "#22c55e",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "bold",
  },
};