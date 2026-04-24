import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const games = ["Free Fire", "PUBG", "COD Mobile", "FC Mobile"];

export default function Games() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <Navbar />

      <h2 style={{ padding: 20 }}>Select Game</h2>

      <div style={styles.grid}>
        {games.map((game, i) => (
          <motion.div
            key={game}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            style={styles.card}
          >
            <h3>{game}</h3>

            <button
              onClick={() => navigate(`/checkout?game=${game}`)}
              style={styles.button}
            >
              Top Up
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { background: "#0b0f1a", minHeight: "100vh", color: "#fff" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: 15,
    padding: 20,
  },
  card: {
    background: "#111827",
    padding: 20,
    borderRadius: 12,
    textAlign: "center",
  },
  button: {
    marginTop: 10,
    padding: "10px",
    background: "#00ffcc",
    border: "none",
    cursor: "pointer",
  },
};