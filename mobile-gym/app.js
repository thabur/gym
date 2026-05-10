const ASSET_VERSION = "v=10";

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
  { start: 10 * 60 + 30, end: 12 * 60 + 30, mealId: "skyr-bowl" },
  { start: 12 * 60 + 30, end: 15 * 60 + 30, mealId: "chicken-rice-bowl" },
  { start: 15 * 60 + 30, end: 17 * 60 + 30, mealId: "protein-snack" },
  { start: 17 * 60 + 30, end: 20 * 60 + 30, mealId: "chicken-wrap" },
  { start: 20 * 60 + 30, end: 22 * 60, mealId: "closing-yogurt" }
];

const recipeRotations = [
  {
    id: "tagliatelle-ton",
    slot: "lunch",
    title: "Tagliatelle cu ton",
    prepMinutes: 15,
    proteinEstimate: 32,
    calorieEstimate: 300,
    gasRisk: "low",
    baseIngredients: ["ton in suc propriu", "paste integrale", "sos de rosii", "baby spanac"],
    note: "Fast lunch; add salad if hunger is high."
  },
  {
    id: "pizza-pocket-pui",
    slot: "dinner",
    title: "Buzunar de pizza cu pui",
    prepMinutes: 25,
    proteinEstimate: 32,
    calorieEstimate: 286,
    gasRisk: "medium",
    baseIngredients: ["carne tocata din piept de pui", "mozzarella light", "pasta de rosii", "oregano"],
    note: "Use when cravings want pizza; keep it plated."
  },
  {
    id: "vita-cartof-dulce",
    slot: "lunch",
    title: "Bol cu vita, cartof dulce si legume",
    prepMinutes: 30,
    proteinEstimate: 37,
    calorieEstimate: 358,
    gasRisk: "medium",
    baseIngredients: ["vita slaba tocata", "cartof dulce", "morcov", "legume usoare"],
    note: "Swap broccoli for zucchini or peppers if gas is high."
  },
  {
    id: "pui-iaurt-mustar",
    slot: "dinner",
    title: "Bol cu pui, iaurt si mustar",
    prepMinutes: 30,
    proteinEstimate: 25,
    calorieEstimate: 279,
    gasRisk: "low",
    baseIngredients: ["piept de pui", "cartofi", "iaurt 2% sau fara lactoza", "mustar", "salata"],
    note: "Closest fit to the default plan."
  },
  {
    id: "wrap-pui-cremos",
    slot: "dinner",
    title: "Wrap cu pui cremos",
    prepMinutes: 30,
    proteinEstimate: 29,
    calorieEstimate: 311,
    gasRisk: "medium",
    baseIngredients: ["piept de pui", "lipii integrale", "crema de branza light", "mozzarella light"],
    note: "Ask for garlic-free swaps if digestion is noisy."
  },
  {
    id: "salata-calda-pui",
    slot: "lunch",
    title: "Salata calda cu pui si porumb",
    prepMinutes: 20,
    proteinEstimate: 21,
    calorieEstimate: 191,
    gasRisk: "medium",
    baseIngredients: ["piept de pui", "porumb", "varza sau salata", "iaurt", "lime"],
    note: "Add rice or potatoes after gym days."
  },
  {
    id: "ovaz-tiramisu",
    slot: "firstMeal",
    title: "Terci de ovaz tiramisu",
    prepMinutes: 10,
    proteinEstimate: 25,
    calorieEstimate: 304,
    gasRisk: "low",
    baseIngredients: ["fulgi de ovaz", "iaurt grecesc 2% sau fara lactoza", "lapte 1.5%", "cafea", "cacao"],
    note: "Good first meal when sweet cravings are loud."
  },
  {
    id: "iaurt-fructe-bol",
    slot: "snack",
    title: "Bol proteic cu iaurt si fructe",
    prepMinutes: 10,
    proteinEstimate: 23,
    calorieEstimate: 428,
    gasRisk: "low",
    baseIngredients: ["iaurt grecesc", "afine", "granola", "seminte chia"],
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

const state = {
  view: localStorage.getItem("gym:view") || "gym",
  day: pickInitialDay(),
  foodPreset: localStorage.getItem("gym:foodPreset") || "weekdays5",
  recommendedGymDay: "monday",
  recommendedFoodMealId: "skyr-bowl",
  recommendedFoodPreset: "weekdays5",
  recommendedFoodAnchor: "meal",
  selectedRotationId: localStorage.getItem("gym:selectedRotation") || "",
  userPickedDay: false,
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
const foodPresetTabs = [...document.querySelectorAll("[data-food-preset]")];
const foodMealList = document.querySelector("#foodMealList");
const recipeRotationList = document.querySelector("#recipeRotationList");
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
  const preset = shoppingPresets[state.foodPreset] || shoppingPresets.weekdays5;
  localStorage.setItem("gym:foodPreset", preset.presetId);
  localStorage.setItem("gym:selectedRotation", state.selectedRotationId);

  foodPresetTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.foodPreset === preset.presetId);
  });

  foodMealList.innerHTML = "";
  defaultMealIds.forEach((id) => {
    const meal = foodMeals[id];
    const card = document.createElement("article");
    card.className = "meal-card";
    card.classList.toggle("recommended", meal.id === state.recommendedFoodMealId);
    card.innerHTML = `
      <div class="meal-topline">
        <span class="meal-time">${foodSlotLabels[meal.slot]}</span>
        <span class="meal-stats">${meal.prepMinutes} min / ${meal.proteinEstimate}g protein</span>
      </div>
      <h4>${meal.title}</h4>
      <div class="meta-line">
        <span class="pill">${meal.calorieEstimate} kcal</span>
        <span class="pill">gas ${meal.gasRisk}</span>
      </div>
      <ul class="meal-details">
        ${meal.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
      </ul>
      <ol class="meal-steps">
        ${meal.instructions.map((step) => `<li>${step}</li>`).join("")}
      </ol>
    `;
    foodMealList.appendChild(card);
  });

  renderRecipeRotations();
  prepList.innerHTML = prepItems.map((item) => `<li>${item}</li>`).join("");
  prepPanel.classList.toggle("recommended", state.recommendedFoodAnchor === "prep");
  presetSummary.textContent = `${sezamoConfig.store} / ${sezamoConfig.city} / ${preset.summary}`;
  sezamoPrompt.value = generateSezamoPrompt(preset);
}

