import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <Router>
      <div>
        <Wrapper>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;