const C='toge-tart-final-v5-syncbootstrap';
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(['./','./index.html','./firebase-config.js','./manifest.webmanifest','./icon-512.png','./apple-touch-icon.png']))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('toge-tart-final-')&&k!==C).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(v=>{const q=v.clone();caches.open(C).then(c=>c.put(e.request,q));return v}).catch(()=>caches.match('./index.html')))));