function renderRecipeRotations() {
  recipeRotationList.innerHTML = "";
  recipeRotations.forEach((recipe) => {
    const card = document.createElement("article");
    card.className = "rotation-card";
    card.classList.toggle("selected", recipe.id === state.selectedRotationId);
    card.innerHTML = `
      <div class="meal-topline">
        <span class="meal-time">${recipe.slot}</span>
        <span class="meal-stats">${recipe.prepMinutes} min / ${recipe.proteinEstimate}g protein</span>
      </div>
      <h4>${recipe.title}</h4>
      <div class="meta-line">
        <span class="pill">${recipe.calorieEstimate} kcal</span>
        <span class="pill">gas ${recipe.gasRisk}</span>
      </div>
      <p>${recipe.note}</p>
      <button type="button" class="rotation-button" data-rotation="${recipe.id}">
        ${recipe.id === state.selectedRotationId ? "Selected" : "Use in cart"}
      </button>
    `;
    recipeRotationList.appendChild(card);
  });
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

function getFoodRecommendation(date) {
  const minute = getMinuteOfDay(date);
  const day = date.getDay();

  if (day === 0 && minute < 18 * 60) {
    return {
      title: "Prep for weekdays",
      body: "Use the 5-weekday cart and prep chicken, carbs, eggs, snacks.",
      mealId: null,
      presetId: "weekdays5",
      anchor: "prep"
    };
  }

  if (minute < foodSlots[0].start) {
    return {
      title: "First meal at 11:00",
      body: "Skyr bowl first; keep coffee away from an empty stomach if cravings spike.",
      mealId: "skyr-bowl",
      presetId: "day1",
      anchor: "meal"
    };
  }

  const activeSlot = foodSlots.find((slot) => minute >= slot.start && minute < slot.end);
  if (activeSlot) {
    const meal = foodMeals[activeSlot.mealId];
    return {
      title: meal.title,
      body: `${foodSlotLabels[meal.slot]} / ${meal.proteinEstimate}g protein / ${meal.prepMinutes} min.`,
      mealId: meal.id,
      presetId: "day1",
      anchor: "meal"
    };
  }

  return {
    title: "Night guard",
    body: "Use the rescue plate only if you are genuinely hungry; no extra fasting tomorrow.",
    mealId: "rescue-plate",
    presetId: "emergency",
    anchor: "meal"
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
  if (forceDay && foodRecommendation.presetId) {
    state.foodPreset = foodRecommendation.presetId;
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
  state.foodPreset = state.recommendedFoodPreset || state.foodPreset;
  renderFood();
  renderView();
  const target = state.recommendedFoodAnchor === "prep" ? prepPanel : foodMealList;
  target.scrollIntoView({ block: "start" });
}

function generateSezamoPrompt(preset) {
  const selectedRotation = recipeRotations.find((recipe) => recipe.id === state.selectedRotationId);
  const lines = [
    `Pregateste un cos pe ${sezamoConfig.store} pentru ${preset.label}.`,
    `Zona de livrare: ${sezamoConfig.city}, ${sezamoConfig.country}.`,
    `Daca folosesti MCP, endpointul corect este ${sezamoConfig.mcpEndpoint}.`,
    `Nu folosi ${sezamoConfig.forbiddenStores.join(", ")}.`,
    "Obiectiv: mese simple pentru slabit, 160-180g proteina pe zi, gatit rapid.",
    "Adauga doar ingrediente de baza pentru gatit acasa.",
    "",
    "Produse si cantitati:"
  ];

  preset.ingredientQuantities.forEach(([item, quantity]) => {
    lines.push(`- ${item}: ${quantity}`);
  });

  if (selectedRotation) {
    lines.push(
      "",
      "Rotatie optionala din PDF-ul meu de retete:",
      `- ${selectedRotation.title}: ${selectedRotation.prepMinutes} min, aproximativ ${selectedRotation.proteinEstimate}g proteina, ${selectedRotation.calorieEstimate} kcal.`,
      `- Ingrediente de baza de adaugat/verificat: ${selectedRotation.baseIngredients.join(", ")}.`,
      "- Nu inventa produse premium daca exista variante simple echivalente."
    );
  }

  lines.push("", "Reguli:");
  preset.replacementRules.forEach((rule) => {
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

foodPresetTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    state.foodPreset = tab.dataset.foodPreset;
    renderFood();
  });
});

recipeRotationList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-rotation]");
  if (!button) return;
  state.selectedRotationId = state.selectedRotationId === button.dataset.rotation ? "" : button.dataset.rotation;
  renderFood();
});

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
