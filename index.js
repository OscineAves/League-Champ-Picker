const champions = ["Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Ashe", "Azir", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Cassiopeia", "Cho'Gath", "Corki", "Darius", "Diana", "Dr. Mundo", "Draven", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Irelia", "Janna", "Jarvan IV", "Jax", "Jayce", "Jinx", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kennen", "Kha'Zix", "Kog'Maw", "LeBlanc", "Lee Sin", "Leona", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Miss Fortune", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Nidalee", "Nocturne", "Nunu", "Olaf", "Orianna", "Pantheon", "Poppy", "Quinn", "Rammus", "Rek'Sai", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Sejuani", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Syndra", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel'Koz", "Vi", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xerath", "Xin Zhao", "Yasuo", "Yorick", "Zac", "Zed", "Ziggs", "Zilean", "Zyra", "Bard", "Ekko", "Tahm Kench", "Kindred", "Illaoi", "Jhin", "Aurelion Sol", "Taliyah", "Kled", "Ivern", "Camille", "Rakan", "Xayah", "Kayn", "Ornn", "Zoe", "Kai'Sa", "Pyke", "Neeko", "Sylas", "Yuumi", "Qiyana", "Senna", "Aphelios", "Sett", "Lillia", "Yone", "Samira", "Seraphine", "Rell", "Viego", "Gwen", "Akshan", "Vex", "Zeri", "Renata Glasc"];
let pastRandChamp = [];
randNewChamp(champions[getRandomInt(champions.length)]);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function randNewChamp() {
  let randChamp = champions[getRandomInt(champions.length)];
  pastRandChamp.push(randChamp);
  currentChamp = pastRandChamp.length - 1;
  console.log(currentChamp);
  displayChampion(randChamp);
}

function displayChampion(name) {
  console.log(currentChamp);
  //Modifies Display Names to match what is needed for insertion into Image Links
  switch (name) {
    case "Kai'Sa":
    case "Kha'Zix":
    case "Vel'Koz":
    case "Cho'Gath":
    case "LeBlanc":
      nameFixed = nameFixed.charAt(0) + nameFixed.slice(1).toLowerCase();
      break;
    case "Dr. Mundo":
      nameFixed = name.replace(". ", "");
      break;
    case "Wukong":
      nameFixed = "MonkeyKing";
      break;
    case "Renata Glasc":
      nameFixed = "Renata";
      break;
    default:
      nameFixed = name.replace(" ", "").replace(`'`, ``);
      break;
  }
  //Gets Image from LoL official site, updates displayed information
  let image = document.getElementById("championImage");
  //Sketchy code for Fiddlesticks' new art, which is completely seperate from the database of the rest for some godforsaken reason//
  if (name == "Fiddlesticks") {
    image.src = "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blteafcbfed69c501b5/61e2114879b5bd5a1ef7b2ea/011422_Fiddlesticks_Splash_v1.jpg";
    document.getElementById("characterTitle").innerHTML = name;
  } else {
    image.src = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + nameFixed + "_0.jpg";
    document.getElementById("characterTitle").innerHTML = name;
  }
}

document.onkeyup = function (event) {
  switch (event.key) {
    case "ArrowLeft":
      if (currentChamp != 0) {
        currentChamp = currentChamp - 1;
        displayChampion(pastRandChamp[currentChamp]);
      }
      break;
    case "ArrowRight":
      if (currentChamp != pastRandChamp.length - 1) {
        currentChamp = currentChamp + 1;
        displayChampion(pastRandChamp[currentChamp]);
      }
      break;
  }
};
