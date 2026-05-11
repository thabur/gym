const ASSET_VERSION = "v=12";

const exercises = {
  "dead-bug": {
    name: "Dead bug",
    cue: "Brace, move slow",
    video: "./assets/videos/dead-bug.mp4",
    cues: ["Low back stays quiet", "Opposite arm and leg move", "Exhale as you reach"]
  },
  "bird-dog": {
    name: "Bird dog",
    cue: "Long spine",
    video: "./assets/videos/bird-dog.mp4",
    cues: ["Hips stay level", "Reach long, not high", "Pause before switching"]
  },
  "leg-press": {
    name: "Leg press",
    cue: "Back supported",
    video: "./assets/videos/leg-press.mp4",
    cues: ["Feet stable", "Do not let hips tuck", "Stop before lower back rounds"]
  },
  "row": {
    name: "Seated row / chest-supported row",
    cue: "Pull elbows back",
    video: "./assets/videos/row.mp4",
    cues: ["Chest tall or supported", "Shoulders stay down", "No neck shrugging"]
  },
  "chest-press": {
    name: "Machine chest press",
    cue: "Smooth press",
    video: "./assets/videos/chest-press.mp4",
    cues: ["Shoulders down", "Wrists neutral", "Stop before shoulders roll forward"]
  },
  "leg-curl": {
    name: "Seated or lying leg curl",
    cue: "Curl controlled",
    video: "./assets/videos/leg-curl.mp4",
    cues: ["Hips stay planted", "Control the return", "No lower-back arch"]
  },
  "pallof": {
    name: "Cable Pallof press",
    cue: "Resist rotation",
    video: "./assets/videos/pallof-press.mp4",
    cues: ["Ribs down", "Press straight out", "Cable tries to twist you, do not let it"]
  },
  "chin-tuck": {
    name: "Chin tucks, gentle",
    cue: "Small neck glide",
    video: "./assets/videos/chin-tuck.mp4",
    cues: ["Move gently", "Do not force range", "Stop if headache increases"]
  },
  "wall-slide": {
    name: "Wall slides or scapular retractions",
    cue: "Shoulders glide",
    video: "./assets/videos/wall-slide.mp4",
    cues: ["Keep ribs down", "Move without shrugging", "Use pain-free range"]
  },
  "lat-pulldown": {
    name: "Neutral-grip lat pulldown",
    cue: "Pull to upper chest",
    video: "./assets/videos/lat-pulldown.mp4",
    cues: ["Neutral grip if possible", "Shoulders down first", "No leaning far back"]
  },
  "face-pull": {
    name: "Cable face pull",
    cue: "Light and clean",
    video: "./assets/videos/face-pull.mp4",
    cues: ["Pull toward nose/forehead", "Elbows high but relaxed", "Neck stays soft"]
  },
  "hip-abduction": {
    name: "Hip abduction machine",
    cue: "Slow outer hip",
    video: "./assets/videos/hip-abduction.mp4",
    cues: ["Sit tall", "Control out and in", "No bouncing"]
  },
  "bike-walk": {
    name: "Easy bike or treadmill walk",
    cue: "Easy finish",
    video: "./assets/videos/bike-walk.mp4",
    cues: ["Nose-breathing effort", "No running", "Leave fresh"]
  },
  "side-plank": {
    name: "Side plank from knees",
    cue: "Straight line",
    video: "./assets/videos/side-plank.mp4",
    cues: ["Knees bent", "Hips forward", "Stop before shaking hard"]
  },
  "hip-thrust": {
    name: "Hip thrust / glute bridge machine",
    cue: "Glutes, not back",
    video: "./assets/videos/hip-thrust.mp4",
    cues: ["Ribs down", "Squeeze glutes at top", "No lower-back arch"]
  },
  "cable-row": {
    name: "Cable row, light/moderate",
    cue: "Quiet torso",
    video: "./assets/videos/cable-row.mp4",
    cues: ["No rocking", "Pull with elbows", "Shoulders stay away from ears"]
  }
};

const sessions = {
  monday: {
    title: "Monday",
    focus: "Strength A",
    items: [
      ["dead-bug", 2, "6/side", 30],
      ["bird-dog", 2, "6/side", 30],
      ["leg-press", 2, "10", 90],
      ["row", 3, "10", 75],
      ["chest-press", 2, "10", 75],
      ["leg-curl", 2, "12", 60],
      ["pallof", 2, "10/side", 45]
    ]
  },
  tuesday: {
    title: "Tuesday",
    focus: "Easy posture + core",
    items: [
      ["chin-tuck", 2, "6", 30],
      ["wall-slide", 2, "8", 30],
      ["lat-pulldown", 2, "10", 60],
      ["face-pull", 2, "12", 60],
      ["hip-abduction", 2, "12", 60],
      ["pallof", 2, "10/side", 45],
      ["bike-walk", 1, "8 min", 0]
    ]
  },
  thursday: {
    title: "Thursday",
    focus: "Strength B",
    items: [
      ["side-plank", 2, "15-20s/side", 30],
      ["dead-bug", 1, "6/side", 30],
      ["hip-thrust", 3, "10", 75],
      ["lat-pulldown", 3, "10", 75],
      ["chest-press", 2, "10", 75],
      ["leg-press", 2, "12, lighter", 90],
      ["cable-row", 2, "12", 60]
    ]
  },
  saturday: {
    title: "Saturday",
    focus: "Easy full-body circuit",
    items: [
      ["leg-press", 2, "10", 60],
      ["row", 2, "10", 60],
      ["chest-press", 2, "10", 60],
      ["leg-curl", 2, "12", 60],
      ["face-pull", 2, "12", 60],
      ["pallof", 2, "8/side", 45],
      ["bike-walk", 1, "5-8 min", 0]
    ]
  },
  fallback: {
    title: "Fallback",
    focus: "Pain above 3/10 or radiating symptoms",
    items: [
      ["dead-bug", 2, "6/side", 30],
      ["bird-dog", 2, "6/side", 30],
      ["pallof", 2, "8/side, light", 45],
      ["bike-walk", 1, "8-10 min", 0]
    ]
  }
};

const trainingSchedule = [
  { dayIndex: 1, day: "monday" },
  { dayIndex: 2, day: "tuesday" },
  { dayIndex: 4, day: "thursday" },
  { dayIndex: 6, day: "saturday" }
];

const sessionCutoffMinute = 21 * 60 + 30;

const sezamoConfig = {
  store: "Sezamo.ro",
  country: "Romania",
  city: "Bucuresti",
  mcpEndpoint: "https://mcp.sezamo.ro/mcp/",
  forbiddenStores: ["Rohlik.cz", "Sezamo.cz", "Rohlik Group Cehia"]
};

