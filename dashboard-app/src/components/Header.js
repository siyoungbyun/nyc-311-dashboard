import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Layout, Menu, Button, Divider } from "antd";
import { GithubOutlined, DatabaseOutlined } from '@ant-design/icons';


const Header = ({ location }) => (
  <Layout.Header
    style={{
      padding: "0 32px"
    }}
  >
    <div
      style={{
        float: "left"
      }}
    >
      <h2
        style={{
          color: "#fff",
          margin: 0,
          marginRight: "1em",
          display: "inline",
          width: 100,
          lineHeight: "54px"
        }}
      >
        NYC 311 Status Dashboard
      </h2>
    </div>
    <Menu
      theme="dark"
      mode="horizontal"
      selectedKeys={[location.pathname]}
      style={{
        lineHeight: "64px"
      }}
    >
      <Menu.Item key="github">
          <a href="https://github.com/siyoungbyun/nyc-311-dashboard" target="_blank" rel="noopener noreferrer">
            <GithubOutlined />
            { " GitHub" }
          </a>
      </Menu.Item>
      <Menu.Item key="dataSource">
          <a href="https://data.cityofnewyork.us/Social-Services/311-Service-Requests-from-2010-to-Present/erm2-nwe9" target="_blank" rel="noopener noreferrer">
            <DatabaseOutlined />
            { " Data Source" }
          </a>
      </Menu.Item>
    </Menu>
  </Layout.Header>
);

export default withRouter(Header);
