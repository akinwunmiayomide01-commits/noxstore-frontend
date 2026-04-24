import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";

const BASE_URL = "https://noxstore-backend.onrender.com";

export default function Checkout() {
  const [params] = useSearchParams();
  const game = params.get("game") || "Unknown Game";

  const [email, setEmail] = useState("");
  const [playerId, setPlayerId] = useState("");
  const [amount, setAmount] = useState(500);
  const [loading, setLoading] = useState(false);

  const payNow = async () => {
    try {
      setLoading(true);

      const res = await fetch(`${BASE_URL}/api/paystack/initialize`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          amount,
          player_id: playerId,
          game_id: game,
        }),
      });

      const data = await res.json();

      console.log("INIT RESPONSE:", data);

      if (!data.success) {
        alert(data.message || "Payment failed");
        return;
      }

      // 🔥 MVP FLOW: redirect to Paystack
      window.location.href = data.authorization_url;
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={styles.card}
      >
        <h2 style={styles.title}>Checkout</h2>

        <p style={styles.game}>🎮 {game}</p>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        {/* PLAYER ID */}
        <input
          type="text"
          placeholder="Player ID"
          onChange={(e) => setPlayerId(e.target.value)}
          style={styles.input}
        />

        {/* AMOUNT */}
        <select
          onChange={(e) => setAmount(Number(e.target.value))}
          style={styles.input}
        >
          <option value={500}>₦500</option>
          <option value={1000}>₦1000</option>
          <option value={2000}>₦2000</option>
        </select>

        {/* PAY BUTTON */}
        <motion.button
          onClick={payNow}
          disabled={loading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            ...styles.button,
            background: loading ? "#444" : "#00ffcc",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Processing..." : "Pay Now ⚡"}
        </motion.button>
      </motion.div>
    </div>
  );
}

/* =========================
   STYLES (MVP CLEAN UI)
========================= */

const styles = {
  container: {
    minHeight: "100vh",
    background: "#0b0f1a",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    color: "#fff",
  },
  card: {
    width: "100%",
    maxWidth: 420,
    background: "#111827",
    padding: 25,
    borderRadius: 15,
    boxShadow: "0 0 20px rgba(0,255,204,0.1)",
    border: "1px solid rgba(255,255,255,0.05)",
  },
  title: {
    textAlign: "center",
    marginBottom: 10,
  },
  game: {
    textAlign: "center",
    marginBottom: 20,
    color: "#00ffcc",
  },
  input: {
    width: "100%",
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    border: "none",
    outline: "none",
    background: "#0f172a",
    color: "#fff",
  },
  button: {
    width: "100%",
    padding: 14,
    border: "none",
    borderRadius: 10,
    fontWeight: "bold",
    color: "#000",
    transition: "0.2s",
  },
};