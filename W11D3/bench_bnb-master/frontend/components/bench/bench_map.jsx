import React from 'react'
import MarkerManager from '../../util/marker_manager'

class BenchMap extends React.Component {
  componentDidMount() {
    // set the map to show SF
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);

    this.map.addListener('idle', () => {
      let allBounds = this.map.getBounds();
      let northEast = allBounds.getNorthEast();
      let southWest = allBounds.getSouthWest();
      let bounds = {
        "northEast": { "lat": `${northEast.lat()}`, "lng": `${northEast.lng()}` },
        "southWest": { "lat": `${southWest.lat()}`, "lng": `${southWest.lng()}` }
      };
      // debugger
      this.props.updateBounds(bounds);
    })
  }

  componentDidUpdate(prevProps) {
    // debugger
    if(this.props.benches !== prevProps.benches)
      this.MarkerManager.updateMarkers(this.props.benches);
  }

  render () {
    return (
      <div id='map-container' ref={map => this.mapNode = map}></div> // this ref gives us access to the map dom node
    );
  }
}

export default BenchMap;