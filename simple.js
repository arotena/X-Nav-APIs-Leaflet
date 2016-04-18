// JavaScript for simple.html (Leaflet)

$(document).ready(function() {
    // create a map in the "map" div, set the view to a given place and zoom
    map = L.map('map').setView([40.2838, -3.8215], 15);
    // add an OpenStreetMap tile layer
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);

    popup = L.popup();
    map.on('click', onMapClick);
    map.locate({setView: true, maxZoom: 16});
    map.on('locationerror', onLocationError);
    map.on('locationfound', onLocationFound);
});
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}


function onLocationFound(e) {
  var radius = e.accuracy / 2;

  L.marker(e.latlng).addTo(map)
      .bindPopup("You are within " + radius + " meters from this point").openPopup();

  L.circle(e.latlng, radius).addTo(map);
}
function onLocationError(e) {
  alert(e.message);
}
