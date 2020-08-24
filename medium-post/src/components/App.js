import React from "react";
import Slider from "./Slider";
import { Col } from "shards-react";

function App() {
  return (
    <React.Fragment>
      <Col
        xs="22"
        sm="40"
        className="text-sm-left text-center text-md-left mb-sm-0"
      >
        <span className="text-uppercase page-subtitle">
          Medium.com/@altontech
        </span>
        <h3 className="page-title">Blog</h3>
      </Col>
      {"{{"} <a href="https://angellxr.com/">return</a>
      {"  "}
      {"}}"}
      <Slider />
    </React.Fragment>
  );
}

export default App;
