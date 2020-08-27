function serviceWorker(){
    if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('./service-worker.js', { scope: '/clash-royale-sound-effect/' });
    }
}
