'use strict';

function initMap() {
  const map = new Microsoft.Maps.Map(document.querySelector('#earthquakeMap'), {
    center: {
      lat: 72,
      lng: -140,
    },
    scrollwheel: false,
    zoom: 5,
    zoomControl: true,
    panControl: false,
    streetViewControl: false,
    styles: MAPSTYLES, // mapStyles is defined in mapstyles.js
    mapTypeId: Microsfot.maps.MapTypeId.TERRAIN,
  });

  // When a user clicks on a bear, an info window about that bear will appear.
  //
  // When they click on another bear, we want the previous info window to
  // disappear, so that only one window is open at a time.
  //
  // To do this, we'll define a single InfoWindow instance. All markers will
  // share this instance.
  const earthquakeInfo = new Microsoft.maps.InfoWindow();

  // Retrieving the information with AJAX.
  //
  // If you want to see what `/api/bears` returns, you should check `server.py`
  fetch('/api/earthquakes')
    .then((response) => response.json())
    .then((earthquakes) => {
      for (const earthquake of earthquakes) {
        // Define the content of the infoWindow
        const earthquakeInfoContent = `
        <div class="window-content">

          <ul class="earthquake-info">
            <li><b>USGS Information: </b>${earthquake.url}</li>
            <li><b>Location: </b>${earthquake.coordinates}</li>
            <li><b>Magnitude: </b>${earthquake.magnitude}</li>
            <li><b>Depth: </b>${earthquake.depth} km</li>
            <li><b>Date and Time: </b>${earthquake.dateTime}</li>
            
          </ul>
        </div>
      `;

        const earthquakeMarker = new Microsoft.maps.Marker({
          position: {
            lat: earthquake.latitude,
            lng: earthquake.longitude,
          },
          title: `Earthquake ID: ${earthquake.location}`,
          icon: {
            url: '/static/img/polarBear.svg',
            scaledSize: new Microsoft.maps.Size(50, 50),
          },
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
}
