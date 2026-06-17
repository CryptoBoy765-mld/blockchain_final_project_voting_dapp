const { expect } = require("chai");

describe("SimpleVoting", function () {

  let voting;
  let owner;
  let voter1;

  beforeEach(async function () {

    [owner, voter1] =
      await ethers.getSigners();

    const deadline =
      Math.floor(Date.now() / 1000) + 86400;

    const Voting =
      await ethers.getContractFactory(
        "SimpleVoting"
      );

    voting =
      await Voting.deploy(deadline);

    await voting.waitForDeployment();
  });

  it("Should set correct owner",
    async function () {

      expect(
        await voting.getOwner()
      ).to.equal(owner.address);
  });

  it("Should add candidate",
    async function () {

      await voting.addCandidate("Alice");

      expect(
        await voting.candidateCount()
      ).to.equal(1);
  });
    it("Should allow voting",
    async function () {

      await voting.addCandidate("Alice");

      await voting
        .connect(voter1)
        .vote(0);

      const candidate =
        await voting.getCandidate(0);

      expect(candidate[1]).to.equal(1);
  });

  it("Should prevent double voting",
    async function () {

      await voting.addCandidate("Alice");

      await voting
        .connect(voter1)
        .vote(0);

      await expect(
        voting.connect(voter1).vote(0)
      ).to.be.revertedWith(
        "Already voted"
      );
  });

  it("Should reject invalid candidate",
    async function () {

      await expect(
        voting.connect(voter1).vote(5)
      ).to.be.revertedWith(
        "Invalid candidate"
      );
  });

  it("Should emit CandidateAdded event",
    async function () {

      await expect(
        voting.addCandidate("Alice")
      ).to.emit(
        voting,
        "CandidateAdded"
      );
  });

  it("Should emit Voted event",
    async function () {

      await voting.addCandidate("Alice");

      await expect(
        voting.connect(voter1).vote(0)
      ).to.emit(
        voting,
        "Voted"
      );
  });

  it("Should return candidate count",
    async function () {

      await voting.addCandidate("Alice");

      await voting.addCandidate("Bob");

      expect(
        await voting.candidateCount()
      ).to.equal(2);
  });

  it("Should reject non-owner adding candidate",
  async function () {

    await expect(
      voting
        .connect(voter1)
        .addCandidate("Bob")
    ).to.be.revertedWith(
      "Not owner"
    );
  });

});