const foodMeals = {
  "skyr-bowl": {
    id: "skyr-bowl",
    slot: "firstMeal",
    title: "Skyr bowl",
    prepMinutes: 5,
    proteinEstimate: 45,
    calorieEstimate: 520,
    ingredients: [
      "Skyr or Greek yogurt, 350g",
      "Oats, 40g",
      "Banana or berries, 1 serving",
      "Whey, 20g if protein is short"
    ],
    instructions: ["Mix everything cold", "Use berries if bananas trigger cravings"],
    gasRisk: "low"
  },
  "chicken-rice-bowl": {
    id: "chicken-rice-bowl",
    slot: "lunch",
    title: "Chicken rice bowl",
    prepMinutes: 10,
    proteinEstimate: 55,
    calorieEstimate: 650,
    ingredients: [
      "Cooked chicken, 180-220g",
      "Cooked rice or potatoes, 250-350g",
      "Salad or cooked vegetables, 2 handfuls",
      "Olive oil or yogurt sauce, 1 small spoon"
    ],
    instructions: ["Reheat chicken and carb", "Add vegetables and sauce after heating"],
    gasRisk: "low"
  },
  "protein-snack": {
    id: "protein-snack",
    slot: "snack",
    title: "16:00 protein snack",
    prepMinutes: 3,
    proteinEstimate: 30,
    calorieEstimate: 300,
    ingredients: [
      "Cottage cheese or skyr, 200-250g",
      "Apple, banana, or berries",
      "Cinnamon or cocoa"
    ],
    instructions: ["Eat before the craving window peaks", "Add fruit even if appetite feels low"],
    gasRisk: "low"
  },
  "chicken-wrap": {
    id: "chicken-wrap",
    slot: "dinner",
    title: "Chicken wrap dinner",
    prepMinutes: 12,
    proteinEstimate: 50,
    calorieEstimate: 620,
    ingredients: [
      "Cooked chicken, 170-200g",
      "Large wrap, 1",
      "Salad, cucumber, tomato, or pickles",
      "Greek yogurt sauce"
    ],
    instructions: ["Warm the wrap", "Fill, fold, and add extra salad on the side"],
    gasRisk: "low"
  },
  "tuna-potato-bowl": {
    id: "tuna-potato-bowl",
    slot: "dinner",
    title: "Tuna potato bowl",
    prepMinutes: 10,
    proteinEstimate: 45,
    calorieEstimate: 570,
    ingredients: [
      "Tuna cans, 1-2",
      "Boiled potatoes, 350-450g",
      "Pickles, tomato, cucumber, or salad",
      "Greek yogurt, mustard, lemon"
    ],
    instructions: ["Drain tuna", "Mix sauce separately, then fold into the bowl"],
    gasRisk: "medium"
  },
  "closing-yogurt": {
    id: "closing-yogurt",
    slot: "closingSnack",
    title: "21:00 closing snack",
    prepMinutes: 2,
    proteinEstimate: 25,
    calorieEstimate: 240,
    ingredients: [
      "Skyr or cottage cheese, 200g",
      "Berries or kiwi",
      "Tea or sparkling water"
    ],
    instructions: ["Plate it before cravings start", "Finish eating away from bed"],
    gasRisk: "low"
  },
  "rescue-plate": {
    id: "rescue-plate",
    slot: "emergency",
    title: "Rescue plate",
    prepMinutes: 5,
    proteinEstimate: 35,
    calorieEstimate: 380,
    ingredients: [
      "Tuna, eggs, cottage cheese, or skyr",
      "Fruit or potatoes",
      "Pickles, cucumber, or salad"
    ],
    instructions: ["Use a plate, not the package", "Eat seated and stop after this plate"],
    gasRisk: "low"
  }
};

const defaultMealIds = [
  "skyr-bowl",
  "chicken-rice-bowl",
  "protein-snack",
  "chicken-wrap",
  "closing-yogurt",
  "rescue-plate"
];

const prepItems = [
  "Cook 1.5kg chicken with salt, pepper, garlic-free spice mix, and lemon.",
  "Cook rice or boil potatoes for 4-5 lunches.",
  "Boil 8-10 eggs.",
  "Wash or portion salad, cucumbers, tomatoes, and fruit.",
  "Put 3 snack portions at eye level in the fridge."
];

const foodSlotLabels = {
  firstMeal: "11:00",
  lunch: "13:00",
  snack: "16:00",
  dinner: "19:30",
  closingSnack: "21:00",
  emergency: "Rescue"
};

const foodSlots = [
  { start: 10 * 60 + 30, end: 14 * 60 + 30, mealIndex: 0 },
  { start: 15 * 60, end: 17 * 60 + 30, mealIndex: 1 },
  { start: 18 * 60, end: 21 * 60 + 30, mealIndex: 2 }
];

