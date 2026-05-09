const ASSET_VERSION = "v=6";

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

const state = {
  day: pickInitialDay(),
  restSeconds: 0,
  restRemaining: 0,
  restTimerId: null,
  sessionStart: Date.now()
};

const list = document.querySelector("#exerciseList");
const tabs = [...document.querySelectorAll("[data-day]")];
const title = document.querySelector("#sessionTitle");
const focus = document.querySelector("#sessionFocus");
const elapsedTime = document.querySelector("#elapsedTime");
const restTime = document.querySelector("#restTime");
const startPauseRest = document.querySelector("#startPauseRest");
const painMessage = document.querySelector("#painMessage");

function pickInitialDay() {
  const day = new Date().getDay();
  if (day === 1) return "monday";
  if (day === 2) return "tuesday";
  if (day === 4) return "thursday";
  if (day === 6) return "saturday";
  return localStorage.getItem("gym:lastDay") || "monday";
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

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
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

setInterval(updateElapsed, 1000);
render();
updateElapsed();
updatePainMessage();

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}
