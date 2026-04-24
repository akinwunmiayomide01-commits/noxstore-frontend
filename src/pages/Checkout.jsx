import React, { useState } from "react";

const BASE_URL = "https://noxstore-backend.onrender.com"; 
// 🔴 replace with your real Render backend URL

export default function Checkout() {
  const [loading, setLoading] = useState(false);

  const user = {
    email: "test@gmail.com", // replace with real logged-in user
    playerId: "12345",
  };

  const selectedGame = "freefire"; // replace dynamically if needed

  const payNow = async () => {
    try {
      setLoading(true);

      const res = await fetch(`${BASE_URL}/api/paystack/initialize`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          amount: 500, // MVP test amount
          player_id: user.playerId,
          game_id: selectedGame,
        }),
      });

      const data = await res.json();

      console.log("PAYMENT RESPONSE:", data);

      if (!data.success) {
        alert(data.message || "Payment failed");
        return;
      }

      // 🔥 REDIRECT TO PAYSTACK
      window.location.href = data.authorization_url;
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", color: "#fff" }}>
      <h2>Checkout</h2>

      <p>Email: {user.email}</p>
      <p>Amount: ₦500</p>

      <button
        onClick={payNow}
        disabled={loading}
        style={{
          padding: "10px 20px",
          background: "green",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
}