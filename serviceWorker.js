importScripts( 'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');


const CACHE_VERSION = 1;
const CACHE_NAME = `rmib-cache-v${CACHE_VERSION}`;

const urlsToCache = [
    '/',
    './app.css',
    './app.js',
    './index.html'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => cache.addAll(urlsToCache))
    );
});

workbox.routing.registerRoute(
    ({request}) => request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
    ({request}) => request.destination === "script",
    new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
    ({request}) => request.destination === "style",
    new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
    ({request}) => request.destination === "document",
    new workbox.strategies.NetworkFirst()
);


