import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import TopUp from "./pages/TopUp";
import PaymentSuccess from "./pages/PaymentSuccess";

function Home() {
  return (
    <div style={styles.home}>
      <h1>🎮 NOXSTORE</h1>
      <p>Fast & Secure Game Top-Ups</p>

      <a href="/topup" style={styles.button}>
        Start Top-Up
      </a>
    </div>
  );
}

export default function App() {
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

/**
 * SIMPLE UI STYLES (MVP LEVEL)
 */
const styles = {
  home: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a",
    color: "#fff",
    textAlign: "center",
  },
  button: {
    padding: "12px 20px",
    background: "#22c55e",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "bold",
  },
};