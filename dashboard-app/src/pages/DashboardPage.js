import React from "react";
import { Row, Col } from "antd";
import ChartRenderer from "../components/ChartRenderer";
import Dashboard from "../components/Dashboard";
import DashboardItem from "../components/DashboardItem";

function defaultDate(dateRange) {
  if (JSON.stringify(dateRange) === JSON.stringify(["", ""])) {
    dateRange = ["2019-12-31", "2020-02-24"];
  }
  return dateRange;
}

function defaultComplaintType(complaintType) {
  if (complaintType.value === "All") {
    var chartFilter = [];
  }
  else {
    var chartFilter = [
      {
        dimension: "ServiceRequest311.complaintType",
        operator: "contains",
        values: [
          complaintType.value
        ]
      }
    ];
  }
  return chartFilter;
}

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateRange: ["2019-12-31", "2020-02-24"],
      granularity: {value: "day"},
      complaintType: {value: "All"}
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
      > 
        <Col
          span={12}
          type="flex"
          justify="space-around"
          align="top"
          gutter={24}
          style={{
            padding: "12px 12px 0 12px",
            margin: "8px 0 0 0"
          }}
        >
          <Row
            span={24}
            lg={12}
            key={0}
            style={{
              marginBottom: "24px"
            }}
          >
            <DashboardItem title={"The Heatmap of NYC 311 Service Requests"}>
              <ChartRenderer vizState={
                {query: {
                  filters: [
                    {
                      dimension: "ServiceRequest311.complaintType",
                      operator: "contains",
                      values: [
                        "Noise - Residential"
                      ]
                    }
                  ],
                  limit: 50000,
                  measures: ["ServiceRequest311.count"],
                  dimensions: ["ServiceRequest311.latitude", "ServiceRequest311.longitude"]
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
          // gutter={24}
          style={{
            padding: "12px 12px 0 12px",
            margin: "8px 0 0 0"
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
            <DashboardItem title={"Proportion of Request Status"}>
              <ChartRenderer vizState={
                {query: {
                  filters: defaultComplaintType(this.state.complaintType),
                  limit: 50000,
                  measures: ["ServiceRequest311.count"],
                  timeDimensions: [
                      {
                        dimension: "ServiceRequest311.createdDate",
                        dateRange: defaultDate(this.state.dateRange)
                      }
                  ],
                  dimensions: ["ServiceRequest311.status"]
                },
                chartType: "pie"}
              } />
            </DashboardItem>
          </Row>
        </Col>
      </Dashboard>);
  }}


export default DashboardPage;