import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <Navbar />

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={styles.hero}
      >
        <h1>⚡ Instant Game Top-Ups</h1>
        <p>Fast • Secure • Cheap</p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/games")}
          style={styles.button}
        >
          Start Top-Up
        </motion.button>
      </motion.div>

      {/* FEATURED GAMES */}
      <div style={styles.section}>
        <h2>🔥 Featured Games</h2>

        <div style={styles.grid}>
          {["Free Fire", "PUBG", "COD Mobile", "FC Mobile"].map(
            (game, i) => (
              <motion.div
                key={game}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                style={styles.card}
              >
                <h3>{game}</h3>
                <button onClick={() => navigate("/games")} style={styles.smallBtn}>
                  Top Up
                </button>
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { background: "#0b0f1a", minHeight: "100vh" },
  hero: {
    textAlign: "center",
    padding: "80px 20px",
  },
  button: {
    marginTop: 20,
    padding: "12px 25px",
    background: "#00ffcc",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  },
  section: {
    padding: 20,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: 15,
    marginTop: 20,
  },
  card: {
    background: "#111827",
    padding: 20,
    borderRadius: 12,
    textAlign: "center",
    transition: "0.3s",
  },
  smallBtn: {
    marginTop: 10,
    padding: "8px 12px",
    background: "#00ffcc",
    border: "none",
    cursor: "pointer",
  },
};