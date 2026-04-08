const CACHE_NAME='4on4off-v2';
const ASSETS=['./','./index.html','./manifest.json','./icons/icon-192x192.png','./icons/icon-512x512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',e=>{if(e.request.url.includes('googleapis.com')||e.request.url.includes('accounts.google.com')||e.request.url.includes('cdnjs.cloudflare.com'))return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
