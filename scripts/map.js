var map = L.map('map').setView([64.1463515465167, -21.9295881721258], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([64.1463515465167, -21.9295881721258]).addTo(map);