'use strict';

function initMap() {
  const map = new google.maps.Map(document.querySelector('#map'), {
    center: {
      lat: 40,
      lng: -100,
    },
    scrollwheel: true,
    zoom: 5,
    zoomControl: true,
    panControl: false,
    streetViewControl: false,
    styles: MAPSTYLES, // mapStyles is defined in mapstyles.js
    mapTypeId: google.maps.MapTypeId.TERRAIN,
  });

  // When a user clicks on an event, an info window about that earthquake will appear.
  //
  // When they click on another event, we want the previous info window to
  // disappear, so that only one window is open at a time.
  //
  // To do this, we'll define a single InfoWindow instance. All markers will
  // share this instance.
  const earthquakeInfo = new google.maps.InfoWindow();

  // Retrieving the information with AJAX.
  fetch('/api/earthquakes')
    .then((response) => response.json())
    .then((earthquakes) => {
      for (const earthquake of earthquakes) {
        // Define the content of the infoWindow
        const earthquakeInfoContent = `
        <div class="window-content">

          <ul class="earthquake-info">
            <li><b>USGS Information: </b><a href="${earthquake.url}">${earthquake.url}</a></li>
            <li><b>Location: </b>${earthquake.location}</li>
            <li><b>Magnitude: </b>${earthquake.magnitude}</li>
            <li><b>Depth: </b>${earthquake.depth} km</li>
            <li><b>Date and Time: </b>${earthquake.dateTime}</li>
          </ul>
        </div>
      `;

        const earthquakeMarker = new google.maps.Marker({
          position: {
            lat: earthquake.latitude,
            lng: earthquake.longitude,
          },
          title: `Earthquake ID: ${earthquake.location}`,
          icon: getCircle(earthquake.magnitude),
          map, // same as saying map: map
        });

        earthquakeMarker.addListener('click', () => {
          earthquakeInfo.close();
          earthquakeInfo.setContent(earthquakeInfoContent);
          earthquakeInfo.open(map, earthquakeMarker);
        });
      }
    })
    .catch(() => {
      alert(`
      We were unable to retrieve data about earthquakes :(
    `);
    });


    function getCircle(magnitude) {
      return {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: "red",
        fillOpacity: 0.2,
        scale: Math.pow(2, magnitude) / 2,
        strokeColor: "white",
        strokeWeight: 0.5,
      };
    }
    
}
