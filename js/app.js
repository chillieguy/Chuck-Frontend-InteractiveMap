/*
 * This is where the work takes place
 */

/*
 * Create a Google Maps mainly to seperate for to make it
 * easy for me to reference
 */

var map;
map = null;
function initMap() {
    var mapOptions;
    mapOptions = {
        center: new google.maps.LatLng(44.05, -121.3),
        zoom: 13,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        disableDefaultUI: true,
        scrollWheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

/*
 * Knockout viewmodel
 */
var AppViewModel = function() {
	// set this to self
	var self = this;

	initMap();
};


var viewModel = new AppViewModel();
ko.applyBindings(viewModel);