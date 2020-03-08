import React from "react";
import { Col } from "antd";
import ChartRenderer from "../components/ChartRenderer";
import Dashboard from "../components/Dashboard";
import DashboardItem from "../components/DashboardItem";

function defaultDate(dateRange) {
  if (JSON.stringify(dateRange) == JSON.stringify(["", ""])) {
    var dateRange = ["2019-12-31", "2020-02-24"];
  }
  return dateRange;
}

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateRange: ["2019-12-31", "2020-02-24"],
      granularity: {value: "day"}
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
      >
        <Col
          span={24}
          lg={12}
          key={0}
          style={{
            marginBottom: "24px"
          }}
        >
          <DashboardItem title={"The Number of 311 Service Requests"}>
            <ChartRenderer vizState={
              {query: {
                filters: [],
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
        </Col>
        <Col
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
                filters: [],
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
        </Col>
      </Dashboard>);
  }}


export default DashboardPage;