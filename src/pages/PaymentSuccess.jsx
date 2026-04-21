import React, { useEffect, useState } from "react";

export default function PaymentSuccess() {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const verify = async () => {
      const reference = new URLSearchParams(window.location.search).get("reference");

      if (!reference) return setStatus("error");

      try {
        const res = await fetch(
          `https://noxstore-backend.onrender.com/api/paystack/verify/${reference}`
        );

        const data = await res.json();

        setStatus(data.success ? "success" : "failed");
      } catch {
        setStatus("error");
      }
    };

    verify();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {status === "loading" && <h2>Verifying Payment...</h2>}
      {status === "success" && <h2>Payment Successful 🎉</h2>}
      {status === "failed" && <h2>Payment Failed ❌</h2>}
      {status === "error" && <h2>Error verifying payment</h2>}
    </div>
  );
}