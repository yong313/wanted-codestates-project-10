import * as React from "react";
import { Reset } from "styled-reset";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";

import Header from "./components/Header";
import SearchContents from "./components/SearchContents";

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <MainBox>
        <Header />
        <SearchContents />
      </MainBox>
    </>
  );
}

const MainBox = styled.div`
  width: 100%;
  height: 100vh;
  background: #efefef;
  overflow: hidden;
`;

export default App;
