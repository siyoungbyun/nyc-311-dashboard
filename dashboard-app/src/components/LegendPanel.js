// Adapted from https://github.com/uber/react-map-gl/blob/5.2-release/examples/heatmap
// and https://docs.mapbox.com/help/tutorials/show-changes-over-time/#create-a-legend

import React, {PureComponent} from 'react';

export default class LegendPanel extends PureComponent {
  render() {

    return (
      <div id='console'>
        <div class='session'>
          <h2>Number of 311 Requests</h2>
          <div class='row colors'>
          </div>
          <div class='row_labels'>
            <div class='label'>0</div>
            <div class='label'>200+</div>
          </div>
        </div>
      </div>
    );
  }
}