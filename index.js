const ChampionsList = ["Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Ashe", "Azir", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Cassiopeia", "Cho'Gath", "Corki", "Darius", "Diana", "Dr. Mundo", "Draven", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Irelia", "Janna", "Jarvan IV", "Jax", "Jayce", "Jinx", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kennen", "Kha'Zix", "Kog'Maw", "LeBlanc", "Lee Sin", "Leona", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Miss Fortune", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Nidalee", "Nocturne", "Nunu", "Olaf", "Orianna", "Pantheon", "Poppy", "Quinn", "Rammus", "Rek'Sai", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Sejuani", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Syndra", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel'Koz", "Vi", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xerath", "Xin Zhao", "Yasuo", "Yorick", "Zac", "Zed", "Ziggs", "Zilean", "Zyra", "Bard", "Ekko", "Tahm Kench", "Kindred", "Illaoi", "Jhin", "Aurelion Sol", "Taliyah", "Kled", "Ivern", "Camille", "Rakan", "Xayah", "Kayn", "Ornn", "Zoe", "Kai'Sa", "Pyke", "Neeko", "Sylas", "Yuumi", "Qiyana", "Senna", "Aphelios", "Sett", "Lillia", "Yone", "Samira", "Seraphine", "Rell", "Viego", "Gwen", "Akshan", "Vex", "Zeri", "Renata Glasc"];
let previousChampions = [];
let currentChamp = null;
let championName = null;
getRandomChampion(ChampionsList[getRandomInt(ChampionsList.length)]);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomChampion() {
  let randomChampion = ChampionsList[getRandomInt(ChampionsList.length)];
  previousChampions.push(randomChampion);
  currentChamp = previousChampions.length - 1;
  championName = randomChampion;
  displayCurrentChampion();
}

function displayCurrentChampion() {
  let image = document.getElementById("championImage");
  //Modifies Display Names to match what is needed for insertion into Image Links
  switch (championName) {
    case "Kai'Sa":
    case "Kha'Zix":
    case "Vel'Koz":
    case "Cho'Gath":
    case "LeBlanc":
      image.src = insertNameIntoLink(championName.charAt(0) + championName.slice(1).toLowerCase());
      break;
    case "Dr. Mundo":
      image.src = insertNameIntoLink(championName.replace(". ", ""));
      break;
    case "Wukong":
      image.src = insertNameIntoLink("MonkeyKing");
      break;
    case "Renata Glasc":
      image.src = insertNameIntoLink("Renata");
      break;
    case "Fiddlesticks":
      image.src = "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blteafcbfed69c501b5/61e2114879b5bd5a1ef7b2ea/011422_Fiddlesticks_Splash_v1.jpg";
      break;
    default:
      image.src = insertNameIntoLink(championName);
      break;
  }
  document.getElementById("currentChamp").innerHTML = currentChamp + 1 + "/" + previousChampions.length;
}

function insertNameIntoLink(nameToInsert) {
  return "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + nameToInsert.replace(" ", "").replace(`'`, ``) + "_0.jpg";
}

function displayChampionName() {
  document.getElementById("characterTitle").innerHTML = championName;
}

document.onkeyup = function (event) {
  switch (event.key) {
    case "ArrowLeft":
    case "ArrowDown":
      if (currentChamp != 0) {
        currentChamp = currentChamp - 1;
        championName = previousChampions[currentChamp];
        displayCurrentChampion();
      }
      break;
    case "ArrowRight":
    case "ArrowUp":
      if (currentChamp != previousChampions.length - 1) {
        currentChamp = currentChamp + 1;
        championName = previousChampions[currentChamp];
        displayCurrentChampion();
      }
      break;
  }
};
