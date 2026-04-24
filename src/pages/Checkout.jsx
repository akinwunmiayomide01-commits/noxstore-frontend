import React, { useState } from "react";

const BASE_URL = "https://noxstore-backend.onrender.com";

export default function Checkout() {
  const [loading, setLoading] = useState(false);

  // 🔴 MVP MOCK USER (replace later with auth system)
  const user = {
    email: "testuser@gmail.com",
    playerId: "player_001",
  };

  const selectedGame = "freefire";

  const amount = 500;

  const handlePay = async () => {
    try {
      setLoading(true);

      console.log("🚀 Initiating payment...");

      const res = await fetch(`${BASE_URL}/api/paystack/initialize`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          amount,
          player_id: user.playerId,
          game_id: selectedGame,
        }),
      });

      const data = await res.json();

      console.log("📦 INIT RESPONSE:", data);

      if (!data.success) {
        alert(data.message || "Payment failed");
        return;
      }

      // 🔥 MVP CORE ACTION: redirect to Paystack
      window.location.href = data.authorization_url;
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20, color: "#fff", background: "#111", minHeight: "100vh" }}>
      <h2>Checkout</h2>

      <p>Game: {selectedGame}</p>
      <p>Amount: ₦{amount}</p>
      <p>User: {user.email}</p>

      <button
        onClick={handlePay}
        disabled={loading}
        style={{
          padding: "12px 20px",
          background: loading ? "gray" : "green",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          marginTop: 20,
        }}
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
}