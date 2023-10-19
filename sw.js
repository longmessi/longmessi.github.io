const CACHE_NAME = `temperature-converter-v1`;
// The list of static files your app needs to start.
const PRE_CACHED_RESOURCES = ["/", "converter.css", "converter.js", "/offline", "favicon.ico"];

// Use the install event to pre-cache all initial resources.
self.addEventListener('install', event => {
    console.log("WORKER: install event in progress.");
    self.skipWaiting();
    async function preCacheResources() {
        // Open the app's cache.
        const cache = await caches.open(CACHE_NAME);
        // Cache the new static resources.
        cache.addAll(PRE_CACHED_RESOURCES);
    }

    event.waitUntil(preCacheResources());
});

self.addEventListener('fetch', event => {
    console.log('WORKER: Fetching', event.request);
    async function navigateOrDisplayOfflinePage() {
        try {
            // Try to load the page from the network.
            const networkResponse = await fetch(event.request);
            return networkResponse;
        } catch (error) {
            // The network call failed, the device is offline.
            const cache = await caches.open(CACHE_NAME);
            const cachedResponse = await cache.match("/offline");
            return cachedResponse;
        }
    }

    // Only call event.respondWith() if this is a navigation request
    // for an HTML page.
    if (event.request.mode === 'navigate') {
        event.respondWith(navigateOrDisplayOfflinePage());
    }
    /*(event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
  
      // Get the resource from the cache.
      const cachedResponse = await cache.match(event.request);
      if (cachedResponse) {
        return cachedResponse;
      } else {
          try {
            // If the resource was not in the cache, try the network.
            const fetchResponse = await fetch(event.request);
  
            // Save the resource in the cache and return it.
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          } catch (e) {
            // The network call failed, the device is offline.
            const cache = await caches.open(CACHE_NAME);
            const cachedResponse = await cache.match("offline.html");
            return cachedResponse;
          }
      }
    })());*/
});

// Listen to the `activate` event to clear old caches.
// self.addEventListener("activate", event => {
//   console.log("WORKER: activate event in progress.");
//   async function deleteOldCaches() {
//     // List all caches by their names.
//     const names = await caches.keys();
//     await Promise.all(names.map(name => {
//       if (name !== CACHE_NAME) {
//         // If a cache's name is the current name, delete it.
//         return caches.delete(name);
//       }
//     }));
//   }

//   event.waitUntil(deleteOldCaches());
// });

// const buttonShowNoti = document.getElementById("showNoti");
// buttonShowNoti.addEventListener("click", () => {
//     self.registration.showNotification("Hello from the Service Worker!");
// });