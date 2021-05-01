var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=KKPSbuFYq52bCCIqIiKS', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
    
}).addTo(mymap);