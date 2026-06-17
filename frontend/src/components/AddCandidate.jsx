import { useState } from "react";

function AddCandidate({ addCandidate, isOwner, loading }) {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Nama kandidat tidak boleh kosong.");
      return;
    }

    await addCandidate(name);
    setName("");
  };

  if (!isOwner) {
    return (
      <div className="card">
        <h2>Tambah Kandidat</h2>
        <p className="info">Hanya owner contract yang dapat menambah kandidat.</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>Tambah Kandidat</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Masukkan nama kandidat"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
        />

        <button type="submit" disabled={loading}>
          Tambah Kandidat
        </button>
      </form>
    </div>
  );
}

export default AddCandidate;