const recipeRotations = [
  {
    id: "tagliatelle-ton",
    slot: "lunch",
    title: "Tagliatelle cu ton",
    role: "fast work lunch",
    prepMinutes: 15,
    proteinEstimate: 32,
    calorieEstimate: 300,
    gasRisk: "low",
    packable: true,
    batchable: false,
    prepAhead: "Boil pasta in the morning or cook it fresh in 15 minutes.",
    baseIngredients: ["ton in suc propriu", "paste integrale", "sos de rosii", "baby spanac"],
    ingredients: [
      "Paste integrale, 50-70g uscate",
      "Ton in suc propriu, 1 conserva scursa",
      "Sos de rosii simplu, 50-80g",
      "Baby spanac, 1 mana",
      "Lamaie, piper, oregano"
    ],
    sezamoIngredients: ["paste integrale", "ton in suc propriu", "sos de rosii simplu", "baby spanac", "lamaie"],
    steps: [
      "Fierbe pastele in apa sarata pana sunt al dente.",
      "Incalzeste sosul de rosii intr-o tigaie mica si adauga tonul scurs.",
      "Pune spanacul peste sos doar 30-60 secunde, cat sa se inmoaie.",
      "Amesteca pastele cu sosul si termina cu lamaie, piper si oregano.",
      "Pentru birou, pune langa castraveti, rosii sau salata simpla."
    ],
    storage: "Merge la frigider 24 ore. Pastreaza extra salata separat ca sa nu se inmoaie.",
    note: "Fast lunch; add salad if hunger is high."
  },
  {
    id: "pizza-pocket-pui",
    slot: "dinner",
    title: "Buzunar de pizza cu pui",
    role: "craving dinner",
    prepMinutes: 25,
    proteinEstimate: 32,
    calorieEstimate: 286,
    gasRisk: "medium",
    packable: false,
    batchable: true,
    prepAhead: "Formeaza 2-3 buzunare in weekend si pastreaza-le crude, acoperite, pana a doua zi.",
    baseIngredients: ["carne tocata din piept de pui", "mozzarella light", "pasta de rosii", "oregano"],
    ingredients: [
      "Carne tocata din piept de pui, 220-250g",
      "Mozzarella light, 25-35g",
      "Pasta de rosii, 1 lingura",
      "Oregano, busuioc, sare, piper",
      "Salata sau castraveti langa"
    ],
    sezamoIngredients: ["carne tocata din piept de pui", "mozzarella light", "pasta de rosii", "oregano", "salata verde"],
    steps: [
      "Asezoneaza carnea si aplatizeaz-o intre doua foi de hartie de copt.",
      "Unge jumatate cu pasta de rosii si pune mozzarella deasupra.",
      "Pliaza carnea peste umplutura si inchide marginile cu degetele.",
      "Gateste la air fryer 14-16 minute la 200C sau la cuptor 18-22 minute.",
      "Mananca-l din farfurie, cu salata langa, ca sa ramana o cina controlata."
    ],
    storage: "Cel mai bun proaspat. Gatit, tine 2 zile la frigider si se reincalzeste 6-8 minute.",
    note: "Use when cravings want pizza; keep it plated."
  },
  {
    id: "vita-cartof-dulce",
    slot: "lunch",
    title: "Bol cu vita, cartof dulce si legume",
    role: "batch lunch",
    prepMinutes: 30,
    proteinEstimate: 37,
    calorieEstimate: 358,
    gasRisk: "medium",
    packable: true,
    batchable: true,
    prepAhead: "Fa 2 portii sambata/duminica; tine carbohidratii si carnea gata portionate.",
    baseIngredients: ["vita slaba tocata", "cartof dulce", "morcov", "legume usoare"],
    ingredients: [
      "Vita slaba tocata, 180-220g",
      "Cartof dulce, 250-300g",
      "Morcov, dovlecel sau ardei, 2 maini",
      "Ulei de masline, 1 lingurita",
      "Sare, piper, boia dulce"
    ],
    sezamoIngredients: ["vita slaba tocata", "cartof dulce", "morcovi", "dovlecel", "ardei kapia"],
    steps: [
      "Taie cartoful dulce cuburi mici si gateste-l la air fryer sau tigaie 15-18 minute.",
      "Rumeneste vita intr-o tigaie antiaderenta, cu sare, piper si boia.",
      "Adauga legumele taiate subtire si gateste-le 5-7 minute, sa ramana usoare.",
      "Imparte in caserole: cartof dulce jos, vita si legume deasupra.",
      "Daca e zi de sala, adauga cartof sau orez suplimentar langa."
    ],
    storage: "Tine 3 zile la frigider. Reincalzeste complet si adauga ceva proaspat langa.",
    note: "Swap broccoli for zucchini or peppers if gas is high."
  },
  {
    id: "pui-iaurt-mustar",
    slot: "dinner",
    title: "Bol cu pui, iaurt si mustar",
    role: "default prep bowl",
    prepMinutes: 30,
    proteinEstimate: 25,
    calorieEstimate: 279,
    gasRisk: "low",
    packable: true,
    batchable: true,
    prepAhead: "Duminica: gateste puiul si cartofii; sosul il amesteci in ziua respectiva.",
    baseIngredients: ["piept de pui", "cartofi", "iaurt 2% sau fara lactoza", "mustar", "salata"],
    ingredients: [
      "Piept de pui, 180-220g",
      "Cartofi, 300-400g",
      "Iaurt grecesc 2% sau fara lactoza, 80-120g",
      "Mustar, 1 lingurita",
      "Salata, castraveti, rosii"
    ],
    sezamoIngredients: ["piept de pui", "cartofi", "iaurt grecesc 2% fara lactoza", "mustar", "salata", "castraveti", "rosii"],
    steps: [
      "Fierbe cartofii cuburi 15-20 minute sau gateste-i la air fryer.",
      "Taie puiul fasii si gateste-l intr-o tigaie antiaderenta 4-5 minute pe parte.",
      "Amesteca iaurtul cu mustar, sare, piper si putina lamaie.",
      "Pune cartofii, puiul si legumele in bol, apoi sosul deasupra.",
      "Pentru birou, tine sosul separat si il adaugi cand mananci."
    ],
    storage: "Puiul si cartofii tin 3 zile. Sosul e mai bun facut proaspat sau tinut separat.",
    note: "Closest fit to the default plan."
  },
  {
    id: "wrap-pui-cremos",
    slot: "dinner",
    title: "Wrap cu pui cremos",
    role: "portable dinner",
    prepMinutes: 30,
    proteinEstimate: 29,
    calorieEstimate: 311,
    gasRisk: "medium",
    packable: true,
    batchable: true,
    prepAhead: "Gateste puiul in avans; asambleaza wrapul in 5 minute ca sa nu se inmoaie.",
    baseIngredients: ["piept de pui", "lipii integrale", "crema de branza light", "mozzarella light"],
    ingredients: [
      "Piept de pui, 160-200g",
      "Lipie integrala mare, 1",
      "Crema de branza light, 30-40g",
      "Mozzarella light, 20-30g",
      "Castraveti, salata sau muraturi"
    ],
    sezamoIngredients: ["piept de pui", "lipii integrale", "crema de branza light", "mozzarella light", "castraveti", "salata"],
    steps: [
      "Gateste puiul cuburi cu sare, piper si condimente fara usturoi daca esti balonat.",
      "Unge lipia cu crema de branza si pune puiul, mozzarella si legumele.",
      "Ruleaza strans, apoi rumeneste 2-3 minute pe fiecare parte intr-o tigaie uscata.",
      "Taie pe diagonala si pune in farfurie cu extra legume.",
      "Daca il iei la birou, lasa legumele apoase separat."
    ],
    storage: "Puiul gatit tine 3 zile. Wrapul asamblat e ok 12-18 ore daca nu pui rosii in interior.",
    note: "Ask for garlic-free swaps if digestion is noisy."
  },
  {
    id: "salata-calda-pui",
    slot: "lunch",
    title: "Salata calda cu pui si porumb",
    role: "light lunch",
    prepMinutes: 20,
    proteinEstimate: 21,
    calorieEstimate: 191,
    gasRisk: "medium",
    packable: true,
    batchable: false,
    prepAhead: "Tine pui gatit in frigider; restul se asambleaza in cateva minute.",
    baseIngredients: ["piept de pui", "porumb", "varza sau salata", "iaurt", "lime"],
    ingredients: [
      "Piept de pui, 150-180g",
      "Porumb, 80-120g",
      "Salata verde sau varza taiata fin, 2 maini",
      "Iaurt grecesc sau fara lactoza, 60-80g",
      "Lime sau lamaie"
    ],
    sezamoIngredients: ["piept de pui", "porumb", "salata verde", "iaurt grecesc fara lactoza", "lime"],
    steps: [
      "Gateste puiul fasii intr-o tigaie antiaderenta.",
      "Incalzeste porumbul 1-2 minute in aceeasi tigaie.",
      "Amesteca iaurtul cu lime, sare si piper.",
      "Pune salata in bol, adauga puiul cald, porumbul si sosul.",
      "Dupa sala, mareste portia cu orez sau cartofi ca sa nu vina foamea seara."
    ],
    storage: "Tine componentele separat pana la masa. Salata amestecata nu e buna a doua zi.",
    note: "Add rice or potatoes after gym days."
  },
  {
    id: "ovaz-tiramisu",
    slot: "firstMeal",
    title: "Terci de ovaz tiramisu",
    role: "sweet first meal",
    prepMinutes: 10,
    proteinEstimate: 25,
    calorieEstimate: 304,
    gasRisk: "low",
    packable: true,
    batchable: true,
    prepAhead: "Fa 2 borcane seara. Nu face 5 deodata; textura scade dupa 2-3 zile.",
    baseIngredients: ["fulgi de ovaz", "iaurt grecesc 2% sau fara lactoza", "lapte 1.5%", "cafea", "cacao"],
    ingredients: [
      "Fulgi de ovaz, 40-50g",
      "Iaurt grecesc 2% sau fara lactoza, 180-220g",
      "Lapte 1.5%, 80-120ml",
      "Cafea, 1 shot mic sau 30-50ml",
      "Cacao si indulcitor dupa gust"
    ],
    sezamoIngredients: ["fulgi de ovaz", "iaurt grecesc 2% fara lactoza", "lapte 1.5%", "cafea", "cacao"],
    steps: [
      "Amesteca ovazul cu laptele si cafeaua intr-un borcan.",
      "Pune deasupra iaurtul si niveleaza-l.",
      "Presara cacao si lasa la frigider minimum 2 ore sau peste noapte.",
      "Dimineata, mananca-l ca prima masa sau ia-l la birou.",
      "Daca proteina e scurta, adauga o jumatate de cupa de whey."
    ],
    storage: "Tine 2-3 zile la frigider, inchis. Bun pentru zile cu pofta de dulce.",
    note: "Good first meal when sweet cravings are loud."
  },
  {
    id: "iaurt-fructe-bol",
    slot: "snack",
    title: "Bol proteic cu iaurt si fructe",
    role: "16:00 snack",
    prepMinutes: 10,
    proteinEstimate: 23,
    calorieEstimate: 428,
    gasRisk: "low",
    packable: true,
    batchable: false,
    prepAhead: "Portioneaza iaurtul si fructele dimineata; granola separat pana la masa.",
    baseIngredients: ["iaurt grecesc", "afine", "granola", "seminte chia"],
    ingredients: [
      "Iaurt grecesc sau skyr, 250-300g",
      "Afine sau fructe de padure, 100-150g",
      "Granola simpla, 25-35g",
      "Seminte chia, 5-10g",
      "Scortisoara sau cacao"
    ],
    sezamoIngredients: ["iaurt grecesc", "skyr", "afine", "granola simpla", "seminte chia"],
    steps: [
      "Pune iaurtul intr-un bol sau recipient de birou.",
      "Adauga fructele si scortisoara.",
      "Pastreaza granola separat pana la masa.",
      "Mananca-l intre 15:30 si 17:00, inainte sa creasca pofta de seara.",
      "Daca vrei mai putine calorii, redu granola si pastreaza volumul din fructe."
    ],
    storage: "Asamblat fara granola tine 24 ore. Granola ramane separata.",
    note: "Use as planned snack, not as unlimited dessert."
  }
];

const standardReplacementRules = [
  "Alege variante simple, bogate in proteine si cu zahar adaugat cat mai mic.",
  "Daca un produs lipseste, inlocuieste cu un produs similar din aceeasi categorie.",
  "Pentru lactate, prefera fara lactoza daca exista o varianta buna.",
  "Foloseste doar catalogul Sezamo Romania pentru Bucuresti.",
  "Nu folosi Rohlik.cz, Sezamo.cz sau produse/categorii din Cehia.",
  "Nu adauga produse gatite, meal kits sau produse din categoria Ready to Eat & Cook.",
  "Nu finaliza comanda; arata-mi cosul pentru verificare."
];

