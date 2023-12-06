const jsPsych = initJsPsych({ display_element: 'jspsych-target', override_safe_mode: true });

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

const nounsActive = shuffledNouns.slice(0, 2);
const nounsPassive = shuffledNouns.slice(2);

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

function makeAllStims(list1, list2) {
  const allStims = makeActiveStims(list1).concat(makePassiveStims(list2));
  return allStims;
}

function generateStimsAndSample() {
  return new Promise((resolve) => {
    const allStims = makeAllStims(nounsActive, nounsPassive);
    console.log('All stims', allStims);

    const randomlySelectedStim = jsPsych.randomization.sampleWithoutReplacement(allStims, 1)[0];
    console.log('Randomly selected stim', randomlySelectedStim);

    resolve(randomlySelectedStim);
  });
}

let timeline = [];
let allStims = []; // Initialize allStims as an empty array

// Function to generate a single trial
function generateTrial(stimulus) {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: stimulus.stim,
    choices: 'ALL_KEYS',
    post_trial_gap: 500,
    on_finish: function (data) {
      console.log(data);
      // Continue to the next trial after the current one finishes
      nextTrial();
    }
  };
}

// Function to generate the next trial
function nextTrial() {
  // Check if all trials have been added, and run the experiment if so
  if (allStims.length === 0) {
    jsPsych.finishTrial();
    return;
  }

  // Generate a trial for the next stimulus
  const stimulus = allStims.pop(); // Take the last stimulus from the array
  const trial = generateTrial(stimulus);

  timeline.push(trial);

  // Continue to the next trial
  jsPsych.resumeExperiment();
}

// Function to generate all trials
function generateAllTrials() {
  // Clone the array of stimuli to avoid modifying the original array
  allStims = [...makeAllStims(nounsActive, nounsPassive)];
  // Randomize the order of stimuli
  allStims = jsPsych.randomization.shuffle(allStims);

  // Start the experiment by generating the first trial
  nextTrial();
}

// Call the function to generate all trials and start the experiment
generateAllTrials();

