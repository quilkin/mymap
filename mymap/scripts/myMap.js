var myMap = (function ($) {
    "use strict";

    var myMap = {};

    myMap.create = function () {
        var map = L.map('map').setView([50.505, -5], 13);

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18
        }).addTo(map);
    }
    return myMap
})(jQuery)
