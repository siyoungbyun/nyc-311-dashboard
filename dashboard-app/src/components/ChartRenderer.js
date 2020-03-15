import React from "react";
import PropTypes from "prop-types";
import { useCubeQuery } from "@cubejs-client/react";
import { Spin, Row, Col, Statistic, Table } from "antd";
import { Line, Bar, Pie } from "react-chartjs-2";

import Mapbox from "../components/Map";
const COLORS_SERIES = ["#ffa600", "#ff7c43", "#f95d6a", "#d45087", "#a05195", "#665191", "#2f4b7c", "#003f5c"];

const makeGeoJSON = (data) => {
  return {
    type: 'FeatureCollection',
    features: data.map(feature => {
      return {
        "type": "Feature",
        "properties": {
          "occurence": feature.occurence
        },
        "geometry": {
          "type": "Point",
          "coordinates": [feature.longitude, feature.latitude]
        }
      }
    })
  }
};

function createCoordinateData(data) {
  var results = [];
  for (var index = 0; index < data.datasets["0"].data.length; index++) {
    var occurence = data.datasets["0"].data[index]; 
    var location = data.labels[index].split(", ");
    var lat = location[0];
    var long = location[1];
    if (lat !== "[Empty string]" && long !== "[Empty string]") {
      var row = {
            occurence: occurence,
            latitude: Number(lat),
            longitude: Number(long)
          };
      results.push(row)
    }
  }
  return results;
}

const TypeToChartComponent = {
  main_line: ({ resultSet }) => {
    const data = {
      labels: resultSet.categories().map(c => c.category),
      datasets: resultSet.series().map((s, index) => ({
        label: 'The number of 311 requests',
        data: s.series.map(r => r.value),
        borderColor: COLORS_SERIES[index],
        fill: false
      }))
    };
    const options = {
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            tooltipFormat: 'll',
            unit: resultSet.loadResponse.query.timeDimensions["0"].granularity
          }
        }]
    }
    };
    return <Line data={data} options={options} />;
  },
  map: ({ resultSet }) => {
    const data = {
      labels: resultSet.categories().map(c => c.category),
      datasets: resultSet.series().map((s, index) => ({
        label: 'The number of 311 requests',
        data: s.series.map(r => r.value),
        borderColor: COLORS_SERIES[index],
        fill: false
      }))
    };
    return <Mapbox data={makeGeoJSON(createCoordinateData(data))}></Mapbox>;
  },  
  bar: ({ resultSet }) => {
    const data = {
      labels: resultSet.categories().map(c => c.category),
      datasets: resultSet.series().map((s, index) => ({
        label: s.title,
        data: s.series.map(r => r.value),
        backgroundColor: COLORS_SERIES[index],
        fill: false
      }))
    };
    const options = {
      scales: {
        xAxes: [
          {
            stacked: true
          }
        ]
      }
    };
    return <Bar data={data} options={options} />;
  },
  area: ({ resultSet }) => {
    const data = {
      labels: resultSet.categories().map(c => c.category),
      datasets: resultSet.series().map((s, index) => ({
        label: s.title,
        data: s.series.map(r => r.value),
        backgroundColor: COLORS_SERIES[index]
      }))
    };
    const options = {
      scales: {
        yAxes: [
          {
            stacked: true
          }
        ]
      }
    };
    return <Line data={data} options={options} />;
  },
  pie: ({ resultSet }) => {
    const data = {
      labels: resultSet.categories().map(c => c.category),
      datasets: resultSet.series().map(s => ({
        label: s.title,
        data: s.series.map(r => r.value),
        backgroundColor: COLORS_SERIES,
        hoverBackgroundColor: COLORS_SERIES
      }))
    };
    const options = {};
    return <Pie data={data} options={options} />;
  },
  number: ({ resultSet }) => (
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{
        height: "100%"
      }}
    >
      <Col>
        {resultSet.seriesNames().map(s => (
          <Statistic value={resultSet.totalRow()[s.key]} />
        ))}
      </Col>
    </Row>
  ),
  table: ({ resultSet }) => (
    <Table
      pagination={false}
      columns={resultSet.tableColumns().map(c => ({ ...c, dataIndex: c.key }))}
      dataSource={resultSet.tablePivot()}
    />
  )
};
const TypeToMemoChartComponent = Object.keys(TypeToChartComponent)
  .map(key => ({
    [key]: React.memo(TypeToChartComponent[key])
  }))
  .reduce((a, b) => ({ ...a, ...b }));

const renderChart = (Component, options = {}) => ({ resultSet, error }) =>
  (resultSet && <Component resultSet={resultSet} {...options} />) ||
  (error && error.toString()) || <Spin />;

const ChartRenderer = ({ vizState }) => {
  const { query, chartType } = vizState;
  const component = TypeToMemoChartComponent[chartType];
  const renderProps = useCubeQuery(query);
  return component && renderChart(component)(renderProps);
};

ChartRenderer.propTypes = {
  vizState: PropTypes.object,
  cubejsApi: PropTypes.object
};
ChartRenderer.defaultProps = {
  vizState: {},
  cubejsApi: null
};
export default ChartRenderer;
