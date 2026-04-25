import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const ADMIN_PASSWORD = "nox123"; // change later

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("nox_admin_auth", "true");
      navigate("/admin");
    } else {
      alert("Wrong password");
    }
  };

  return (
    <div style={styles.container}>
      <h2>🔐 Admin Login</h2>

      <input
        type="password"
        placeholder="Enter admin password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />

      <button onClick={handleLogin} style={styles.button}>
        Login
      </button>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#070a12",
    color: "#fff",
  },
  input: {
    padding: 10,
    marginTop: 10,
    borderRadius: 6,
    border: "none",
    width: 250,
  },
  button: {
    marginTop: 10,
    padding: 10,
    width: 120,
    borderRadius: 6,
    background: "#00ff99",
    border: "none",
    cursor: "pointer",
  },
};