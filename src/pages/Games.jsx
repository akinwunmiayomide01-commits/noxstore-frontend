import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../App.css";

// IMPORT LOGOS
import ff from "../assets/freefire.png";
import pubg from "../assets/pubg.png";
import cod from "../assets/cod.png";
import fc from "../assets/fc.png";

export default function Games() {
  const navigate = useNavigate();

  const games = [
    { name: "Free Fire", img: ff },
    { name: "PUBG Mobile", img: pubg },
    { name: "COD Mobile", img: cod },
    { name: "FC Mobile", img: fc },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🎮 Select a Game</h2>

      <div style={styles.grid}>
        {games.map((g, i) => (
          <motion.div
            key={g.name}
            className="card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate(`/checkout?game=${g.name}`)}
            style={{ cursor: "pointer" }}
          >
            <img src={g.img} alt={g.name} style={styles.gameImg} />
            <h3>{g.name}</h3>

            <button className="btn">
              Top Up
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#070a12",
    color: "#fff",
    padding: 20,
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: 15,
  },
  gameImg: {
    width: "100%",
    borderRadius: 10,
    marginBottom: 10,
  },
};