importScripts('cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('jigsaw').then(function(cache) {
     return cache.addAll([
       '/pwa-example',
       'cache-polyfill.js',
       'manifest.json',
       'favicon.png',
       'favicon_512.png'

     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {


event.respondWith(

caches.match(event.request).then(function(response) {

return response || fetch(event.request);

})

);

});