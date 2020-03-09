import React, { useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapGL, {Source, Layer} from 'react-map-gl';
import {heatmapLayer} from "../components/MapLayer";

const Mapbox = ({ data }) => {
  const MAP_TOKEN = 'MAPBOX_TOKEN';
 
  const [ viewport, setViewport ] = useState({
    latitude: 40.727235,
    longitude: -73.915805,
    width: '100%',
    height: '500px',
    zoom: 9
  });
 
  return (
    <div className="Mapbox" style={{height: '100%', position: 'relative'}}>
      <MapGL
        {...viewport}
        mapboxApiAccessToken={MAP_TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v10"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {data && (
            <Source type="geojson" data={data}>
              <Layer {...heatmapLayer} />
            </Source>
          )}
      </MapGL>
    </div>
  );
};
 
export default Mapbox;
