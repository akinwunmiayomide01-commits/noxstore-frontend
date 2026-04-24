import logo from "../assets/noxstore.png";

export default function Navbar() {
  return (
    <div style={styles.nav}>
      <div style={styles.left}>
        <img src={logo} alt="noxstore" style={styles.logo} />
        <h2>NOXSTORE</h2>
      </div>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 25px",
    background: "#0b0f1a",
    alignItems: "center",
  },
  left: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  logo: {
    width: 35,
    height: 35,
    objectFit: "contain",
  },
};