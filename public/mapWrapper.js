var MapWrapper = function(container, zoom, coords){

  this.googleMap = new google.maps.Map(container, {
    zoom: zoom,
    center: coords

  });
  this.markers = [];

  }


MapWrapper.prototype = {
  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
    marker.addListener('click', function() {
      arthurSeatInfoWindow.open(marker.map, marker);
    });
    this.markers.push(marker);
  },

  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){

      var position = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      };

      // this.addMarker(position);

    }.bind(this));
  }

}


