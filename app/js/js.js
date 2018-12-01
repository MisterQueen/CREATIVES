window.onscroll = function () { myFunction(), uppp() };

function myFunction() {
  if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
    document.getElementById("nav").className = "nav";
  } else {
    document.getElementById("nav").className = "";
  }
};
$(document).ready(function(){
  $('.menu').click(function(){
    $('.nav-body').toggleClass('active');
  })
});
        //Add google map
function initMap() {
  var pos = { lat: 50.437309, lng: 30.600915 }
  var opt = {
    center: pos,
    zoom: 15,
    styles: [
      { elementType: 'geometry', stylers: [{ color: '#282828' }] },
      { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#282828' }]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#282828' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ color: '#282828' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#282828' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#383838' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#383838' }]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#383838' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#383838' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#383838' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#383838' }]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ color: '#282828' }]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#282828' }]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#004044' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#004044' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#004044' }]
      }
    ]
  };

  var myMap = new google.maps.Map(document.getElementById("map"), opt);

  var marker = new google.maps.Marker({
    position: pos,
    map: myMap,
    title: 'Roman place',
    icon: 'c:/WEB/Creatives/app/images/icon.png'
  });

  var info = new google.maps.InfoWindow({
    content: '<h2>Ромина хата</h2><p>на русановке</p>'
  });

  marker.addListener("click", function () {
    info.open(myMap, marker)
  })
};
        //Add up block
function up() {
  var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
  if (top > 0) {
    window.scrollBy(0, ((top + 100) / -10));
    t = setTimeout('up()', 20);
  } else clearTimeout(t);
  return false;
};
function uppp() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    document.getElementById("up").className = "up";
  } else {
    document.getElementById("up").className = "";
  }
};