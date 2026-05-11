const CACHE_NAME = "gym-cockpit-v12";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css?v=12",
  "./app.js?v=12",
  "./manifest.webmanifest?v=12",
  "./icon.svg",
  "./assets/videos/dead-bug.mp4?v=12",
  "./assets/videos/bird-dog.mp4?v=12",
  "./assets/videos/leg-press.mp4?v=12",
  "./assets/videos/row.mp4?v=12",
  "./assets/videos/chest-press.mp4?v=12",
  "./assets/videos/leg-curl.mp4?v=12",
  "./assets/videos/pallof-press.mp4?v=12",
  "./assets/videos/chin-tuck.mp4?v=12",
  "./assets/videos/wall-slide.mp4?v=12",
  "./assets/videos/lat-pulldown.mp4?v=12",
  "./assets/videos/face-pull.mp4?v=12",
  "./assets/videos/hip-abduction.mp4?v=12",
  "./assets/videos/bike-walk.mp4?v=12",
  "./assets/videos/side-plank.mp4?v=12",
  "./assets/videos/hip-thrust.mp4?v=12",
  "./assets/videos/cable-row.mp4?v=12"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
