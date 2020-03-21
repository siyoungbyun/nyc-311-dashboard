import React from "react";
import { Row, Col } from "antd";
import ChartRenderer from "../components/ChartRenderer";
import Dashboard from "../components/Dashboard";
import DashboardItem from "../components/DashboardItem";

//Dynamic filters adapted from https://github.com/cube-js/cube.js/tree/master/examples/external-rollups
function defaultDate(dateRange) {
  if (JSON.stringify(dateRange) === JSON.stringify(["", ""])) {
    dateRange = ["2019-12-31", "2020-02-24"];
  }
  return dateRange;
}

function defaultComplaintType(complaintType) {
  if (complaintType.value === "All") {
    var cFilter = [];
  }
  else {
    var cFilter = [
      {
        dimension: "ServiceRequest311.complaintType",
        operator: "equals",
        values: [
          complaintType.value
        ]
      }
    ];
  }
  return cFilter;
}

function defaultStatus(status) {
  if (status.target.value === "all") {
    var dims = [];
  }
  else {
    var dims = ["ServiceRequest311.status"];
  }
  return dims;
}

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateRange: ["2019-12-31", "2020-02-24"],
      granularity: {value: "day"},
      complaintType: {value: "All"},
      status: { target: {value: "all"} }
    };
  }
  render() {
    return (
      <Dashboard
        onDateRangeChange={dateRange =>
          this.setState({
            dateRange: dateRange
          })
        }
        onGranularityChange={value =>
          this.setState({
            granularity: value
          })
        }
        onTypeChange={cType =>
          this.setState({
            complaintType: cType
          })
        }
        onStatusChange={stat =>
          this.setState({
            status: stat
          })
        }
      > 
        <Col
          span={12}
          type="flex"
          justify="space-around"
          align="top"
          gutter={16}
          style={{
            padding: "8px 8px 0 8px",
            margin: "4px 0 0 0"
          }}
        >
          <Row
            span={24}
            lg={12}
            key={0}
            style={{
              marginBottom: "24px"
            }}
            type="flex"
            align="middle"
          >
            <DashboardItem title={"The Heatmap of NYC 311 Service Requests"}>
              <ChartRenderer vizState={
                {query: {
                  filters: defaultComplaintType(this.state.complaintType),
                  limit: 20000,
                  measures: ["ServiceRequest311.count"],
                  dimensions: ["ServiceRequest311.latitude", "ServiceRequest311.longitude"],
                  timeDimensions: [
                    {
                      dimension: "ServiceRequest311.createdDate",
                      dateRange: defaultDate(this.state.dateRange)
                    }
                  ]
                },
                chartType: "map"}
              } />
            </DashboardItem>
          </Row>
        </Col>
        <Col
          span={8}
          type="flex"
          justify="space-around"
          align="top"
          style={{
            padding: "8px 8px 0 8px",
            margin: "4px 0 0 0"
          }}
        >
          <Row
            lg={2}
            key={1}
            justify="space-around"
            style={{
              marginBottom: "12px"
            }}
          >
            <DashboardItem title={"The Number of 311 Service Requests"}>
              <ChartRenderer vizState={
                {query: {
                  filters: defaultComplaintType(this.state.complaintType),
                  limit: 50000,
                  measures: ["ServiceRequest311.count"],
                  dimensions: defaultStatus(this.state.status),
                  timeDimensions: [
                    {
                      dimension: "ServiceRequest311.createdDate",
                      granularity: this.state.granularity.value,
                      dateRange: defaultDate(this.state.dateRange)
                    }
                  ]
                },
                chartType: "main_line"}
              } />
            </DashboardItem>
          </Row>
          <Row
            lg={2}
            key={1}
            justify="space-around"
            style={{
              marginBottom: "24px"
            }}
          >
            <DashboardItem title={"The Number of 311 Service Requests by Borough"}>
              <ChartRenderer vizState={
                {query: {
                  filters: defaultComplaintType(this.state.complaintType),
                  limit: 50000,
                  measures: ["ServiceRequest311.count"],
                  dimensions: ["ServiceRequest311.borough"],
                  timeDimensions: [
                      {
                        dimension: "ServiceRequest311.createdDate",
                        dateRange: defaultDate(this.state.dateRange)
                      }
                  ]
                },
                chartType: "bar"}
              } />
            </DashboardItem>
          </Row>
        </Col>
      </Dashboard>);
  }}

export default DashboardPage;