const shoppingPresets = {
  day1: {
    presetId: "day1",
    label: "1 day",
    summary: "1 easy day",
    days: 1,
    servings: 1,
    ingredientQuantities: [
      ["Skyr sau iaurt grecesc 2%", "500g"],
      ["Fulgi de ovaz", "40-60g"],
      ["Banane sau fructe de padure", "2 portii"],
      ["Piept de pui", "350-450g"],
      ["Orez sau cartofi", "100g orez uscat sau 700g cartofi"],
      ["Salata, castraveti, rosii", "500g"],
      ["Cottage cheese sau branza slaba", "250g"],
      ["Lipie mare integrala", "1 bucata"],
      ["Oua", "2 bucati"]
    ],
    replacementRules: standardReplacementRules
  },
  days3: {
    presetId: "days3",
    label: "3 days",
    summary: "3 easy days",
    days: 3,
    servings: 3,
    ingredientQuantities: [
      ["Skyr sau iaurt grecesc 2%", "1.5kg"],
      ["Fulgi de ovaz", "150-200g"],
      ["Banane, mere, kiwi sau fructe de padure", "6-8 portii"],
      ["Piept de pui", "1.1-1.3kg"],
      ["Orez sau cartofi", "300g orez uscat sau 2kg cartofi"],
      ["Salata, castraveti, rosii", "1.5kg"],
      ["Cottage cheese sau branza slaba", "750g"],
      ["Lipii mari integrale", "3 bucati"],
      ["Oua", "6 bucati"],
      ["Ton in conserva", "2 conserve"]
    ],
    replacementRules: standardReplacementRules
  },
  weekdays5: {
    presetId: "weekdays5",
    label: "5 weekdays",
    summary: "5 weekdays",
    days: 5,
    servings: 5,
    ingredientQuantities: [
      ["Skyr sau iaurt grecesc 2%", "2.5kg"],
      ["Fulgi de ovaz", "250-300g"],
      ["Banane, mere, kiwi sau fructe de padure", "10-12 portii"],
      ["Piept de pui", "1.8-2.0kg"],
      ["Orez sau cartofi", "500g orez uscat sau 3kg cartofi"],
      ["Salata, castraveti, rosii", "2.5kg"],
      ["Cottage cheese sau branza slaba", "1kg"],
      ["Lipii mari integrale", "5 bucati"],
      ["Oua", "10 bucati"],
      ["Ton in conserva", "3 conserve"],
      ["Lamai, mustar, muraturi", "1 set mic"]
    ],
    replacementRules: standardReplacementRules
  },
  emergency: {
    presetId: "emergency",
    label: "Emergency restock",
    summary: "Emergency restock",
    days: 0,
    servings: 0,
    ingredientQuantities: [
      ["Skyr sau iaurt grecesc 2%", "1kg"],
      ["Cottage cheese sau branza slaba", "600g"],
      ["Oua", "10 bucati"],
      ["Ton in conserva", "4 conserve"],
      ["Lipii mari integrale", "6 bucati"],
      ["Cartofi", "2kg"],
      ["Fructe usor de mancat", "6 portii"],
      ["Legume congelate simple", "1kg"],
      ["Castraveti, rosii, muraturi", "1 set mic"]
    ],
    replacementRules: standardReplacementRules
  }
};

const weeklyFoodPlans = {
  0: {
    title: "Sunday prep day",
    note: "Cook once for the first part of the week. Three planned meals; night rescue stays optional.",
    prepItems: [
      "Cook chicken and potatoes for 2 pui bowls.",
      "Make 2 tiramisu oat jars.",
      "Portion 2 yogurt snack bowls without granola.",
      "Wash salad, cucumbers, tomatoes, and fruit."
    ],
    meals: [
      {
        time: "12:00",
        kind: "First meal",
        title: "Tiramisu oats + skyr",
        recipeId: "ovaz-tiramisu",
        calorieEstimate: 680,
        proteinEstimate: 55,
        note: "Sweet enough to calm cravings without turning into dessert.",
        addOns: ["Skyr or whey for the protein target", "Berries or banana"]
      },
      {
        time: "16:00",
        kind: "Anti-craving snack",
        title: "Protein yogurt fruit bowl",
        recipeId: "iaurt-fructe-bol",
        calorieEstimate: 380,
        proteinEstimate: 35,
        note: "Eat it before the craving window peaks.",
        addOns: ["Keep granola measured", "Tea, water, or coffee only after food"]
      },
      {
        time: "19:30",
        kind: "Dinner",
        title: "Chicken, potato, yogurt-mustard bowl",
        recipeId: "pui-iaurt-mustar",
        calorieEstimate: 1050,
        proteinEstimate: 80,
        note: "Make two portions if Monday lunch is not ready.",
        addOns: ["Extra potatoes or rice if training hunger is high", "Salad on the side"]
      }
    ]
  },
  1: {
    title: "Monday strength day",
    note: "Lunch and snack should be ready before work. Dinner is bigger after training.",
    prepItems: [
      "Pack chicken bowl and yogurt snack before leaving.",
      "Keep dinner ingredients visible in the fridge.",
      "If lunch is missing, cook tagliatelle with tuna in 15 minutes."
    ],
    meals: [
      {
        time: "12:00",
        kind: "Work lunch",
        title: "Chicken potato work bowl",
        recipeId: "pui-iaurt-mustar",
        calorieEstimate: 760,
        proteinEstimate: 65,
        note: "Sauce separate if packed.",
        addOns: ["Use the cooked chicken and potatoes from prep", "Cucumber or tomatoes"]
      },
      {
        time: "16:00",
        kind: "Anti-craving snack",
        title: "Protein yogurt fruit bowl",
        recipeId: "iaurt-fructe-bol",
        calorieEstimate: 380,
        proteinEstimate: 35,
        note: "This protects dinner from becoming a food order.",
        addOns: ["Measured granola", "Fruit"]
      },
      {
        time: "19:30",
        kind: "Post-gym dinner",
        title: "Creamy chicken wrap plate",
        recipeId: "wrap-pui-cremos",
        calorieEstimate: 1050,
        proteinEstimate: 75,
        note: "Plate it with extra vegetables and potatoes if needed.",
        addOns: ["Extra potatoes or rice", "Pickles or salad"]
      }
    ]
  },
  2: {
    title: "Tuesday posture day",
    note: "Keep it portable and simple. No extra restaurant decision needed.",
    prepItems: [
      "Pack tuna pasta or a chicken bowl.",
      "Put the snack at eye level.",
      "If digestion is noisy, choose zucchini/peppers over broccoli."
    ],
    meals: [
      {
        time: "12:00",
        kind: "Work lunch",
        title: "Tagliatelle with tuna + salad",
        recipeId: "tagliatelle-ton",
        calorieEstimate: 720,
        proteinEstimate: 60,
        note: "Fast lunch with a protein top-up if needed.",
        addOns: ["Skyr or cottage cheese if protein is short", "Simple salad"]
      },
      {
        time: "16:00",
        kind: "Anti-craving snack",
        title: "Protein yogurt fruit bowl",
        recipeId: "iaurt-fructe-bol",
        calorieEstimate: 360,
        proteinEstimate: 32,
        note: "Keep the snack planned, not improvised.",
        addOns: ["Berries", "Measured granola"]
      },
      {
        time: "19:30",
        kind: "Dinner",
        title: "Beef, sweet potato, easy veg bowl",
        recipeId: "vita-cartof-dulce",
        calorieEstimate: 1050,
        proteinEstimate: 75,
        note: "Cook two portions if Wednesday lunch is not ready.",
        addOns: ["Extra lean beef or yogurt sauce", "Zucchini or peppers"]
      }
    ]
  },
  3: {
    title: "Wednesday rest day",
    note: "No fasting compensation. Keep the same structure and use boring food.",
    prepItems: [
      "Check Thursday lunch before dinner.",
      "Restock yogurt, fruit, and tuna if they are low.",
      "Keep night rescue separate from planned meals."
    ],
    meals: [
      {
        time: "12:00",
        kind: "First meal",
        title: "Skyr bowl",
        recipeId: "skyr-bowl",
        calorieEstimate: 700,
        proteinEstimate: 60,
        note: "Simple cold meal, no cooking required.",
        addOns: ["Whey if protein is short", "Berries over banana if cravings are loud"]
      },
      {
        time: "16:00",
        kind: "Anti-craving snack",
        title: "Protein snack",
        recipeId: "protein-snack",
        calorieEstimate: 360,
        proteinEstimate: 35,
        note: "Eat before coffee if cravings are high.",
        addOns: ["Apple or berries", "Cinnamon or cocoa"]
      },
      {
        time: "19:30",
        kind: "Dinner",
        title: "Tuna potato bowl",
        recipeId: "tuna-potato-bowl",
        calorieEstimate: 1050,
        proteinEstimate: 75,
        note: "A low-cook dinner for the middle of the week.",
        addOns: ["Extra potatoes for fullness", "Pickles, cucumber, or tomatoes"]
      }
    ]
  },
  4: {
    title: "Thursday strength day",
    note: "Lunch is steady, snack is non-negotiable, dinner is the reward structure.",
    prepItems: [
      "Pack lunch and snack before work.",
      "Keep wrap or pizza-pocket ingredients ready.",
      "Add carbs after training instead of grazing at night."
    ],
    meals: [
      {
        time: "12:00",
        kind: "Work lunch",
        title: "Chicken rice bowl",
        recipeId: "chicken-rice-bowl",
        calorieEstimate: 800,
        proteinEstimate: 70,
        note: "Default gym-day lunch.",
        addOns: ["Cooked rice or potatoes", "Yogurt sauce"]
      },
      {
        time: "16:00",
        kind: "Anti-craving snack",
        title: "Protein yogurt fruit bowl",
        recipeId: "iaurt-fructe-bol",
        calorieEstimate: 380,
        proteinEstimate: 35,
        note: "This is part of the plan, not a bonus.",
        addOns: ["Granola measured before eating", "Fruit"]
      },
      {
        time: "19:30",
        kind: "Post-gym dinner",
        title: "Pizza-pocket chicken plate",
        recipeId: "pizza-pocket-pui",
        calorieEstimate: 980,
        proteinEstimate: 70,
        note: "Use when the pizza craving is loud.",
        addOns: ["Potatoes or rice on the side", "Large salad"]
      }
    ]
  },
  5: {
    title: "Friday simple close",
    note: "Finish the week without ordering by using pantry-friendly meals.",
    prepItems: [
      "Use remaining cooked chicken or tuna.",
      "Check weekend shopping gaps.",
      "Choose the dinner before 17:00."
    ],
    meals: [
      {
        time: "12:00",
        kind: "Work lunch",
        title: "Tagliatelle with tuna + protein side",
        recipeId: "tagliatelle-ton",
        calorieEstimate: 760,
        proteinEstimate: 65,
        note: "Pantry lunch that still fits the plan.",
        addOns: ["Skyr or cottage cheese side", "Cucumber or salad"]
      },
      {
        time: "16:00",
        kind: "Anti-craving snack",
        title: "Protein snack",
        recipeId: "protein-snack",
        calorieEstimate: 350,
        proteinEstimate: 32,
        note: "Keeps Friday dinner from drifting.",
        addOns: ["Fruit", "Tea or sparkling water"]
      },
      {
        time: "19:30",
        kind: "Dinner",
        title: "Chicken potato bowl",
        recipeId: "pui-iaurt-mustar",
        calorieEstimate: 1000,
        proteinEstimate: 75,
        note: "Repeat the easy thing. The win is not novelty.",
        addOns: ["Extra potatoes if hunger is real", "Salad"]
      }
    ]
  },
  6: {
    title: "Saturday circuit day",
    note: "Flexible day, still planned. Cook one batch if Sunday will be busy.",
    prepItems: [
      "Cook beef bowl or chicken bowl if the fridge is empty.",
      "Make one oat jar for Sunday.",
      "Restock fruit and yogurt."
    ],
    meals: [
      {
        time: "12:00",
        kind: "First meal",
        title: "Tiramisu oats + skyr",
        recipeId: "ovaz-tiramisu",
        calorieEstimate: 680,
        proteinEstimate: 55,
        note: "Good first meal before or after the easy circuit.",
        addOns: ["Whey or skyr", "Berries"]
      },
      {
        time: "16:00",
        kind: "Anti-craving snack",
        title: "Protein yogurt fruit bowl",
        recipeId: "iaurt-fructe-bol",
        calorieEstimate: 380,
        proteinEstimate: 35,
        note: "Keep Saturday from turning into grazing.",
        addOns: ["Measured granola", "Fruit"]
      },
      {
        time: "19:30",
        kind: "Dinner",
        title: "Beef, sweet potato, easy veg bowl",
        recipeId: "vita-cartof-dulce",
        calorieEstimate: 1050,
        proteinEstimate: 75,
        note: "Batch-friendly dinner for the weekend.",
        addOns: ["Extra vegetables", "Yogurt sauce if needed"]
      }
    ]
  }
};

