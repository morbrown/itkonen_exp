// function shuffle(array) {
//     var currentIndex = array.length, randomIndex;
  
//     while (currentIndex != 0) {
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;
  
//       [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
//     }
  
//     return array;
//   }
  
//   const nouns = [
//     { noun: "pallo", eng: "ball", freq: "high_frequency", stem: "no_stem_change" },
//     { noun: "avain", eng: "key", freq: "high_frequency", stem: "stem_change" },
//     { noun: "hammasharja", eng: "toothbrush", freq: "low_frequency", stem: "no_stem_change" },
//     { noun: "jakoavain", eng: "wrench", freq: "low_frequency", stem: "stem_change" }
//   ];
  
//   const embedded = ['lose', 'forget'];
  
//   const embeddingAct = ['thought', 'said', 'knew'];
  
//   const embeddingPass = ['was.thought', 'was.said', 'was.known'];
  
//   const locs = ['in.village', 'in.town', 'in.neighborhood'];
  
//   const nomNames = ["Pekka", "Arto", "Helvi", "Antti", "Otto", "Kari"];
  
//   const genNames = ["Eeron", "Matin", "Mikon", "Tuulin", "Jorman", "Jaanan"];
  
//   let shuffledNouns = [...nouns];
//   shuffle(shuffledNouns);
  
//   console.log('Shuffled Nouns:', shuffledNouns);
  
//   const nounsActive = shuffledNouns.slice(0, 2);
//   const nounsPassive = shuffledNouns.slice(2);
  
//   function makeActiveStims(listDicts) {
//     const sentences = [];
  
//     for (const dict of listDicts) {
//       let stim = '_';
//       const embeddedV = [embedded[Math.floor(Math.random() * embedded.length)]];
//       stim = embeddedV[0] + ' ' + stim;
//       const genName = [genNames[Math.floor(Math.random() * genNames.length)]];
//       stim = genName[0] + ' ' + stim;
//       const embedding = [embeddingAct[Math.floor(Math.random() * embeddingAct.length)]];
//       stim = embedding[0] + ' ' + stim;
//       const nomName = [nomNames[Math.floor(Math.random() * nomNames.length)]];
//       stim = nomName[0] + ' ' + stim;
//       sentences.push(stim);
//     }
  
//     return sentences;
//   }
  
//   const activeSentences = makeActiveStims(nounsActive);
//   console.log('Active Sentences:', activeSentences);
  
//   function makePassiveStims(listDicts) {
//     const sentences = [];
  
//     for (const dict of listDicts) {
//       let stim = '_';
//       const embeddedV = [embedded[Math.floor(Math.random() * embedded.length)]];
//       stim = embeddedV[0] + ' ' + stim;
//       const genName = [genNames[Math.floor(Math.random() * genNames.length)]];
//       stim = genName[0] + ' ' + stim;
//       const embedding = [embeddingPass[Math.floor(Math.random() * embeddingPass.length)]];
//       stim = embedding[0] + ' ' + stim;
//       const prep = [locs[Math.floor(Math.random() * locs.length)]];
//       stim = prep[0] + ' ' + stim;
//       sentences.push(stim);
//     }
  
//     return sentences;
//   }
  
//   const passiveSentences = makePassiveStims(nounsPassive);
//   console.log('Passive Sentences:', passiveSentences);
  
//   function makeAllStims(list1, list2) {
//     const allSentences = makeActiveStims(list1).concat(makePassiveStims(list2));
//     return allSentences;
//   }
  
//   const allSentences = makeAllStims(nounsActive, nounsPassive);
//   console.log('All Sentences:', allSentences);
  


// const jsPsychOptions = {
//     on_finish: function () {
//       jsPsych.data.displayData('csv');
//     }
//   };
  
//   const jsPsych = initJsPsych(jsPsychOptions);
  
// // const stimuli = createStimuli(names, verbs);

// // Shuffle the order of stimuli
// const shuffledStimuli = jsPsych.randomization.shuffle([...allSentences]);

