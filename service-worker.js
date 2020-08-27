const filesToCache = [
    './',
    './img/ia_100000018.jpg',
    './img/ia_100000019.jpg',
    './img/ia_100000020.jpg',
    './img/ia_100000021.jpg',
    './img/ia_100000022.jpg',
    './img/ia_100000023.jpg',
    './img/ia_100000024.jpg',
    './img/ia_100000025.jpg',
    './img/ia_100000026.jpg'
];

const cacheName = 'static2';

self.addEventListener('activate', event => {
    console.log('now ready to handle fetches!');
    event.waitUntil(
        caches.keys().then(function (cacheName) {
            var promiseArr = cacheName.map(function (item) {
                if (item !== cacheName) {
                    // Delete that cached file
                    return caches.delete(item);
                }
            })
            return Promise.all(promiseArr);
        })
    ); // end e.waitUntil
});

// install
self.addEventListener('install', event => {
    console.log('installing…');
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            console.log('Caching app ok');
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', event => {
    const dataUrl = 'https://wuilliam104286.github.io/clash-royale-sound-effect/';
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request).then(res =>
                // 存 caches 之前，要先打開 caches.open(cacheName)
                caches.open(cacheName)
                    .then(function (cache) {
                        // cache.put(key, value)
                        // 下一次 caches.match 會對應到 event.request
                        cache.put(event.request, res.clone());
                        return res;
                    })
            );
        })
    );
}); 