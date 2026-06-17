export const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export const CONTRACT_ABI = [
  "function getOwner() view returns (address)",
  "function deadline() view returns (uint256)",
  "function candidateCount() view returns (uint256)",
  "function getCandidate(uint256 _index) view returns (string, uint256)",
  "function hasVoted(address) view returns (bool)",
  "function addCandidate(string memory _name)",
  "function vote(uint256 _candidateIndex)",
  "event CandidateAdded(string name)",
  "event Voted(address voter, uint256 candidateIndex)"
];
