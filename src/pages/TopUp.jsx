import React, { useState } from "react";

const TopUp = () => {
  const [email, setEmail] = useState("");
  const [playerId, setPlayerId] = useState("");
  const [gameId, setGameId] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!email || !playerId || !gameId || !amount) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "https://noxstore-backend.onrender.com/api/paystack/initialize",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            amount: Number(amount),
            orderId: "NX_" + Date.now(),
            playerId,
            gameId,
          }),
        }
      );

      const data = await response.json();

      if (data.authorization_url) {
        window.location.href = data.authorization_url;
      } else {
        console.error(data);
        alert("Payment initialization failed");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🎮 Noxstore Top-Up</h2>

      <form onSubmit={handlePayment} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="text"
          placeholder="Player ID"
          value={playerId}
          onChange={(e) => setPlayerId(e.target.value)}
          style={styles.input}
        />

        <select
          value={gameId}
          onChange={(e) => setGameId(e.target.value)}
          style={styles.input}
        >
          <option value="">Select Game</option>
          <option value="freefire">Free Fire</option>
          <option value="codm">Call of Duty Mobile</option>
        </select>

        <input
          type="number"
          placeholder="Amount (₦)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Processing..." : "Proceed to Pay"}
        </button>
      </form>
    </div>
  );
};

export default TopUp;

/**
 * SIMPLE CLEAN UI STYLES
 */
const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#0f172a",
    color: "#fff",
  },
  title: {
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "300px",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "none",
  },
  button: {
    padding: "12px",
    borderRadius: "6px",
    border: "none",
    background: "#22c55e",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  },
};