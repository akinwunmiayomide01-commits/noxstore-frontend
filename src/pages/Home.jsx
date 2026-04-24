import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../App.css";

// IMPORT LOGOS
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
          <h2>NOXSTORE</h2>
        </div>
      </div>

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        style={styles.hero}
      >
        <h1>⚡ Instant Game Top-Ups</h1>
        <p>Fast • Secure • Reliable</p>

        <button
          className="btn"
          onClick={() => navigate("/games")}
        >
          Start Top-Up
        </button>
      </motion.div>

      {/* FEATURED GAMES */}
      <div style={styles.section}>
        <h2>🔥 Featured Games</h2>

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
              style={{ cursor: "pointer" }}
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

const styles = {
  container: {
    minHeight: "100vh",
    background: "#070a12",
    color: "#fff",
  },
  nav: {
    padding: "15px 25px",
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
  },
  navLeft: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  logo: {
    width: 35,
  },
  hero: {
    textAlign: "center",
    padding: "80px 20px",
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
  gameImg: {
    width: "100%",
    borderRadius: 10,
    marginBottom: 10,
  },
};