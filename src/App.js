import NavBar from "./components/NavBar";
import News from "./components/News";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {

  const pageSize = 25;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  const [progress, setProgress] = useState(0)

  return (
    <div>
      {/* <Router> moved to index.js */}
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
      <NavBar />
      <Routes>
        <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} category="general" />} />
        <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} category="general" />} />
        <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} category="business" />} />
        <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} category="entertainment" />} />
        <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} category="sports" />} />
        <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} category="technology" />} />
        <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} category="health" />} />
        <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} category="science" />} />
      </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
