function StatusMessage({ loading, message, error }) {
  return (
    <div className="card">
      <h2>Status</h2>

      {loading && <p className="info">Transaksi sedang diproses...</p>}
      {message && <p className="success">{message}</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !message && !error && (
        <p className="info">Belum ada transaksi.</p>
      )}
    </div>
  );
}

export default StatusMessage;