// const map = L.map("map").setView([-1.286389, 36.817223], 10);
const map = L.map("map").setView([0, 0], 2);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 60000,
  });
}

function successLocation(position) {
  //   const latitude = position.coords.latitude;
  //   const longitude = position.coords.longitude;
  //   const accuracy = position.coords.accuracy;

  const { latitude, longitude, accuracy } = position.coords;
  console.log("Accuracy in metres:", accuracy);

  map.setView([latitude, longitude], 16);

  //   add marker

  const marker = L.marker([latitude, longitude]).addTo(map);

  marker
    .bindPopup(
      `<b> You are here</b><br>
    Latitude: ${latitude.toFixed(6)}<br>
    Longitude: ${longitude.toFixed(6)}
    `
    )
    .openPopup();

  L.circle([latitude, longitude], {
    radius: accuracy,
  }).addTo(map);
}

function errorLocation(error) {
  console.error(error);
  alert("Location access failed. Loading default view");
}
