import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import styled from "styled-components";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import List from "./pages/List";
import Start from "./pages/Start";

const GlobalContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: scroll;
  background: white;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <GlobalContainer>
      <Router>
        <Routes>
          <Route path="/" element={<Start />}></Route>
          <Route path="/list" element={<List />}></Route>
          <Route path="/start" element={<Start />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/landing" element={<Landing />}></Route>
        </Routes>
      </Router>
    </GlobalContainer>
  );
}

export default App;
