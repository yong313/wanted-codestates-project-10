import * as React from "react";
import { Reset } from "styled-reset";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";

// 컴포넌트
import Header from "./components/Header";
import SearchContents from "./components/SearchContents";
import GetNews from "./components/GetNews";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <MainBox>
        <Header />
        <SearchContents />
        <GetNews />
        <Footer />
      </MainBox>
    </>
  );
}

const MainBox = styled.div`
  width: 100%;
  height: auto;
`;

export default App;