const state = {
  view: localStorage.getItem("gym:view") || "gym",
  day: pickInitialDay(),
  foodPreset: localStorage.getItem("gym:foodPreset") || "weekdays5",
  foodDayOffset: Number(localStorage.getItem("gym:foodDayOffset") || 0),
  selectedFoodMealIndex: Number(localStorage.getItem("gym:selectedFoodMealIndex") || 0),
  recommendedGymDay: "monday",
  recommendedFoodMealId: "skyr-bowl",
  recommendedFoodMealIndex: 0,
  recommendedFoodPreset: "weekdays5",
  recommendedFoodAnchor: "meal",
  selectedRotationId: localStorage.getItem("gym:selectedRotation") || "",
  userPickedDay: false,
  userPickedFoodPlan: false,
  restSeconds: 0,
  restRemaining: 0,
  restTimerId: null,
  sessionStart: Date.now()
};

const gymView = document.querySelector("#gymView");
const foodView = document.querySelector("#foodView");
const viewTabs = [...document.querySelectorAll("[data-view]")];
const currentStamp = document.querySelector("#currentStamp");
const gymRecommendationTitle = document.querySelector("#gymRecommendationTitle");
const gymRecommendationBody = document.querySelector("#gymRecommendationBody");
const foodRecommendationTitle = document.querySelector("#foodRecommendationTitle");
const foodRecommendationBody = document.querySelector("#foodRecommendationBody");
const showGymRecommendation = document.querySelector("#showGymRecommendation");
const showFoodRecommendation = document.querySelector("#showFoodRecommendation");
const list = document.querySelector("#exerciseList");
const tabs = [...document.querySelectorAll("[data-day]")];
const title = document.querySelector("#sessionTitle");
const focus = document.querySelector("#sessionFocus");
const elapsedTime = document.querySelector("#elapsedTime");
const restTime = document.querySelector("#restTime");
const startPauseRest = document.querySelector("#startPauseRest");
const painMessage = document.querySelector("#painMessage");
const foodCalendar = document.querySelector("#foodCalendar");
const foodMissionPanel = document.querySelector("#foodMissionPanel");
const foodMissionTime = document.querySelector("#foodMissionTime");
const foodMissionTitle = document.querySelector("#foodMissionTitle");
const foodMissionBody = document.querySelector("#foodMissionBody");
const foodMissionActions = document.querySelector("#foodMissionActions");
const foodDayPanel = document.querySelector("#foodDayPanel");
const foodDayMeta = document.querySelector("#foodDayMeta");
const foodDayTitle = document.querySelector("#foodDayTitle");
const foodDayNote = document.querySelector("#foodDayNote");
const foodDayTotals = document.querySelector("#foodDayTotals");
const foodMealList = document.querySelector("#foodMealList");
const recipeDetailPanel = document.querySelector("#recipeDetailPanel");
const prepList = document.querySelector("#prepList");
const presetSummary = document.querySelector("#presetSummary");
const sezamoPrompt = document.querySelector("#sezamoPrompt");
const copyPrompt = document.querySelector("#copyPrompt");
const copyStatus = document.querySelector("#copyStatus");
const prepPanel = document.querySelector("#prepPanel");

function pickInitialDay() {
  return getGymRecommendation(new Date()).day;
}

function keyFor(day) {
  return `gym:${day}:sets`;
}

function getDone(day) {
  try {
    return JSON.parse(localStorage.getItem(keyFor(day))) || {};
  } catch {
    return {};
  }
}