// function createStimuliTrial(index) {
//   const stimulus = shuffledStimuli[index];


  
//     return {
//       type: jsPsychHtmlKeyboardResponse,
//       stimulus: stimulus,
//       choices: "NO KEYS",
//       trial_duration: 5000, // Display stimuli for 2000 milliseconds (adjust as needed)
//       post_trial_gap: 1000, // Add a gap of 500 milliseconds between trials (adjust as needed)
//     };
//   }
  
//   // Build timeline using createStimuli function
//   let timeline = [];
//   for (let i = 0; i < shuffledStimuli.length; i++) {
//     timeline.push(createStimuliTrial(i));
//   }
  
//   // Run the experiment
//   jsPsych.run(timeline);

// ~~~~Above version of experiment works ~~~


  
function shuffle(array) {
    var currentIndex = array.length, randomIndex;
  
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  // Define your filler stimuli
const fillers_basic = [
  { noun: "pallo", stim: "Pekka ei heittänyt _", expected: "palloa", type: "basic"},
  { noun: "avain", stim: "Arto etsii _", expected: "avainta", type: "basic"},
  { noun: "kirja", stim: "Antti on lukemassa _", expected: "kirjaa", type: "basic"},
  { noun: "kirje", stim: "Helmi ei taittanut _", expected: "kirjettä", type: "basic"},
  { noun: "sanomalehti", stim: "Kerttu on lukemassa _", expected: "sanomalehteä", type: "basic"},
  { noun: "puhelin", stim: "Elsi ei sulkenut _", expected: "puhelinta", type: "basic"},
  { noun: "taikasauva", stim: "Toivo heilutti _", expected: "taikasauvaa", type: "basic"},
  { noun: "korvakoru", stim: "Matti ei ostanut _", expected: "korvakorua", type: "basic"},
  { noun: "vispilä", stim: "Mikko ei käyttänyt _", expected: "vispilää", type: "basic"},
  { noun: "silitysrauta", stim: "Venla pyöritti _", expected: "silitysrautaa", type: "basic"},
  { noun: "ananas", stim: "Pihla on syömässä _", expected: "ananasta", type: "basic"},
  { noun: "kampa", stim: "Oona ei pudottanut _", expected: "kampaa", type: "basic"}
]
  

  const fillers_exploratory = [ 
    { noun: "auto", eng: "car", stim: "Pekka myi polkupyöränsä ostaakseen _", expected: "auton", type: "rationale"},
    { noun: "skootteri", eng: "scooter", stim: "Arton täytyi myydä polkupyöränsä ostaakseen _", type: "rationale"},
    { noun: "pöytä", eng: "table", stim: "Antti sahasi lankkuja rakentaakseen _", expected: "pöydän", type: "rationale"},
    { noun: "tuoli", eng: "chair", stim: "Helmin täytyi sahata lankkuja rakentaakseen _", type: "rationale"},
    { noun: "huivi", eng: "scarf", stim: "Kerttu osti lankaa korjatakseen _", expected: "huivin", type: "rationale"},
    { noun: "pusero", eng: "blouse", stim: "Elsin täytyi ostaa lankaa korjatakseen _", type: "rationale"},
  
    { noun: "skootteri", eng: "scooter", stim: "Toivo huomasi Matin rikkoneen _", expected: "skootterin", type: "VA"},
    { noun: "auto", eng: "car", stim: "Mikon täytyi huomata Venlan rikkoneen _", type: "VA"},
    { noun: "tuoli", stim: "Kerttu muistaa Elsin ostaneen _", expected: "tuolin", type: "VA"},
    { noun: "pöytä", stim: "Pihlan täytyy muistaa Oonan ostaneen _", type: "VA"},
    { noun: "pusero", stim: "Pekka aavisti Arton varastaneen _", expected: "puseron", type: "VA"},
    { noun: "huivi", stim: "Antin täytyy aavistaa Helmin varastaneen _", type: "VA"}

];

const filler_nouns = [
  {noun: "auto", eng: "car"},
  {noun: "skootteri", eng: "scooter"},
  {noun: "p\u00f6yt\u00e4", eng: "table"},
  {noun: "tuoli", eng: "chair"},
  {noun: "huivi", eng: "scarf"},
  {noun: "pusero", eng: "blouse"}
];
  
  const nouns = [
    { noun: "pallo", eng: "ball", freq: "high_frequency", stem: "no_stem_change" },
    { noun: "avain", eng: "key", freq: "high_frequency", stem: "stem_change" },
    { noun: "hammasharja", eng: "toothbrush", freq: "low_frequency", stem: "no_stem_change" },
    { noun: "jakoavain", eng: "wrench", freq: "low_frequency", stem: "stem_change" },
    { noun: "kirja", eng: "book", freq: "high_frequency", stem: "no_stem_change" },
    { noun: "keksi", eng: "biscuit", freq: "high_frequency", stem: "no_stem_change" },
    { noun: "kello", eng: "watch", freq: "high_frequency", stem: "no_stem_change" },
    { noun: "pullo", eng: "bottle", freq: "high_frequency", stem: "no_stem_change" },
    { noun: "marja", eng: "berry", freq: "high_frequency", stem: "no_stem_change" },
    { noun: "puhelin", eng: "phone", freq: "high_frequency", stem: "stem_change" },
    { noun: "sanomalehti", eng: "newspaper", freq: "high_frequency", stem: "stem_change" },
    { noun: "kivi", eng: "rock", freq: "high_frequency", stem: "stem_change" },
    { noun: "kirje", eng: "letter", freq: "high_frequency", stem: "stem_change" },
    { noun: "kangas", eng: "cloth", freq: "high_frequency", stem: "stem_change" },
    { noun: "taikasauva", eng: "magic_wand", freq: "low_frequency", stem: "no_stem_change" },
    { noun: "korvakoru", eng: "earring", freq: "low_frequency", stem: "no_stem_change" },
    { noun: "mittanauha", eng: "tape_measure", freq: "low_frequency", stem: "no_stem_change" },
    { noun: "vispil\u00e4", eng: "whisk", freq: "low_frequency", stem: "no_stem_change" },
    { noun: "ruuvimeisseli", eng: "screwdriver", freq: "low_frequency", stem: "no_stem_change" },
    { noun: "kampa", eng: "comb", freq: "low_frequency", stem: "stem_change" },
    { noun: "huistenkuivain", eng: "hair_dryer", freq: "low_frequency", stem: "stem_change" },
    { noun: "silitysrauta", eng: "clothes_iron", freq: "low_frequency", stem: "stem_change" },
    { noun: "tupakansytytin", eng: "cigarette_lighter", freq: "low_frequency", stem: "stem_change" },
    { noun: "ananas", eng: "pineapple", freq: "low_frequency", stem: "stem_change" }
  ];

  const all_nouns = [...nouns, ...filler_nouns]
  
  
  const embedded = ['pudottaneen', 'unohtaneen', 'hukanneen', 'tuoneen', 'n\u00e4hneen', 'l\u00f6yt\u00e4neen'];
  
  const embeddingAct = ['luuli', 'sanoi', 'tiesi', 'v\u00e4itti', 'toivoi', 'arveli'];
  
  const embeddingPass = ['luultiin', 'sanottiin', 'tiedettiin', 'v\u00e4itettiin', 'toivottiin', 'arveltiin'];
  
  const locs = ['Kyl\u00e4ss\u00e4', 'Kaupungissa', 'Naapurissa', 'Talossa'];
  
  const nomNames = ["Pekka", "Arto", "Antti", "Helmi", "Kerttu", "Elsi"];
  
  const genNames = ["Toivon", "Matin", "Mikon", "Venlan", "Pihlan", "Oonan"];
  
  let shuffledNouns = [...nouns];
  shuffle(shuffledNouns);
  
  console.log('Shuffled Nouns:', shuffledNouns);
  
  const nounsActive = shuffledNouns.slice(0, 12);
  const nounsPassive = shuffledNouns.slice(12);
  
  function makeActiveStims(listDicts) {
    const sentences = [];
  
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
      sentences.push(stim);
    }
  
    return sentences;
  }
  
  const activeSentences = makeActiveStims(nounsActive);
  console.log('Active Sentences:', activeSentences);
  
  function makePassiveStims(listDicts) {
    const sentences = [];
  
    for (const dict of listDicts) {
      let stim = '_';
      const embeddedV = [embedded[Math.floor(Math.random() * embedded.length)]];
      stim = embeddedV[0] + ' ' + stim;
      const genName = [genNames[Math.floor(Math.random() * genNames.length)]];
      stim = genName[0] + ' ' + stim;
      const embedding = [embeddingPass[Math.floor(Math.random() * embeddingPass.length)]];
      stim = embedding[0] + ' ' + stim;
      const prep = [locs[Math.floor(Math.random() * locs.length)]];
      stim = prep[0] + ' ' + stim;
      sentences.push(stim);
    }
  
    return sentences;
  }
  
  const passiveSentences = makePassiveStims(nounsPassive);
  console.log('Passive Sentences:', passiveSentences);

  function makeAllStims(list1, list2) {
    const activeResults = makeActiveStims(list1);
    const passiveResults = makePassiveStims(list2);
  
    const allStims = [];
  
    for (let i = 0; i < activeResults.length; i++) {
      const activeStimDict = { noun: list1[i].noun, stim: activeResults[i] };
      allStims.push(activeStimDict);
    }
  
    for (let i = 0; i < passiveResults.length; i++) {
      const passiveStimDict = { noun: list2[i].noun, stim: passiveResults[i] };
      allStims.push(passiveStimDict);
    }
  
    return allStims;
  }
  
  const allStimsWithNoun = makeAllStims(nounsActive, nounsPassive);
  console.log('All Stims with Noun:', allStimsWithNoun);

  // Combine fillers with your experiment stimuli
