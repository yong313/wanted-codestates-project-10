import React from "react";
import styled from "styled-components";

const NoSearch = (props) => {
  const { searching } = props;

  if (searching) {
    return (
      <>
        <SearchMSGBox>
          <p className="searching_text">검색 중...</p>
        </SearchMSGBox>
      </>
    );
  }

  return (
    <>
      <SearchMSGBox>
        <p>검색어 없음 😢</p>
      </SearchMSGBox>
    </>
  );
};

const SearchMSGBox = styled.div`
  width: 612px;
  height: auto;
  border-radius: 30px;
  background-color: #fff;
  position: absolute;
  top: 46%;
  z-index: 9;
  padding: 24px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  .searching_text {
    color: #aebbc5;
  }
`;

export default NoSearch;
