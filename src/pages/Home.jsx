import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../App.css";

// LOGOS
import ff from "../assets/freefire.png";
import pubg from "../assets/pubg.png";
import cod from "../assets/cod.png";
import fc from "../assets/fc.png";
import logo from "../assets/noxstore.png";

export default function Home() {
  const navigate = useNavigate();

  const games = [
    { name: "Free Fire", img: ff },
    { name: "PUBG Mobile", img: pubg },
    { name: "COD Mobile", img: cod },
    { name: "FC Mobile", img: fc },
  ];

  return (
    <div style={styles.container}>
      {/* NAVBAR */}
      <div style={styles.nav}>
        <div style={styles.navLeft}>
          <img src={logo} alt="logo" style={styles.logo} />

          <h1 style={styles.brand}>
            NOX<span style={{ color: "#00e5ff" }}>STORE</span>
          </h1>
        </div>
      </div>

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={styles.hero}
      >
        <h1 style={styles.heroTitle}>⚡ Instant Game Top-Ups</h1>
        <p style={styles.heroText}>Fast • Secure • Reliable</p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="btn"
          onClick={() => navigate("/games")}
        >
          Start Top-Up
        </motion.button>
      </motion.div>

      {/* FEATURED GAMES */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>🔥 Featured Games</h2>

        <div style={styles.grid}>
          {games.map((g, i) => (
            <motion.div
              key={g.name}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate(`/checkout?game=${g.name}`)}
              style={styles.cardClick}
            >
              <img src={g.img} alt={g.name} style={styles.gameImg} />
              <h3>{g.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================
   STYLES
========================= */

const styles = {
  container: {
    minHeight: "100vh",
    background: "#070a12",
    color: "#fff",
  },

  nav: {
    padding: "20px 30px",
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
  },

  navLeft: {
    display: "flex",
    alignItems: "center",
    gap: 14,
  },

  logo: {
    width: 55, // 🔥 increased size
    height: 55,
    objectFit: "contain",
  },

  brand: {
    fontSize: "26px",
    fontWeight: "800",
    letterSpacing: "1.5px",
    fontFamily: "'Orbitron', sans-serif",
  },

  hero: {
    textAlign: "center",
    padding: "90px 20px",
  },

  heroTitle: {
    fontSize: "2.6rem",
    marginBottom: 10,
  },

  heroText: {
    opacity: 0.7,
    marginBottom: 20,
  },

  section: {
    padding: 20,
  },

  sectionTitle: {
    marginBottom: 10,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: 15,
    marginTop: 15,
  },

  cardClick: {
    cursor: "pointer",
  },

  gameImg: {
    width: "100%",
    borderRadius: 10,
    marginBottom: 10,
  },
};