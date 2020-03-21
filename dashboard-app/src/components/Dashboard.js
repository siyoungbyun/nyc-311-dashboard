import React from "react";
import { Row, Card, Col, Select, DatePicker, Radio, Divider } from "antd";
import moment from "moment";

const Option = Select.Option;

const Dashboard = ({ children, onDateRangeChange, onGranularityChange, onTypeChange, onStatusChange }) => (

  <Row>
    <Col
      span={4}
      type="flex"
      justify="space-around"
      align="top"
      gutter={16}
      style={{
        padding: "8px 8px 0 8px",
        margin: "4px 0 0 0"
      }}
    >
      <Card
        size="small"
        title={"Getting Started"}
        style={{
          width: "100%"
        }}
        bodyStyle={{
          padding: "10px"}}
      >
        <div class="inst_title"><strong>Heatmap</strong></div>
        <div class="instructions"><u>Grabbing</u> and <u>zooming</u> is supported. It will automatically updated based on the filters.</div>
        <div class="inst_title"><strong>Line Chart</strong></div>
        <div class="instructions">Click an item in the legend to <u>exclude</u> it from the chart!</div>
        <div class="inst_title"><strong>Filters</strong></div>
        <div class="instructions">There are two categories for the filters. <u>Filters for the Line Chart</u> will only affect the line chart.</div>
      </Card>
      <Card
        size="small"
        style={{
          width: "100%"
        }}
        bodyStyle={{
          padding: "10px"}}
      >
        <Row
          gutter={[16, 16]}
        >
          <Divider orientation="left">Filters for All Charts</Divider>
          <Col span={24}>
            <div class="instructions">Select the <strong>date</strong> range:</div>
            <DatePicker.RangePicker
            style={{
              width: "100%"
            }}
            // Date picker disabledDate: https://github.com/ant-design/ant-design/issues/5146#issuecomment-529600877
            disabledDate={d => !d || d.isAfter("2020/02/24") || d.isSameOrBefore("2019/12/30") } format="YYYY-MM-DD"
            onChange={(date, dateString) => onDateRangeChange(dateString)}
            defaultValue={[
              moment("2019/12/31", "YYYY/MM/DD"),
              moment("2020/02/24", "YYYY/MM/DD")
            ]}
            />
          </Col>
          <Col span={24}>
            <div class="instructions">Select the <strong>complaint type</strong>:</div>
            <Select
              labelInValue
              defaultValue={{ key: 'All' }}
              style={{
                width: "100%"
              }}
              onChange={(value) => onTypeChange(value)}
            >
              <Option value="All">All Complaint Types</Option>
              <Option value="HEAT/HOT WATER">Heat / Hot Water</Option>
              <Option value="Blocked Driveway">Blocked Driveway</Option>
              <Option value="Street Condition">Street Condition</Option>
              <Option value="Illegal Parking">Illegal Parking</Option>
              <Option value="Traffic">Traffic</Option>
              <Option value="Noise - Residential">Noise - Residential</Option>
              <Option value="Street Light Condition">Street Light Condition</Option>
              <Option value="Water System">Water System</Option>
              <Option value="Noise">Noise</Option>
              <Option value="Abandoned Vehicle">Abandoned Vehicle</Option>
            </Select>
          </Col>
          <Divider orientation="left">Filters for the Line Chart</Divider>
          <Col span={24}>
            <div class="instructions">Select the <strong>time dimension</strong>:</div>
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
          </Col>
          <Col span={24}>
            <div class="instructions">Select the <strong>dimension</strong>:</div>
            <Radio.Group
              onChange={(value) => onStatusChange(value)}
              defaultValue="all"
              style={{
                width: "100%"
              }}
            >
              <Radio.Button value="all">All</Radio.Button>
              <Radio.Button value="status">By Status</Radio.Button>
            </Radio.Group>
          </Col>
        </Row>
      </Card>
    </Col>
    {children}
  </Row>
);

export default Dashboard;
