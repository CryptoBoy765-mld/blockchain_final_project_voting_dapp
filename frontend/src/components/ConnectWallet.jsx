function ConnectWallet({ account, connectWallet }) {
  return (
    <div className="card">
      <h2>Connect Wallet</h2>

      {account ? (
        <p className="wallet-address">
          Connected: {account.slice(0, 6)}...{account.slice(-4)}
        </p>
      ) : (
        <button onClick={connectWallet}>
          Connect MetaMask
        </button>
      )}
    </div>
  );
}

export default ConnectWallet;