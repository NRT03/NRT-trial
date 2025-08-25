self.addEventListener('install', event => {
  // Minimal SW: skip waiting so updates apply quickly
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  // Claim clients so the SW becomes active immediately
  event.waitUntil(self.clients.claim());
});
// No fetch handler -> SW won't change any network behavior
