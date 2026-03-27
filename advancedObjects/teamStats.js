const team = {
  _players: [
    { firstName: "Bob", lastName: "Bobbins", age: 18 },
    { firstName: "Ian", lastName: "Wright", age: 21 },
    { firstName: "Old", lastName: "Timer", age: 25 },
  ],
  _games: [
    { opponent: "Man Utd", teamPoints: 10, opponentPoints: 20 },
    { opponent: "Arsenal", teamPoints: 10, opponentPoints: 20 },
    { opponent: "Chelsea", teamPoints: 10, opponentPoints: 20 },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge) {
    const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };

    this._players.push(player);
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };

    this._games.push(game);
  },
};

team.addPlayer("Bugs", "Bunny", 76);
console.log(team._players);

team.addGame("Titans", 100, 98);
console.log(team._games);