const allStimsWithNounAndFillers = [...allStimsWithNoun, ...fillers_basic, ...fillers_exploratory];
console.log('All Stims with Noun and Fillers:', allStimsWithNounAndFillers);

// ... (previous code)

const jsPsych = initJsPsych({
  on_finish: function(data) {
      proliferate.submit({"trials": data.values()});
  }
});

// Shuffle the combined array
const shuffledAllStims = shuffle(allStimsWithNounAndFillers);


function createSurveyTrial(index) {
  const stimulus = shuffledAllStims[index];

  // Generate HTML for the preamble with an image
  const preambleHTML = `<img src="images/${stimulus.noun}.png" height="300">`;

  return {
    type: jsPsychSurveyText,
    preamble: preambleHTML,
    questions: [
      {
        prompt: stimulus.stim,
        placeholder: 'Kirjoita vastauksesi tähän ...',
      },
    ],
    data: {
      noun: stimulus.noun,
      stimulusSentence: stimulus.stim,
    },
    button_label: 'Jatka'
  };
};

const irb = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `<center> <img src = "stimuli/alpslogo.png" height = 200> <p> <font size="4"> \ 
  We invite you to our research study on language production. \
  <br> Your experimenter will ask you to do a linguistic task, such as recording descriptions of images.</p> `,
  prompt: `<br><br><font size = "2"> LEGAL INFORMATION: <br> There are no risks or benefits of any kind involved in this study. \
  You will be paid for your participation at the posted rate. If you have read this form and have decided \
  to participate in this experiment, please understand your participation is voluntary and you have the right to \
  withdraw your consent or discontinue participation at anytime without penalty or loss of benefits to which you \
  are otherwise entitled. You have the right to refuse to do particular tasks. Your individual privacy will be \
  maintained in all published and written data resulting from the study. You may print this form for your records.\
  <br><br>CONTACT INFORMATION: \
  <br>If you have any questions, concerns or complaints about this research study, its procedures, risks and benefits, \
  you should contact the Protocol Director Meghan Sumner at (650)-725-9336. If you are not satisfied with how this study \
  is being conducted, or if you have any concerns, complaints, or general questions about the research or your rights as a \
  participant, please contact the Stanford Institutional Review Board (IRB) to speak to someone independent of the research \
  team at (650)-723-2480 or toll free at 1-866-680-2906. You can also write to the Stanford IRB, Stanford University, 3000 \
  El Camino Real, Five Palo Alto Square, 4th Floor, Palo Alto, CA 94306 USA.<br><br>`,
  
  choices: ['Continue']
};

