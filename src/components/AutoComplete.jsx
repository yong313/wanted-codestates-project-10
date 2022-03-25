import React from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../assets/search_icon.svg";

const AutoComplete = ({ userValue, data, targetIndex }) => {
  const searchResult = data?.length === 0 ? null : data.slice(0, 7);

  return (
    <>
      <AutoCompleteBox>
        <Title>추천 검색어</Title>
        {userValue &&
          searchResult.map((data, idx) => (
            <AutoList
              key={data.id}
              idx={idx}
              targetIndex={targetIndex === idx ? false : true}
            >
              <SearchIcon className="search_icon" />
              <SearchWord>{data.name}</SearchWord>
            </AutoList>
          ))}
      </AutoCompleteBox>
    </>
  );
};

const AutoCompleteBox = styled.div`
  width: 660px;
  height: auto;
  min-height: 10px;
  border-radius: 30px;
  background-color: #fff;
  position: absolute;
  top: 46%;
  z-index: 9;
  padding: 26px 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  overflow: hidden;

  @media screen and (max-width: 1040px) {
    width: 100%;
    top: 40%;
  }
`;

const Title = styled.div`
  font-size: 14px;
  padding: 0 24px;
  color: #6c737a;
  margin-bottom: 10px;
`;

const AutoList = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  padding: 0 24px;
  align-items: center;
  color: ${(props) => (props.targetIndex ? "" : "#fff")};
  background-color: ${(props) => (props.targetIndex ? "#fff" : "#abcbfc")};

  .search_icon {
    color: ${(props) => (props.targetIndex ? "#505b65" : "#fff")};
  }
`;

const SearchWord = styled.p`
  font-size: 18px;
  padding-top: 3px;
  margin-left: 13px;
`;

export default AutoComplete;
