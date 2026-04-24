export default function Success() {
  return (
    <div style={styles.container}>
      <h1>🎉 Payment Successful</h1>
      <p>Your order is being processed</p>
    </div>
  );
}

const styles = {
  container: {
    background: "#0b0f1a",
    color: "#00ffcc",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
};