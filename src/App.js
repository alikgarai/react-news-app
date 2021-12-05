import NavBar from "./components/NavBar";
import News from "./components/News";
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

export class App extends Component {
  render() {
    let pageSize = 5;
    return (
      <div>
        {/* <Router> moved to index.js */}
        <NavBar />
        <Routes>
          <Route exact path="/" element={<News key="general" pageSize={pageSize} category="general" />} />
          <Route exact path="/general" element={<News key="general" pageSize={pageSize} category="general" />} />
          <Route exact path="/business" element={<News key="business" pageSize={pageSize} category="business" />} />
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={pageSize} category="entertainment" />} />
          <Route exact path="/sports" element={<News key="sports" pageSize={pageSize} category="sports" />} />
          <Route exact path="/technology" element={<News key="technology" pageSize={pageSize} category="technology" />} />
          <Route exact path="/health" element={<News key="health" pageSize={pageSize} category="health" />} />
          <Route exact path="/science" element={<News key="science" pageSize={pageSize} category="science" />} />
        </Routes>
        {/* </Router> */}
      </div>
    );
  }
}

export default App;