function setDone(day, done) {
  localStorage.setItem(keyFor(day), JSON.stringify(done));
}

function render() {
  const session = sessions[state.day];
  localStorage.setItem("gym:lastDay", state.day);
  title.textContent = session.title;
  focus.textContent = session.focus;

  tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.day === state.day);
  });

  const done = getDone(state.day);
  list.innerHTML = "";

  session.items.forEach(([id, sets, reps, rest], index) => {
    const exercise = exercises[id];
    const card = document.createElement("article");
    card.className = "exercise-card";
    const videoMarkup = exercise.video
      ? `<video autoplay muted playsinline loop controls preload="auto" src="${exercise.video}?${ASSET_VERSION}"></video>`
      : "";

    const setButtons = Array.from({ length: sets }, (_, setIndex) => {
      const setKey = `${index}-${setIndex}`;
      const isDone = Boolean(done[setKey]);
      return `<button class="set-button ${isDone ? "done" : ""}" type="button" data-index="${index}" data-set="${setIndex}" data-rest="${rest}">Set ${setIndex + 1}</button>`;
    }).join("");

    card.innerHTML = `
      <div class="exercise-main">
        <div class="demo-box">
          ${videoMarkup}
          <div class="demo-figure" aria-hidden="true">
            <span class="limb-a"></span>
            <span class="limb-b"></span>
            <span class="limb-c"></span>
          </div>
          <span class="demo-label">${exercise.cue}</span>
        </div>
        <div class="exercise-copy">
          <h3>${exercise.name}</h3>
          <div class="meta-line">
            <span class="pill">${sets} set${sets > 1 ? "s" : ""}</span>
            <span class="pill">${reps}</span>
            <span class="pill">${rest ? `${rest}s rest` : "easy finish"}</span>
          </div>
          <ul class="cue-list">
            ${exercise.cues.map((cue) => `<li>${cue}</li>`).join("")}
          </ul>
        </div>
      </div>
      <div class="set-row">${setButtons}</div>
    `;

    list.appendChild(card);

    const video = card.querySelector("video");
    if (video) {
      const demoBox = card.querySelector(".demo-box");
      demoBox.classList.add("has-video");

      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => {});
      });
      video.addEventListener("error", () => {
        demoBox.classList.remove("has-video");
      });
    }
  });
}

function renderView() {
  localStorage.setItem("gym:view", state.view);
  viewTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.view === state.view);
  });
  gymView.hidden = state.view !== "gym";
  foodView.hidden = state.view !== "food";
}

function renderFood() {
  const today = new Date();
  const days = getFoodCalendarDays(today);
  state.foodDayOffset = Math.min(Math.max(state.foodDayOffset, 0), days.length - 1);
  const plan = getFoodPlan(days[state.foodDayOffset]);
  state.selectedFoodMealIndex = Math.min(Math.max(state.selectedFoodMealIndex, 0), plan.meals.length - 1);

  localStorage.setItem("gym:foodDayOffset", String(state.foodDayOffset));
  localStorage.setItem("gym:selectedFoodMealIndex", String(state.selectedFoodMealIndex));
  localStorage.setItem("gym:selectedRotation", plan.meals[state.selectedFoodMealIndex].recipeId);

  renderFoodCalendar(days);
  renderFoodMission(getFoodMission(today));
  renderDayPlan(plan);

  prepList.innerHTML = plan.prepItems.map((item) => `<li>${item}</li>`).join("");
  prepPanel.classList.toggle("recommended", plan.date.getDay() === 0 || plan.date.getDay() === 6);
  presetSummary.textContent = `${sezamoConfig.store} / ${sezamoConfig.city} / ${formatPlanDate(plan.date)}`;
  sezamoPrompt.value = generateSezamoPrompt(plan);
}

function getRecipeById(recipeId) {
  return recipeRotations.find((recipe) => recipe.id === recipeId);
}

function getPlanRecipe(recipeId) {
  const rotationRecipe = getRecipeById(recipeId);
  if (rotationRecipe) return rotationRecipe;

  const meal = foodMeals[recipeId];
  if (!meal) return recipeRotations[0];

  return {
    id: meal.id,
    slot: meal.slot,
    title: meal.title,
    role: meal.slot,
    prepMinutes: meal.prepMinutes,
    proteinEstimate: meal.proteinEstimate,
    calorieEstimate: meal.calorieEstimate,
    gasRisk: meal.gasRisk,
    packable: meal.slot !== "dinner",
    batchable: meal.slot === "lunch" || meal.slot === "dinner",
    prepAhead: `${meal.prepMinutes} minute active. Keep it simple and plated.`,
    ingredients: meal.ingredients,
    sezamoIngredients: meal.ingredients,
    steps: meal.instructions,
    storage: "Best fresh; packed components are fine for the same day.",
    note: meal.title
  };
}

function getFoodCalendarDays(baseDate) {
  return Array.from({ length: 7 }, (_, offset) => {
    const date = new Date(baseDate);
    date.setDate(baseDate.getDate() + offset);
    date.setHours(12, 0, 0, 0);
    return date;
  });
}

function getFoodPlan(date) {
  const template = weeklyFoodPlans[date.getDay()];
  const gymSchedule = trainingSchedule.find((item) => item.dayIndex === date.getDay());
  const gymLabel = gymSchedule ? sessions[gymSchedule.day].focus : "Rest day";
  const meals = template.meals.map((meal, index) => ({
    ...meal,
    index,
    recipe: getPlanRecipe(meal.recipeId)
  }));
  const totals = meals.reduce((sum, meal) => ({
    calories: sum.calories + meal.calorieEstimate,
    protein: sum.protein + meal.proteinEstimate
  }), { calories: 0, protein: 0 });

  return {
    ...template,
    date,
    gymLabel,
    meals,
    totals
  };
}

function getMealIngredients(meal) {
  return [...meal.recipe.ingredients];
}

function formatPlanDate(date) {
  return new Intl.DateTimeFormat(navigator.language || "en", {
    weekday: "short",
    month: "short",
    day: "numeric"
  }).format(date);
}

function renderFoodCalendar(days) {
  foodCalendar.innerHTML = days.map((date, offset) => {
    const plan = getFoodPlan(date);
    const isActive = offset === state.foodDayOffset;
    const label = offset === 0 ? "Today" : new Intl.DateTimeFormat(navigator.language || "en", { weekday: "short" }).format(date);

    return `
      <button type="button" class="${isActive ? "active" : ""}" data-food-day-offset="${offset}">
        <span>${label}</span>
        <strong>${date.getDate()}</strong>
        <small>${plan.totals.calories} kcal / ${plan.totals.protein}g</small>
        <em>${plan.gymLabel}</em>
      </button>
    `;
  }).join("");
}

function renderFoodMission(mission) {
  foodMissionPanel.classList.toggle("recommended", true);
  foodMissionTime.textContent = `${formatCurrentStamp(mission.date)} / ${mission.badge}`;
  foodMissionTitle.textContent = mission.title;
  foodMissionBody.textContent = mission.body;
  foodMissionActions.innerHTML = mission.actions.map((action) => {
    const dayAttribute = Number.isInteger(action.dayOffset) ? ` data-day-offset="${action.dayOffset}"` : "";
    const mealAttribute = Number.isInteger(action.mealIndex) ? ` data-meal-index="${action.mealIndex}"` : "";
    const anchorAttribute = action.anchor ? ` data-anchor="${action.anchor}"` : "";
    return `<button type="button" class="mission-action" data-mission-action="${action.kind}"${dayAttribute}${mealAttribute}${anchorAttribute}>${action.label}</button>`;
  }).join("");
}

function renderDayPlan(plan) {
  foodDayMeta.textContent = `${formatPlanDate(plan.date)} / ${plan.gymLabel}`;
  foodDayTitle.textContent = plan.title;
  foodDayNote.textContent = plan.note;
  foodDayTotals.innerHTML = `
    <span><strong>${plan.totals.calories}</strong><small>kcal</small></span>
    <span><strong>${plan.totals.protein}g</strong><small>protein</small></span>
  `;
  foodMealList.innerHTML = plan.meals.map((meal) => renderMealCard(meal)).join("");
  renderRecipeDetail(plan.meals[state.selectedFoodMealIndex]);
}

