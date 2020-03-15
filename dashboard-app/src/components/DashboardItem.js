import React from "react";
import { Card } from "antd";

const DashboardItem = ({ children, title }) => (
  <Card
    title={title}
    style={{
      width: "100%"
    }}
    bodyStyle={{
      padding: "10px"}}
  >
    {children}
  </Card>
);

export default DashboardItem;
