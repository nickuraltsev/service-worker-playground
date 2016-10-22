if ('serviceWorker' in navigator) {
  navigator
    .serviceWorker
    .register('/serviceWorker.js')
    .then(registration => console.log('Successfully registered service worker with scope:', registration.scope))
    .catch(error => console.log('Failed to register service worker:', error));
}

document.getElementById('root').innerHTML = (new Date()).toLocaleString();
