class ScrabbleGamesController {
  constructor() {}

  scrabbleGameResults = [];
  scrabbleGameRounds = [];

  async getScGames() {
    const res = await fetch("http://localhost:1337/sc-games");
    const data = await res.json();
    return data;
  }
  async getScGamesById(id) {
    const res = await fetch(`http://localhost:1337/sc-games/${id}`);
    const singleData = await res.json();
    return singleData;
  }
  async getScGameResults() {
    const res = await fetch("http://localhost:1337/sc-games");
    const data = await res.json();
    data.map((games) => {
      this.scrabbleGameResults = games.sc_gm_result;
    });
    return this.scrabbleGameResults;
  }
  async getScGameRounds() {
    const res = await fetch("http://localhost:1337/sc-games");
    const data = await res.json();
    data.map((games) => {
      this.scrabbleGameRounds = games.sc_gm_round;
    });
    return this.scrabbleGameRounds;
  }
}
export default ScrabbleGamesController;
