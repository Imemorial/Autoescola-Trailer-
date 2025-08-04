const CACHE_NAME = 'autoescola-trailer-v1';
const urlsToCache = [
  '/',
  '/inici',
  '/serveis',
  '/testos',
  '/galeria',
  '/contacte',
  '/nosaltres',
  '/assets/images/logo2.png',
  '/assets/images/home/img-1.png',
  '/assets/images/home/img-2.png',
  '/manifest.json'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

// Activate event
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Background sync for offline functionality
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

function doBackgroundSync() {
  // Handle background sync tasks
  return Promise.resolve();
}

// Push notification handling
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'Nova notificació de AutoescolaTrailer',
    icon: '/assets/images/logo2.png',
    badge: '/assets/images/logo2.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Veure més',
        icon: '/assets/images/logo2.png'
      },
      {
        action: 'close',
        title: 'Tancar',
        icon: '/assets/images/logo2.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('AutoescolaTrailer Mollerussa', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
}); 