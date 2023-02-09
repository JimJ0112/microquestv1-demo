importScripts('https://cdnjs.cloudflare.com/ajax/libs/workbox-sw/6.5.4/workbox-sw.js');


workbox.routing.registerRoute(
    ({request}) => request.destination === 'image',
    new workbox.strategies.NetworkFirst()
);


/*
workbox.routing.registerRoute(
  /\.(?:css|js)$/,
  new workbox.strategies.StaleWhileRevalidate({
    "cacheName":"assets",
    plugins:[
        new workbox.expiration.Plugin({
            maxEntries:1000,
            maxAgeSeconds:1800
        })
    ]
  })
);
*/

workbox.routing.registerRoute(
    /\.(?:png|jpg|gif)$/,
    new workbox.strategies.CacheFirst({
      "cacheName":"images",
      plugins:[
          new workbox.expiration.Plugin({
              maxEntries:1000,
              maxAgeSeconds:1800
          })
      ]
    })
  );
  