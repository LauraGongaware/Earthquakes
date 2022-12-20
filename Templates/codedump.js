// Define the content of the infoWindow
// const earthquakeInfoContent = `
//         <div class="window-content">

//           <ul class="earthquake-info">
//             <li><b>USGS Information: </b><a href="${earthquake.url}">${earthquake.url}</a></li>
//             <li><b>Location: </b>${earthquake.location}</li>
//             <li><b>Magnitude: </b>${earthquake.magnitude}</li>
//             <li><b>Depth: </b>${earthquake.depth} km</li>
//             <li><b>Date and Time: </b>${earthquake.dateTime}</li>
//           </ul>
//         </div>
//       `;

// earthquake-labels.addListener('click', () => {
//           earthquakeInfo.close();
//           earthquakeInfo.setContent(earthquakeInfoContent);
//           earthquakeInfo.open(map, earthquake-labels);
//         });



// map.addLayer({
    // "id": "earthquakes",
    // "type": "fill",
    // "source": "earthquakes",
    // 'layout': {},
    // 'paint': {
    //     'fill-color': '#088',
    //     'fill-opacity': 0.8
    //      }
    // });

 
// Create a year property value based on time used to filter.
    
// map.addSource('earthquakes', {
//     'type': 'geojson',
//     data: data
// });

// var url = '/api/earthquakes'

// map.on('load', async function() {

//     let response = await fetch(url);

//     let data = await (
//         response.headers.get('content-type').includes('json')
//         ? response.json() // this will parse your JSON if the proper content-type header is set!
//         : response.text()
//     );

