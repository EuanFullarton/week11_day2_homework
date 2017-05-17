var initialize = function(){

  var container = document.getElementById("main-map");
  var zoom = 4;
  var center = {lat: 55.946962, lng: -3.201958};
  var arthursSeat = {lat: 55.944083, lng: -3.161833};

  var mainMap = new MapWrapper(container, zoom, center);

  var button = document.querySelector("button");


  mainMap.addMarker(arthursSeat);

  mainMap.addClickEvent();

  var setNewCenter = function(){
      mainMap.googleMap.setCenter({lat: 32.307800, lng: -64.750500})
      mainMap.googleMap.setZoom(9);
      console.log("button clicked");
    }

  button.addEventListener("click", setNewCenter);


}



var arthurSeatContentString = '<div id="arthurSeatContent">' +
'<h1 class="firstHeading">"Arthur\'s Seat"</h1>' +
'</div>' +
'<div class=bodyContent">'+
'<p>"Arthur\'s Seat is the main peak of the group of hills in Edinburgh, Scotland which form most of Holyrood Park, described by Robert Louis Stevenson as \'a hill for magnitude, a mountain in virtue of its bold design".[1] It is situated just to the east of the city centre, about 1 mile (1.6 km) to the east of Edinburgh Castle. The hill rises above the city to a height of 250.5 m (822 ft), provides excellent panoramic views of the city and beyond, is relatively easy to climb, and is popular for hillwalking. Though it can be climbed from almost any direction, the easiest and simplest ascent is from the east, where a grassy slope rises above Dunsapie Loch. At a spur of the hill, Salisbury Crags has historically been a rock climbing venue with routes of various degrees of difficulty; however due to hazards rock climbing is now restricted to the South Quarry and a free permit is required."</p>' +
'</div>'


var arthurSeatInfoWindow = new google.maps.InfoWindow({
 content: arthurSeatContentString
});



window.addEventListener('load', initialize);