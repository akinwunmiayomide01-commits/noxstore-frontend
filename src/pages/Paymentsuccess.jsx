import React, { useEffect, useState } from "react";

const PaymentSuccess = () => {
  const [status, setStatus] = useState("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        // Get reference from URL
        const params = new URLSearchParams(window.location.search);
        const reference = params.get("reference");

        if (!reference) {
          setStatus("error");
          setMessage("No payment reference found.");
          return;
        }

        const response = await fetch(
          `https://noxstore-backend.onrender.com/api/paystack/verify/${reference}`
        );

        const data = await response.json();

        if (data.success) {
          setStatus("success");
          setMessage("Payment successful! Your top-up is being processed.");
        } else {
          setStatus("failed");
          setMessage("Payment verification failed.");
        }
      } catch (error) {
        console.error(error);
        setStatus("error");
        setMessage("Something went wrong while verifying payment.");
      }
    };

    verifyPayment();
  }, []);

  return (
    <div style={styles.container}>
      {status === "loading" && (
        <>
          <h2>🔄 Verifying Payment...</h2>
          <p>Please wait while we confirm your transaction.</p>
        </>
      )}

      {status === "success" && (
        <>
          <h2 style={{ color: "#22c55e" }}>✅ Payment Successful</h2>
          <p>{message}</p>
        </>
      )}

      {status === "failed" && (
        <>
          <h2 style={{ color: "#f59e0b" }}>⚠️ Payment Failed</h2>
          <p>{message}</p>
        </>
      )}

      {status === "error" && (
        <>
          <h2 style={{ color: "#ef4444" }}>❌ Error</h2>
          <p>{message}</p>
        </>
      )}
    </div>
  );
};

export default PaymentSuccess;

/**
 * SIMPLE UI
 */
const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#0f172a",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
  },
};