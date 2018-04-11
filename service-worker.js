const cacheName = 'restaurant-review';
const urlsToCache = [
  '/',
  '/css/styles.css',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/data/restaurants.json',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg',
  'restaurant.html?id=1',
  'restaurant.html?id=2',
  'restaurant.html?id=3',
  'restaurant.html?id=4',
  'restaurant.html?id=5',
  'restaurant.html?id=6',
  'restaurant.html?id=7',
  'restaurant.html?id=8',
  'restaurant.html?id=9',
  'restaurant.html?id=10'
];

// Install the service worker
self.addEventListener('install', event =>
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(urlsToCache)))
);

// Activate the service worker
self.addEventListener('activate', event => console.log('Service worker is activated'));

self.addEventListener('fetch', event => event.respondWith(
  caches.match(event.request).then((response) => response ? response : fetch(event.request)
  )
));