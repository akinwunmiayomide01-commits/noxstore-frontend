import React, { useEffect, useState } from "react";

export default function PaymentSuccess() {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const verify = async () => {
      const params = new URLSearchParams(window.location.search);
      const reference = params.get("reference");

      if (!reference) {
        setStatus("error");
        return;
      }

      try {
        const res = await fetch(
          `https://noxstore-backend.onrender.com/api/paystack/verify/${reference}`
        );

        const data = await res.json();

        if (data.success) setStatus("success");
        else setStatus("failed");
      } catch (err) {
        setStatus("error");
      }
    };

    verify();
  }, []);

  return (
    <div style={styles.container}>
      {status === "loading" && <h2>Verifying Payment...</h2>}
      {status === "success" && <h2>Payment Successful 🎉</h2>}
      {status === "failed" && <h2>Payment Failed ❌</h2>}
      {status === "error" && <h2>Error verifying payment</h2>}
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a",
    color: "#fff",
    flexDirection: "column",
  },
};