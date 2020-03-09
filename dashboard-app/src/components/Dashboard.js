import React from "react";
import { Row, Col, Select, DatePicker } from "antd";
import moment from "moment";

const Option = Select.Option;

const Dashboard = ({ children, onDateRangeChange, onGranularityChange, onTypeChange }) => (

  <Row>
    <Col
      span={8}
      type="flex"
      justify="space-around"
      align="top"
      gutter={24}
      style={{
        padding: "0 12px 12px 12px",
        margin: "25px 0 8px 0"
      }}
    >
      <Row
        gutter={12}
      >
        <div>Select the date range:</div>
        <DatePicker.RangePicker
        style={{
          width: "100%"
        }}
        disabledDate={d => !d || d.isAfter("2020/02/24") || d.isSameOrBefore("2019/12/30") } format="YYYY-MM-DD"
        onChange={(date, dateString) => onDateRangeChange(dateString)}
        defaultValue={[
          moment("2019/12/31", "YYYY/MM/DD"),
          moment("2020/02/24", "YYYY/MM/DD")
        ]}
        />
      </Row>
      <Row
        gutter={12}
      >
        <div>Select the time view:</div>
        <Select
          labelInValue
          defaultValue={{ key: 'Day' }}
          style={{
            width: "100%"
          }}
          onChange={(value) => onGranularityChange(value)}
        >
          <Option value="day">Day</Option>
          <Option value="week">Week</Option>
          <Option value="month">Month</Option>
        </Select>
      </Row>
      <Row
        gutter={12}
      >
        <div>Select the complaint type view:</div>
        <Select
          labelInValue
          defaultValue={{ key: 'All' }}
          style={{
            width: "100%"
          }}
          onChange={(value) => onTypeChange(value)}
        >
          <Option value="All">All Complaint Types</Option>
          <Option value="Illegal Parking">Illegal Parking</Option>
          <Option value="Traffic">Traffic</Option>
          <Option value="Noise">Noise</Option>
        </Select>
      </Row>
    </Col>
    <Col
      span={16}
      type="flex"
      justify="space-around"
      align="top"
      gutter={24}
      style={{
        padding: "0 12px 12px 12px",
        margin: "25px 0 8px 0"
      }}
    >
      {children}
    </Col>
  </Row>
);

export default Dashboard;
