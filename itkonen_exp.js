 
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
  { noun: "pallo", stim: "Pekka ei heittänyt ___", expected: "palloa", type: "basic"},
  { noun: "avain", stim: "Arto etsii ___", expected: "avainta", type: "basic"},
  { noun: "kirja", stim: "Antti on lukemassa ___", expected: "kirjaa", type: "basic"},
  { noun: "kirje", stim: "Helmi ei taittanut ___", expected: "kirjettä", type: "basic"},
  { noun: "sanomalehti", stim: "Kerttu on lukemassa ___", expected: "sanomalehteä", type: "basic"},
  { noun: "puhelin", stim: "Elsi ei sulkenut ___", expected: "puhelinta", type: "basic"},
  { noun: "taikasauva", stim: "Toivo heilutti ___", expected: "taikasauvaa", type: "basic"},
  { noun: "korvakoru", stim: "Matti ei ostanut ___", expected: "korvakorua", type: "basic"},
  { noun: "vispilä", stim: "Mikko ei käyttänyt ___", expected: "vispilää", type: "basic"},
  { noun: "silitysrauta", stim: "Venla pyöritti ___", expected: "silitysrautaa", type: "basic"},
  { noun: "ananas", stim: "Pihla on syömässä ___", expected: "ananasta", type: "basic"},
  { noun: "kampa", stim: "Oona ei pudottanut ___", expected: "kampaa", type: "basic"}
]
  

  const fillers_exploratory = [ 
    { noun: "auto", eng: "car", stim: "Pekka myi polkupyöränsä ostaakseen ___", expected: "auton", type: "rationale"},
    { noun: "skootteri", eng: "scooter", stim: "Arton täytyi myydä polkupyöränsä ostaakseen ___", type: "rationale"},
    { noun: "pöytä", eng: "table", stim: "Antti sahasi lautaa rakentaakseen ___", expected: "pöydän", type: "rationale"},
    { noun: "tuoli", eng: "chair", stim: "Helmin täytyi sahata lautaa rakentaakseen ___", type: "rationale"},
    { noun: "huivi", eng: "scarf", stim: "Kerttu osti lankaa korjatakseen ___", expected: "huivin", type: "rationale"},
    { noun: "pusero", eng: "blouse", stim: "Elsin täytyi ostaa lankaa korjatakseen ___", type: "rationale"},
  
    { noun: "skootteri", eng: "scooter", stim: "Toivo huomasi Matin rikkoneen ___", expected: "skootterin", type: "VA"},
    { noun: "auto", eng: "car", stim: "Mikon täytyi huomata Venlan rikkoneen ___", type: "VA"},
    { noun: "tuoli", stim: "Kerttu muistaa Elsin ostaneen ___", expected: "tuolin", type: "VA"},
    { noun: "pöytä", stim: "Pihlan täytyy muistaa Oonan ostaneen ___", type: "VA"},
    { noun: "pusero", stim: "Pekka aavisti Arton varastaneen ___", expected: "puseron", type: "VA"},
    { noun: "huivi", stim: "Antin täytyy aavistaa Helmin varastaneen ___", type: "VA"}

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
    { noun: "hiustenkuivain", eng: "hair_dryer", freq: "low_frequency", stem: "stem_change" },
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
      let stim = '___';
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
      let stim = '___';
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
  const preambleHTML = ` <p><font size="10">${stimulus.stim}</font></p> 
  <img src="images/${stimulus.noun}.png" height="300"><br><br>`;

  return {
    type: jsPsychSurveyText,
    /* preamble: preambleHTML, */
    questions: [
      {
        /* prompt: stimulus.stim, */
        prompt: preambleHTML ,
        required: true,
        required_error: "Täydennä lause",
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
  stimulus: `<center> <img src = "images/alpslogo.png" height = 100> <p> <font size="3"> \ 
  KIELEN TUOTTAMISEN JA YMMÄRTÄMISEN KOKEELLINEN TUTKIMUS <br> \
  Tutkimusprotokollan vastuuhenkilöt: Meghan Sumner <br>\
  Pyydämme Sinua osallistumaan kielen tuottamista ja ymmärtämistä koskevaan kokeelliseen tutkimukseen. \
  Kokeessa Sinulle annetaan kielellisiä tehtäviä, joissa Sinua pyydetään esimerkiksi lukemaan lauseita tai sanoja, 
  nimeämään kuvia tai kuvailemaan tilanteita, muodostamaan lauseita itse, 
  tai osallistumaan yksinkertaisiin kielellisiin peleihin toisen koehenkilön kanssa. \
  Tähän tutkimukseen ei liity minkäänlaisia riskejä.</p> 
  <p> Kokeen suorittaja voi pyytää lupaa kerätä tietoa silmiesi liikkeistä, tallentaa ääntäsi nauhalle, \
  tai kuvata Sinua videolle. \
  Mikäli näin tehdään, nimeäsi ei yhdistetä syntyviin tallenteisiin \
  ja tallenteet tulevat ainoastaan tämän tutkimuksen tekijöiden käyttöön. Mikäli haluat sallia tallentamisen, \
  ilmoita siitä tutkimuksen suorittajalle.</p>
  <p>
  Jos olet lukenut tämän lomakkeen ja päättänyt osallistua tässä kuvailtuun kokeelliseen tutkimukseen, \
  muista, että osallistumisesi on vapaaehtoista ja Sinulla on oikeus kieltäytyä kokeesta ja keskeyttää 
  osallistumisesi milloin tahansa ilman että tästä seuraa minkäänlaista rangaistusta tai Sinulle kuuluvien etujen menettämistä. 
  Sinulla on oikeus kieltäytyä osatehtävistä niin halutessasi. Tutkimuksesta syntyvää tietoa käsitellään julkaisuissa 
  ja kirjallisissa raporteissa luottamuksellisesti niin, ettei yksittäisen henkilön tuloksia voida tunnistaa. \
  Saat osallistumisestasi ilmoitetun suuruisen korvauksen. </p>`,
  prompt: `<br><font size = "2"> YHTEYSTIEDOT: <br> Jos Sinulla on kysymyksiä, huolenaiheita, \
  tai valituksia, jotka liittyvät tähän tutkimukseen, siinä käytettäviin tutkimusmenetelmiin, \
  tai siihen liittyviin riskeihin ja etuihin, \
  ota yhteyttä jompaankumpaan tutkimusprotokollan vastuuhenkilöstä: Meghan Sumner 650-732-4230.\
  <br>Jos et ole tyytyväinen tämän tutkimuksen suorittamistapaan, tai jos Sinulla on huolenaiheita, \
  valituksia, tai kysymyksiä, jotka liittyvät tähän tutkimukseen tai oikeuksiisi koehenkilönä, \
  voit ottaa yhteyttä Stanfordin yliopiston Institutional Review Boardiin (IRB) \
  ja keskustella tutkimusryhmästä riippumattoman henkilön kanssa. \
  Voit tehdä tämän soittamalla numeroon (650)-723-2480 tai maksuttomaan palvelunumeroon 1-866-680-2906. \
  Voit tehdä saman kirjallisesti lähettämällä kirjeen osoitteeseen Stanford IRB, \
  Stanford University, 1705 El Camino Real, Floor, Palo Alto, CA 94306 USA.<br><br>`,
  
  choices: ["Jatka"]
};

const instructions_trainNouns = {
  type: jsPsychHtmlButtonResponse,
  stimulus: 
  "Tämä koe koostuu kahdesta osasta. <br> \
  Ensin näet kuvia esineistä ja opit niiden nime. <br> \
  Sitten näet 48 epätäydellisiä lauseita ja täydennät ne täyttämällä tyhjän kohdan. <br> \
  Siirrymme nyt ensimmäiseen osaan: esineiden nimien oppiminen. <br><br>",
  choices: ["Jatka"]
};

var trainNouns = {
  timeline: [
  {
      type: jsPsychHtmlButtonResponse, 
      stimulus: function(){
          // var html is displaying the name of the noun and then its image
          var html =  `<p><font size="10">${jsPsych.timelineVariable('noun')}</font></p> 
          <img src = "images/${jsPsych.timelineVariable('noun')}.png" height = 300><br><br>`;
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
  Tehtäväsi on täydentää lause esinettä tarkoittavalla sanalla kirjoittamalla annettuun tekstikenttään.<br><br>",
  choices: ["Jatka"]
};

var exitSurvey = {
  type: jsPsychSurvey,
  pages: [
    [
      {
        type: 'html',
        prompt: `<center> <img src = "images/alpslogo.png" height = 100> <br> Kiitos kokeeseen osallistumisesta! <br> \
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
