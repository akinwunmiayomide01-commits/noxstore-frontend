import { useState } from "react";
import { Link } from "react-router-dom";

const games = [
  { id: 1, name: "Free Fire", category: "Battle Royale" },
  { id: 2, name: "PUBG Mobile", category: "Battle Royale" },
  { id: 3, name: "COD Mobile", category: "FPS Shooter" },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filtered = games.filter((g) =>
    g.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", backgroundColor: "#0f172a", minHeight: "100vh", color: "white" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        NOXSTORE
      </h1>

      <input
        placeholder="Search games..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          maxWidth: "400px",
          marginBottom: "30px",
        }}
      />

      <div>
        {filtered.map((game) => (
          <div
            key={game.id}
            style={{
              border: "1px solid #334155",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "8px",
              backgroundColor: "#1e293b",
            }}
          >
            <h3>{game.name}</h3>
            <p style={{ color: "#94a3b8" }}>{game.category}</p>

            <Link to={`/topup/${game.id}`}>
              <button
                style={{
                  padding: "8px 15px",
                  backgroundColor: "#3b82f6",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Top Up
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}