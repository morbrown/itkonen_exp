function shuffle(array) {
  var currentIndex = array.length, randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

const nouns = [
  { noun: "pallo", eng: "ball", freq: "high_frequency", stem: "no_stem_change" },
  { noun: "avain", eng: "key", freq: "high_frequency", stem: "stem_change" },
  { noun: "hammasharja", eng: "toothbrush", freq: "low_frequency", stem: "no_stem_change" },
  { noun: "jakoavain", eng: "wrench", freq: "low_frequency", stem: "stem_change" }
];

const embedded = ['lose', 'forget'];

const embeddingAct = ['thought', 'said', 'knew'];

const embeddingPass = ['was.thought', 'was.said', 'was.known'];

const preps = ['in.village', 'in.town', 'in.neighborhood'];

const nomNames = ["Pekka", "Arto", "Helvi", "Antti", "Otto", "Kari"];

const genNames = ["Eeron", "Matin", "Mikon", "Tuulin", "Jorman", "Jaanan"];

let shuffledNouns = [...nouns];
shuffle(shuffledNouns);

// Add console.log statements for debugging or verification
console.log('Shuffled Nouns:', shuffledNouns);

const nounsActive = shuffledNouns.slice(0, 2);
const nounsPassive = shuffledNouns.slice(2);

console.log('Nouns Active:', nounsActive);
console.log('Nouns Passive:', nounsPassive);

function makeActiveStims(listDicts) {
  const activeStims = [];
  for (const dict of listDicts) {
    let stim = '_';
    const embeddedV = [embedded[Math.floor(Math.random() * embedded.length)]];
    stim = embeddedV[0] + ' ' + stim;
    const genName = [genNames[Math.floor(Math.random() * genNames.length)]];
    stim = genName[0] + ' ' + stim;
    const embedding = [embeddingAct[Math.floor(Math.random() * embeddingAct.length)]];
    stim = embedding[0] + ' ' + stim;
    const nomName = [nomNames[Math.floor(Math.random() * nomNames.length)]];
    stim = nomName[0] + ' ' + stim;
    const dictNew = { stim };
    const dictFinal = { ...dictNew, ...dict };
    activeStims.push(dictFinal);
  }
  return activeStims;
}

// Add console.log statements after function calls
console.log('Active Stims:', makeActiveStims(nounsActive));

function makePassiveStims(listDicts) {
  const passiveStims = [];
  for (const dict of listDicts) {
    let stim = '_';
    const embeddedV = [embedded[Math.floor(Math.random() * embedded.length)]];
    stim = embeddedV[0] + ' ' + stim;
    const genName = [genNames[Math.floor(Math.random() * genNames.length)]];
    stim = genName[0] + ' ' + stim;
    const embedding = [embeddingPass[Math.floor(Math.random() * embeddingPass.length)]];
    stim = embedding[0] + ' ' + stim;
    const prep = [preps[Math.floor(Math.random() * preps.length)]];
    stim = prep[0] + ' ' + stim;
    const dictNew = { stim };
    const dictFinal = { ...dictNew, ...dict };
    passiveStims.push(dictFinal);
  }
  return passiveStims;
}

// Add console.log statements after function calls
console.log('Passive Stims:', makePassiveStims(nounsPassive));

function makeAllStims(list1, list2) {
  const allStims = makeActiveStims(list1).concat(makePassiveStims(list2));
  return allStims;
}

// Add console.log statements after function calls
console.log('All Stims:', makeAllStims(nounsActive, nounsPassive));

  