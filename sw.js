const CACHE_NAME="denzai-v1";
const urls=["./","index.html"];

self.addEventListener("install",e=>{
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache=>cache.addAll(urls))
  );
});

self.addEventListener("fetch",e=>{
  e.respondWith(
    caches.match(e.request).then(r=>r||fetch(e.request))
  );
});
