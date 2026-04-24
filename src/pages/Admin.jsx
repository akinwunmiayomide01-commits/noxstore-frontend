import { useEffect, useState } from "react";

export default function Admin() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await fetch(
        "https://noxstore-backend.onrender.com/api/admin/orders"
      );
      const data = await res.json();

      setOrders(data.orders || []);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const getColor = (status) => {
    if (status === "success") return "#00ff99";
    if (status === "failed") return "#ff4d4d";
    return "#ffaa00";
  };

  return (
    <div style={styles.container}>
      <h1>🛠 NOXSTORE ADMIN</h1>

      {loading ? (
        <p>Loading orders...</p>
      ) : (
        <>
          {/* STATS */}
          <div style={styles.stats}>
            <div style={styles.card}>
              <h3>Total Orders</h3>
              <p>{orders.length}</p>
            </div>

            <div style={styles.card}>
              <h3>Successful</h3>
              <p>
                {orders.filter((o) => o.status === "success").length}
              </p>
            </div>

            <div style={styles.card}>
              <h3>Pending</h3>
              <p>
                {orders.filter((o) => o.status === "pending").length}
              </p>
            </div>
          </div>

          {/* TABLE */}
          <div style={styles.table}>
            {orders.map((o) => (
              <div key={o.id} style={styles.row}>
                <div>
                  <p><b>{o.email}</b></p>
                  <small>{o.reference}</small>
                </div>

                <div>₦{o.amount}</div>

                <div style={{ color: getColor(o.status) }}>
                  {o.status}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: 20,
    background: "#070a12",
    color: "#fff",
    minHeight: "100vh",
  },

  stats: {
    display: "flex",
    gap: 10,
    marginBottom: 20,
    flexWrap: "wrap",
  },

  card: {
    flex: 1,
    background: "rgba(255,255,255,0.05)",
    padding: 15,
    borderRadius: 10,
    minWidth: 120,
  },

  table: {
    marginTop: 20,
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    padding: 15,
    borderBottom: "1px solid rgba(255,255,255,0.05)",
  },
};