import React from 'react';
import { Link } from 'react-router-dom';

class BenchIndex extends React.Component {
  componentDidMount(){
    // let filters = {
    //   "northEast": { "lat": "37.80971", "lng": "-122.39208" },
    //   "southWest": { "lat": "37.74187", "lng": "-122.47791" }
    // }
    // this.props.fetchBenches(filters);
  }

  render() {
    // debugger
    return (
      <ul className="bench-index">
        {this.props.benches.map((bench, idx) => {
          return (<li key={idx}>Bench {idx}: {bench.description}</li>)
        })}
        <Link to="/benches/new"> New Bench </Link>
      </ul>
    );
  }
}

export default BenchIndex;