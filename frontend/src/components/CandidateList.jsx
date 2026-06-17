function CandidateList({ candidates, voteCandidate, account, hasVoted, loading }) {
  return (
    <div className="card">
      <h2>Daftar Kandidat</h2>

      {candidates.length === 0 ? (
        <p>Belum ada kandidat.</p>
      ) : (
        <div className="candidate-list">
          {candidates.map((candidate, index) => (
            <div className="candidate-item" key={index}>
              <div>
                <h3>{candidate.name}</h3>
                <p>Jumlah vote: {candidate.voteCount}</p>
              </div>

              <button
                onClick={() => voteCandidate(index)}
                disabled={!account || hasVoted || loading}
              >
                Vote
              </button>
            </div>
          ))}
        </div>
      )}

      {!account && <p className="info">Connect wallet dulu untuk voting.</p>}
      {hasVoted && <p className="success">Wallet ini sudah melakukan vote.</p>}
    </div>
  );
}

export default CandidateList;