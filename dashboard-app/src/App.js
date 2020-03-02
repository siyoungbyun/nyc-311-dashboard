import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./body.css";
import "antd/dist/antd.css";
import { Layout } from "antd";
import cubejs from "@cubejs-client/core";
import { CubeProvider } from "@cubejs-client/react";
import Header from "./components/Header";
import WebSocketTransport from "@cubejs-client/ws-transport";
const API_URL = "http://68.183.27.183:4000";
const CUBEJS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1ODMxMDk4NTIsImV4cCI6MTU4MzE5NjI1Mn0.hlV-0r_wQRlaxjaY5rbuAFJmpyvmy_M_TYE1PR6BzKA";
const cubejsApi = cubejs({
  transport: new WebSocketTransport({
    authorization: CUBEJS_TOKEN,
    apiUrl: API_URL.replace("http", "ws")
  })
});

const AppLayout = ({ children }) => (
  <Layout
    style={{
      height: "100%"
    }}
  >
    <Header />
    <Layout.Content>{children}</Layout.Content>
  </Layout>
);

const App = ({ children }) => (
  <CubeProvider cubejsApi={cubejsApi}>
    <AppLayout>{children}</AppLayout>
  </CubeProvider>
);

export default App;
