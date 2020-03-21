// Adapted from https://im-developer.tistory.com/161

import React, { useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapGL, { Source, Layer } from 'react-map-gl';
import { heatmapLayer } from "../components/MapLayer";
import LegendPanel from "../components/LegendPanel";

const Mapbox = ({ data }) => {
  const MAP_TOKEN = '';
 
  const [ viewport, setViewport ] = useState({
    latitude: 40.727235,
    longitude: -73.915805,
    width: "96%",
    height: "70vh",
    zoom: 9.5,
    trackResize: true,
    minZoom: 9.5,
    maxZoom: 12
  });
 
  return (
    <div className="Mapbox" style={{height: '100%', position: 'relative', margin: "0 auto"}}>
      <MapGL
        {...viewport}
        style={{ margin: '0 auto'}}
        mapboxApiAccessToken={MAP_TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v10?optimize=true"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {data && (
            <Source type="geojson" data={data}>
              <Layer {...heatmapLayer} />
            </Source>
          )}
      <LegendPanel/>
      </MapGL>
    </div>
  );
};
 
export default Mapbox;