const instructions_trainNouns = {
  type: jsPsychHtmlButtonResponse,
  stimulus: 
  "Tämä koe koostuu kahdesta osasta. <br> \
  Ensin näet kuvia esineistä ja opit niiden nime. <br> \
  Sitten näet epätäydellisiä lauseita ja täydennät ne täyttämällä tyhjän kohdan. <br> \
  Siirrymme nyt ensimmäiseen osaan: esineiden nimien oppiminen.",
  choices: ["Jatka"]
};

var trainNouns = {
  timeline: [
  {
      type: jsPsychHtmlButtonResponse, 
      stimulus: function(){
          // var html is displaying the name of the noun and then its image
          var html =  `<p><font size="10">${jsPsych.timelineVariable('noun')}</font></p> 
          <img src = "images/${jsPsych.timelineVariable('noun')}.png" height = 300>`;
          // var html line is displaying name of noun and then its image. We have relative path to image above. My questions is where jsPsych.timelineVariable is 
          // defined?
          return html;
      },
      choices: ["Jatka"]
  }
      ],
  timeline_variables: all_nouns,
  randomize_order: true 
  }

const instructions_mainexp = {
  type: jsPsychHtmlButtonResponse,
  stimulus: "Hienoa. Siinä olivat kaikki esineet! Kokeen toisessa osassa näet esineen kuvan ja epätäydellisen lauseen. <br> \
  Tehtäväsi on täydentää lause esinettä tarkoittavalla sanalla kirjoittamalla annettuun tekstikenttään.",
  choices: ["Jatka"]
};

