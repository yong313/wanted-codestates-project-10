import React from "react";
import styled from "styled-components";

import Input from "./Input";

const Search = () => {
  return (
    <>
      <SearchBox>
        <Container>
          <h1>
            국내 모든 임상시험 검색하고
            <br />
            온라인으로 참여하기
          </h1>
          <Input />
        </Container>
      </SearchBox>
    </>
  );
};

const SearchBox = styled.div`
  width: 100%;
  height: auto;
  background-color: #cae9ff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: 1000px;
  height: auto;
  padding-top: 88px;
  padding-bottom: 22rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  @media screen and (max-width: 1040px) {
    padding-bottom: 20rem;
  }

  h1 {
    font-size: 34px;
    font-weight: bold;
    text-align: center;
    line-height: 54px;
    margin-bottom: 22px;
  }

  @media screen and (max-width: 1040px) {
    width: 95%;

    h1 {
      font-size: 1.5rem;
      line-height: 2.5rem;
    }
  }
`;

export default Search;
