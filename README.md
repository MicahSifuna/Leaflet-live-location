📍 Current Location Map with Leaflet JS

This is a simple web project that demonstrates how to get the user's current location using the JavaScript Geolocation API and display it on an interactive Leaflet map.

It’s beginner-friendly, requires no frameworks, and works on desktop and mobile devices.

🖥️ Features

Detects user’s current location

Displays a marker on the map

Shows an accuracy circle representing location accuracy

Handles geolocation errors gracefully (fallback location)

Loads map instantly even if location is delayed

Works with HTML, CSS, and JavaScript only

Uses Leaflet.js and OpenStreetMap tiles

📂 Demo Screenshot
<img width="1368" height="742" alt="image" src="https://github.com/user-attachments/assets/3d560b2f-84cb-4442-bff4-5a780b3bb3c9" />



Marker shows current location and accuracy circle

⚡ How It Works

Map is initialized immediately with a default location.

The browser requests the user’s geolocation asynchronously.

On success:

Map centers on user location

Marker is added

Accuracy circle is drawn

On error or timeout:

Fallback location is used

User is notified with a popup message

🚀 How to Run

Clone the repository:

git clone https://github.com/MicahSifuna/current-location-leaflet.git


Open the project in your favorite code editor.

Start a local server (e.g., Live Server in VSCode) — geolocation requires HTTP/HTTPS.

Open in browser:

http://127.0.0.1:5500/


Allow location access if prompted.

📌 Folder Structure
current-location-leaflet/
│── index.html       # Main HTML file
│── style.css        # Styling for map and layout
│── script.js        # JavaScript logic (map & geolocation)

⚠️ Notes / Tips

Geolocation may fail on desktop if no GPS or location services are available. Mobile devices work better.

You can customize the default location in script.js.

Tile loading depends on OpenStreetMap servers. If slow, consider using alternate tile providers like Carto or Stamen.

🧑‍💻 Technologies Used

Leaflet.js
 – interactive maps

OpenStreetMap
 – map tiles

HTML / CSS / JavaScript – frontend

📜 License

MIT License © [Micah Kutoto]
