import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import TopUp from "./pages/TopUp";
import PaymentSuccess from "./pages/PaymentSuccess";

// Home Page (MVP)
function Home() {
  return (
    <div style={styles.container}>
      <h1>🎮 NOXSTORE</h1>
      <p>Fast Game Top-Ups & Payments</p>

      <a href="/topup" style={styles.button}>
        Start Top-Up
      </a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topup" element={<TopUp />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />

        {/* fallback route (prevents blank page) */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

// simple MVP styles
const styles = {
  container: {
    height: "100vh",
    background: "#0f172a",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  button: {
    marginTop: "20px",
    padding: "12px 20px",
    background: "#22c55e",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "bold",
  },
};