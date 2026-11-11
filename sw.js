const CACHE_VERSION = 'shopping-list-v7';

const PRECACHE = [
  './',
  './index.html',
  './categorise.js',
  './manifest.webmanifest',
  './icon.svg',
  './icon-192.png',
  './icon-512.png'
];

const APP_FILE = /\/(index\.html|categorise\.js|manifest\.webmanifest|icon\.svg|icon-192\.png|icon-512\.png|sw\.js)(\?.*)?$/i;

function isAppRequest(request) {
  if (request.method !== 'GET') return false;
  let url;
  try {
    url = new URL(request.url);
  } catch {
    return false;
  }
  if (url.origin !== self.location.origin) return false;
  if (request.mode === 'navigate') return true;
  if (APP_FILE.test(url.pathname)) return true;
  const base = url.pathname.replace(/\/$/, '');
  if (base.endsWith('/shopping-list') || base === '') return true;
  return false;
}

async function networkFirst(request) {
  const cache = await caches.open(CACHE_VERSION);

  try {
    const response = await fetch(request);
    if (response && response.status === 200 && response.type !== 'opaque') {
      await cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await cache.match(request);
    if (cached) return cached;

    if (request.mode === 'navigate') {
      const fallbacks = [
        request.url,
        './index.html',
        'index.html',
        new URL('./index.html', self.registration.scope).href
      ];
      for (const target of fallbacks) {
        const hit = await cache.match(target);
        if (hit) return hit;
      }
    }

    return (await cache.match(request)) || Response.error();
  }
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_VERSION)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)))
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (!isAppRequest(event.request)) return;
  event.respondWith(networkFirst(event.request));
});
