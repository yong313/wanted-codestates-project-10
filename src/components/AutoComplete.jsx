import React from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../assets/search_icon.svg";

const AutoComplete = ({ userValue, data }) => {
  const searchResult = data?.data.length === 0 ? null : data.data.slice(0, 7);
  console.log(data);
  console.log(userValue);
  console.log(searchResult);

  return (
    <>
      <AutoCompleteBox>
        <Title>추천 검색어</Title>
        {userValue &&
          searchResult.map((data, idx) => (
            <AutoList key={data.id} idx={idx}>
              <SearchIcon />
              <SearchWord>{data.name}</SearchWord>
            </AutoList>
          ))}
      </AutoCompleteBox>
    </>
  );
};

const AutoCompleteBox = styled.div`
  width: 612px;
  height: auto;
  min-height: 10px;
  border-radius: 30px;
  background-color: #fff;
  position: absolute;
  top: 46%;
  z-index: 9;
  padding: 26px 24px 0 24px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 14px;
  color: #6c737a;
  margin-bottom: 10px;
`;

const AutoList = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`;

const SearchWord = styled.p`
  font-size: 18px;
  padding-top: 3px;
  margin-left: 13px;
`;

export default AutoComplete;
