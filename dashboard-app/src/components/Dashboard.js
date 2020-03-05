import React from "react";
import { Row, Col, Select, DatePicker } from "antd";
import moment from "moment";
// import Select from 'react-select';

// const options = [
//   { value: 'Stanford University', label: 'Stanford' }
// ];
const Option = Select.Option;

// function handleChange(value) {
//   console.log(`selected ${value}`);
// }

function handleBlur() {
  console.log('blur');
}

function handleFocus() {
  console.log('focus');
}

function handleChange(value) {

  console.log(value); // { key: "lucy", label: "Lucy (101)" }
}

const field = ({ options }) => (
    <Select
        name="university"
        value="one"
        options={options}
        onChange={val => console.log(val)}
    />
);

const Dashboard = ({ children, onDateRangeChange }) => (

  <Col gutter={10}>
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
    <Row
      stat
      align="top"
      gutter={24}
      style={{
        padding: "0 12px 12px 12px",
        margin: "25px 8px"
      }}
      >
      <Select
        labelInValue
        defaultValue={{ key: 'lucy' }}
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="jack">Jack (100)</Option>
        <Option value="lucy">Lucy (101)</Option>
      </Select>
    </Row>
    <Row span={24} lg={6} align="right">
      <DatePicker.RangePicker
        disabledDate={d => !d || d.isAfter("2020/02/24") || d.isSameOrBefore("2019/12/30") } format="YYYY-MM-DD"
        onChange={(date, dateString) => onDateRangeChange(dateString)}
        defaultValue={[
          moment("2019/12/31", "YYYY/MM/DD"),
          moment("2020/02/24", "YYYY/MM/DD")
        ]}
      />
    </Row>
  </Col>
);

export default Dashboard;
