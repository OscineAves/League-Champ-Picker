let championsList = ["Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Ashe", "Azir", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Cassiopeia", "Cho'Gath", "Corki", "Darius", "Diana", "Dr. Mundo", "Draven", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Irelia", "Janna", "Jarvan IV", "Jax", "Jayce", "Jinx", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kennen", "Kha'Zix", "Kog'Maw", "LeBlanc", "Lee Sin", "Leona", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Miss Fortune", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Nidalee", "Nocturne", "Nunu", "Olaf", "Orianna", "Pantheon", "Poppy", "Quinn", "Rammus", "Rek'Sai", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Sejuani", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Syndra", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel'Koz", "Vi", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xerath", "Xin Zhao", "Yasuo", "Yorick", "Zac", "Zed", "Ziggs", "Zilean", "Zyra", "Bard", "Ekko", "Tahm Kench", "Kindred", "Illaoi", "Jhin", "Aurelion Sol", "Taliyah", "Kled", "Ivern", "Camille", "Rakan", "Xayah", "Kayn", "Ornn", "Zoe", "Kai'Sa", "Pyke", "Neeko", "Sylas", "Yuumi", "Qiyana", "Senna", "Aphelios", "Sett", "Lillia", "Yone", "Samira", "Seraphine", "Rell", "Viego", "Gwen", "Akshan", "Vex", "Zeri", "Renata Glasc", "Bel'Veth"];
let prevChampions = [];
let currentChamp = null;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomChampion() {
  prevChampions.push(championsList[getRandomInt(championsList.length)]);
  currentChampion = prevChampions.length - 1;
  return prevChampions.slice(-1);
}

function displayChampion(championName) {
  let image = document.getElementById("championImage");
  let text = document.getElementById("championName");
  championName = championName.toString();
  switch (championName) {
    case "Bel'Veth":
    case "Kai'Sa":
    case "Kha'Zix":
    case "Vel'Koz":
    case "Cho'Gath":
    case "LeBlanc":
      image.src = imageLink(championName.charAt(0) + championName.slice(1).toLowerCase());
      text.href = pageLink(championName);
      break;
    case "Dr. Mundo":
      image.src = imageLink(championName.replace(". ", ""));
      text.href = pageLink(championName);
      break;
    case "Wukong":
      image.src = imageLink("MonkeyKing");
      text.href = pageLink(championName);
      break;
    case "Renata Glasc":
      image.src = imageLink("Renata");
      text.href = pageLink("renata");
      break;
    case "Fiddlesticks":
      image.src = "https://i.ibb.co/2ty4Xzm/kelly-aleshire-basefiddlesticks-final.jpg";
      text.href = pageLink(championName);
      break;
    default:
      image.src = imageLink(championName);
      text.href = pageLink(championName);
      break;
  }
  image.alt = championName + " Default Splash Art";
  document.getElementById("championName").innerHTML = championName;
  document.getElementById("championCounter").innerHTML = currentChampion + 1 + "/" + prevChampions.length;
}

function imageLink(championName) {
  return "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + championName.replace(" ", "").replace(`'`, ``) + "_0.jpg";
}

function pageLink(championName) {
  return "https://www.leagueoflegends.com/en-us/champions/" + championName.replace(" ", "-").replace(".", "").replace(`'`, `-`).toLowerCase();
}

function gotoPreviousChampion() {
  if (currentChampion == 0 && prevChampions.length > 1) {
    currentChampion = prevChampions.length - 1;
  } else {
    --currentChampion;
  }
  displayChampion(prevChampions[currentChampion]);
}

function gotoNextChampion() {
  if (currentChampion + 1 == prevChampions.length) {
    currentChampion = 0;
  } else {
    ++currentChampion;
  }
  displayChampion(prevChampions[currentChampion]);
}

document.onkeyup = function (event) {
  switch (event.key) {
    case "ArrowLeft":
    case "ArrowDown":
      gotoPreviousChampion();
      break;
    case "ArrowRight":
    case "ArrowUp":
      gotoNextChampion();
      break;
  }
};

displayChampion(getRandomChampion());
/* Displays all the champions in championsList. For Debugging
for (let i = 0; (i < 159); i++) {
	displayChampion(championsList[i]);
}
*/
