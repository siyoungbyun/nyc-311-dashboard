import React from "react";
import { Row } from "antd";
import ChartRenderer from "../components/ChartRenderer";
import Dashboard from "../components/Dashboard";
import DashboardItem from "../components/DashboardItem";

function defaultDate(dateRange) {
  if (JSON.stringify(dateRange) == JSON.stringify(["", ""])) {
    var dateRange = ["2019-12-31", "2020-02-24"];
  }
  return dateRange;
}

function defaultComplaintType(complaintType) {
  if (complaintType.value == "All") {
    var filter = [];
  }
  else {
    var filter = [
      {
        dimension: "ServiceRequest311.complaintType",
        operator: "contains",
        values: [
          complaintType.value
        ]
      }
    ];
  }
  console.log(filter);
  return filter;
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
        <Row
          span={24}
          lg={12}
          key={1}
          style={{
            marginBottom: "24px"
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
          span={24}
          lg={12}
          key={1}
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
      </Dashboard>);
  }}


export default DashboardPage;