function renderMealCard(meal) {
  const selected = meal.index === state.selectedFoodMealIndex;
  const ingredients = getMealIngredients(meal).slice(0, 4);
  return `
    <article class="meal-card ${selected ? "selected recommended" : ""}">
      <div class="meal-topline">
        <span class="meal-time">${meal.time} / ${meal.kind}</span>
        <span class="meal-stats">${meal.calorieEstimate} kcal / ${meal.proteinEstimate}g protein</span>
      </div>
      <h4>${meal.title}</h4>
      <p class="panel-note">${meal.note}</p>
      <ul class="meal-details">
        ${ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
      </ul>
      <button type="button" class="cook-button" data-meal-index="${meal.index}">
        ${selected ? "Cooking this" : "Cook this"}
      </button>
    </article>
  `;
}

function renderRecipeDetail(meal) {
  const recipe = meal.recipe;
  const ingredients = getMealIngredients(meal);
  recipeDetailPanel.innerHTML = `
    <div class="recipe-detail-head">
      <div>
        <p class="eyebrow">${meal.time} / ${meal.kind}</p>
        <h4>${meal.title}</h4>
        <p class="panel-note">${recipe.prepAhead}</p>
      </div>
      <div class="recipe-total">
        <strong>${meal.calorieEstimate}</strong>
        <small>kcal</small>
      </div>
    </div>
    <div class="meta-line">
      <span class="pill">${recipe.prepMinutes} min</span>
      <span class="pill">${meal.proteinEstimate}g protein</span>
      <span class="pill">gas ${recipe.gasRisk}</span>
    </div>
    <div class="cook-grid">
      <section>
        <h5>Ingredients</h5>
        <ul class="cook-list">
          ${ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
        </ul>
      </section>
      <section>
        <h5>Recipe</h5>
        <ol class="cook-list">
          ${recipe.steps.map((step) => `<li>${step}</li>`).join("")}
        </ol>
      </section>
    </div>
    ${meal.addOns ? `
      <section class="portion-notes">
        <h5>Portion notes</h5>
        <ul class="cook-list">
          ${meal.addOns.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>
    ` : ""}
    <p class="cook-storage">${recipe.storage}</p>
  `;
}

function getMinuteOfDay(date) {
  return date.getHours() * 60 + date.getMinutes();
}

function getDayDistance(fromDayIndex, toDayIndex) {
  return (toDayIndex - fromDayIndex + 7) % 7;
}

function getGymRecommendation(date) {
  const currentDayIndex = date.getDay();
  const minute = getMinuteOfDay(date);

  for (let offset = 0; offset <= 7; offset += 1) {
    const dayIndex = (currentDayIndex + offset) % 7;
    const scheduled = trainingSchedule.find((item) => item.dayIndex === dayIndex);
    if (!scheduled) continue;
    if (offset === 0 && minute > sessionCutoffMinute) continue;

    const session = sessions[scheduled.day];
    return {
      day: scheduled.day,
      title: offset === 0 ? `Today: ${session.focus}` : `${session.title}: ${session.focus}`,
      body: offset === 0 ? "Open this before the gym." : `Next gym day in ${offset} day${offset === 1 ? "" : "s"}.`,
      daysAway: offset
    };
  }

  return {
    day: "monday",
    title: "Monday: Strength A",
    body: "Next gym day.",
    daysAway: getDayDistance(currentDayIndex, 1)
  };
}

function isWorkday(dayIndex) {
  return dayIndex >= 1 && dayIndex <= 5;
}

function isWeekend(dayIndex) {
  return dayIndex === 0 || dayIndex === 6;
}

function getRecommendedMealIndex(date) {
  const minute = getMinuteOfDay(date);

  for (const slot of foodSlots) {
    if (minute < slot.end) return slot.mealIndex;
  }

  return foodSlots[foodSlots.length - 1].mealIndex;
}

function getFoodMission(date) {
  const minute = getMinuteOfDay(date);
  const dayOffset = minute >= 21 * 60 + 30 ? 1 : 0;
  const missionDate = new Date(date);
  missionDate.setDate(date.getDate() + dayOffset);
  const plan = getFoodPlan(missionDate);
  const mealIndex = dayOffset ? 0 : getRecommendedMealIndex(date);
  const meal = plan.meals[mealIndex];
  const isSnack = meal.kind.includes("Anti-craving");
  const isWeekendCook = isWeekend(date.getDay()) && minute < 18 * 60;
  const isNight = minute >= 21 * 60 + 30;
  const badge = isNight ? "Tomorrow ready" : isSnack ? "Craving window" : isWeekendCook ? "Weekend plan" : "Next meal";
  const title = isNight ? `Tomorrow: ${meal.title}` : `Next: ${meal.title}`;
  const body = isNight
    ? "Kitchen closes now. Tomorrow's meals are already mapped, so there is no need to over-fast or improvise."
    : isSnack
      ? "This is the 15:00-17:00 protection meal. Eat it before coffee, delivery browsing, or random snacks."
      : `${plan.totals.calories} kcal and ${plan.totals.protein}g protein planned for ${formatPlanDate(plan.date)}. Open the recipe and cook only what is on this day.`;

  return {
    date,
    type: isNight ? "tomorrow-ready" : isSnack ? "craving-window" : "next-meal",
    badge,
    title,
    body,
    mealId: meal.recipeId,
    mealIndex,
    dayOffset,
    presetId: "day1",
    anchor: "recipe",
    recipeIds: [meal.recipeId],
    actions: [
      { label: "Start recipe", kind: "meal", dayOffset, mealIndex, anchor: "recipe" }
    ]
  };
}

function getFoodRecommendation(date) {
  const mission = getFoodMission(date);

  return {
    title: mission.title,
    body: mission.body,
    mealId: mission.mealId,
    mealIndex: mission.mealIndex,
    dayOffset: mission.dayOffset,
    presetId: mission.presetId,
    anchor: mission.anchor,
    recipeIds: mission.recipeIds
  };
}

function formatCurrentStamp(date) {
  return new Intl.DateTimeFormat(navigator.language || "en", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(date);
}

function syncRecommendations({ forceDay = false, redraw = true } = {}) {
  const now = new Date();
  const gymRecommendation = getGymRecommendation(now);
  const foodRecommendation = getFoodRecommendation(now);

  state.recommendedGymDay = gymRecommendation.day;
  state.recommendedFoodMealId = foodRecommendation.mealId;
  state.recommendedFoodMealIndex = foodRecommendation.mealIndex;
  state.recommendedFoodPreset = foodRecommendation.presetId;
  state.recommendedFoodAnchor = foodRecommendation.anchor;

  currentStamp.textContent = formatCurrentStamp(now);
  gymRecommendationTitle.textContent = gymRecommendation.title;
  gymRecommendationBody.textContent = gymRecommendation.body;
  foodRecommendationTitle.textContent = foodRecommendation.title;
  foodRecommendationBody.textContent = foodRecommendation.body;

  const shouldSetDay = forceDay || !state.userPickedDay;
  const shouldRenderGym = shouldSetDay && state.day !== gymRecommendation.day;
  if (shouldRenderGym) {
    state.day = gymRecommendation.day;
  }
  if (!state.userPickedFoodPlan) {
    state.foodDayOffset = foodRecommendation.dayOffset || 0;
    state.selectedFoodMealIndex = foodRecommendation.mealIndex || 0;
  }
  if (redraw) {
    if (shouldRenderGym) render();
    renderFood();
  }
}

function openGymRecommendation() {
  state.view = "gym";
  state.day = state.recommendedGymDay;
  state.userPickedDay = false;
  render();
  renderView();
  document.querySelector("#gymView").scrollIntoView({ block: "start" });
}

function openFoodRecommendation() {
  state.view = "food";
  state.foodDayOffset = 0;
  state.selectedFoodMealIndex = state.recommendedFoodMealIndex || 0;
  state.userPickedFoodPlan = false;
  renderFood();
  renderView();
  scrollToFoodAnchor(state.recommendedFoodAnchor);
}

function getFoodAnchorTarget(anchor) {
  if (anchor === "prep") return prepPanel;
  if (anchor === "recipe") return recipeDetailPanel;
  if (anchor === "mission") return foodMissionPanel;
  if (anchor === "sezamo") return sezamoPrompt;
  return foodDayPanel;
}

function scrollToFoodAnchor(anchor) {
  const target = getFoodAnchorTarget(anchor);
  if (target) target.scrollIntoView({ block: "start" });
}

function selectRecipe(recipeId, { toggle = false, scroll = false } = {}) {
  if (!getRecipeById(recipeId)) return;
  state.selectedRotationId = toggle && state.selectedRotationId === recipeId ? "" : recipeId;
  renderFood();
  if (scroll) requestAnimationFrame(() => scrollToFoodAnchor("recipe"));
}

function handleFoodMissionAction(event) {
  const button = event.target.closest("[data-mission-action]");
  if (!button) return;

  if (button.dataset.missionAction === "meal") {
    state.foodDayOffset = Number(button.dataset.dayOffset || 0);
    state.selectedFoodMealIndex = Number(button.dataset.mealIndex || 0);
    state.userPickedFoodPlan = false;
    renderFood();
    requestAnimationFrame(() => scrollToFoodAnchor(button.dataset.anchor || "recipe"));
    return;
  }

  if (button.dataset.missionAction === "recipe") {
    selectRecipe(button.dataset.recipe, { scroll: true });
    return;
  }

  if (button.dataset.missionAction === "preset") {
    state.foodPreset = button.dataset.preset || state.foodPreset;
    renderFood();
    requestAnimationFrame(() => scrollToFoodAnchor(button.dataset.anchor || "sezamo"));
    return;
  }

  scrollToFoodAnchor(button.dataset.anchor || "meal");
}

function generateSezamoPrompt(plan) {
  const lines = [
    `Pregateste un cos pe ${sezamoConfig.store} pentru ${formatPlanDate(plan.date)}.`,
    `Zona de livrare: ${sezamoConfig.city}, ${sezamoConfig.country}.`,
    `Daca folosesti MCP, endpointul corect este ${sezamoConfig.mcpEndpoint}.`,
    `Nu folosi ${sezamoConfig.forbiddenStores.join(", ")}.`,
    `Obiectiv pentru zi: aproximativ ${plan.totals.calories} kcal si ${plan.totals.protein}g proteina.`,
    "Adauga doar ingrediente de baza pentru gatit acasa, pentru mesele de mai jos.",
    "",
    "Mese:"
  ];

  plan.meals.forEach((meal) => {
    lines.push(`- ${meal.time} ${meal.title}: ${meal.calorieEstimate} kcal, ${meal.proteinEstimate}g proteina.`);
  });

  lines.push("", "Ingrediente de verificat/adaugat:");
  plan.meals.forEach((meal) => {
    const recipe = meal.recipe;
    const ingredients = recipe.sezamoIngredients || recipe.ingredients;
    lines.push(`- ${meal.title}: ${ingredients.join(", ")}.`);
  });

  lines.push("", "Reguli:");
  standardReplacementRules.forEach((rule) => {
    lines.push(`- ${rule}`);
  });

  return lines.join("\n");
}

async function copySezamoPrompt() {
  const text = sezamoPrompt.value;
  try {
    await navigator.clipboard.writeText(text);
    copyStatus.textContent = "Copied";
    return;
  } catch {
    sezamoPrompt.focus();
    sezamoPrompt.select();
  }

  try {
    const copied = document.execCommand("copy");
    copyStatus.textContent = copied ? "Copied" : "Select and copy";
  } catch {
    copyStatus.textContent = "Select and copy";
  }
}

function formatTime(totalSeconds) {
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function updateElapsed() {
  elapsedTime.textContent = formatTime(Math.floor((Date.now() - state.sessionStart) / 1000));
}

function setRest(seconds) {
  clearInterval(state.restTimerId);
  state.restSeconds = Math.max(0, seconds);
  state.restRemaining = state.restSeconds;
  restTime.textContent = state.restRemaining ? formatTime(state.restRemaining) : "Ready";
  startPauseRest.textContent = state.restRemaining ? "Pause" : "Start";

  if (state.restRemaining > 0) {
    state.restTimerId = setInterval(tickRest, 1000);
  }
}

function tickRest() {
  state.restRemaining -= 1;
  restTime.textContent = formatTime(Math.max(0, state.restRemaining));

  if (state.restRemaining <= 0) {
    clearInterval(state.restTimerId);
    startPauseRest.textContent = "Start";
    restTime.textContent = "Next set";
    if ("vibrate" in navigator) navigator.vibrate([180, 90, 180]);
  }
}

function toggleRest() {
  if (!state.restRemaining) {
    setRest(state.restSeconds || 60);
    return;
  }

  if (state.restTimerId) {
    clearInterval(state.restTimerId);
    state.restTimerId = null;
    startPauseRest.textContent = "Start";
  } else {
    state.restTimerId = setInterval(tickRest, 1000);
    startPauseRest.textContent = "Pause";
  }
}

function updatePainMessage() {
  const lumbar = Number(document.querySelector("#lumbarPain").value || 0);
  const neck = Number(document.querySelector("#neckPain").value || 0);
  const radiation = document.querySelector("#radiation").checked;
  const alert = lumbar > 3 || neck > 3 || radiation;

  painMessage.classList.toggle("alert", alert);
  painMessage.textContent = alert
    ? "Use the fallback session today. Keep it easy and leave early."
    : "Start with the planned session if symptoms are local and 3/10 or lower.";
}

viewTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    state.view = tab.dataset.view;
    renderView();
  });
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    state.userPickedDay = true;
    state.day = tab.dataset.day;
    render();
  });
});