var exitSurvey = {
  type: jsPsychSurvey,
  pages: [
    [
      {
        type: 'html',
        prompt: `<center> <img src = "stimuli/alpslogo.png" height = 200> <br> Kiitos kokeeseen osallistumisesta! <br> \
         Seuraaviin kysymyksiin vastaaminen on vapaaehtoista, mutta auttaa meitä vastaustesi tulkinnassa.
        <br> Kun olet valmis, paina "Lähetä" näytön alareunassa. <br> `,
      },
      {
        type: 'text',
        prompt: "Mikä on äidinkielesi?", 
        name: 'nativeLanguage', 
        required: false
      }, 
      {
        type: 'multi-choice',
        prompt: "Luitko ohjeet ja uskotko tehneesi kokeen oikein?", 
        name: 'followedInstructions', 
        options: ['En', 'Kyllä', 'En ymmärtänyt koetta'], 
        required: false
      }, 
      {
        type: 'text',
        prompt: "Oliko kokeessa ongelmia tai virheitä?",
        name: 'problems', 
        required: false
      },
      {
        type: 'multi-choice',
        prompt: "Oliko korvaus kokeen tekemisestä mielestäsi riittävä?", 
        name: 'fairPrice',
        options: ['En', 'Kyllä', 'En osaa sanoa'],  
        required: false
      }, 
      {
        type: 'multi-choice',
        prompt: "Oliko koe miellyttävä kokemus?", 
        name: 'enjoy', 
        options: ['Normaalia epämiellyttävämpi', 'Normaali', 'Normaalia miellyttävämpi'], 
        required: false
      },
      {
        type: 'text',
        prompt: "Otamme mielellämme vastaan palautetta kokeesta:", 
        name: 'additionalComments', 
        required: false
      }, 
    ]
  ],
  button_label_finish: 'Lähetä'
};

const thank_you = {
  type: jsPsychHtmlButtonResponse,
  stimulus : `Kiitos!`,
  choices : ["Lopeta"],
}




// Build timeline using createSurveyTrial function
let timeline = [];

timeline.push(irb);
timeline.push(instructions_trainNouns);
timeline.push(trainNouns);
timeline.push(instructions_mainexp);


for (let i = 0; i < shuffledAllStims.length; i++) {
  timeline.push(createSurveyTrial(i));
}

timeline.push(exitSurvey);
timeline.push(thank_you);


// Run the experiment
jsPsych.run(timeline);
