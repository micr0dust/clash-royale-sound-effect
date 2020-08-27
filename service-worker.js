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
    './img/ia_100000026.jpg',
    './img/ia_100000027.jpg',
    './img/ia_100000028.jpg',
    './img/ia_100000029.jpg',
    './img/ia_100000030.jpg',
    './img/ia_100000031.jpg',
    './img/ia_100000032.jpg',
    './img/ia_100000033.jpg',
    './img/ia_100000034.jpg',
    './img/ia_100000035.jpg',
    './img/ia_100000036.jpg',
    './img/ia_100000037.jpg',
    './img/ia_100000038.jpg',
    './img/ia_100000039.jpg',
    './img/ia_100000040.jpg',
    './img/ia_100000041.jpg',
    './img/ia_100000042.jpg',
    './img/ia_100000043.jpg',
    './img/ia_100000044.jpg',
    './img/ia_100000045.jpg',
    './img/ia_100000046.jpg',
    './img/ia_100000047.jpg',
    './img/ia_100000048.jpg',
    './img/ia_100000049.jpg',
    './img/ia_100000050.jpg',
    './img/ia_100000051.jpg',
    './img/ia_100000052.jpg',
    './img/ia_100000053.jpg',
    './img/ia_100000054.jpg',
    './img/ia_100000055.jpg',
    './img/ia_100000056.jpg',
    './img/ia_100000057.jpg',
    './img/ia_100000058.jpg',
    './img/ia_100000059.jpg',
    './img/ia_100000060.jpg',
    './img/ia_100000061.jpg',
    './img/ia_100000062.jpg',
    './img/ia_100000063.jpg',
    './img/ia_100000064.jpg',
    './img/ia_100000065.jpg',
    './img/ia_100000066.jpg',
    './img/ia_100000067.jpg',
    './img/ia_100000068.jpg',
    './img/ia_100000069.jpg',
    './img/ia_100000070.jpg',
    './img/ia_100000071.jpg',
    './img/ia_100000072.jpg',
    './img/ia_100000073.jpg',
    './img/ia_100000074.jpg',
    './img/ia_100000075.jpg',
    './img/ia_100000076.jpg',
    './img/ia_100000077.jpg',
    './img/ia_100000078.jpg',
    './img/ia_100000079.jpg',
    './img/ia_100000080.jpg',
    './img/ia_100000081.jpg',
    './img/ia_100000082.jpg',
    './img/ia_100000083.jpg',
    './img/ia_100000084.jpg',
    './img/ia_100000085.jpg',
    './img/ia_100000086.jpg',
    './img/ia_100000087.jpg',
    './img/ia_100000088.jpg',
    './img/ia_100000089.jpg',
    './img/ia_100000090.jpg',
    './img/ia_100000091.jpg',
    './img/ia_100000092.jpg',
    './img/ia_100000093.jpg',
    './img/ia_100000094.jpg',
    './img/ia_100000095.jpg',
    './img/ia_100000096.jpg',
    './img/ia_100000097.jpg',
    './img/ia_100000098.jpg',
    './img/ia_100000099.jpg',
    './img/ia_100000100.jpg',
    './img/ia_100000101.jpg',
    './img/ia_100000102.jpg',
    './img/ia_100000103.jpg',
    './img/ia_100000104.jpg',
    './img/ia_100000105.jpg',
    './img/ia_100000106.jpg',
    './img/ia_100000107.jpg',
    './img/ia_100000108.jpg',
    './img/ia_100000109.jpg',
    './img/ia_100000110.jpg',
    './img/ia_100000111.jpg',
    './img/ia_100000112.jpg',
    './img/ia_100000113.jpg',
    './img/ia_100000114.jpg',
    './img/ia_100000115.jpg',
    './img/ia_100000116.jpg'
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