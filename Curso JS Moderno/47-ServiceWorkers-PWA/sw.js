const nombreCache = 'apv-v3';

const archivos = [
    "/",
    "css/bootstrap.css",
    "css/styles.css",
    "js/app.js",
    "js/apv.js",
    "error.html",
    "index.html"
]

//Cuando se instala el service worker
self.addEventListener('install', e =>{
    console.log("Service Worker instalado", e);

    e.waitUntil(
        caches.open(nombreCache)
            .then(cache =>{
                cache.addAll(archivos);
            })
    )

});

self.addEventListener('activate', e =>{
    console.log("Service Worker activado");
    console.log(e);

    e.waitUntil(
        caches.keys()
        .then(keys =>{
            return Promise.all(
                keys.filter(key => key != nombreCache)
                .map( key => caches.delete(key))
            )
        })
    )

});

self.addEventListener('fetch', e =>{
    console.log("Fetch ... ", e);

    e.respondWidth(
        // (async function(){
        //     const cacheResponse = await caches.match(e.request);
        //     if(cacheResponse){
        //         return cacheResponse;
        //     }
        // })()

        caches.match(e.request)
        .then(rs => rs)
        .catch ( () => caches.match('/error.html'))

    )
})