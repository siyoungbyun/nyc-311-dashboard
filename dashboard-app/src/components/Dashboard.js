import React from "react";
import { Row, Col, Select, DatePicker } from "antd";
import moment from "moment";
// import Select from 'react-select';

// const options = [
//   { value: 'Stanford University', label: 'Stanford' }
// ];
const Option = Select.Option;


const Dashboard = ({ children, onDateRangeChange, onGranularityChange }) => (

  <Col gutter={10}>
    <Row
      span={24}
      lg={6}
      align="right"
      style={{
        padding: "0 12px 12px 12px",
        margin: "25px 8px"
      }}
    >
      <DatePicker.RangePicker
        disabledDate={d => !d || d.isAfter("2020/02/24") || d.isSameOrBefore("2019/12/30") } format="YYYY-MM-DD"
        onChange={(date, dateString) => onDateRangeChange(dateString)}
        defaultValue={[
          moment("2019/12/31", "YYYY/MM/DD"),
          moment("2020/02/24", "YYYY/MM/DD")
        ]}
      />
      <Select
        labelInValue
        defaultValue={{ key: 'Day' }}
        style={{ width: 120 }}
        onChange={(value) => onGranularityChange(value)}
      >
        <Option value="day">Day</Option>
        <Option value="week">Week</Option>
        <Option value="month">Month</Option>
      </Select>
    </Row>
    <Row
      type="flex"
      justify="space-around"
      align="top"
      gutter={24}
      style={{
        padding: "0 12px 12px 12px",
        margin: "25px 8px"
      }}
    >
      {children}
    </Row>
  </Col>
);

export default Dashboard;
