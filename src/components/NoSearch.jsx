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
        <p>검색어 없음</p>
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

  @media screen and (max-width: 1040px) {
    width: 97%;
    top: 40%;
    height: 46.4px;
    padding: 0;
    padding-left: 3%;
    display: flex;
    justify-content: center;
  }
`;

export default NoSearch;
