import { useLocation } from "react-router-dom";

export default function Checkout() {
  const { state } = useLocation();

  if (!state) {
    return <div className="container py-5 text-white">No order found</div>;
  }

  const { gameId, playerId, amount } = state;

  return (
    <div className="container py-5">

      <h2 className="text-primary">Secure Checkout</h2>

      <div className="card bg-dark text-white p-4">

        <p><b>Game:</b> {gameId}</p>
        <p><b>Player ID:</b> {playerId}</p>
        <p><b>Amount:</b> ₦{amount}</p>

        <hr />

        <button className="btn btn-success w-100 mb-2">
          Pay with Paystack (Coming Soon)
        </button>

        <small className="text-secondary">
          Payments are secured via Paystack encryption
        </small>

      </div>

    </div>
  );
}