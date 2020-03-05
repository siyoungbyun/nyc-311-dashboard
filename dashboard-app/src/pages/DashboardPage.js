import React from "react";
import { Col } from "antd";
import ChartRenderer from "../components/ChartRenderer";
import Dashboard from "../components/Dashboard";
import DashboardItem from "../components/DashboardItem";

// const DashboardItems = [
//   {
//     id: 0,
//     name: "The Number of 311 Service Requests by Day",
//     vizState: {
//       query: {
//         filters: [
//           {
//             dimension: "ServiceRequest311.city",
//             operator: "contains",
//             values: ["New"]
//           }
//         ],
//         measures: ["ServiceRequest311.count"],
//         timeDimensions: [
//           {
//             dimension: "ServiceRequest311.createdDate",
//             granularity: "day"
//             // dateRange: this.state.dateRange
//           }
//         ]
//       },
//       chartType: "main_line"
//     }
//   },
//   {
//     id: 1,
//     name: "Proportion of Request Status",
//     vizState: {
//       query: {
//         filters: [],
//         measures: ["ServiceRequest311.count"],
//         timeDimensions: [],
//         dimensions: ["ServiceRequest311.status"]
//       },
//       chartType: "pie"
//     }
//   }
// ];

// const DashboardPage = () => {
//   const dashboardItem = item => (
//     <Col
//       span={24}
//       lg={12}
//       key={item.id}
//       style={{
//         marginBottom: "24px"
//       }}
//     >
//       <DashboardItem title={item.name}>
//         <ChartRenderer vizState={item.vizState} />
//       </DashboardItem>
//     </Col>
//   );

//   const Empty = () => (
//     <div
//       style={{
//         textAlign: "center",
//         padding: 12
//       }}
//     >
//       <h2>
//         There are no charts on this dashboard. Use Playground Build to add one.
//       </h2>
//     </div>
//   );

//   return DashboardItems.length ? (
//     <Dashboard dashboardItems={DashboardItems}
//       // onDateRangeChange={dateRange =>
//       //   this.setState({
//       //     dateRange: dateRange
//       //   })
//       // }
//     >
//       {DashboardItems.map(dashboardItem)}
//     </Dashboard>
//   ) : (
//     <Empty />
//   );
// };

// export default DashboardPage;

function defaultDate(dateRange) {
  console.log(dateRange);
  if (JSON.stringify(dateRange) == JSON.stringify(["", ""])) {
    console.log(dateRange);
    var dateRange = ["2019-12-31", "2020-02-24"];
  }
  console.log(dateRange);
  return dateRange;
}

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateRange: ["2019-12-31", "2020-02-24"]
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
      >
        <Col
          span={24}
          lg={12}
          key={0}
          style={{
            marginBottom: "24px"
          }}
        >
          <DashboardItem title={"The Number of 311 Service Requests by Day"}>
            <ChartRenderer vizState={
              {query: {
                filters: [
                  {
                    dimension: "ServiceRequest311.city",
                    operator: "contains",
                    values: ["New"]
                  }
                ],
                measures: ["ServiceRequest311.count"],
                timeDimensions: [
                  {
                    dimension: "ServiceRequest311.createdDate",
                    granularity: "day",
                    dateRange: defaultDate(this.state.dateRange)
                  }
                ]
              },
              chartType: "main_line"}
            } />
          </DashboardItem>
        </Col>
      </Dashboard>);
  }}


export default DashboardPage;