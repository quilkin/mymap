var myMap = (function ($) {
    "use strict";

    var myMap = {},
        map;

    myMap.create = function () {
        // var map = L.map('map').setView([50.505, -5], 13);
        map = L.map('map');


        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18
        }).addTo(map);
        map.on('locationerror', onLocationError);
        map.on('locationfound', onLocationFound);
        map.locate({ setView: true, maxZoom: 16 });
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



    return myMap
})(jQuery)
