function playervalue(a, b) {
  return 1 / (1 + Math.pow(10, (b - a) / 400));
}


function newElo(eloA, eloB, scoreA, game_nba, game_nbb) {

  const scoreB = 1 - scoreA;

  Ka = factor_k(game_nba)
  Kb = factor_k(game_nbb)

  const attenduA = playervalue(eloA, eloB);
  const attenduB = playervalue(eloB, eloA);


  const nouveauEloA = eloA + Ka * (scoreA - attenduA);
  const nouveauEloB = eloB + Kb * (scoreB - attenduB);

  game_nba += 1;
  game_nbb += 1;

  return {
    nouveauEloA: Math.round(nouveauEloA),
    nouveauEloB: Math.round(nouveauEloB),
    game_nba,
    game_nbb
  };
}

function factor_k(game_nb) {
    if (game_nb < 5) {
        k = 80;
    }

    else if (game_nb < 10) {
        k = 60;
    }

    else if (game_nb < 20) {
        console.log("nigger2")
        k = 40;
    }

    else {
        k = 34;
    }

    return k
}

let joueur1 = { nom: "Alice", elo: 1500, game_nb: 8 };
let joueur2 = { nom: "Bob", elo: 1500, game_nb: 34 };

let score = 1;


console.log(`--- Situation de départ ---`);
console.log(`${joueur1.nom}: ${joueur1.elo} Elo`);
console.log(`${joueur2.nom}: ${joueur2.elo} Elo`);
console.log("---------------------------\n");


console.log(`--- Match 1: ${joueur1.nom} gagne contre ${joueur2.nom} ---`);

let resultatMatch1 = newElo(joueur1.elo, joueur2.elo, score, joueur1.game_nb, joueur2.game_nb);

joueur1.elo = resultatMatch1.nouveauEloA;
joueur2.elo = resultatMatch1.nouveauEloB;

console.log(`Nouveau classement ${joueur1.nom}: ${joueur1.elo} Elo`);
console.log(`Nouveau classement ${joueur2.nom}: ${joueur2.elo} Elo`);
console.log("---------------------------\n");


let joueur3 = { nom: "Carla", elo: 1600, game_nb: 2180 };
console.log(`--- Match 2: ${joueur2.nom} (${joueur2.elo} Elo) fait nulle contre ${joueur3.nom} (${joueur3.elo} Elo) ---`);

let resultatMatch2 = newElo(joueur2.elo, joueur3.elo, score, joueur2.game_nb, joueur3.game_nb);

joueur2.elo = resultatMatch2.nouveauEloA;
joueur3.elo = resultatMatch2.nouveauEloB;

console.log(`Nouveau classement ${joueur2.nom}: ${joueur2.elo} Elo`);
console.log(`Nouveau classement ${joueur3.nom}: ${joueur3.elo} Elo`);
console.log("---------------------------\n");