const VERSION = 1;
const CACHE_NAME = `cache-v${VERSION}`;
const URLS_TO_CACHE = [
  '/',
  '/app.js'
];

self.addEventListener('install', event => {
  console.log(`Installing service worker v${VERSION}`);
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener('activate', event =>
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        Promise.all(
          cacheNames
            .filter(cacheName => cacheName !== CACHE_NAME)
            .map(cacheName => {
              console.log('Deleting cache:', cacheName);
              return caches.delete(cacheName);
            })
        )
      })
  )
);

self.addEventListener('fetch', event =>
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  )
);
