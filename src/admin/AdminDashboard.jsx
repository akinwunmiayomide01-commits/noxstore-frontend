import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  async function fetchOrders() {
    try {
      const res = await fetch(`${API_URL}/admin/orders`);
      const data = await res.json();
      setOrders(data);
      setLoading(false);
    } catch (err) {
      console.log("Error fetching orders:", err);
    }
  }

  async function retryOrder(id) {
    await fetch(`${API_URL}/admin/retry/${id}`, {
      method: "POST",
    });

    fetchOrders();
  }

  return (
    <div style={{ padding: "20px", color: "#fff", background: "#0f0f0f" }}>
      <h1>🔥 NOXSTORE ADMIN DASHBOARD</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table width="100%" border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Email</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Reference</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.email}</td>
                <td>{order.amount}</td>
                <td>{order.status}</td>
                <td>{order.reference}</td>
                <td>
                  {order.status === "failed" && (
                    <button onClick={() => retryOrder(order.id)}>
                      Retry
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}