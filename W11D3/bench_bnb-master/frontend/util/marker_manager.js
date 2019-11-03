
class MarkerManager {
  constructor(map){
    this.map = map;
    this.markers = {};
  }

  updateMarkers(benches) {
    let benchObj = {};

    for (let i = 0; i < benches.length; i++) {
      // debugger
      benchObj[benches[i]["id"]] = benches[i];
      if (!this.markers.hasOwnProperty(benches[i].id))
        this.createMarkerFromBench(benches[i])
    }

    let keys = Object.keys(this.markers);
    for (let i = 0; i < keys.length; i++) {
      if (!benchObj.hasOwnProperty(keys[i]))
        this.removeMarkerByKey(keys[i])
    }

  }

  // CREATES A MARKER AND ADDS IT TO THE MAP
  // map property determines which map to add the marker on!
  //     you can also 
  createMarkerFromBench(bench) {
    let marker = new google.maps.Marker({
      position: {lat: bench.lat, lng: bench.lng},
      map: this.map,
      title: bench.description,
    });
    this.markers[bench.id] = marker;
  }

  removeMarkerByKey(key) {
    this.markers[key].setMap(null);
    delete this.markers[key];
  }
}

export default MarkerManager;