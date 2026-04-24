import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Success() {
  const [searchParams] = useSearchParams();
  const reference = searchParams.get("reference");

  const [status, setStatus] = useState("verifying");
  const [message, setMessage] = useState("Verifying payment...");

  useEffect(() => {
    if (!reference) {
      setStatus("failed");
      setMessage("No payment reference found.");
      return;
    }

    const verifyPayment = async () => {
      try {
        const res = await fetch(
          `https://noxstore-backend.onrender.com/api/paystack/verify/${reference}`
        );

        const data = await res.json();

        console.log("VERIFY RESPONSE:", data);

        if (data.success) {
          setStatus("success");
          setMessage("Payment successful 🎉 Order confirmed!");
        } else {
          setStatus("failed");
          setMessage("Payment verification failed.");
        }
      } catch (err) {
        console.error(err);
        setStatus("failed");
        setMessage("Server error while verifying payment.");
      }
    };

    verifyPayment();
  }, [reference]);

  return (
    <div style={styles.container}>
      {status === "verifying" && (
        <div style={styles.box}>
          <h2>⏳ Verifying Payment</h2>
          <p>{message}</p>
        </div>
      )}

      {status === "success" && (
        <div style={styles.successBox}>
          <h2>✅ Success</h2>
          <p>{message}</p>
        </div>
      )}

      {status === "failed" && (
        <div style={styles.failBox}>
          <h2>❌ Failed</h2>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#070a12",
    color: "#fff",
    textAlign: "center",
  },

  box: {
    padding: 30,
    borderRadius: 12,
    background: "rgba(255,255,255,0.05)",
  },

  successBox: {
    padding: 30,
    borderRadius: 12,
    background: "rgba(0,255,150,0.1)",
    border: "1px solid #00ff99",
  },

  failBox: {
    padding: 30,
    borderRadius: 12,
    background: "rgba(255,0,0,0.1)",
    border: "1px solid red",
  },
};