list.addEventListener("click", (event) => {
  const button = event.target.closest(".set-button");
  if (!button) return;

  const done = getDone(state.day);
  const key = `${button.dataset.index}-${button.dataset.set}`;
  done[key] = !done[key];
  setDone(state.day, done);
  button.classList.toggle("done", done[key]);

  const rest = Number(button.dataset.rest || 0);
  if (done[key] && rest > 0) setRest(rest);
});

document.querySelector("#resetDay").addEventListener("click", () => {
  localStorage.removeItem(keyFor(state.day));
  render();
});

document.querySelector("#minusRest").addEventListener("click", () => {
  setRest(Math.max(0, state.restRemaining - 15));
});

document.querySelector("#plusRest").addEventListener("click", () => {
  setRest((state.restRemaining || state.restSeconds || 60) + 15);
});

startPauseRest.addEventListener("click", toggleRest);

["#lumbarPain", "#neckPain", "#radiation"].forEach((selector) => {
  document.querySelector(selector).addEventListener("input", updatePainMessage);
  document.querySelector(selector).addEventListener("change", updatePainMessage);
});

foodCalendar.addEventListener("click", (event) => {
  const button = event.target.closest("[data-food-day-offset]");
  if (!button) return;
  state.foodDayOffset = Number(button.dataset.foodDayOffset || 0);
  state.selectedFoodMealIndex = 0;
  state.userPickedFoodPlan = true;
  renderFood();
  requestAnimationFrame(() => scrollToFoodAnchor("meal"));
});

foodMealList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-meal-index]");
  if (!button) return;
  state.selectedFoodMealIndex = Number(button.dataset.mealIndex || 0);
  state.userPickedFoodPlan = true;
  renderFood();
  requestAnimationFrame(() => scrollToFoodAnchor("recipe"));
});

foodMissionActions.addEventListener("click", handleFoodMissionAction);

showGymRecommendation.addEventListener("click", openGymRecommendation);
showFoodRecommendation.addEventListener("click", openFoodRecommendation);
copyPrompt.addEventListener("click", copySezamoPrompt);

window.addEventListener("focus", () => {
  state.userPickedDay = false;
  syncRecommendations({ forceDay: true });
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState !== "visible") return;
  state.userPickedDay = false;
  syncRecommendations({ forceDay: true });
});

setInterval(updateElapsed, 1000);
setInterval(() => syncRecommendations(), 60 * 1000);
syncRecommendations({ forceDay: true, redraw: false });
render();
renderFood();
renderView();
updateElapsed();
updatePainMessage();

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}
